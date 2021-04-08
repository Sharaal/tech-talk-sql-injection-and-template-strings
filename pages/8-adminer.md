[Previous](./7-transactions.md)


# Adminer

Tiny little PHP file with all basic database management functionalities.

Just adding to your `docker-compose.yml` for local usage:

```yml
# Use postgres/example user/password credentials
version: '3.1'

services:

  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: example
    ports:
      - 5432:5432

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```

And open `localhost:8080` (System: PostgreSQL, Server: db, Username: postgres, Password: example, Database: postgres).


[Next](./9-QA.md)
