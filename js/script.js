"use strict";

/* let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number); */

/* const result = confirm("Are you here?");
console.log(result); */

/* const answer = prompt("Вам есть 18?", "18");
console.log(typeof(answer)); */

/* const answers = []; */

/* answers[0] = prompt('Ваше имя', '');
answers[1] = prompt('Ваша фамилия', '');
answers[2] = prompt('Ваш возраст', ''); */

/* console.log(typeof(1));

const user = 'Ольга';
console.log(`Привет, ${user}`); */

let numberOfFilms;
numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answerMovie,
    answerRating;

answerMovie = prompt('Один из последних просмотренных фильмов?','');
answerRating = prompt('На сколько оцените его?','');

personalMovieDB.movies[answerMovie] = answerRating;

answerMovie = prompt('Один из последних просмотренных фильмов?','');
answerRating = prompt('На сколько оцените его?','');

personalMovieDB.movies[answerMovie] = answerRating;

console.log(personalMovieDB);
