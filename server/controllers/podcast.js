const axios=require('axios');

const{Client}=require('podcast-api');
const client = Client({apiKey: null})

module.exports={
    
    getBestPodcasts: async(req,res)=>{
    
        // let id=1;
    client.fetchBestPodcasts({  genre_id: '',
    page: 2,
    region: 'us',
    safe_mode: 0,})
.then((res) => {
    // Get response json data here
    console.log(res.data);
  }).catch((error) => {
    console.log(error)
  })
}
}
