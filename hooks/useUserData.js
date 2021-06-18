import { getMyUser } from "../api";
import { useQuery } from "react-query";

export function useUserData() {
  return useQuery("user data", getMyUser);
}
