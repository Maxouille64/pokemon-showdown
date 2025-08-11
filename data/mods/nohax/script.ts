export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen9',
    gen: 9,
    randomizer(baseDamage: number) {
            const tr = this.trunc;
            return tr(tr(baseDamage * (100 - 7)) / 100);
    },
};
