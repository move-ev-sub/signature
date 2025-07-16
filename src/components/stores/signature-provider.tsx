// src/providers/counter-store-provider.tsx
"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";
import { useStore } from "zustand";
import { createSignatureStore, type SignatureStore } from "./signature";

export type SignatureStoreApi = ReturnType<typeof createSignatureStore>;

export const SignatureStoreContext = createContext<
  SignatureStoreApi | undefined
>(undefined);

export interface SignatureStoreProviderProps {
  children: ReactNode;
}

export const SignatureStoreProvider = ({
  children,
}: SignatureStoreProviderProps) => {
  const storeRef = useRef<SignatureStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createSignatureStore();
  }

  return (
    <SignatureStoreContext.Provider value={storeRef.current}>
      {children}
    </SignatureStoreContext.Provider>
  );
};

export const useSignatureStore = <T,>(
  selector: (store: SignatureStore) => T,
): T => {
  const signatureStoreContext = useContext(SignatureStoreContext);

  if (!signatureStoreContext) {
    throw new Error(
      `useSignatureStore must be used within SignatureStoreProvider`,
    );
  }

  return useStore(signatureStoreContext, selector);
};
