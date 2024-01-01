import { api } from '.'

export interface ILoginAPIInputs {
  email: string
  password: string
  userName?: string
  isAdmin?: boolean
}

export const login = async (creds: ILoginAPIInputs) =>
  api
    .post('users/login', creds)
    .then((r) => r.data)
    .catch((e) => alert(`login Api failed  ${e.message}`))

export const register = async (creds: ILoginAPIInputs) =>
  api
    .post('users/register', creds)
    .then((r) => r.data)
    .catch((e) => alert(`login Api failed  ${e.message}`))
