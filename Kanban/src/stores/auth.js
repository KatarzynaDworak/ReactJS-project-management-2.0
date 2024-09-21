import { create } from 'zustand';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../plugins/firebase';

export const useAuthStore = create((set) => ({
user: null,
login: async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      set({ user });
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
}))

