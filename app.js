'use strict';
//This is my first project. Hope it works!

var userName = prompt('What is your name?').toLowerCase();
alert('Welcome, ' + userName + '!');
console.log('The user\'s name is ' + userName);

var hello = prompt('Do you want to play a game?').toLowerCase();
if (hello === 'y' || hello === 'yes') {
  alert('That\'s fantastic!');
  console.log('That\'s fantastic!');
}
else {
  alert('Maybe another day.');
  console.log('Maybe another day.');
};
var userAnswer = prompt('I went to a private school in Hawaii, can you guess which one?');
if (userAnswer === 'University of Hawaii'){
  alert('Sorry, that is not correct. UH is a public University');
  console.log('Sorry, that is not correct. UH is a public University');
}
else if (userAnswer === 'Hawaii Pacific University') {
  alert('Yes,that is the right answer');
  console.log('Yes, that is the right anwser');

} else {
  alert('Sorry, that is not correct.  That must be a new one.');
  console.log('Sorry, that is not correct.  That must be a new one.');
};

var userAnswer2 = prompt('Memorable jobs for me were at Holland America Line, Hyatt Regency Waikiki. Can you guess my Major? ');
if (userAnswer2 === 'Travel'){
  alert('You are right!. I got my B.S.B.A. degree with a Travel Industry Management Major.');
  console.log('You are right! I got my B.S.B.A. degree with a Travel Industry Management Major.');

} else {
  alert('Good guess but that is not correct. Actually, I got my B.S.B.A. degree with a Travel Industry Management Major.');
  console.log('Good guess but that is not correct. Actually, I got my B.S.B.A. degree with a Travel Industry Management Major.');
};

var userAnswer3 = prompt('Do you know which forms of exercise I like?').toLowerCase();
if (userAnswer3 === 'y' || userAnswer3 === 'yes') {
  alert('That\'s fantastic!');
  console.log('That\'s fantastic!');

} else {
  alert('I wouldn\'t expect you to.  I like yoga and walking');
  console.log('I wouldn\'t expect you to.  I like yoga and walking');
};

var userAnswer4 = prompt('Do you think I have pet?').toUpperCase();
if (userAnswer4 === 'N' || userAnswer4 === 'NO') {
  alert('You are right!');
  console.log('User guessed No');

} else {
  alert('You are not correct, sorry');
  console.log('user guessed yes');
};

var userAnswer5 = prompt('Do you think I like coding?').toUpperCase();
if (userAnswer5 === 'Y' || userAnswer5 === 'YES') {
  alert('You are right!');
  console.log('User guessed YES');

} else {
  alert('You are not correct');
  console.log('user guessed NO');
};
