import { defineAppSetup } from '@slidev/types'
import Examples from '../examples'

export default defineAppSetup(({ app }) => {
  app.provide(
    'repl-content',
    Object.keys(Examples).reduce((map, i) => {
      map[i] = {
        'App.vue': Examples[i]
      }
      return map
    }, {})
  )
})
