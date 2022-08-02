import useDashboardStore from "./useDashboardStore";

export const useDashboardUser = () => {
  const user = useDashboardStore((state) => state.user);
  return user;
};

export default useDashboardUser;
