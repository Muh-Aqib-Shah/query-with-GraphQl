import { gql } from '@apollo/client';

const typeDefs = gql`
query{
    check
  }
`
const typeDefs1 = gql`
query{
    user{
      age
      name
      NIC
    }
  }` 
export {typeDefs}