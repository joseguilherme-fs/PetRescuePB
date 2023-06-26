import { createClient } from '@supabase/supabase-js';

const API_URL = process.env.NEXT_PUBLIC_SUPABASE_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

const columns = {
  AnimaisDesaparecidos: '*',
};

const supabase = createClient(API_URL, API_KEY);

async function inserir(resource, data) {
  const { data: newData, error } = await supabase
    .from(resource)
    .insert(data)
    .select(columns[resource]);

  if (error) {
    throw error;
  }

  return newData?.[0];
}

async function exibirCards(resource) {
  const { data, error } = await supabase
    .from(resource)
    .select(columns[resource]);

  if (error) {
    throw error;
  }

  return data;
}

export default { inserir, exibirCards };