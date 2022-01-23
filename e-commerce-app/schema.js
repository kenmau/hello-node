const { gql } = require("apollo-server");

// Scalar Types: String, Int, Float, Boolean

// type definition (Schema)
// the way our data is going to look
// fruits: [String]

// provide type definitions, how the query is going to look
exports.typeDefs = gql`
  type Query {
    hello: String!
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    category: Category
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;
