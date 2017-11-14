// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const delay = 1000;
const tours = [
  {
    id: 'simplify-the-solution',
    title: 'Simplify the solution',
    category: 'JavaScript',
    author: 'Rufat Khaslarov'
  }
];

export default class Tours {
  static getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tours));
      }, delay);
    });
  }
}
