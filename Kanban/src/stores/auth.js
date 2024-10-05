import { create } from 'zustand';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../plugins/firebase';

export const useAuthStore = create((set) => ({
user: null,
initiatingLogin: true,
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

updateLogin: (login) => set({login}),

logout: async () => {
  try {
    await signOut(auth);
    set({ user: null });
    console.log('ok');
  } catch (error) {
    console.error(error);
  }
},

initLogin: () => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    set({ user });
    console.log('init login');
    set({initiatingLogin: false});
  });

  return unsubscribe;
},

}))

