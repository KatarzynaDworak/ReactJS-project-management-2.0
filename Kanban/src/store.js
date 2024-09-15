import { create } from "zustand";

const CounterStore = {
    count: number
};

export const useCounterStore = create<CounterStore>(() => ({
    count: 0,
}));