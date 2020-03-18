import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.div``;

type Props = {};

type State = {};

export default class Main extends React.Component<Props, State> {
	render = (): React.ReactNode => {
		return (
			<StyledMain>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at dolor voluptates odio mollitia, aliquam totam
					consequatur sunt autem eaque, minima, quis cupiditate tempore quas facilis. Quisquam alias adipisci est.
				</p>
				<Link to="/header">to header</Link>
			</StyledMain>
		);
	};
}
