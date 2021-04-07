[Previous](./1-variables-in-sql-statements.md)


# What are SQL Injection

Of course not, otherwise the tech talk would be simple and boring.

Because what happens if the email comes from an user input and the user don't input an email but something like:

```javascript
const email = "tech-talk@sharaal.de' UNION SELECT * FROM users --"

const query = `SELECT * FROM users WHERE email = '${email}'`

const result = await client.query(query)

console.log(query)
console.log(result.rows)
```

Then we have a SQL Injection where the user is able to do ALL things with your database. Not only selecting all user data with the password hashes like in the example. Also manipulating and deleting data.

So that's something you NEVER want to have. But surprisingly it's the top 1 category of the most happen security issue in the web (https://www.toptal.com/security/10-most-common-web-security-vulnerabilities).


[Next](./3-how-solve-it-with-pg.md)
