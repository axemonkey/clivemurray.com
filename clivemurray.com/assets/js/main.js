import {lapBanner} from './modules/lap-banner.js';

const monthData = [
	{
		month: 'jan',
	},
	{
		month: 'feb',
	},
	{
		month: 'mar',
	},
	{
		month: 'apr',
	},
	{
		month: 'may',
	},
	{
		month: 'jun',
	},
	{
		month: 'jul',
		credit: {
			name: 'Dakota Roos',
			handle: '@dakotaroosphotography',
		},
	},
	{
		month: 'aug',
	},
	{
		month: 'sep',
		credit: {
			name: 'Timothy Eberly',
			handle: '@timothyeberly',
		},
	},
	{
		month: 'oct',
		credit: {
			name: 'Alfred Schrock',
			handle: '@puregeorgia',
		},
	},
	{
		month: 'nov',
		credit: {
			name: 'Anne Nygård',
			handle: '@polarmermaid',
		},
	},
	{
		month: 'dec',
		credit: {
			name: 'Timothy Eberly',
			handle: '@timothyeberly',
		},
	},
];

const straps = [
	'I play guitar, you know',
	'Now in colours!',
	'display: bloke;',
	'It’s good for you',
	'HACKA LÖKEN!',
	'Always running',
	'Web stuff since 1997',
	'Disinformation superlayby',
	'At the forefront of the retreat',
	'More harmonies',
	'Do you have any grey poupon?',
	'He’s beginning to believe',
	'It’s not the years, it’s the mileage',
	'Be excellent to each other',
	'Alsø wik',
	'Alsø alsø wik',
	'I know where Bruce Lee lives',
	'It’s all relative',
	'JEM777LNG #407',
	'Never put a sock in a toaster',
	'Never put jam on a magnet',
	'Thou shalt not question Stephen Fry',
	'Cough drop and roll',
];

const sinclairResearch = year => {
	document.querySelector('.copyright').innerHTML = `&copy; ${year} Clive Murray Research Ltd`;
};

const writeStrapline = thisMonth => {
	if (thisMonth === 2) { // march
		straps.push('R Tape loading error, 0:1');
	}

	if (thisMonth === 5) { // june
		straps.push('HAPPY PRIDE', 'He/Him for now at least');
	}

	document.querySelector('header h2').innerHTML = straps[Math.floor(Math.random() * straps.length)];
};

// eslint-disable-next-line no-unused-vars
const writeStyleOfTheMonth = thisMonth => {
	const thisMonthData = monthData[thisMonth];

	document.querySelector('#style-of-the-month').href = `/public/css/style-${thisMonthData.month}.css`;

	if (thisMonthData.credit) {
		const creditEl = document.querySelector('.image-credit');
		const unsplashLink = creditEl.querySelector('.unsplash-link');

		unsplashLink.href = `https://unsplash.com/${thisMonthData.credit.handle}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`;
		unsplashLink.innerHTML = thisMonthData.credit.name;
		creditEl.classList.remove('hide');
	}
};

const init = () => {
	const today = new Date();
	const thisMonth = today.getMonth();
	const thisYear = today.getFullYear();

	// writeStyleOfTheMonth(thisMonth);
	writeStrapline(thisMonth);

	if (thisMonth === 2) {
		sinclairResearch(thisYear);
	}

	document.body.classList.add('js');
	lapBanner.init();
};

window.addEventListener('load', init);
