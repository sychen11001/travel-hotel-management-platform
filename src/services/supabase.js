import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://khimybbksljqmxldvfqn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoaW15YmJrc2xqcW14bGR2ZnFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4ODg5NDMsImV4cCI6MjA1MTQ2NDk0M30.TavUVEXLrUBEtog2zcMmF3fX6R-2LczIGJbIqh2vSV4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
