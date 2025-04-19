
export interface User {
  id?: string
  name?: string | null
  email?: string | null
  image?: string | null
}

export interface UserProps {
    user: User | null;
  }
