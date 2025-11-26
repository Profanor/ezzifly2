import { create } from "zustand";

interface AuthState {
  email: string | null;
  setEmail: (email: string) => void;

  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: null,
  setEmail: (email) => set({ email }),

  isAuthenticated: false,
  setAuthenticated: (value) => set({ isAuthenticated: value }),

  logout: () =>
    set({
      email: null,
      isAuthenticated: false,
    }),
}));
