import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'c72lzyg6',
  dataset: 'production',
  apiVersion: '2026-09-06',
  useCdn: true,
})