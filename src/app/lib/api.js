import { createClient } from '@supabase/supabase-js';

const API_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;
const API_URL = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(API_URL, API_KEY);

async function createAnimalDesaparecido(data) {
  const { data: newAnimalDesaparecido, error } = await supabase
    .from('AnimaisDesaparecidos')
    .insert(data);

  if (error) {
    throw error;
  }

  return newAnimalDesaparecido;
}

async function getAnimaisDesaparecidos() {
  const { data, error } = await supabase.from('AnimaisDesaparecidos').select();

  if (error) {
    throw error;
  }

  return data;
}

export default {
  createAnimalDesaparecido,
  getAnimaisDesaparecidos,
};

