"use client";

// src/stores/counter-store.ts
import type { SignatureProps } from "@/lib/types";
import { createStore } from "zustand/vanilla";

export type SignatureState = SignatureProps;

export type SignatureActions = {
  setName: (name: string) => void;
  setPosition: (position: string | undefined) => void;
  setUsername: (username: string) => void;
  setPhone: (phone: string) => void;
};

export type SignatureStore = SignatureState & SignatureActions;

export const defaultInitState: SignatureState = {
  name: "",
  position: "",
  username: "",
  phone: "",
};

export const createSignatureStore = (
  initState: SignatureState = defaultInitState,
) => {
  return createStore<SignatureStore>()((set) => ({
    ...initState,
    setName: (name) => set({ name }),
    setPosition: (position) => set({ position }),
    setUsername: (username) => set({ username }),
    setPhone: (phone) => set({ phone }),
  }));
};
