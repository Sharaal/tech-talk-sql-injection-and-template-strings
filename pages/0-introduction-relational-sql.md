[Previous](../README.md)


# Introduction

## Relational

There are different type of databases:
* Key/Value or document stores like Redis, DynamoDB stores values which we can access via their key. The value can be simple like a number or a string, but also more complex like a JSON document. They are really fast, easy to scale and have easy to use APIs, but limited in access the values only by the key
* Relational databases have tables and columns (like Excel). Rows of different tables can be linked together with references. Also they supporting SQL which makes them more powerful in features, but as tradeoff they are more complex to use and harder to scale

So we would win lot of features and secure data consistency. Performance should never be an issue with our amount of data.

Another tradeoff is the schema. Relational databases has strict schemas where every column for a value needs to be defined with their datatype, every relation (e.g. asset to image) needs to be transformed to different tables and so on. But PostgreSQL has a powerful JSON column datatype, so we are able to be very flexible from having a column for every value to having only a key and one column with the JSON document.

## SQL

SQL is a query language to insert/update/delete/select data in a relational database.

In Key/Value stores you basically only have `set`/`get` functions. With SQL you send a query to the database what you want to do.

Examples:
```javascript
// insert
client.query('INSERT INTO table (columnA, columnB) VALUES (valueA, valueB)')

// update
client.query('UPDATE table SET columnA = valueA, columnB = valueB WHERE columnC = valueC')

// select
client.query('SELECT columnA, columnB FROM table WHERE columnC = valueC')

// delete
client.query('DELETE FROM table WHERE columnC = valueC')
```


[Next](./1-variables-in-sql-statements.md)
