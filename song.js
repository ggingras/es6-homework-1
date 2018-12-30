/*
Pirple Keeping Up With the Javascripts - Part 1: ES6
Homework 1 - Data types.
Information about my favorite song Learning to Fly
*/

// All song properties being initialized
let Song = "Learning to Fly";
let Artist = "Pink Floyd";
let Album = "A Momentary Lapse of Reason";
let Genre = "Rock";
let DurationInSeconds = {"albumVersion" : 293, "singleVersion": 241};
let Released = new Date('1987', '9', '14');
let Label = "Columbia (US)";
let SongWriters = ["David Gilmour", "Anthony Moore", "Bob Ezrin", "Jon Carin"];
let Producers = ["Bob Ezrin", "David Gilmour"];
let Nominations = ["MTV Video Music Award for Best Cinematography", "MTV Video Music Award for Best Direction"];
let HasBeenNumberOneOnBillboard = true;
let YoutubeViews = 63282953;

// console.log all properties to console
console.log('Favourite Song: ' + Song);
console.log('Album: ' + Album);
console.log('Artist: ' + Artist);
console.log('Genre: ' + Genre);
console.log('Duration (in secconds): ' + JSON.stringify(DurationInSeconds));
console.log('Released: ' + Released);
console.log('Label:' + Label);
console.log('Song writers: ' + SongWriters.join(", "));
console.log('Song producers: ' + Producers.join(", "));
console.log('Nominations: ' + Nominations.join(", "));
console.log('Has been #1 on Billboard: ' + HasBeenNumberOneOnBillboard);
console.log('Youtube views: ' + YoutubeViews);