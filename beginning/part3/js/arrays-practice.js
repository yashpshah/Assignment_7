//STEP 1
var strArray = ["Inception", "Avengers-Endgame", "Avengers-Infinity War", "The Dark Knight", "Shutter Island"];
window.console.log(strArray[1]);
window.console.log("\n");
//STEP 2
var movies = new Array(5);
movies[0] = "Inception";
movies[1] = "Avengers-Endgame";
movies[2] = "Avengers-Infinity War";
movies[3] = "The Dark Knight";
movies[4] = "Shutter Island";
window.console.log(movies[0]);
window.console.log("\n");
//STEP 3
var movies = new Array(5);
movies[0] = "Inception";
movies[1] = "Avengers-Endgame";
movies[2] = "Avengers-Infinity War";
movies[3] = "The Dark Knight";
movies[4] = "Shutter Island";
movies.splice(2, 0, "Forrest Gump");
window.console.log(movies.length);
window.console.log("\n");
//STEP 4
var movies = [];
movies[0] = "Inception";
movies[1] = "Avengers-Endgame";
movies[2] = "Avengers-Infinity War";
movies[3] = "The Dark Knight";
movies[4] = "Shutter Island";
delete movies[0];
window.console.log(movies);
window.console.log("\n");
//STEP 5
var movies = [];
movies[0] = "Inception";
movies[1] = "Avengers-Endgame";
movies[2] = "Avengers-Infinity War";
movies[3] = "The Dark Knight";
movies[4] = "Shutter Island";
movies[5] = "The Dark Knight Rises";
movies[6] = "Forrest Gump";
for (var i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
window.console.log("\n");
//STEP 6
var movies = [];
movies[0] = "Inception";
movies[1] = "Avengers-Endgame";
movies[2] = "Avengers-Infinity War";
movies[3] = "The Dark Knight";
movies[4] = "Shutter Island";
movies[5] = "The Dark Knight Rises";
movies[6] = "Forrest Gump";
for (var movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("\n");
//STEP 7
var movies = [];
movies[0] = "Inception";
movies[1] = "Avengers-Endgame";
movies[2] = "Avengers-Infinity War";
movies[3] = "The Dark Knight";
movies[4] = "Shutter Island";
movies[5] = "The Dark Knight Rises";
movies[6] = "Forrest Gump";
movies.sort();
for (var movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("\n");
//STEP 8
var movies = [];
var leastFavMovies = ["Dhammal 2", "Golmal 2", "Kick"];
movies[0] = "Inception";
movies[1] = "Avengers-Endgame";
movies[2] = "Avengers-Infinity War";
movies[3] = "The Dark Knight";
movies[4] = "Shutter Island";
movies[5] = "The Dark Knight Rises";
movies[6] = "Forrest Gump";
window.console.log("Movies I like:\n\n");
for (var movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("\nMovies I regret watching:\n\n");
for (var movie in leastFavMovies) {
    window.console.log(leastFavMovies[movie]);
}
window.console.log("\n");
//STEP 9
var movies = [];
var leastFavMovies = ["Dhammal 2", "Golmal 2", "Kick"];
movies[0] = "Inception";
movies[1] = "Avengers-Endgame";
movies[2] = "Avengers-Infinity War";
movies[3] = "The Dark Knight";
movies[4] = "Shutter Island";
movies[5] = "The Dark Knight Rises";
movies[6] = "Forrest Gump";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
for (var movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("\n");
//STEP 10
var movies = [];
var leastFavMovies = ["Dhammal 2", "Golmal 2", "Kick"];
movies[0] = "Inception";
movies[1] = "Avengers-Endgame";
movies[2] = "Avengers-Infinity War";
movies[3] = "The Dark Knight";
movies[4] = "Shutter Island";
movies[5] = "The Dark Knight Rises";
movies[6] = "Forrest Gump";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.pop());