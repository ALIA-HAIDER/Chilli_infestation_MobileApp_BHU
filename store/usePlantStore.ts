import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";

interface PlantState {
  image: File | string | null; // Support both File (web) and URI string (mobile)
  imageUrl: string;
  location: string;
  loading: boolean;
  disease: string | null;
  solution: string | null;
  setLocation: (location: string) => void;
  submitPlantData: (image: File | string | null, location: string) => Promise<void>;
}

export const usePlantStore = create<PlantState>((set) => ({
  image: null,
  location: "",
  loading: false,
    disease: null,
    solution: null,
    imageUrl: "",

  setLocation: (location) => set({ location }),

  submitPlantData: async (image, location) => {
    set({ loading: true });
    try {
      if (!image) {
        console.error("No image provided for submission.");
        set({ loading: false });
        return;
      }

      const imageIdentifier = typeof image === 'string' ? image : image.name;
      console.log("Submitting plant data with image:", imageIdentifier);
      console.log("Submitting plant data with location:", location);

      // Create FormData for file upload
      const formData = new FormData();
      
      if (typeof image === 'string') {
        // Handle URI string (mobile)
        const uriParts = image.split('.');
        const fileType = uriParts[uriParts.length - 1];
        formData.append('image', {
          uri: image,
          name: `image.${fileType}`,
          type: `image/${fileType}`,
        } as any);
      } else {
        // Handle File object (web)
        formData.append('image', image);
      }
      
      formData.append('location', location);
      console.log("FormData created with location:", location);

      const response = await axiosInstance.post("/upload_plant", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Upload successful:", response.data);
      
      // Store the response data
      set({ 
        image,
        disease: response.data.prediction || null,
        solution: response.data.Solution || null,
        imageUrl: response.data.url || "",
        loading: false,
      });

    } catch (error) {
      console.error("Error submitting plant data:", error);
      set({ loading: false });
      throw error;
    }
  },
}));