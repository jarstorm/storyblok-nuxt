export default defineEventHandler(async () => {
  // $fetch
  // useAsyncData
  return await Promise.resolve({
    id: 0,
    name: 'user',
    email: 'user.user@test.com'
  })
})
