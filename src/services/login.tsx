// login.tsx
import { api } from "../api";

interface User {
  email: string;
  password: string;
}

export const login = async (user: User): Promise<boolean> => {
  const data: any = await api;

  if (user.email !== data.email || user.password !== data.password) {
    return false;
  }

  return true;
};
