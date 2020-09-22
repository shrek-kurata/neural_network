import { NeuralActivityPattern } from "./neural_activity.model";
import { INeuralNetwork } from "./neural_network.model";

export class NeuralNetwork {
	_network: INeuralNetwork;
	constructor(patternLen: number) {
		this._network = this.init(patternLen);
	}

	/**
	 *
	 * @param patternLen 神経活動の組み合わせの数
	 * @returns 初期状態。値が全て0で,行数、列数が組み合わせの数と同じである正方行列
	 */
	private init(patternLen: number) {
		let __network: INeuralNetwork = [];
		for (var _i = 0; _i < patternLen; _i++) {
			let line: number[] = [];
			for (var __i = 0; __i < patternLen; __i++) {
				line.push(0);
			}
			__network.push(line);
		}
		return __network;
	}

	/**
	 *
	 * @param pattern 神経細胞の活動のパターン
	 * @returns 更新された神経細胞ネットワークを返す
	 */
	input(pattern: NeuralActivityPattern) {
		pattern.forEach((act, actIndex) => {
			for (var _i = 0; _i < pattern.length; _i++) {
				if (actIndex !== _i) {
					this._network[actIndex][_i] += act;
				}
			}
		});
		return this._network;
	}

	/**
	 *
	 * @param pattern
	 * 行列の積の計算でできるが、n行n列の正方行列とn行1列の積なので、返り値は1行n列の正方行列
	 */
	hasRecalled(pattern: NeuralActivityPattern) {
		let _hasRecalled = false;
		const result = pattern.map((num, index) => {
			const innerd = this._network[0][index] * num;
			return innerd > 0 ? 1 : -1;
		});
		result.forEach((resultNum, index) => {
			if (pattern[index] !== resultNum) {
				_hasRecalled = false;
			} else {
				_hasRecalled = true;
			}
		});
		return _hasRecalled;
	}
}
