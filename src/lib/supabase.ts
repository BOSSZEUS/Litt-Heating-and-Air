import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

// Client-side Supabase client (uses anon key) — lazy init
export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase environment variables are not configured.');
    }
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabase;
}

// Server-side Supabase client (uses service role key for admin operations) — lazy init
export function getServiceSupabase(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Supabase service role environment variables are not configured.');
  }
  return createClient(supabaseUrl, serviceRoleKey);
}

/*
  Supabase Table Schema:

  Run this SQL in your Supabase dashboard to create the submissions table:

  CREATE TABLE submissions (
    id BIGSERIAL PRIMARY KEY,
    type TEXT NOT NULL CHECK (type IN ('quote', 'contact')),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    services TEXT,
    email_consent TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  -- Enable Row Level Security
  ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

  -- Create policy for service role (server-side) inserts only
  CREATE POLICY "Allow service role inserts" ON submissions
    FOR INSERT TO service_role
    WITH CHECK (true);

  CREATE POLICY "Allow service role select" ON submissions
    FOR SELECT TO service_role
    USING (true);
*/
