let { gql } = require("apollo-server")
let schema = gql`

type User{
    name: String!,
    age: Int!,
    NIC: String!,
    previous_customer: Boolean!
    posts: [Posts!]!
}

type Posts {
    title: String!,
    content: String,
    author: User!
}

type returnMessage {
    title: String,
    message: String
}

type Query{
    check: String
}

type Mutation {
    createMessage(message: String): returnMessage
}
`
module.exports = schema;

/*type Query {
    user: User!,
    check: String
    posts: Posts!
}
*/