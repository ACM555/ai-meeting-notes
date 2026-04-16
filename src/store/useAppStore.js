import { create } from 'zustand';

const useAppStore = create((set) => ({
  currentPage: '/',
  isTransitioning: false,
  scrollProgress: 0,
  setCurrentPage: (page) => set({ currentPage: page }),
  setTransitioning: (status) => set({ isTransitioning: status }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));

export default useAppStore;
