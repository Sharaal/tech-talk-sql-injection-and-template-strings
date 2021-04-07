[Previous](./6-what-about-knex.md)


# Migrations

If you work with a database, you may want to have the same schema and data structure on every local developer and every cloud environment.

Therefore it's really good to have migrations which defines schema changes or allow to transform data which will be executed exactly once in the right order on every environment.

## Additional: Migrations for schema less databases

I often hear "schema less databases doesn't have a defined schema, so migrations are not needed".

But that's not totally true. Because the data has a schema, it's just not defined in the database. So if the schema of your data changes in your application, e.g. adding new fields, changing enum values, and so on there are two ways you can handle this:

Change the schema in your application code and only new content will be in this schema. But this has a REALLY LARGE disadvantage. Your application code needs to know all schema changes and needs to work with all versions of your data. This can be the horror for long life systems!
Alternatively you transform all existing data from the old to the new schema. And therefore migrations are perfect.

So yes, in my opinion every persistance layer, relation or schema less, needs migrations.


[Next](./8-adminer.md)
