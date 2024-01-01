import { atomWithImmer } from 'jotai-immer'
interface ILoggedUserData {
  id: number
  isAdmin: boolean
  userName: string
  email: string
  position: string
  institution: string
  password: string
}
export const LoggedUserAtom = atomWithImmer<ILoggedUserData>({
  id: 0,
  isAdmin: false,
  userName: '',
  email: '',
  position: '',
  institution: '',
  password: ''
})
