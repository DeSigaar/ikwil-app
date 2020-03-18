import * as React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header``;

type Props = {
	name: string;
};

type State = {};

export default class Header extends React.Component<Props, State> {
	static defaultProps = {
		name: "App",
	};

	render = (): React.ReactNode => {
		return (
			<HeaderContainer>
				<h1>{this.props.name}</h1>
			</HeaderContainer>
		);
	};
}
