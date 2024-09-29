import { create } from "zustand";

export const useCounterStore = create((set) => ({
    
}));

// Logika zustand:
// create((set) => ({ ... })) to standardowy sposób tworzenia store'a w zustand w JavaScript.
// Wewnątrz store'a używasz funkcji set do aktualizacji stanu. Na przykład, 
// aby zwiększyć licznik, przekazujesz nowy stan, który zależy od bieżącego 
// stanu (state.count + 1 dla zwiększenia, state.count - 1 dla zmniejszenia).