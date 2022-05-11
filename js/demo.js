/*!
 * CSS Framework Concept
 * Alexandra Gierer
 * May 2022
 *
 * Created as part of the Bachelor Thesis.
 */


/**
 * Set Text with Theme name and CSS properties for Demo
 */
export function setDemoText() {
	var text = document.getElementById('css-variables');

	text.innerHTML = ""

	const darkmode = JSON.parse(localStorage.getItem('darkmode'))
	const theme = localStorage.getItem('theme')
	var heading = "<h3>" + theme + ((darkmode) ? "-dark" : "") + "</h3>"
	text.innerHTML += heading

	const css_properties = [
		'--body-background-color',
		'--border-radius',
		'--border-color',
		'--border-width',
		'--box-shadow',
		'--backdrop-filter'
	]

	css_properties.forEach(property => {
		var value = getComputedStyle(document.documentElement).getPropertyValue(property);

		text.innerHTML += property + ': ' + value + '<br>';
	});
}
