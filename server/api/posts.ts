export default defineEventHandler(async () => {
  
  return new Promise((resolve) => {
    $fetch(`https://json-server-40zwhkzvn-jarstorm.vercel.app/posts`).then(data => resolve(data));    
  })
})
