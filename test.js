const tap = require("tap")
const getAlpha = require("./index")

tap.test( tap => {
  const testValue = "x"
  tap.equal(getAlpha({ text: testValue} ), testValue)
  tap.equal(getAlpha({ text: undefined}), "a")
  tap.end()
})
