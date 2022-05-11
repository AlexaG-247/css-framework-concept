/*!
 * CSS Framework Concept
 * Alexandra Gierer
 * May 2022
 *
 * Created as part of the Bachelor Thesis.
 */


import * as Demo from './demo.js';


/**
 * Sets the theme on the document and saves it in localStorage
 * @param  {String} theme	name of the theme
 */
function setTheme(theme)
{
	const darkmode = JSON.parse(localStorage.getItem('darkmode'))


	if(darkmode)
	{
		document.documentElement.className = theme + ' dark';
		document.getElementById('darkmode-btn').classList.add('active');
	}
	else
	{
		document.documentElement.className = theme;
		document.getElementById('darkmode-btn').classList.remove('active');
	}

	[...document.querySelectorAll('*[id^="theme-btn-"]')].forEach(element => {
		element.classList.remove('active')
	});

	document.getElementById('theme-btn-' + theme).classList.add('active');

	localStorage.setItem('theme', theme);

	//NOTE: only for demo
	Demo.setDemoText();
}


/**
 * Toggle Darkmode and saves it in localStorage
 */
function toggleDarkMode()
{
	if(document.documentElement.classList.contains('dark'))
	{
		document.documentElement.classList.remove('dark')
		localStorage.setItem('darkmode', JSON.stringify(false));
		document.getElementById('darkmode-btn').classList.remove('active');
	}
	else
	{
		document.documentElement.classList.add('dark')
		localStorage.setItem('darkmode', JSON.stringify(true))
		document.getElementById('darkmode-btn').classList.add('active');
	}

	//NOTE: only for demo
	Demo.setDemoText();
}


/**
 * StartUp Function for Themesetting
 */
function StartUp()
{
	const theme = localStorage.getItem('theme')
	setTheme(theme);

	//NOTE: only for demo
	Demo.setDemoText();
}


/**
 * adds the addEventListener for Themesetting
 * @param  {String} id		id of the element
 * @param  {Node}   theme	name of the theme
 */
function addEventListenerToButton(id, theme)
{
	document.getElementById(id).addEventListener('click',function(event){
		setTheme(theme)
	});
}


/**
 * Startup options
 */
window.addEventListener('DOMContentLoaded', (event) => {
    StartUp();

	addEventListenerToButton('theme-btn-minimalism', 'minimalism')
	addEventListenerToButton('theme-btn-glassmorphism', 'glassmorphism')
	addEventListenerToButton('theme-btn-brutalism', 'brutalism')

	document.getElementById('darkmode-btn').addEventListener('click',function(event){
		toggleDarkMode()
	});
});
