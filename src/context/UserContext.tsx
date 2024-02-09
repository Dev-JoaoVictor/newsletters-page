import { createContext, useState } from "react";

interface UserContextProps {
  email: string;
  setEmail: (email: string) => void;
}

interface UserProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({ children }: UserProviderProps) {
  const [email, setEmail] = useState("example@email.com")

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  )
}