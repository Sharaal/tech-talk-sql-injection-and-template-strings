[Previous](./4-5-but-there-was-more-or.md)


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

`knex` is also NOT an abstraction layer to work with different databases, e.g. the `.query()` method returns the raw result object of the database driver. And different database driver have different structure of these result object, so you need different access to the resulting rows or inserted IDs.

So as conclusion `knex` makes it a bit easier to build dynamic queries. But has a lot of tradeoffs which makes it only good in very nichy scenarios.


[Next](./6-migrations.md)
