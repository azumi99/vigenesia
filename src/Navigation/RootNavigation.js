import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();
export function navigate(routeName, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(routeName, params);
  }
}
