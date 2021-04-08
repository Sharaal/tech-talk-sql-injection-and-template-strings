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

In general we have an injection if:
* The value of the variable is input from an user (directly if we using form/API input or indirectly if we loading data from the database which was originally user input and reuse them)
* We transfer values from one context into another, here from JavaScript to SQL. In different scenarios the injection has different names (e.g. from any backend language to HTML => it's XSS)
* The values are not quoted correctly and key words/characters can be used to brake out of the value in the destination context to manipulate the functionality (here we use the `'` to brake out of the SQL string)

So that's something you NEVER want to have. But surprisingly it's the top 1 category of the most happen security issue in the web (https://www.toptal.com/security/10-most-common-web-security-vulnerabilities).


[Next](./3-how-solve-it-with-pg.md)
