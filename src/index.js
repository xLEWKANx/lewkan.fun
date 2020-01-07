import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import { createGlobalStyle } from "styled-components";
import collegeFont from "./fonts/college.otf";
import reglisseFont from "./fonts/reglisse.otf";
import neon from "./fonts/screaming_neon.ttf";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
	${normalize}

  @font-face {
    font-family: College;
    src: url('${collegeFont}') format('opentype');
  }
  @font-face {
    font-family: Reglisse;
    src: url('${reglisseFont}') format('opentype');
  }
  @font-face {
    font-family: Neon;
    src: url('${neon}') format('truetype');
  }

	html {
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
`;

ReactDOM.render(
	<BrowserRouter>
		<GlobalStyle />
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

console.log(`
sexsexsexsexsexse
sexsesexsexsexsexsexs
sexsexsexsexsexsexsexse
sexsexsexsexsexsexsexsexsex
sexsexsexsexsexsexsexsexsexsex
sexsexsexsexsexsexsexsexsexsexs
sexsexsexsexsexsexsexsexsexsexsex
sexsexsexsexsexsexsexsexsexsexsexse
sexsexsexsexsexsexsexsexsexsexsexsex
exsexsexsexsexsexsexsex  sexsexsexsex
sexsexsexsexsexsexsexs     sexsexsexse
sexsexsexsexsexsexsex        sexsexsex
sexsexsexsexsexsex            sexsexsx
sexsexsexsexsexx              sexsexs x
sexsexsexsexsex-****.    .***-sexsexs sexs
sexsexsexsexsex               sexsex sexsexs
sexsexsexsexsex              sexsex sexsexsexs
sexsexsexsexsex              sexse sexsexsexse
sesexsexsexsexs   --sexsex- sexse sexsexsexse
xsexsexsexsexse      sexs  sexse sexsexsexs
sexsexsexsexsexse         sexse sexsexsexse
sexsexsexsexsexsexs       sexse    sexsexse
sexsexse      sexsexs      ixx       sexse
sexsex         sexsexs     i         sex
sexs            sexsexs    i         x
sex              sexsex        x   x
x               sexsex        x  x
x                sexse          xx
sex                sex                x
sexsexs             xx                     x
sexsexsex    x x                  x           x
sexsexsexsexse                       x          (o
sexsexsexsexse       x                            x
sexsexsexsexse   x     x         (o)      x        x
sexsexsexsexse     x      x                 x       x
sexsexsexsex        x       x               x      x
sexsexsexsex          x        x             x    xx
sexsexsexse           x         x          x      x
sexsexsexse           x           x x  x         x
sexsexsexs          x                          x
sexsexsexs          x                        x
sexsexsex           x                       x
sexsexsex           x                     x
sexsexsex           x                    x
sexsexse            x                 x
sexsexse            x                x
sexsexs           x                 x
sexsex sexsexse x                  x
sexsexsexsexsexs                   x
sexsexsexsexse                     x
sexsexsexsex               o       x
sexsex                        x
x                             x
x                              x
x                               x
x                      Y        x
x                      x        x
x                       x       x
x                        x      x
x                 sexsexsex     x
x            sexsexsexsexsx exsex
x          sexsexsexsexsexs sexx
x       sexsexsexsexsexsexs xx
x     sexsexsexsexsexsexse x
x   sexsexsexsexsexsexsexs
x sexsexsexsexsexsexsexse
sexsexsexsexsexsexsexsex
sexsexsexsexsexsexsexse
x sexsexsexsexsexsexsexs
xx sexsexsexsexsexsexsexs
sex sexsexsexsexsexsexsex
sex sexsexsexsexsexsexse
sexs sexsexsexsexsexsexs
sexse sexsexsexsexsexse
sexsex sexsexsexsexsexse
 sexsex sexsexsexsexsexs
 sexsexs sexsexsexsexsex
  sexsexs sexsexsexsexse
  sexsexse sexsexsexsexs
  sexsexsex sexsexsexsex
  sexsexsexs  sexsexsexse
  sexsexsexs  sexsexsexse
 sexsexsexse   sexsexsexs
 sexsexsexs    sexsexsexse
sexsexsexse    sexsexsexse
sexsexsexse     sexsexsexse
sexsexsexse      sexsexsexs
sexsexsexse     sexsexsexse
sexsexsexsex     sexsexsexse
sexsexsexsex     sexsexsexse
sexsexsexsex     sexsexsexsex
sexsexsexse      sexsexsexsex
sexsexsexse      sexsexsexsex
sexsexsexs      sexsexsexsex
sexsexsexs       sexsexsexse
sexsexsex        sexsexsexse
sexsexse         sexsexsexs
sexsexse          sexsexsex
sexsexs           sexsexse
sexsex             sexsexs
sexsex              sexsexs
sexsex               sexsex
 exsex                sexse
sexsex                sexsex
sexsex                sexsex
sexsexs               sexsexx
sexsexsex             sexsexse
sexsexsexse          sexsexsexse
sexsexsexsexs        sexsexsexsex
sexsexsexsexse       sexsexsexsex
sex    sexsexsex    sexsexsexsex
 x        sexsexse   xx sexsexse
                     x    sexsex
                           sexse
                           sexse
                           sexse
                             sex
                              xx
                              xx
Че, фронтендер дохуя? Самый умный? Взломать решил? Че тебе надо у меня дома?`);
