// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');

// const { typeDefs, resolvers } = require('./server/schemas');
// const { authMiddleware } = require('./server/utils/auth');
// const db = require('./server/config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();


// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware
// });
// // const appmiddle = async() => {
// //   await server.start()
// //   server.applyMiddleware({ app });
// // }
// // appmiddle()

// const appmiddle = async() => {
//   await server.start()
//   server.applyMiddleware({ app });
// }
// appmiddle()

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });
