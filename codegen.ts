
import type { CodegenConfig } from '@graphql-codegen/cli';
import {defineConfig} from '@eddeee888/gcg-typescript-resolver-files'

const config: CodegenConfig = {
  schema: '**/schema.graphql',
  generates: {
    "src/schema/generated":defineConfig({
      resolverGeneration:'all'
    })
  }
};

export default config;
