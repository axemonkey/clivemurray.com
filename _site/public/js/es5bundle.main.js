(function () {
	'use strict';

	var straps = ['I play guitar, you know', 'Now in colours!', 'display: bloke;', 'It’s good for you', 'HACKA LÖKEN!', 'Always running', 'Web stuff since 1997', 'Disinformation superlayby', 'At the forefront of the retreat', 'More harmonies', 'Do you have any grey poupon?', 'He’s beginning to believe', 'It’s not the years, it’s the mileage', 'Be excellent to each other', 'Alsø wik', 'Alsø alsø wik', 'I know where Bruce Lee lives', 'It’s all relative', 'JEM777LNG #407', 'Never put a sock in a toaster', 'Never put jam on a magnet', 'Thou shalt not question Stephen Fry', 'Cough drop and roll'];
	var sinclairResearch = function sinclairResearch(year) {
	  document.querySelector('.copyright').innerHTML = "&copy; ".concat(year, " Clive Murray Research Ltd");
	};
	var writeStrapline = function writeStrapline(thisMonth) {
	  if (thisMonth === 2) {
	    // march
	    straps.push('R Tape loading error, 0:1');
	  }
	  if (thisMonth === 5) {
	    // june
	    straps.push('HAPPY PRIDE', 'He/Him for now at least');
	  }
	  document.querySelector('header h2').innerHTML = straps[Math.floor(Math.random() * straps.length)];
	};
	var init = function init() {
	  var today = new Date();
	  var thisMonth = today.getMonth();
	  var thisYear = today.getFullYear();

	  // writeStyleOfTheMonth(thisMonth);
	  writeStrapline(thisMonth);
	  if (thisMonth === 2) {
	    sinclairResearch(thisYear);
	  }
	};
	window.addEventListener('load', init);

})();
