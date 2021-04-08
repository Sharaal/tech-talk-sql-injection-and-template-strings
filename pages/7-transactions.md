[Previous](./6-migrations.md)


# Transactions

Another important topic and advantage of relational databases are transactions.

In NoSQL databases every operation is atomar. A change is made or in case of a failure it's not made. So if you change in one operation multiple documents it's not possible half of them are changed and the other half not.

With transactions you can extend this over multiple operations. Changing values in one table, changing values in another table, deleting rows which are not anymore needed, and so on and if one of these step run into a failure no change will be submitted. Only if every change is done successfully they will be submitted.

This ensures you always have consistent data.

The tradeoff is performance, if multiple processes operate on the same data they need to wait till the first submitting all his changes.

The more complex tradeoff are deadlocks.


[Next](./8-adminer.md)
