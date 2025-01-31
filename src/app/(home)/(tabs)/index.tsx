import { StyleSheet, Text, View } from 'react-native'
import { ChannelList } from 'stream-chat-expo'
import { Link, router, Stack } from 'expo-router'
import { useAuth } from '@/src/providers/authProvider'
import { FontAwesome } from '@expo/vector-icons'

const MainTabScreen = () => {
  const { session } = useAuth()
  return (
    <View>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href={'/(home)/users'} asChild>
              <FontAwesome
                name='users'
                size={24}
                color='gray'
                style={{ marginRight: 10 }}
              />
            </Link>
          ),
        }}
      />
      <ChannelList
        filters={{ members: { $in: [session.user?.id] } }}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      />
    </View>
  )
}

export default MainTabScreen

const styles = StyleSheet.create({})
