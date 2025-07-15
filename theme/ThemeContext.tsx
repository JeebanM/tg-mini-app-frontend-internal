// src/theme/ThemeContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import Colors from './Colors';

import type { ThemeColors } from './Colors'; // ✅ Import correct type

interface ThemeContextType {
  theme: 'dark' | 'light';
  colors: ThemeColors; // ✅ Use the correct type here
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  colors: Colors.dark, // ✅ Matches ThemeColors type
});

export const ThemeProvider = ({
  children,
  theme = 'dark',
}: {
  children: ReactNode;
  theme?: 'dark' | 'light';
}) => (
  <ThemeContext.Provider
    value={{
      theme,
      colors: theme === 'dark' ? Colors.dark : Colors.light,
    }}
  >
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
