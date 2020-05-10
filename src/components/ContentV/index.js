import React, { Component } from 'react';
import { Container, Subscribe, Provider } from 'unstated';

class CounterContainer extends Container {
	constructor(props) {
		super(props);
		this.state = { count: props.count || 0, amount: props.amount || 1 };
	}

	add = () => {
		this.setState({ count: this.state.count + this.state.amount });
	};

	remove = () => {
		this.setState({ count: this.state.count - this.state.amount });
	};

	setAmount = amount => {
		this.setState({ amount });
	};
}

const container = new CounterContainer({ count: 100, amount: 5 });

class Counter extends Component {
	render() {
		return (
			<Subscribe to={[CounterContainer]}>
				{counterContainer => (
					<div>
						<p>{counterContainer.state.count}</p>
						<button onClick={counterContainer.add}>增加次数</button>
					</div>
				)}
			</Subscribe>
		);
	}
}

class ContentV extends Component {
	render() {
		return (
			<Provider inject={[container]}>
				<Subscribe to={[CounterContainer]}>
					{counterContainer => (
						<div>
							<p>{counterContainer.state.count}</p>
							<button onClick={() => counterContainer.setAmount(3)}>
								改为3次
							</button>
						</div>
					)}
				</Subscribe>

				<Counter />
			</Provider>
		);
	}
}

export default ContentV;
