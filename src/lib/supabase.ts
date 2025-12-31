import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase credentials are not configured');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
  projectInterest: string;
}) {
  try {
    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: data.name,
        email: data.email,
        message: data.message,
        project_interest: data.projectInterest,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error };
  }
}
