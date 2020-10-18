# Memory-Game
Second Milestone Project


This project has beento show my skills and what I have learned in Code Institute from the JavaScript Fundamentals and Interactive Frontend Development moduals. This project consist of javascript for the functionality of the game and I have used html, boostrap, css and external liberaires to structure and design this website.

 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

My website is for casual gamers who are looking for a light game to play whilst they are waiting or they just to relax. My project helps achieve this by using simple design and a single page to reduce load times. Furthermore the use of sound effects and bg music help create a calm evironment for the user to relax and focus on the game, there is also an option to turn off or control the volume.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.
- As a casual gamer, I want to play a game with little effort from my side, so that i can relax and take my mind of things

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

- [Wireframes](https://github.com/Flukester2/Memory-Game/tree/master/assets/images/wireframes)
## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- the memory card game - allows the user to pick cards, by clicking on them, then they turn over and it automaticallly matches the cards and checks if they stay turned or flip back around.
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Toggle function for sound effects
- Game completion modal

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML](https://html.com)
    - The project uses **HTML** as the code that structures the web page and its content.
- [CSS](https://www.css-tricks.com)
    - The project uses **CSS** to style the website.
- [Javascript](https://www.javascript.com)
    - The project uses **Javascript** as the code that creates functionality and makes the website more responsive.
- [Google_Fonts](https://fonts.google.com)
    - the project uses **Google_Fonts** as an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS and Android.
- [Boostrap](https://www.getbootstrap.com)
    - The project uses **Boostrap** to style the website.

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Modals:
    1. Click on the settings or how to play button
    2. Try closing the form using the close button
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.


2. Audio toggle:
    1. Click on the settings button, a modal will pop up
    2. Try to click on the BGM button and the music will start and click the button again will start the music


3. Game:
    1. Select a card
    2. The card will turn over and stay on until another card is selected
    3. Selec a secopnd card and the game will automatically match the cards and keep them flipped 
    4. If the wrong cards are picked then the game automatically turns both cards around withing a set time
    5. Once all cards are turned and matched the game will reset and the end game modal will pop up


In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
Content is all created by me for thsi project.

### Media
- The photos used in this site were obtained from:
 - https://icons.getbootstrap.com/

### Acknowledgements

- I received inspiration for this project from :
  - https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
