import { useAuth } from '@/src/providers/authProvider'
import { Redirect, Stack } from 'expo-router'

export default function AuthLayout() {
  const { session } = useAuth()

  if (session?.user) {
    return <Redirect href={'/(home)/(tabs)'} />
  }
  return <Stack />
}
