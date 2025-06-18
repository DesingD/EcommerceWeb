// src/helpers/uploadImageToSupabase.ts
import { supabase } from '../config/supabaseClient'
import { v4 as uuidv4 } from 'uuid'

export async function uploadImageToSupabase(file: Express.Multer.File, bucket = 'ecommer'): Promise<string | null> {
  if (!file) return null

  const fileExt = file.originalname.split('.').pop()
  const fileName = `${uuidv4()}.${fileExt}`

  const { error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
      upsert: false,
    })

  if (error) throw new Error(`Error al subir imagen: ${error.message}`)

  const  {data} = await supabase.storage.from(bucket).createSignedUrl(fileName, 60 * 60 * 24 * 365) // URL válida por 1 año
  
  return data?.signedUrl || null
}
