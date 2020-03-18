import * as React from "react";
import styled from "styled-components";

const Container = styled.div``;

type Props = {};

type State = {};

export default class NotFound extends React.Component<Props, State> {
	render = (): React.ReactNode => {
		return (
			<Container>
				<h1>Niks gevonden!</h1>
			</Container>
		);
	};
}
