
/*
Model class for fetch profile
*/
export class ProfileFetch{
  /*
  constructor that accept Token
  */
    constructor(accessToken){
      this.accessToken = accessToken
      this.state = {
      }
    }
    /*
    function that fetch from graphql
    */
    async file(){
      const fetch = require('node-fetch');
      const accessToken = this.accessToken;
      const query = `
        query {
          viewer {
              name
              bio
              twitterUsername
              avatarUrl
              location
              url
              createdAt
              repositories(privacy: PUBLIC) {
                totalCount
              }
              followers {
                totalCount
              }
              following {
                totalCount
              }
            }
        }`;
    //try to fetch, or report error if error found
    try{
    const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify({ query }),
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      })
    const body = await res.json();
    
    this.state = {
      name: body.data.viewer.name,
      bio: body.data.viewer.bio,
      twitter: body.data.viewer.twitterUsername,
      avatarUrl: body.data.viewer.avatarUrl,
      location: body.data.viewer.location,
      url: body.data.viewer.url,
      create: body.data.viewer.createdAt,
      countres: body.data.viewer.repositories.totalCount,
      countfw: body.data.viewer.followers.totalCount,
      countfi: body.data.viewer.following.totalCount
    }
    }
    catch(error){
      return "failed";
    }
    return 'success';  
    }
    //function to get the state
    getState(){
      return this.state;
    }
}



