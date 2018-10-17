import React from "react";

const Card = ({ name, birth, height }) => {
	return (
		<div className ='bg-light-blue dib br3 pa3 ma3 grow bw2 courier shadow-5'>
			<div>
				<img alt='character' src='http://www.facetheforce.today/random/400'/>
			</div>
			<div>
				<h2>{name}</h2>
				<p>Birth Year: {birth}</p>
				<p>Height: {height}</p>
			</div>
		</div>
	);
};

export default Card;