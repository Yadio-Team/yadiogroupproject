const axios=require('axios');

const{Client}=require('podcast-api');
const client = Client({apiKey: null})

module.exports={
    
    getCuratedPodcasts: async(req,res)=>{
    
        // let id=1;
    client.fetchCuratedPodcastsLists({
    page: 1
    })
.then((res) => {
    // Get response json data here
    console.log(res.data);
  }).catch((error) => {
    console.log(error)
  })
}
}
