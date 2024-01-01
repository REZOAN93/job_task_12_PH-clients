import { useAtom } from 'jotai'
import Link from 'next/link'
import { useEffect } from 'react'

import { textes } from '../../commom/strings'
import { Button } from '../button'
import Container from '../container'

import { Div1, Div2, Div3, Div4 } from './styles'

import { LoggedUserAtom } from '@/atoms'

const CustomHeader = () => {
  const [loggedUser, setLoggedUser] = useAtom(LoggedUserAtom)

  useEffect(() => {
    const localUserData = localStorage.getItem('loggedUser')
    if (localUserData) {
      const parsedLocalUserData = JSON.parse(localUserData)
      setLoggedUser(parsedLocalUserData)
    }
  }, [])

  const handleLogout = () => {
    localStorage.setItem(
      'loggedUser',
      JSON.stringify({
        isAdmin: false,
        userName: '',
        email: '',
        position: '',
        institution: '',
        password: ''
      })
    )
    setLoggedUser({
      id: 0,
      isAdmin: false,
      userName: '',
      email: '',
      position: '',
      institution: '',
      password: ''
    })
  }
  return (
    <Div1>
      <Div2>
        <Container>
          <Div3>
            <Link href="/" className="font-bold text-2xl">
              {textes.eshop}
            </Link>
            <Div4>
              {loggedUser.email !== '' ? (
                <div>
                  <Button
                    type="submit"
                    color="gray"
                    className="mt-5"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <div>
                    <Link href={'/login'}>Login</Link>
                  </div>
                  <div>
                    <Link href={'/register'}>Register</Link>
                  </div>
                </>
              )}
              {loggedUser.isAdmin && (
                <div>
                  <Link href={'/questions/addQuestion'}>Add Question</Link>
                </div>
              )}
              {!loggedUser.isAdmin && (
                <div>
                  {' '}
                  <Link href={'/quizes'}>Quizes</Link>
                </div>
              )}
            </Div4>
          </Div3>
        </Container>
      </Div2>
    </Div1>
  )
}

export default CustomHeader
