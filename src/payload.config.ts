import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
// 1. Import the new storage plugin
import { s3Storage } from '@payloadcms/storage-s3' 
import { Projects } from './collections/Projects'
import { Media } from './collections/Media'

export default buildConfig({
  editor: lexicalEditor({}),
  collections: [Projects, Media],
  secret: process.env.PAYLOAD_SECRET || 'SUPER_SECRET_KEY_123',
  db: sqliteAdapter({
    client: {
      url: process.env.D1_BINDING ? '' : 'file:./local-db.sqlite',
    },
  }),
  plugins: [
    // 2. Use the new s3Storage plugin directly
    s3Storage({
      collections: {
        media: true, // This tells Payload to use S3 for the 'media' collection
      },
      bucket: process.env.R2_BUCKET_NAME || 'portfolio-images',
      config: {
        endpoint: process.env.R2_ENDPOINT || '',
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
        },
        region: 'auto',
      },
    }),
  ],
})