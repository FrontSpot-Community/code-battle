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
      {
        id: 'strings',
        title: 'Strings',
        difficulty: 'Mortal',
        stars: 1,
        satisfaction: '95% of 235',
        solvedBy: '10 of 34',
        status: 'Open'
      },
      {
        id: 'arrays',
        title: 'arrays',
        difficulty: 'Fighter',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Resolved'
      },
      {
        id: 'Numbers-and-Strings',
        title: 'Numbers and Strings',
        difficulty: 'Fighter',
        stars: 2,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open'
      },
      {
        id: 'From-Newbie-To-Over',
        title: 'From Newbie To Over',
        difficulty: 'Mortal',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open'
      }
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
      {
        id: 'numbers',
        title: 'numbers',
        difficulty: 'Mortal',
        stars: 1,
        satisfaction: '95% of 235',
        solvedBy: '10 of 34',
        status: 'Open'
      },
      {
        id: 'Declare-Variables-Not-War',
        title: 'Declare Variables Not War',
        difficulty: 'Fighter',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Resolved'
      },
      {
        id: 'Numbers-and-Strings',
        title: 'Numbers and Strings',
        difficulty: 'Fighter',
        stars: 2,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open'
      },
      {
        id: 'From-Newbie-To-Over',
        title: 'From Newbie To Over',
        difficulty: 'Mortal',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open'
      },
      {
        id: 'Hello-world',
        title: 'Hello world',
        difficulty: 'Mortal',
        stars: 3,
        satisfaction: '28% of 133',
        solvedBy: '23 of 22',
        status: 'Resolved'
      }
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
      {
        id: 'Objects',
        title: 'Objects',
        difficulty: 'Mortal',
        stars: 1,
        satisfaction: '95% of 235',
        solvedBy: '10 of 34',
        status: 'Open'
      },
      {
        id: 'Declare-Variables-Not-War',
        title: 'Declare Variables Not War',
        difficulty: 'Fighter',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Resolved'
      },
      {
        id: 'Greetings-The-New-Internet-Explorer',
        title: 'Greetings The New Internet Explorer',
        difficulty: 'Mortal',
        stars: 1,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open'
      },
      {
        id: 'From-Newbie-To-Over',
        title: 'From Newbie To Over',
        difficulty: 'Mortal',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open'
      },
      {
        id: 'Hello-world-2',
        title: 'Hello world 2',
        difficulty: 'Mortal',
        stars: 2,
        satisfaction: '28% of 133',
        solvedBy: '23 of 22',
        status: 'Resolved'
      }
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
      {
        id: 'Objects',
        title: 'Objects',
        difficulty: 'Mortal',
        stars: 1,
        satisfaction: '95% of 235',
        solvedBy: '10 of 34',
        status: 'Open'
      },
      {
        id: 'Declare-Variables-Not-War',
        title: 'Declare Variables Not War',
        difficulty: 'Fighter',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Resolved'
      },
      {
        id: 'Greetings-The-New-Internet-Explorer',
        title: 'Greetings The New Internet Explorer',
        difficulty: 'Mortal',
        stars: 1,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open'
      },
      {
        id: 'From-Newbie-To-Over',
        title: 'From Newbie To Over',
        difficulty: 'Mortal',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open'
      },
      {
        id: 'Hello-world-2',
        title: 'Hello world 2',
        difficulty: 'Mortal',
        stars: 2,
        satisfaction: '28% of 133',
        solvedBy: '23 of 22',
        status: 'Resolved'
      }
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
      {
        id: 'HipHip-Array',
        title: '[Hip,Hip] Array',
        difficulty: 'Mortal',
        stars: 3,
        satisfaction: '95% of 225',
        solvedBy: '10 of 84',
        status: 'Resolved'
      },
      {
        id: 'Type-Script',
        title: 'Type Script',
        difficulty: 'Fighter',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Open'
      },
      {
        id: 'Dont-worry,-be-happy',
        title: 'Don\'t worry, be happy',
        difficulty: 'Mortal',
        stars: 1,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open'
      },
      {
        id: 'From-Newbie-To-Over',
        title: 'From Newbie To Over',
        difficulty: 'Mortal',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open'
      },
      {
        id: 'hello-world-2',
        title: 'Hello world 2',
        difficulty: 'Mortal',
        stars: 2,
        satisfaction: '28% of 133',
        solvedBy: '23 of 22',
        status: 'Resolved'
      }
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
}
