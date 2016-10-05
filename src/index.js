import express from 'express';
import bodyParser from 'body-parser';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import schema from './schema';

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), apolloExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
