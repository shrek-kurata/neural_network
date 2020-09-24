import { SynapseMatrix } from ".";
import { NeuralActivityPattern } from "./neural_activity.model";

describe("NeuralNetwork", () => {
	it("init", () => {
		const synapse_matrix = new SynapseMatrix(3);

		console.log(synapse_matrix._synapse_matrix);

		console.log(synapse_matrix);
	});
});

describe("SynapseMatrix", () => {
	it("input", () => {
		const patternA: NeuralActivityPattern = [1, 1, -1];

		const synapse_matrix = new SynapseMatrix(3);
		synapse_matrix.input(patternA);
		synapse_matrix.input(patternA);
		synapse_matrix.input(patternA);

		console.log(synapse_matrix._synapse_matrix);

		const hasRecalled = synapse_matrix.hasRecalled(patternA);

		if (hasRecalled) {
			console.log("Memory Recalled!!");
		} else {
			console.log("Error");
		}
	});
});
