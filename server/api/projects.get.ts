export default defineEventHandler(async (event) => {
    const { filter } = getQuery(event);    
    
    let url = "https://api.storyblok.com/v2/cdn/stories?token=QPpeHjrb57ZtQMm9RdkBYQtt&starts_with=projects&content_type=post"
    if (filter !== "all") {
      url += `&filter_query[type][in]=${filter}`;
    }   

    return new Promise((resolve) => {
      $fetch(url).then(data => resolve(data.stories));    
    })
  })
  