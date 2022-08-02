import create from "zustand";

type User = {
  name: string;
};

type DashboardStore = {
  user?: User;
  setUser: (user: User) => void;
};

const useDashboardStore = create<DashboardStore>((set) => ({
  user: undefined,
  setUser: (user: User) => set(() => ({ user })),
}));

export default useDashboardStore;
