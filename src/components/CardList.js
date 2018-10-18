import React from "react";
import Card from "./Card";

let imageList = [
      "http://www.facetheforce.today/luke/400", 
      "http://www.facetheforce.today/c3po/400", 
      "http://www.facetheforce.today/r2d2/400", 
      "http://www.facetheforce.today/darthvader/400", 
      "http://www.facetheforce.today/leia/400", 
      "https://pbs.twimg.com/profile_images/726152374843236353/_yURYLuy_400x400.jpg", 
      "http://images.shoutwiki.com/fi.starwars/thumb/8/8c/Beru_Lars.jpg/400px-Beru_Lars.jpg", 
      "https://www.geekalerts.com/u/R5-D4-Star-Wars-Sixth-Scale-Figure.jpg", 
      "https://pbs.twimg.com/profile_images/1082149261/Biggs_darklighter_400x400.jpg", 
      "http://www.facetheforce.today/obiwan/400"
    ]

const CardList = ({array}) => {
	return (
	  <div>
		  {
		  	array.map((user, i) => {
					return (
						<Card 
							key={i}
							id={i}
							name={user.name}
							birth={user.birth_year}
							height={user.height}
							image={imageList[i]}
							/>
					);
				})
		  }
	  </div>
	);
};

export default CardList;