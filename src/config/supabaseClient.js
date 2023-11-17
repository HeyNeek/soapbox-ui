import { createClient } from "@supabase/supabase-js";

//find a way to hide these later
const supabaseUrl = "https://mklwifupcrjtugoseoxc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rbHdpZnVwY3JqdHVnb3Nlb3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMTY1OTgsImV4cCI6MjAxNTc5MjU5OH0.1wVGjHs-9lPW3zI7wCRKg993949KUDuVC6b4eSxwAfU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
