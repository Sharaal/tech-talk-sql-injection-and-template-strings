module.exports = async () => {
  const { Client } = require('pg')

  const client = new Client({ connectionString: process.env.DATABASE_URL })
  await client.connect()

  const sql = require('sql-pg')({ client })

  return { client, sql }
}
