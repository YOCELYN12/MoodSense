import { createClient } from '@supabase/supabase-js'

// Asegúrate de que estas variables de entorno existen
const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);