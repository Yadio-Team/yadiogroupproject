import Header from "./Header";
import React from "react";


const About = () => {

    return (

        <div className="about-us">
            <Header />
            <div className="about-img"> <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Flisawinning%2Ffiles%2F2018%2F03%2Fimage-4.jpg" alt="team" /> </div>
            <h2 className="header"> About PodeApple </h2>

            <p className="about-text">
                Podeapple was initially created as a group capstone project at DevMountain to practice the skills and fullstack technologies  that our founding members had learned over a rigorous 13-week curriculum. What they didn't expect was that this project would turn into something far greater than a portfolio project that would be living in their respective Github accounts to impress potential employers.
                <br></br>
                <br></br>
                Over the course of three weeks that they built out the skeleton of what is now Podeapple, our team quickly recognized the unlimited potential of this project idea which could help others like ourselves find quality podcast content through feedback from other users.
                <br></br>
                <br></br>
                Here at Podeapple, our goal is simple: to be a resource for other podcast listeners like ourselves to help navigate the endless amount of podcast shows and genres to find podcasts that best fits one's interests. Podeapple  uses an intuitive podcast integration to allow users to search and discover their next favorite podcast.
                <br></br>
                <br></br>
                As we continue to grow, our progress will be dependent on community feedback and suggestions. Whether it be something as simple as a font-change or you're suggesting the next great Podeapple feature, we encourage you to be involved in the ever-changing resource so we can make it best possible resource for finding podcast reviews.
                <br></br>
                <br></br>
                Thanks for visiting Podeapple (where the "e" is silent)!
            </p>

        </div>
    );
}

export default About;