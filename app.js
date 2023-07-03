// import express from 'express';
// import hbs from 'handlebars';
// import {engine} from 'express-handlebars';
// import moment from 'moment';
// import path from 'path';

// const appFolder = `${path.resolve()}/clivemurray.com`;
// const clivemurrayApp = express();
// const env = process.env.NODE_ENV || 'development';

// // CSP
// clivemurrayApp.use(function(req, res, next) {
// 	res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline' https://storage.ko-fi.com");
// 	next();
// });

// hbs.registerHelper('eq', function (a, b) {
// 	return (a === b);
// });

// clivemurrayApp.engine('hbs', engine({
// 	extname: 'hbs',
// }));
// clivemurrayApp.set('views', `${appFolder}/views`);
// clivemurrayApp.set('view engine', 'hbs');
// clivemurrayApp.use(express.static(`${appFolder}/public`));

// const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// const whatMonthIsIt = () => {
// 	return months[moment().month()];
// };

// // const currentYear = moment().format('YYYY');
// const whatYearIsIt = () => {
// 	return moment().format('YYYY');
// };

// const cmcomQuote = () => {
// 	const q = [
// 		'I play guitar, you know',
// 		'Now in colours!',
// 		'display: bloke;',
// 		'It’s good for you',
// 		'HACKA LÖKEN!',
// 		'Always running',
// 		'Web stuff since 1997',
// 		'Disinformation superlayby',
// 		'At the forefront of the retreat',
// 		'More harmonies',
// 		'Do you have any grey poupon?',
// 		'He’s beginning to believe',
// 		'It’s not the years, it’s the mileage',
// 		'Be excellent to each other',
// 		'Alsø wik',
// 		'Alsø alsø wik',
// 		'I know where Bruce Lee lives',
// 		'It’s all relative',
// 		'JEM777LNG #407',
// 		'Never put a sock in a toaster',
// 		'Never put jam on a magnet',
// 		'Thou shalt not question Stephen Fry',
// 		'Cough drop and roll',
// 	];

// 	if (moment().month() === 2) { // it's march
// 		q.push('R Tape loading error, 0:1');
// 	}

// 	if (moment().month() === 5) { // it's june
// 		q.push('HAPPY PRIDE');
// 		q.push('He/Him for now at least');
// 	}

// 	const r = Math.floor(Math.random() * q.length);
// 	return q[r];
// };

// const renderHome = (res, customMonth) => {
// 	let credit = null;
// 	const monthVar = customMonth || whatMonthIsIt();

// 	if (monthVar === 'jul') {
// 		credit = {
// 			name: 'Dakota Roos',
// 			handle: '@dakotaroosphotography',
// 		};
// 	} else if (monthVar === 'sep' || monthVar === 'dec') {
// 		credit = {
// 			name: 'Timothy Eberly',
// 			handle: '@timothyeberly',
// 		};
// 	} else if (monthVar === 'oct') {
// 		credit = {
// 			name: 'Alfred Schrock',
// 			handle: '@puregeorgia',
// 		};
// 	} else if (monthVar === 'nov') {
// 		credit = {
// 			name: 'Anne Nygård',
// 			handle: '@polarmermaid',
// 		};
// 	}

// 	res.setHeader('Cache-Control', 'max-age=1');
// 	res.render('index', {
// 		quote:  cmcomQuote(),
// 		currentYear: whatYearIsIt(),
// 		month: monthVar,
// 		credit,
// 	});
// };

// const render404 = (res) => {
// 	res.setHeader('Cache-Control', 'max-age=1');
// 	res.render('404', {
// 		quote:  cmcomQuote(),
// 		currentYear: whatYearIsIt(),
// 	});
// };

// clivemurrayApp.get('/', (req, res) => {
// 	renderHome(res);
// });

// clivemurrayApp.get('/menu', (req, res) => {
// 	res.setHeader('Cache-Control', 'max-age=1');
// 	res.render('menu', {
// 		layout: 'menu-layout',
// 	});
// });

// // clivemurrayApp.get('/party', (req, res) => {
// // 	res.redirect('https://saffronmurray.com/');
// // });

// clivemurrayApp.get('/:page?', (req, res) => {
// 	if (req.params.page) {
// 		// if month then render home with month, else do 404
// 		if (months.indexOf(req.params.page) > -1) {
// 			renderHome(res, req.params.page);
// 		} else {
// 			render404(res);
// 		}
// 	}
// });

// export {clivemurrayApp};
