# micro-app-auth
WeChat microApp or other microApp user Auth lib

## example

```ts
// for wx
import CheckAuthClient, {Config, ExecuteOptions} from 'micro-app-auth'

// of second params, is current microApp platform, or wx or tt or ...
const checkAuthClient = new CheckAuthClient({ scope: 'userLocation' }, wx)


/**
 * or execute location API
 * checkAuthClient ==> execute
 */
checkAuthClient.execute('getLocation', {
  success(res) {
    console.log(res)
  },
  fail(err) {
    console.log(err)
  }
})

/**
 * check userLocation auth
 * when of record auth, you should use tt.getRecorderManager.start()
 * This is more suitable for you to use
 */
async function getLocation() {
  await checkAuthClient.checkAuth()
  wx.getLocation({
    success: res => console.log(res)
  })
}
```