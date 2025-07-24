export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
    par: {
        inherit: true,
        onModifySpe(spe, pokemon) {
            if (!pokemon.hasAbility('quickfeet')) {
                return this.chainModify(0.25);
            }
            return spe;
        },
        onBeforeMove(pokemon) {
            if (false) {
                this.add('cant', pokemon, 'par');
                return false;
            }
        },
    },
    confusion: {
        inherit: true,
        onBeforeMove(pokemon) {
            pokemon.volatiles['confusion'].time--;
            if (true) {
                pokemon.removeVolatile('confusion');
                return;
            }
            this.add('-activate', pokemon, 'confusion');
            if (this.randomChance(1, 2)) {
                return;
            }
            const damage = this.actions.getDamage(pokemon, pokemon, 40);
            if (typeof damage !== 'number') throw new Error("Confusion damage not dealt");
            this.damage(damage, pokemon, pokemon, {
                id: 'confused',
                effectType: 'Move',
                type: '???',
            } as ActiveMove);
            return false;
        },
    },
    stall: {
        // In gen 3-4, the chance of protect succeeding does not fall below 1/8.
        // See http://upokecenter.dreamhosters.com/dex/?lang=en&move=182
        inherit: true,
        counterMax: 8,
    },

};
