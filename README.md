# node-sparkpool
> [sparkpool.com](https://doc.sparkpool.com/docs/start) nodejs api client

### Installation
```bash
npm install node-sparkpool
```

### Getting started
```javascript
import Sparkpool from 'node-sparkpool'

const client = Sparkpool()

// if you want use diffent endpoint
const client2 = Sparkpool({
  endpoint: 'https://www.sparkpool.com'
})

client.poolStats().then(data => console.log(data))
```