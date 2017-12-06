// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const delay = 1000;
const tournaments = [
  {
    id: 'simplify-the-solution',
    title: 'Simplify the solution',
    category: 'JavaScript',
    author: 'Rufat Khaslarov'
  },
  {
    id: 'string-etc',
    title: 'string etc',
    category: 'JavaScript',
    author: 'lihuanshuai'
  },
  {
    id: 'yet-To-Solve',
    title: 'yet To Solve',
    category: 'JavaScript',
    author: 'saiful110816'
  },
  {
    id: 'simplify-the-solution4',
    title: 'Simplify the solution',
    category: 'JavaScript',
    author: 'Rufat Khaslarov'
  },
  {
    id: 'simplify-the-solution2',
    title: 'Simplify the solution2',
    category: 'JavaScript',
    author: 'Rufat Khaslarov'
  }
];

export default class Tours {
  static fetchAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...tournaments]);
      }, delay);
    });
  }
}
