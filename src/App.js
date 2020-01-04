import React from "react";
import { Switch, Route,  useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import RaggatekPage from "./pages/Raggatek";
import HardtekPage from "./pages/Hardtek";
import PostKaraokePage from "./pages/PostKaraoke";
import AnimePage from "./pages/Anime";


export default function App() {
	const location = useLocation();
	const transitions = useTransition(location, location => location.pathname, {
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
	});
	return transitions.map(({ item: location, props, key }) => (
		<animated.div key={key} style={props}>
			<Switch location={location}>
				<Route path="/" exact component={RaggatekPage} />
				<Route path="/anime-house" component={AnimePage} />
				<Route path="/hardtek" component={PostKaraokePage} />
				<Route path="/post-karaoke" component={HardtekPage} />
			</Switch>
		</animated.div>
	));
}