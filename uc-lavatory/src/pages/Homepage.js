import React, {useEffect, useState} from 'react';
import ucla_pritzker from '../ucla_images/ucla_pritzker.jpg';
import ucla_royce from '../ucla_images/ucla_royce.jpg';
import ucla_birdseye from '../ucla_images/ucla_birdseye.jpg';
import ucla_cos from '../ucla_images/ucla_cos.jpg';
import "./Homepage.css";
import Axios  from 'axios';

const current = new Date();
const date = `${current.getMonth()}.${current.getDate()}.${current.getFullYear()}`;

// in progress
// function FindTopRated(props) {
//     // finds top 3 buildings w highest average rating
//     const [ratingAvg, setRatingAvg] = useState([])
//     var averages = 'http://localhost:3001/api/average/' + props.hall.replace(" ", "%20");
//     useEffect(()=>{
//       Axios.get(averages).then((response)=>{
//         setRatingAvg(response.data)
//       })
//   }, [])

//   var displayList=[]
//   displayList=[...props.averages];
// }


const Homepage = () => {
    return (
        <div className = "Homepage">
            <div className="Banner">
                <span className="BannerText">
                    <h1>UC-LAvatory</h1>
                    <h2>{date}</h2>
                    <h3>The #1 site for your #1 and #2 needs.</h3>
                </span>
                <img className="HeroImage" src={ucla_royce} alt="Royce Hall" />
                <img className="HeroImage" src={ucla_pritzker} alt="Pritzker Hall" />
                <img className="HeroImage" src={ucla_birdseye} alt="UCLA Birdseye View"/>
                <img className="HeroImage" src={ucla_cos} alt="UCLA Court of Sciences" />
            </div>
            <main>
                <br></br> <h1>Building with Top-Rated Restrooms</h1>
                <p>Display clickable squares of reviews here</p>
            </main>
        </div>
    ); 
 
}

export default Homepage;

