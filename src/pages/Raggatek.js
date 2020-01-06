import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
// import fire from "../images/fire.gif";
import illusion from "../images/background_illusion_4.jpg";

const Background = styled.div`
	background-color: black;
`;

const FirstScreen = styled.div`
	background-image: url(${illusion});
	background-size: cover;
	background-position: 50% 50%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const rotate = keyframes`
  from {
		opacity: 0;
    transform: scale(0);
  }

  to {
		opacity: 1;
    transform: scale(1);
  }
`;

const Circle = styled.h1`
	animation: 5s 1 ${rotate};
	animation-play-state: ${props => (props.isRunning ? "running" : "paused")};
	width: 500px;
	height: 500px;
	border-radius: 500px;
	background-color: rgba(255, 255, 255, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: black;

	p {
		margin: 0;
	}
`;

const FusionContainer = styled.div`

	max-width: 800px;
	min-width: 400px;
	background-color: rgba(0,0,0,0.5);
	font-size: 24px;
`;

const Lewkan = styled.p`
	font-size: 3em;
	color: white;
	-webkit-text-stroke-width: 2px;
`;

const HardtekPage = () => {
	const [isLoaded, setLoad] = useState(false);
	useEffect(
		() => void window.addEventListener("load", () => setLoad(true)),
		[]
	);
	return (
		<Background>
			<FirstScreen>
				<Circle isRunning={isLoaded}>
					<Lewkan>lewkan</Lewkan>
					<p>x26x</p>
					<p>birthday</p>
					<p>fusion</p>
				</Circle>
			</FirstScreen>
			<FusionContainer>
				Фьюжн, фьюжен (от англ. fusion, «сплав») — термин, который может входить в название стилей и направлений в искусстве, архитектуре, дизайне, музыке, характеризующихся «сочетанием несочетаемого», то есть объединяющих в себе совершенно разные идеи из, казалось бы, несовместимых стилей, не теряя при этом целостности и гармонии.
			</FusionContainer>
		</Background>
	);
};

export default HardtekPage;
