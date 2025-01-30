import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qsdjkvprisniojhglbvc.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZGprdnByaXNuaW9qaGdsYnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTE0MTIsImV4cCI6MjA1MzgyNzQxMn0.hAS8tmnVitOcUm3VI7S2W716fy3yii_yhaSGx4kp0ZA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
