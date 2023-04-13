# Technical Test App

## Project Brief

This application uses to search images for stars, planets or galaxy entered by a user. Then application need to fetch images from NASA external API.

When image is found, application needs to show images. And user can click image which one like, an enlarged image will be shown.

If no image is found, error message will be shown.

Besides, application needs to have a full test suite for each components including asynchronous components.

## Screenshots of app

- screen to show all images

  <img src="images\screen-all-image.jpeg" height="200">

- screen clicking one image

  <img src="images\screen-one-image.jpeg" height="200">

- screen in slide show

  <img src="images\screen-slideshow.jpeg" height="200">

## Testing utilities used (Jest, React Testing Library)

| Utilities | From                     | Usage                                                          |
| --------- | ------------------------ | -------------------------------------------------------------- |
| renderer  | "react-test-renderer"    | to generate component snapshots to catch unanticipated changes |
| render    | "@testing-library/react" | to create the virtual test environment                         |
| fireEvent | "@testing-library/react" | to simulate event trigger on component                         |
| waitFor   | "@testing-library/react" | await for a group of actions                                   |
| spyOn     | "jest"                   | to mock response from axios API calls                          |

## Technologies

- [React](https://react.dev/learn): create a React app project template
- [Axios API](https://axios-http.com/docs/intro): promise-based HTTP Client for node.js and the browser
- [Prop types](https://www.npmjs.com/package/prop-types): runtime type checking for React props and similar objects
- [Popup image](https://codepen.io/Muhnad/pen/dMbXNb): show one image in pop-up window
- [React Slideshow](https://www.npmjs.com/package/react-slideshow-image): slide show for fetched images

## Instructions

- Clone the repo:

```
git clone https://github.com/DavidCheungTW/react-tech-test.git
```

- Move into the directory and install:

```
cd react-tech-test
npm install
```

- To start and run on port 3000:

```
npm start
```

- To run the tests:

```
npm test
```

## Extra features

- show description when mouse put on that image
- show one image and title in popup window feature
- react slideshow feature
- clear all data feature

## Author

[David Cheung](https://www.linkedin.com/in/david-cheung-473597199/)
