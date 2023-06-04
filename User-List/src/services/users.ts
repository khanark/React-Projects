import {User} from "../vite-env";

const getUsers = async (page: number, signal: AbortSignal): Promise<User[]> => {
  const res = await fetch(
    `https://randomuser.me/api/?page=${page}&inc=gender,name,picture,nat&results=5&seed=abc`,
    { signal: signal }
  );
  const { results } = await res.json();
  return results;
};

export { getUsers };
