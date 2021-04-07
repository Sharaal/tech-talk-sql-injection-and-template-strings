[Previous](./5-4-but-there-was-more-or.md)


# What about `knex`

Wunderful article about the issues about `knex`:
(https://gajus.medium.com/stop-using-knex-js-and-earn-30-bf410349856c)

Simple example with SQL:

```sql
SELECT name
  FROM users
  WHERE id = 1
```

The same example with `knex`:

```javascript
knex('users')
  .where({
    id: 1
  })
  .select('name')
```

It's not better readable, or?

It's horror to write if you know SQL and need to find out how to transform your queries into `knex`.

`knex` is also NOT an abstraction layer to work with different databases.


[Next](./7-migrations.md)
