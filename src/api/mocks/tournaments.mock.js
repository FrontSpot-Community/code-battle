// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const delay = 1000;
const tournaments = [
  {
    id: 'simplify-the-solution',
    title: 'Simplify the solution',
    category: 'JavaScript',
    author: 'Rufat Khaslarov',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Started',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
      `A great way to improve your skills when learning to code 
      is by solving coding challenges. Solving different types of 
      challenges and puzzles can help you become a better problem solver, 
      learn the intricacies of a programming language, prepare for 
      job interviews, learn new algorithms, and more.`,
    tasks: [
      'strings',
      'Greetings-The-New-Internet-Explorer',
      'Type-Script',
      'Objects'
    ]
  },
  {
    id: 'string-etc',
    title: 'string etc',
    category: 'JavaScript',
    author: 'lihuanshuai',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Started',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
    `A great way to improve your skills when learning to code 
    is by solving coding challenges. Solving different types of 
    challenges and puzzles can help you become a better problem solver, 
    learn the intricacies of a programming language, prepare for 
    job interviews, learn new algorithms, and more.`,
    tasks: [
      'HipHip-Array',
      'Hello-world-2',
      'Type-Script',
      'Objects'
    ]
  },
  {
    id: 'yet-To-Solve',
    title: 'yet To Solve',
    category: 'JavaScript',
    author: 'saiful110816',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Preparing',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
    `A great way to improve your skills when learning to code 
    is by solving coding challenges. Solving different types of 
    challenges and puzzles can help you become a better problem solver, 
    learn the intricacies of a programming language, prepare for 
    job interviews, learn new algorithms, and more.`,
    tasks: [
      'HipHip-Array',
      'Dont-worry,-be-happy',
      'Numbers-and-Strings',
      'Objects'
    ]
  },
  {
    id: 'simplify-the-solution4',
    title: 'Simplify the solution',
    category: 'JavaScript',
    author: 'Rufat Khaslarov',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Started',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
    `A great way to improve your skills when learning to code 
    is by solving coding challenges. Solving different types of 
    challenges and puzzles can help you become a better problem solver, 
    learn the intricacies of a programming language, prepare for 
    job interviews, learn new algorithms, and more.`,
    tasks: [
      'arrays',
      'numbers',
      'Numbers-and-Strings',
      'Objects',
      'Declare-Variables-Not-War'
    ]
  },
  {
    id: 'simplify-the-solution2',
    title: 'Simplify the solution2',
    category: 'JavaScript',
    author: 'Rufat Khaslarov',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Preparing',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
    `A great way to improve your skills when learning to code 
    is by solving coding challenges. Solving different types of 
    challenges and puzzles can help you become a better problem solver, 
    learn the intricacies of a programming language, prepare for 
    job interviews, learn new algorithms, and more.`,
    tasks: [

    ]
  }
];

export default class Tours {
  static fetchAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({data: [...tournaments], count: 6});
      }, delay);
    });
  }
  static fetchById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({data: tournaments.find((item) => item.id === id)});
      }, delay);
    });
  }
}
