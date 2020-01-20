const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Booking {
    _id: ID!
    event: Payment!
    user: User!
    createdAt: String!
    updatedAt: String!
}

type Payment {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type User {
  _id: ID!
  phone_number :
  email: String!
  password: String
  createdPayments: [Payment!]

}

input PaymentInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input UserInput {
  email: String!
  password: String!
}

type RootQuery {
    events: [Payment!]!
    bookings: [Booking!]!
}

type RootMutation {
    createPayment(eventInput: PaymentInput): Payment
    createUser(userInput: UserInput): User
    bookPayment(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Payment!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
