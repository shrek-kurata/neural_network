import { NeuralActivityPattern } from "./neural_activity.model";
import { ISynapseMatrix} from "./synase_matrix.model";
export class SynapseMatrix {
	_synapse_matrix: ISynapseMatrix;
	constructor(patternLen: number) {
		this._synapse_matrix = this.init(patternLen);
	}

	/**
	 *
	 * @param patternLen 神経活動の組み合わせの数
	 * @returns 初期状態。値が全て0で,行数、列数が組み合わせの数と同じである正方行列
	 */
	private init(patternLen: number) {
		let __synapse_matrix: ISynapseMatrix = [];
		for (var _i = 0; _i < patternLen; _i++) {
			let line: number[] = [];
			for (var __i = 0; __i < patternLen; __i++) {
				line.push(0);
			}
			__synapse_matrix.push(line);
		}
		return __synapse_matrix;
	}

	/**
	 *
	 * @param pattern ニューロンの活動のパターン
	 * @returns 更新されたシナプスを返す
	 */
	input(pattern: NeuralActivityPattern) {
		pattern.forEach((act, actIndex) => {
			for (var _i = 0; _i < pattern.length; _i++) {
				if (actIndex !== _i) {
					this._synapse_matrix[actIndex][_i] += act;
				}
			}
		});
		return this._synapse_matrix;
	}

	/**
	 *
	 * @param pattern
	 * 行列の積の計算でできるが、n行n列の正方行列とn行1列の積なので、返り値は1行n列の正方行列
	 */
	hasRecalled(pattern: NeuralActivityPattern) {
		let _hasRecalled = false;
		const result = pattern.map((num, index) => {
			const innerd = this._synapse_matrix[0][index] * num;
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
