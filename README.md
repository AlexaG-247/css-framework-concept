# CSS Framework Concept

Created by Alexandra Gierer as part of the Bachelor Thesis in the Bachelor Computer Science degree programme at the University of Applied Sciences Technikum Wien.

May 2022.

---

## Description

This project shows a concept for a CSS Framework, which should deal with the problem of Correspondence to current design trends and Customisability of CSS Frameworks.

For this a concept Framework was build with SCSS and CSS custom properties. The custom properties should make it possible to have multiple theme files as well as change them during the runtime.

 CSS was normalized with [normalize.css v8.0.1](github.com/necolas/normalize.css). A layout system with a Tile layout was build.

Following Components were implemented:

* button
* card

Overall 6 Themes for current Design Trends were implemented:

* Minimalism
* Minimalism-Dark
* Glassmoprhism
* Glassmoprhism-Dark
* Brutalism
* Brutalism-Dark

The Demo shows

---

## Guide

### Setup

Make sure to have node and npm installed. Then install node_modules via

```console
npm install
```

### Run

To run the project with

```console
npm run serve
```

---

## Usage of Components

### Buttons

```html
<button class="btn">Text</button>
```

### Card

```html
<div class="card">
    <h2 class="card-title">Card Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nibh ac lacus fermentum suscipit. Nullam sit amet sem elementum, accumsan risus ut, lobortis ipsum. Sed ipsum neque, luctus ut iaculis sed, tincidunt vel dui turpis.</p>
    <button class="btn float-right">Action</button>
</div>
```

---

## Developer Note

### Compile SCCS Files

SCCS Files can be either compiled via npm

```console
npm run compiled
```

or directly via the corresponding gulp task. Currently the default build task is the same as compileSass.

```console
gulp compileSass
```

### Watch

For development a watch task was provided. Either via npm

```console
npm run watch
```

or gulp

```console
gulp watch
```
