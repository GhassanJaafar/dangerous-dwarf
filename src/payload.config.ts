import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { Projects } from './collections/Projects'
import { Media } from './collections/Media'

export default buildConfig({
  editor: lexicalEditor({}),
  collections: [Projects, Media],
  secret: 'SUPER_SECRET_KEY_123', // In production, use an env variable
  db: sqliteAdapter({
    client: {
      url: 'file:./local-db.sqlite',
    },
  }),
  typescript: {
    outputFile: 'src/payload-types.ts',
  },
})