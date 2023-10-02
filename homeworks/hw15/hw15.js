
class SuperArray extends Array {
    constructor(...args) {
        super(...args);
    }
    sum() {
        let total = 0;
        for (const el of this) {
            if (typeof el !== 'number') {
                throw new TypeError(`${el} is not a number`);
            }
            total += el;
        }
        return total;
    }
}
const names = new SuperArray('Taras', 'Yaroslav', 'Anatoliy');
console.log(names);

const nums = new SuperArray(13, 26, -30, 200, -142, 50);
const total = nums.sum();
console.log(total);