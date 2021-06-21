import dbAdapter from '@rockparty/db-adapter'

dbAdapter
  .mongodbAdapter({
    uri: 'mongodb://localhost:27001/db-adapter',
    clientOpts: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  })
  .then(async (db) => {
    const inserted = await db.insertOne({
      in: 'test',
      as: {
        foo: 'bar',
      },
    })

    const all = await db.getAll({
      from: 'test',
    })

    console.log(inserted, all)
  })
