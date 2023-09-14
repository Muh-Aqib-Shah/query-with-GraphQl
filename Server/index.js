let { ApolloServer } = require("apollo-server");
let typeDefs = require("./components/Schema");
let resolvers = require("./components/Resolver")

let server = new ApolloServer( { typeDefs,resolvers } );

server.listen().then(({url}) => {
    console.log("Server listening on port ",url)
})