export default defineEventHandler(async () => {
  // $fetch
  // useAsyncData
  // useFetch
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{
        id: 'post-id',
        title: 'some post'
      }])
    }, 1000)
  })
})
