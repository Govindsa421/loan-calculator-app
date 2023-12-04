"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface RootProviderProps {
  children: ReactNode;
}
export const RootProvider = ({ children }: RootProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
