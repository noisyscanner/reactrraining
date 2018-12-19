// import createServer from '../../scripts/server'
// import chai from 'chai'
import { setDefaultTimeout, AfterAll, BeforeAll } from 'cucumber'
import { createSession, closeSession } from 'nightwatch-api'

// chai.should()

// let serverInstance

// BeforeAll(() => new Promise((resolve, reject) => {
//   const port = 3000
//   serverInstance = createServer('localhost', port).listen(port, 'localhost', () => {
//     console.log(`App server listening on ${port}`)
//     resolve()
//   })
// }))
//
// AfterAll(() => new Promise((resolve, reject) => {
//   serverInstance.close()
//   resolve()
// }))

setDefaultTimeout(5000); // TODO: Put in config?

BeforeAll(async () => {
  await createSession({ env: 'default' });
});

AfterAll(async () => {
  await closeSession();
});
