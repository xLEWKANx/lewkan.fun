import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import speaker from "../images/speaker.jpg";
import logo from "../images/logo.svg";
import { MAX_MEDIA_WIDTH, CIRCLE_DIAMETER, MIN_CIRCLE_DIAMETER } from "../config";

const TextLogo = styled.img`
	max-width: 95%;
	height: 100%;
	width: auto;
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

	@media (max-width: ${MAX_MEDIA_WIDTH}px) {
		width: ${MIN_CIRCLE_DIAMETER}px;
		height: ${MIN_CIRCLE_DIAMETER}px;
		border-radius: ${MIN_CIRCLE_DIAMETER}px;
	}

	p {
		margin: 0;
	}
`;


export const SpeakerPlayer = ({ player, children }) => {
	const [scale, setScale] = useState(1);
	const [isLoaded, setLoad] = useState(false);

	useEffect(() => {
		player.subscribe(arr => {
			const basses = arr.slice(10);
			const avgSum = basses.reduce((acc, curr) => {
				let scale = (curr / 255) * 0.4;
				scale = scale < 0 ? 1 : scale;
				return acc + scale;
			}, 0) / basses.length;
			setScale(avgSum + 1);
		});
	}, []);

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