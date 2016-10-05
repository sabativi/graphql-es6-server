# Simple GraphQL ES6 server

To use it :

* `git clone `
* `npm install`
* `npm run dev`

### Try Graphql queries

* go to http://localhost:3000/graphiql
* try some queries, for instance :

  ```graphql
  {
    books {
      title
      authors {
        firstname
        birthDate
      }
    }
    vote {
      book {
        title
      }
      bammer {
        firstname
        lastname
      }
      answer
    }
  }
  ```

### Credits

Thanks to [bamlab](https://github.com/bamlab/formation-graphql)
I just adapt their example to ES6
