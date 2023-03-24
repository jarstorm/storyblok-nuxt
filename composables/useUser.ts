export interface User {
  id: number
  name: string
  email: string
}

type NullableUser = User | null

export const useUser = () => {
  const user = useState<NullableUser>('user', () => null)

  return {
    user,
    updateUser: (newUser: User) => {
      user.value = newUser
    }
  }
}

export const useIsLoggedIn = () => !!useUser().user.value?.email
