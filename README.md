# vuex-storage

Sync your Vuex store with your local or session storage.

vuex-storage subscribes to store mutations to sync local/session storage with
the application state. The plugin will also load previous state (if it exists).

## Usage

```js
import { vuexStorage } from './vuex-storage.js'

const store = new Vuex.Store({
  plugins: [
    vuexStorage({
      // the key stored in storage (default: 'store')
      key: 'app',
      // true for localStorage, false for sessionStorage (default: false)
      persist: true,
    })
  ],
  state: {
    ...
  }
})

```
