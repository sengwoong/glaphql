const { gql } = require('apollo-server')
const database = require('../database.js')

const typeDefs = gql`
    type Equipment implements Tool {
        id: ID!
        used_by: Role! 
        count: Int
        new_or_used: String
    }
`
const resolvers = {
    Query: {
        equipments: () => database.equipments
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}
