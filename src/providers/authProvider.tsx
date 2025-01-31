import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { supabase } from '../lib/supabase'
import { Session, User } from '@supabase/supabase-js'

type AuthContext = {
  session: Session | null
  profile: any | null
  user: User | null
}

const AuthContext = createContext<AuthContext>({
  session: null,
  user: null,
  profile: null,
})

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<any | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  useEffect(() => {
    if (!session?.user) {
      setProfile(null)
      return
    }

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session?.user.id)
        .single()
      if (error) {
        throw error
      }
      setProfile(data)
    }
    fetchProfile()
  }, [session?.user])

  return (
    <AuthContext.Provider value={{ session, profile, user: session?.user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
