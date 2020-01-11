import React, { useState } from "react";
import styled from "styled-components";
import { Player } from "./components/player";
import { MAX_MEDIA_WIDTH, CIRCLE_DIAMETER, MIN_CIRCLE_DIAMETER } from "./config";
import { SpeakerPlayer } from "./components/SpeakerPlayer";

const Background = styled.div`
	background-color: black;
	color: white;
`;

const FirstScreen = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	background-image: url('https://media.giphy.com/media/3og0IFrHkIglEOg8Ba/giphy.gif');
	background-size: cover;
	background-position: 50% 50%;
`;

const Side = styled.div`
	width: 200px;
	padding: 20px;
	text-align: center;
	flex: 0 1 auto;
	font-size: 32px;
	font-family: 'Comic Sans MS', Courier, monospace;

	@media (max-width: ${MAX_MEDIA_WIDTH}px) {
		order: 3;
		flex: 1 1 auto;
		font-size: 24px;

		&:first-of-type {
			order: 1;
		}
	}
`;

const Center = styled.div`
	flex: 0 1 auto;
	min-width: ${CIRCLE_DIAMETER}px;

	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: ${MAX_MEDIA_WIDTH}px) {
		min-width: ${MIN_CIRCLE_DIAMETER}px;

		height: 100%;
		order: 1;
		width: 100%;
	}
`;


const FusionContainer = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	font-size: 24px;
`;


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
					<SpeakerPlayer player={player}></SpeakerPlayer>
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
