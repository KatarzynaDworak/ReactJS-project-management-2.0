import { create } from "zustand";

// Nie potrzebujesz typu CounterStore w JavaScript
export const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })), // Dodaje 1 do count
    decrement: () => set((state) => ({ count: state.count - 1 })), // Odejmuje 1 od count
}));

// Logika zustand:
// create((set) => ({ ... })) to standardowy sposób tworzenia store'a w zustand w JavaScript.
// Wewnątrz store'a używasz funkcji set do aktualizacji stanu. Na przykład, 
// aby zwiększyć licznik, przekazujesz nowy stan, który zależy od bieżącego 
// stanu (state.count + 1 dla zwiększenia, state.count - 1 dla zmniejszenia).