/*
model class for fetch repository
*/
export class RepositoryFetch{
  /*
  constructor that will accept token
  */
    constructor(accessToken){
      this.accessToken = accessToken
      this.state = {}
    }
    /*
    function to get fetch result and change the state
    */
    async file(){
      const fetch = require('node-fetch');
      const accessToken = this.accessToken;
      const query = `
      query {
        viewer {
          repositories(privacy: PUBLIC, first:100){
            nodes {
              name
              url
              owner {
                login
                id
              }
              description
            }
          }
        }
      }`;
    //try to fetch, if error found it will report to the view page
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
        responsitory: body.data.viewer.repositories.nodes
      }
    }
    catch(error){
      return "fail";
    }
    return "success";  
    }
    //get state
    getfile(){
      return this.state;
    }
}



