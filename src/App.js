import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import DistractifyContainer from "./components/DistractifyContainer";

class App extends Component {
	constructor() {
		super();

		this.state = {
			auth: {
				user: {}
			}
		};
	}

	login(res) {
		console.log("inside login method, res is: ", res);
		localStorage.setItem("token", res.token);

		this.setState(
			{
				auth: {
					user: res
				}
			},
			() => this.props.history.push("/feed")
		);
	}

	render() {
		return (
			<Route
				path="/"
				render={() => (
					<DistractifyContainer loginMethod={this.login.bind(this)} />
				)}
			/>
		);
	}
}

export default withRouter(App);
