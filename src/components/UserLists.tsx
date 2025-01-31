import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserLists = ({ user }: { user: any }) => {
  return (
    <View>
      <Text>{user?.full_name}</Text>
    </View>
  )
}

export default UserLists

const styles = StyleSheet.create({})
