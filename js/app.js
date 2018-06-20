/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var matCountDiv = document.getElementById('matCount');
matCountDiv.innerText = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var msgCountDiv = document.getElementById('msgCount');
msgCountDiv.innerText = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
var dataDiv = document.getElementById('data');
var fullnameDataDiv = document.getElementById('fullname');
fullnameDataDiv.innerText = "Ronald McDonald";

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var ageDataDiv = document.getElementById('age');
ageDataDiv.innerText = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var jobDataDiv = document.createElement('job');
jobDataDiv.innerText = "Clown and Restauranteur\n";
dataDiv.appendChild(jobDataDiv);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobbiesDataDiv = document.createElement('hobbies');
hobbiesDataDiv.innerText = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.\n";
dataDiv.appendChild(hobbiesDataDiv);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var locationDataDiv = document.createElement('location');
locationDataDiv.innerText = "Honolulu, HI\n";
dataDiv.appendChild(locationDataDiv);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var wantsDataDiv = document.createElement('wants');
wantsDataDiv.innerText = "Looking for a Mrs. McDonald.\n";
dataDiv.appendChild(wantsDataDiv);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var profileDiv = document.getElementById('profile');
var pro2ProfileDiv = document.createElement('p');
pro2ProfileDiv.setAttribute('id', 'pro2');
pro2ProfileDiv.innerText = "Hey! I'm a little intense and really into fashion. I'm looking for a person that isn't creeped out by clowns.";
profileDiv.appendChild(pro2ProfileDiv);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var matchesDiv =  document.getElementById('matches');
firstName = document.getElementsByClassName('firstName');
firstName[0].innerText = 'Wendy';
//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
age = document.getElementsByClassName('otherAge');
age[0].innerText = '48';
//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var stat  = document.getElementsByClassName('status');
console.log(stat);
stat[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var img = document.getElementsByClassName('other');
img[2].src = 'https://spectatorau.imgix.net/content/uploads/2017/08/Snip20170801_15.png?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550';
firstName[1].innerText = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

age[1].innerText = '68';

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstNamefirstName = document.getElementsByClassName('firstName');
firstName[2].innerText = 'Jesus Gonzalez';

 //div with class name of otherAge
 age[2].innerText = '34';

 //div with class name of status
 stat[2].innerText = 'Single';

 //div with class anem of Motto
 var mot = document.getElementsByClassName('motto');
 console.log(mot[2].innerText);
mot[2].innerText = 'I\'m the humblest';




