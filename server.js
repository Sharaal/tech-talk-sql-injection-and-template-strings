require('dotenv').config()
;(async () => {
  const path = require('path')
  const { client } = await require(path.join(process.cwd(), 'sql.js'))()







  const result = await client.query(query)
  console.log(result.rows)
})()
