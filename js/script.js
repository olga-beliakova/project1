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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

let answerMovie,
    answerRating,
    i = 0;

for (let i = 0; i >= 0; i++) {
    answerMovie = prompt('Один из последних просмотренных фильмов?', '');
    if (answerMovie != "" && answerMovie != null && answerMovie.length <= 50) {
        i++;
    } else {
        alert("Вы ввели некорректное название фильма");
        continue;
    }
    answerRating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[answerMovie] = answerRating;
    if (i > 1) {
        break;
    }
}

/*while (i < 2) {
    answerMovie = prompt('Один из последних просмотренных фильмов?', '');
    if (answerMovie != "" && answerMovie != null && answerMovie.length <= 50) {
        i++;
    } else {
        alert("Вы ввели некорректное название фильма");
        continue;
    }
    answerRating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[answerMovie] = answerRating;
}

do {
    answerMovie = prompt('Один из последних просмотренных фильмов?', '');
    if (answerMovie != "" && answerMovie != null && answerMovie.length <= 50) {
        i++;
    } else {
        alert("Вы ввели некорректное название фильма");
        continue;
    }
    answerRating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[answerMovie] = answerRating;
} while (i < 2)*/


console.log(personalMovieDB);