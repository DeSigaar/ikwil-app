import * as React from "react";

export type Props = {
	shouldRemember: boolean;
	onUsernameChange: (username: string) => void;
	onPasswordChange: (password: string) => void;
	onRememberChange: (remember: boolean) => void;
	onSubmit: (username: string, password: string) => void;
};

export type State = {
	username: string;
	password: string;
	remember: boolean;
};

export default class Login extends React.Component<Props, State> {
	state: State = {
		username: "",
		password: "",
		remember: this.props.shouldRemember,
	};

	handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target;
		this.setState({ username: value });
		this.props.onUsernameChange(value);
	};

	handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target;
		this.setState({ password: value });
		this.props.onPasswordChange(value);
	};

	handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { checked } = e.target;
		this.setState({ remember: checked });
		this.props.onRememberChange(checked);
	};

	handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		this.props.onSubmit(this.state.username, this.state.password);
	};

	render = (): React.ReactNode => {
		return (
			<form data-testid="login-form" onSubmit={this.handleSubmit}>
				<label htmlFor="username">Username:</label>
				<input
					data-testid="username"
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleUsernameChange}
				/>

				<label htmlFor="password">Password:</label>
				<input
					data-testid="password"
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handlePasswordChange}
				/>

				<label>
					<input
						data-testid="remember"
						name="remember"
						type="checkbox"
						checked={this.state.remember}
						onChange={this.handleRememberChange}
					/>
					Remember me?
				</label>

				<button type="submit" data-testid="submit">
					Sign in
				</button>
			</form>
		);
	};
}
