import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zalxefgzjyjkonexqlqx.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbHhlZmd6anlqa29uZXhxbHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NzA0MDQsImV4cCI6MjA2ODA0NjQwNH0.sFbxkJsm3Q6qIO_txENUGCFkym7QytQvYUC48qrdz-Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserRole = 'admin' | 'user';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}