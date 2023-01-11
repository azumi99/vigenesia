import React from 'react';

import { Provider as AuthProvider } from './src/contexts/AuthContext';
import { Provider as AccountProvider } from './src/contexts/AccountContext';

import Navigation from './src/Navigation';

export default () => (
  <AccountProvider>
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  </AccountProvider>
);
