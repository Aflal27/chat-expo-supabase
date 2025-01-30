import { useAuth } from '@/src/providers/authProvider'
import ChatProvider from '@/src/providers/chatProvider'
import { Redirect, Slot, Stack } from 'expo-router'
import { useEffect } from 'react'
import { StreamChat } from 'stream-chat'

export default function HomeRootLayout() {
  const { session } = useAuth()

  if (!session?.user) {
    return <Redirect href={'/(auth)/login'} />
  }
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  )
}
