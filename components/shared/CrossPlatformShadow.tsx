import { Platform } from 'react-native';

/**
 * Creates platform-specific shadow styles
 * @param elevation - Shadow elevation/intensity (default: 2)
 * @returns Platform-specific shadow style object
 */
export const createShadow = (elevation = 2) => {
  return Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: elevation / 2 },
      shadowOpacity: 0.3,
      shadowRadius: elevation / 2,
    },
    android: {
      elevation,
    },
    web: {
      boxShadow: `0px ${elevation / 2}px ${elevation}px rgba(0, 0, 0, 0.1)`,
    },
  });
};

// In any component file
import { StyleSheet } from 'react-native';
// import { createShadow } from '../components/shared/CrossPlatformShadow';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    ...createShadow(4), // Apply shadow with elevation 4
  },
});
