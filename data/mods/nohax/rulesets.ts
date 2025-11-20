export const Rulesets: {[k: string]: ModdedFormatData} = {
  nohax: {
	effectType: 'Rule',
	name: 'nohax',
	desc: "INTERDIT AU HAX ICI ATTENTION PAS DE LUCK NO HAXX PLz",
	//onCriticalHit: false,
	onCriticalHit(target, source, move) {
    //console.log("onCrit : " + target + source + move)
    //console.log("pokemonThis : " + util.inspect(this.activeTarget, {depth: 0}));
		let critRatio = this.runEvent('ModifyCritRatio', this.activePokemon, target, move, move.critRatio || 0);
    //console.log("rulesets: " + critRatio);
		if (move.willCrit===true) {
			return true;
		} else if(critRatio > 3) {
			return true;
		} else {
			return false;
		};
	},
/*
	onBeforeMove(pokemon, target, move) {
	},
*/
	onSetStatus(status, target, source) {
		console.log("testest")
		if (source && source.isAlly(target)) {
			return;
		}
		if (status.id === 'freeze') return false;

	},

	onBattleStart() {
		this.add('-message', `${this.sides[0].name} wins speedties on odd turns and ${this.sides[1].name} on even turns`);
		this.randomizer = function(baseDamage: number) {
				return baseDamage;
		};
		this.randomChance = function(numerator: number, denominator: number): boolean {
      //console.debug(util.inspect(this, {depth: 0}))
			if (denominator !=0 && numerator/denominator>0.5) return true;
			else return false;
		};
		this.speedSort = function<T extends AnyObject>(list: T[], comparator: (a: T, b: T) => number = this.comparePriority) {
			if (list.length < 2) return;
			let sorted = 0;
			// This is a Selection Sort - not the fastest sort in general, but
			// actually faster than QuickSort for small arrays like the ones
			// `speedSort` is used for.
			// More importantly, it makes it easiest to resolve speed ties
			// properly.
			while (sorted + 1 < list.length) {
				let nextIndexes = [sorted];
				// grab list of next indexes
				for (let i = sorted + 1; i < list.length; i++) {
					const delta = comparator(list[nextIndexes[0]], list[i]);
					if (delta < 0) continue;
					if (delta > 0) nextIndexes = [i];
					if (delta === 0) nextIndexes.push(i);
				}
				// put list of next indexes where they belong
				for (let i = 0; i < nextIndexes.length; i++) {
					const index = nextIndexes[i];
					if (index !== sorted + i) {
						// nextIndexes is guaranteed to be in order, so it will never have
						// been disturbed by an earlier swap
						[list[sorted + i], list[index]] = [list[index], list[sorted + i]];
					}
				}
				if (nextIndexes.length > 1) {
					//this.prng.shuffle(list, sorted, sorted + nextIndexes.length);
          /*
					console.log("LIST")

					console.log(util.inspect(list, {depth: 0}))
					console.log(sorted)
					console.log(nextIndexes)

					console.log("END")
          */

					if (this.turn%2==0 && list.length==2) list.reverse();
				}
				sorted += nextIndexes.length;
				}
			};
		}
	},
};
