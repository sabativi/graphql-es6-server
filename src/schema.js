import { buildSchemaFromTypeDefinitions, addMockFunctionsToSchema } from 'graphql-tools';

import types from './types';
import mocks from './mocks';

const schema = buildSchemaFromTypeDefinitions(types);
addMockFunctionsToSchema({ schema, mocks });

export default schema;
