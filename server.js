require('dotenv').config()
;(async () => {
  const path = require('path')
  const { client } = await require(path.join(process.cwd(), 'sql.js'))()



  const query = "SELECT * FROM users"



  const result = await client.query(query)

  console.log(query)
  console.log(result.rows)
})()
