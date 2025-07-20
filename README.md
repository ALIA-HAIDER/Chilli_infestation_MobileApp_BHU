
#  Chilli Infestation Detection App

## 📍 Overview

An AI-powered mobile application built with **React Native** to help farmers detect and treat diseases in chilli plants. By simply scanning a plant, the app provides **instant diagnosis**, **treatment suggestions**, and **preventive care instructions** — all through an easy-to-use interface designed with farmers in mind.

---

## 📱 Key Features

* 🔍 **AI-Based Image Analysis**
  Instantly detect diseases, pests, and infestation severity in chilli crops through real-time scanning.

* ⚡ **Instant Diagnosis**
  Get quick and reliable feedback on plant health using machine learning models.

* 💊 **Treatment & Care Suggestions**
  Receive actionable recommendations including pesticides, fertilizers, and preventive tips.

* 🌐 **Offline Support**
  Core functionalities work seamlessly without an active internet connection.

* 🧑‍🌾 **Farmer-Friendly UI**
  Clean, localized, and intuitive design optimized for rural and semi-rural users.

---

## 🧰 Tech Stack

| Technology                        | Purpose                            |
| --------------------------------- | ---------------------------------- |
| **React Native**                  | Cross-platform mobile app          |
| **Expo**                          | Rapid development & deployment     |
| **NativeWind**                    | Tailwind CSS-style utility classes |
| **React Navigation**              | Screen transitions & routing       |
| **TensorFlow\.js / Custom Model** | AI-based plant analysis            |

---

## 🗂️ Project Structure

```
/assets           → App images, icons, static files  
/components       → Reusable UI components  
/screens          → App screens (Home, Scan, Result, etc.)  
/navigation       → Navigation setup  
/utils            → Helper functions, constants  
/App.js           → Entry point  
```

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js (v14 or newer)
* npm or yarn
* Expo CLI (`npm install -g expo-cli`)
* Android Emulator / iOS Simulator / Expo Go App

### 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd chilli-ai-app

# Install dependencies
npm install
# or
yarn install

# Start the development server
npx expo start
```

### 📱 Running the App

* Open **Expo Go** on your device and scan the QR code
* Or press:

  * `a` to launch Android emulator
  * `i` to launch iOS simulator (macOS only)

---

## 📸 App Usage

* **Home Screen**
  Learn about the app, its goals, and benefits for farmers.

* **Scan Screen**
  Use your phone's camera to take a photo or upload an image of your chilli plant.

* **Result Screen**
  View real-time AI analysis:

  * Disease identification
  * Infestation severity
  * Recommended treatments
  * Preventive steps

---

## ⚙️ Development Workflow

* **Code Updates**: Modify files and save — changes reflect instantly in the Expo app.
* **Build for Production**:

  ```bash
  npx expo build:android  # Build Android APK
  npx expo build:ios      # Build iOS app (Apple dev account required)
  ```

---

## 👨‍🔬 Contributors

* **Department of Agriculture**, Banaras Hindu University
* **Prof. Sachchida Nand Chaurasia**, Department of Computer Science

> This project is part of an academic initiative to enhance agricultural diagnosis using AI and mobile technology. All rights reserved.

---

Let me know if you'd like to add:

* Screenshots
* License section
* Contact/Feedback info
* Local language support details
* AI model explanation section
