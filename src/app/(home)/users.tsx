import UserLists from '@/src/components/UserLists'
import { supabase } from '@/src/lib/supabase'
import { useAuth } from '@/src/providers/authProvider'
import { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
import { User } from 'stream-chat-expo'

export default function Users() {
  const [users, setUsers] = useState<any>([])
  const { session } = useAuth()

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .neq('id', session?.user.id) // exclude current user
      if (error) {
        throw error
      }
      setUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <FlatList
      data={users}
      contentContainerStyle={{ gap: 10 }}
      renderItem={(item) => <UserLists user={item.item} />}
    />
  )
}
