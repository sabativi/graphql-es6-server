import casual from 'casual';
import { MockList } from 'graphql-tools';

const mocks = {
  Author: () => ({
    firstname: () => casual.first_name,
    lastname: () => casual.last_name,
    birthdate: () => casual.date(),
    books: () => new MockList(3),
  }),
  Bammer: () => ({
    firstname: () => casual.first_name,
    lastname: () => casual.last_name,
    birthdate: () => casual.date(),
  }),
  Book: () => ({
    title: () => casual.title,
    authors: () => new MockList(2),
    vote: () => new MockList(3),
  }),
  Vote: () => ({
    date: () => casual.date(),
    comment: () => casual.string
  })
};

export default mocks;
