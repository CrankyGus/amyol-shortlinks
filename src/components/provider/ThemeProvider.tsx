"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

interface IProps {
  children: React.ReactNode;
}

function ThemesProvider({ children }: IProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default ThemesProvider;
