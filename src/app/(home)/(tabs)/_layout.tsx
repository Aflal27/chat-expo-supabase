import { FontAwesome5 } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabNavigationLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='user-alt' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
