import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'client',
      type: 'text',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media', // We will create this collection next for R2
      required: true,
    },
  ],
}