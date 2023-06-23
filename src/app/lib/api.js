import { createClient } from '@supabase/supabase-js';

const API_KEY = SUPABASE_ANON_KEY;
const API_URL = SUPABASE_URL;

const supabase = createClient(API_URL, API_KEY);

async function insertData(dado) {
    let { data: AnimaisDesaparecidos, error } = await _supabase.from('AnimaisDesaparecidos').insert([dado])
    if (error){
      console.log(error)
      return
    } else {
      window.alert('Informações salvas!')
      loadData();
    }
  }
