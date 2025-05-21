import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rlpfndbvnmzfslkhsidd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscGZuZGJ2bm16ZnNsa2hzaWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NzI4OTcsImV4cCI6MjA2MzM0ODg5N30.qoDurBZSxfwBJS5cYNuMXsVQ2gochj53NwQobSLXPgc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
