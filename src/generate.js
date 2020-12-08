import generator from 'prisma-schema-to-graphql';
import path from 'path';
const __dirname = path.resolve();
generator({ basePath: __dirname, output: 'generated/schema.graphql' });