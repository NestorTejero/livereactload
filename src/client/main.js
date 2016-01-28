import startClient from "./startClient"
import handleChange from "./handleChange"
import {info} from "./console"

module.exports = function client(opts, start = startClient) {
  const scope$$ = window.__livereactload$$
  scope$$.options = opts
  start(scope$$, {
    change(msg) {
      info("Bundle changed")
      handleChange(scope$$, msg.data)
    },
    patch(msg) {
    }
  })
}
