[Previous](./0-introduction-relational-sql)


# Variables in SQL Statements

Imagine you have a `users` table like this one:

| Column        | Datatype      |
| ------------- | ------------- |
| id            | serial        |
| name          | varchar       |
| email         | varchar       |
| passwordhash  | char          |
| validated     | boolean       |

And you want to select an user with a specific email:

```sql
SELECT * FROM users WHERE email = 'tech-talk@sharaal.de'
```

But the email is a value stored in a variable in your JavaScript code:

```javascript
const email = 'tech-talk@sharaal.de'
```

It's easy so solve, or?

```javascript
const query = `SELECT * FROM users WHERE email = '${email}'`

const result = await client.query(query)

console.log(query)
console.log(result.rows)
```

So we are fine with that?


[Next](./2-what-are-sql-injection.md)
