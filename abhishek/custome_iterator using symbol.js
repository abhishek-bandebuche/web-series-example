class MyCollection {
    constructor() {
        this._data = [];
    }

    add(n) {
        this._data[this._data.length] = n;
    }

    *[Symbol.iterator]() {
        yield* this._data;
    }

    // *[Symbol.iterator]() {
    //     for (let i = 0; i < this._data.length; i++) {
    //         yield this._data[i];
    //     }
    // }

    // [Symbol.iterator]() {
    //     const self = this;
    //     let i = 0;

    //     return {
    //         next() {
    //             let v, d = true;

    //             if (self._data[i] !== undefined) {
    //                 v = self._data[i];
    //                 d = false;
    //                 i += 1;
    //             }

    //             return {
    //                 value: v,
    //                 done: d
    //             };
    //         }
    //     };
    // }
}

var numbers = new MyCollection();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);

// console.log(numbers);

for (const i of numbers) {
    console.log(i);
}


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const iterator of numbers) {
//     console.log(iterator);
// }

// Custom Iterator

// let makeIterator = function (arr) {
//     let current = 0;
//     return {
//         next: function () {
//             return current < arr.length ? {
//                 value: arr[current++],
//                 done: false
//             } : {
//                     done: true
//                 };
//         }
//     }
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let numberIterator = makeIterator(numbers);

// while (true) {
//     let { value, done } = numberIterator.next();
//     if (done) break;
//     console.log(value);
// }