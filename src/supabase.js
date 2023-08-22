import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://suxsfvcqoqyneuxxkftp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1eHNmdmNxb3F5bmV1eHhrZnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyODQwMjAsImV4cCI6MjAwNTg2MDAyMH0.IV8Kgy3X3YxxbtN_gqgMBGIUuMDDjlM4JB8p7jcHiMM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
