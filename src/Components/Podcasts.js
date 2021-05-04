// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Shows = () => {

// 	// Set up states for retrieving access token and top tracks
// 	const [token, setToken] = useState('');
// 	const [shows, setShows] = useState([]);

// 	// Artist ID from Spotify
// 	const id = '74wyymzMc3zvjqvBWKQIDT';
// 	const market = 'US';

// 	useEffect(()=>{

// 		// Api call for retrieving token
// 		axios('https://accounts.spotify.com/api/token', {
// 			'method': 'POST',
// 			'headers': {
// 				 'Content-Type':'application/x-www-form-urlencoded',
// 				 'Authorization': 'Basic ' + (new Buffer('34e6e6f8d0c44a05969f59e1f9923d96' + ':' + '6ea7643063d54381be57faa6160712bd').toString('base64')),
// 			},
// 			data: 'grant_type=client_credentials'
// 		}).then(tokenresponse => {
// 			console.log(tokenresponse.data.access_token);
// 			setToken(tokenresponse.data.access_token);

// 			// Api call for retrieving tracks data
// 			axios(`https://api.spotify.com/v1/shows?ids=${id}&market=${market}`,{
// 				'method': 'GET',
// 				'headers': {
// 					'Content-Type': 'application/json',
// 					'Accept': 'application/json',
// 					'Authorization': 'Bearer ' + tokenresponse.data.access_token
// 				}
// 			}).then(trackresponse=> {
// 				console.log(trackresponse.data.shows);
// 				setShows(trackresponse.data.shows);
// 			}).catch(error=> console.log(error))
// 		}).catch(error => console.log(error));
// 	},[])
// return(<div>
// 	<div>Hello {shows[0].name}</div>
// 	<img src={shows[0].images[0].url}/>
// 	</div>
	
// )

// }
// export default Shows