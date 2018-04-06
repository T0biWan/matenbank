# Mate my day

![](matenbank-screenshot1.png)

![](matenbank-screenshot2.png)

> An overview and comparison of different mate-softdrinks.

## Getting started
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Features

* Choose a search engine, for example:
  - [DuckDuckGo](https://duckduckgo.com/)
  - [Google](https://www.google.com/)
  - [Dict](https://www.dict.cc/)
  - [Dees.cc](https://dees.dict.cc/)
* Quickly access links you often use
* Beautiful, random background images
* hidden scrollbar in Chrome and Firefox
* Customise links with a picture and title of your choice

## Configuration

### Add a softdrink

To add a softdrink go to `src\data\mate.json` and add a object to the array.

```js
[
  {
    "name": "Club Mate Granat",
    "producer": "Loscher",
    "liter": 0.5,
    "price": 1.2,
    "caffeine": 0.2
  }
]
```

## Built With

* [Vue.js](https://vuejs.org/) - The web framework used
* [Bulma](https://bulma.io/) - The css framework used
* [Chart.js](http://www.chartjs.org/) - JavaScript for different charts

## Acknowledgement

* [ReadMe Guideline](https://github.com/jehna/readme-best-practices) - For making a decent ReadMe
* [ReadMe Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - For making a decent ReadMe

## Licensing

The code in this project is licensed under MIT license.
