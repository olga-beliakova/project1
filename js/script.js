"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answerMovie,
    answerRating,
    i = 0;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        answerMovie = prompt('Один из последних просмотренных фильмов?', '');
        answerRating = prompt('На сколько оцените его?', '');
        if (answerMovie != null && answerMovie != "" && answerMovie.length <= 50 && answerRating != null && answerRating != "" && answerRating.length <= 50) {
            personalMovieDB.movies[answerMovie] = answerRating;
        } else {
            alert("Вы ввели некорректное название фильма");
            i--;
        }
    }

    /* while (i < 2) {
        answerMovie = prompt('Один из последних просмотренных фильмов?', '');
        answerRating = prompt('На сколько оцените его?', '');
        if (answerMovie != null && answerMovie != "" && answerMovie.length <= 50 && answerRating != null && answerRating != "" && answerRating.length <= 50) {
            personalMovieDB.movies[answerMovie] = answerRating;
            i++;
        } else {
            alert("Вы ввели некорректное название фильма");
        }
    } */

    /*do {
        answerMovie = prompt('Один из последних просмотренных фильмов?', '');
        answerRating = prompt('На сколько оцените его?', '');
        if (answerMovie != null && answerMovie != "" && answerMovie.length <= 50 && answerRating != null && answerRating != "" && answerRating.length <= 50) {
            personalMovieDB.movies[answerMovie] = answerRating;
            i++;
        } else {
            alert("Вы ввели некорректное название фильма");
        }
    } while (i < 2)*/
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}

//start();
//rememberMyFilms();
//detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);