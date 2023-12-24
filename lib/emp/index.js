
let pluto = require("../pluto")
let bind = pluto()


let ejs = require("ejs")

bind("ejs").toInstance(ejs)



async function main () {

  let app = await bind.bootstrap()

  console.log(app)
}
main()


//
// module.exports = {
//   ejs,
//   murmur,
//   pluto
//
// }

