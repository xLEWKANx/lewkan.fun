import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
// import fire from "../images/fire.gif";
import speaker from "../images/speaker.jpg";
// import hardtekLife from "../music/Hardtek Life.mp3";
// import { throttle } from "lodash";
import { Player } from "../components/player";
import logo from "../images/logo.svg";

const CIRCLE_DIAMETER = 500;
const MAX_MEDIA_WIDTH = 1000;

const Background = styled.div`
	background-color: black;
	color: white;
`;

const FirstScreen = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	@media (max-width: ${MAX_MEDIA_WIDTH}px) {
	}
`;

const Side = styled.div`
	width: 200px;
	padding: 20px;
	text-align: center;
	flex: 0 1 auto;

	@media (max-width: ${MAX_MEDIA_WIDTH}px) {
		order: 2;
		flex: 1 1 auto;
	}
`;

const Center = styled.div`
	flex: 1 1 auto;
	min-width: ${CIRCLE_DIAMETER}px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: ${MAX_MEDIA_WIDTH}px) {
		height: 100%;
		order: 1;
		width: 100%;
	}
`;

const rotate = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1);
  }

	25% {
    transform: scale(0.9);
	}

	75% {
    transform: scale(1.1);
	}
`;

const TextLogo = styled.img`
	max-width: 95%;
	height: 100%;
`;

const Speaker = styled.button`
	border: none;
	outline: none;
	animation: 0.3s ease-in-out 1 ${rotate};
	animation-play-state: ${props => (props.isRunning ? "running" : "paused")};
	width: ${CIRCLE_DIAMETER}px;
	height: ${CIRCLE_DIAMETER}px;
	border-radius: ${CIRCLE_DIAMETER}px;
	background-image: url(${speaker});
	background-repeat: no-repeat;
	background-size: contain;
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
	background-color: rgba(0, 0, 0, 0.5);
	font-size: 24px;
`;

const SpeakerPlayer = ({ player, children }) => {
	const [scale, setScale] = useState(1);
	const [isLoaded, setLoad] = useState(false);

	useEffect(() => {
		player.subscribe(
			arr => {

				const basses = arr.slice(10);
				const avgSum =
				basses.reduce((acc, curr) => {
					let scale = (curr / 255) * 0.4;
					scale = scale < 0 ? 1 : scale;
					return acc + scale;
				}, 0) / basses.length;
				setScale(avgSum + 1);
			}
		);
	}, [])

	useEffect(() => {
		window.addEventListener("load", () => void setLoad(true));
	}, []);

	const play = () => {
		player.play();
	};

	return (
		<Speaker
			style={{ transform: `scale(${scale})` }}
			isRunning={isLoaded}
			onClick={play}
		>
			<TextLogo src={logo} />
			{children}
		</Speaker>
	);
};

const HardtekPage = () => {
	const [player] = useState(new Player());

	return (
		<Background>
			<FirstScreen>
				<Side>
					starts:
					<p>25.01.2020</p>
					<p>23:00</p>
				</Side>
				<Center>
					<SpeakerPlayer player={player}>
					</SpeakerPlayer>
				</Center>
				<Side>
					ends:
					<p>26.01.2020</p>
					<p>06:00</p>
				</Side>
			</FirstScreen>
			<FusionContainer>
				Фьюжн, фьюжен (от англ. fusion, «сплав») — термин, который может входить
				в название стилей и направлений в искусстве, архитектуре, дизайне,
				музыке, характеризующихся «сочетанием несочетаемого», то есть
				объединяющих в себе совершенно разные идеи из, казалось бы,
				несовместимых стилей, не теряя при этом целостности и гармонии.

				
			</FusionContainer>
		</Background>
	);
};

export default HardtekPage;
