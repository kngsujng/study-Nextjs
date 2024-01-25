import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'test-server',

  projectId: 'r8o35c3w',
  dataset: 'test-server',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
