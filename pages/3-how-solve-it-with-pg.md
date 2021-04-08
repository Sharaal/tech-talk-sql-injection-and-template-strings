[Previous](./2-what-are-sql-injection.md)


# How solve it with `pg`

`pg` itself provide a feature named "parameterized query" to solve this problem:

```javascript
const email = 'tech-talk@sharaal.de'

const query = `SELECT * FROM users WHERE email = $1`

const result = await client.query(query, [email])

console.log(query)
console.log(result.rows)
```

In this case `pg` cares about quoting the variable in the right way, so it's not possible to break out of a string via `"` and manipulating the SQL query. This solution is very fine and recommended to be used for simple use cases.

But there are more complex use cases:
* Having large statements with a lot of variables. You don't want to have a `$20` in the middle of your statement and need to count the variables in the array to know which variable it is
* Not native variables like arrays or objects which needs to be transformed into comma separated parameters, where conditions or similar things
* Identifiers like table and column names in variables which you also want to secure in case they based on user input

For all of them you may also need to have a very easy solution to make it impossible a SQL Injection find a way into your code.


[Next](./4-what-are-template-strings.md)
