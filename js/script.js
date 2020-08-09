"use strict";

//let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let answerMovie = prompt('Один из последних просмотренных фильмов?', '');
            let answerRating = prompt('На сколько оцените его?', '');
            if (answerMovie != null && answerMovie != "" && answerMovie.length <= 50 && answerRating != null && answerRating != "" && answerRating.length <= 50) {
                this.movies[answerMovie] = answerRating;
            } else {
                alert("Вы ввели некорректное название фильма");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            alert("Вы классический зритель");
        } else if (this.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            this.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        }
    }
};

let myDB = personalMovieDB;
myDB.start();
myDB.rememberMyFilms();
myDB.detectPersonalLevel();
myDB.writeYourGenres();
myDB.showMyDB();

/*let answerMovie,
    answerRating,
    i = 0;*/

/*function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}*/

/*function rememberMyFilms() {
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
//}

/*function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}*/

/*function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}*/

/*function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}*/