import React, {Component} from "react";
import "./timer.css";

export default class Timer extends Component {
	state = {
		minutes: 25,
		seconds: 0,
		on: false,
	};

	handleStart = () => {
		// this.setState((prevState) => ({
		// 	on: !prevState.on,
		// }));
		if (this.state.on) {
			this.myInterval = setInterval(() => {
				const {seconds, minutes} = this.state;
				if (seconds > 0) {
					this.setState(({seconds}) => ({
						seconds: seconds - 1,
					}));
				}
				if (seconds === 0) {
					if (minutes === 0) {
						clearInterval(this.myInterval);
					} else {
						this.setState(({minutes}) => ({
							minutes: minutes - 1,
							seconds: 59,
						}));
					}
				}
			}, 1000);
		}
	};

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	render() {
		return (
			<>
				<div className='container'>
					<span className='time'>
						{this.state.minutes}:
						{this.state.seconds < 10
							? `0${this.state.seconds}`
							: this.state.seconds}
					</span>
				</div>
				<button>Start</button>
			</>
		);
	}
}
