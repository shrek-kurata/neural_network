import { NeuralNetwork } from ".";
import { NeuralActivityPattern } from "./neural_activity.model";

describe("NeuralNetwork", () => {
	it("init", () => {
		const network = new NeuralNetwork(3);

		console.log(network._network);

		console.log(network);
	});
});

describe("NeuralNetwork", () => {
	it("input", () => {
		const patternA: NeuralActivityPattern = [1, 1, -1];

		const network = new NeuralNetwork(3);
		network.input(patternA);
		network.input(patternA);
		network.input(patternA);

		console.log(network._network);

		const hasRecalled = network.hasRecalled(patternA);

		if (hasRecalled) {
			console.log("Memory Recalled!!");
		} else {
			console.log("Error");
		}
	});
});
