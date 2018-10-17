import React from "react";
import Card from "./Card";

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
							/>
					);
				})
		  }
	  </div>
	);
};

export default CardList;