# European Capital Cities - Quiz

This is a website containing an online quiz letting the user test their skills and knowledge about European capital cities.
The site is created for the audience that wants to test their own knowledge or their loved ones, on ten different european capital cities.

The site includes a firstpage with a clean layout and a button to start the quiz, and a quizpage where the different questions is showed with a scoreboard and a button, allowing the user to restart the quiz.

The link to my webpage can be found here - [European Capital Cities](https://tildeholmqvist.github.io/project-two/).

![Screenshot of my webpage from Am I responsive?](/assets/images/amiresponsivefirstpage.png)

![Screenshot of my webpage from Am I responsive?](/assets/images/amiresponsivequiz.png)

## Site Owner Goals

- To give the user the option to easily access the quiz.
- To provide the user with a short but fun quiz about European Capital Cities.
- To present the user with a website that is easy to navigate, fully responsive and that contains a simple and easy layout, fitting for the websites theme.
- To allow the user to see their results after submitting their answers.

## User Stories

- ### First time user

  - As a first time user I want to easily access the quiz.
  - As a first time user I want to be able to easly navigate through the different questions on the quiz.
  - As a first time user I want to submit my answer for the quiz and get my result.

- ### Returning User

  - As a returning user I want to easily navigate back to the first question and restart the quiz.
  - As a returning user I want to be able to do the quiz again and get a higher result.

## Wireframes

Wireframes were produced using Balsamiq.

 <details>

 <summary>Desktop Wireframe</summary>

![Desktop Wireframe](assets/images/wireframedesktop.png)

 </details>

 <details>
    <summary>Mobile Wireframe</summary>

![Mobile Wireframe](assets/images/wireframeiphone.png)

 </details>

## Features

#### Firstpage

- Start Quiz - Button

#### Quiz Page

- A quiz about European capital cities, including 10 questions
- A scoreboard
- A Restart Button

## First Page

The first page includes an big image depicting the globe, a header with an easy layout, and a button to start the quiz.

![Screenshot of my webpage from Am I responsive?](/assets/images/amiresponsivefirstpage.png)

## Quiz Page

The quiz page has the same design and layout as the first page, but also includes 10 different slides, each with a quiz question and three suggested answers.
Under the questionbox the user can find their scoreboard that will tell the user how many right answer they had, after completing the quiz a alert will be showing telling the user to click the restart button to try again.

![Screenshot of my webpage from Am I responsive?](/assets/images/amiresponsivequiz.png)

![Screenshot of the alert](/assets/images/quizalert.png)

![Screenshot of my webpage from Am I responsive?](/assets/images/quizandresult.png)

# Layout & Design

My layout is simple, clean and easy to navigate through.
For a first time visitor the webpage appears structured, with pleasing colours.

#### Colours

The colorscheme for the site is in the blue spectra, beacuse it's a fitting color for the websites theme and purpose.
The color blue is both easy for the eye, kind and aesthetically nice.

The questionbox is in black and white to make it easy to read and appearmore accessible for the user.
The answer is in boxes with the borders of the same blue color as the rest of the site.

#### Images

The image that is being used on the site is an image depicting a hand-painted picture of the earth.
It contains the same colors as the websites colourscheme.

The image is borrowed from [Unsplash](https://unsplash.com/photos/blue-green-and-yellow-abstract-painting-znhEe1cbbQE).

#### Fonts

On this website I am using the Roboto Condensed font for all texts, with a backup of sans serif.

The fonts is borrowed from [Google Fonts](https://fonts.google.com/).

#### Fav Icon

The favicon for this website is the earth, with europe visible.

The favicon is borrowed from [Fav Icon](https://favicon.io/emoji-favicons/globe-showing-europe-africa).

# Technologies

The technologies that is beeing used on this project is:

- HTML 5
- CSS
- JavaScript

# Testing

## W3C Validator HTML

No errors where found in my index.html file.
No errors where found in my quiz.html file.

[W3C Validator](https://validator.w3.org/)

## W3C Validator CSS

No errors where found in my css.

[W3C Validator CSS](https://jigsaw.w3.org/css-validator/)

## JS Hint

No errors were found in my JavaScript[Jshint validator](https://jshint.com/)

- The following metrics were returned:
  - There are 10 functions in this file.
  - Function with the largest signature take 2 arguments, while the median is 0.5.
  - Largets function has 14 statements in it, while the median is 3.5.
  - The most complex function has a cyclomatic complexity value of 4 while the median is 1.

## Lighthouse

My lighthouse score for the index.html file for mobile:
![Screenshot of my lighthouse score - index.html - mobile](/assets/images/indexmobilelighthouse.png)

My lighthouse score for the index.html file for desktop:
![Screenshot of my lighthouse score - index.html - desktop](/assets/images/indexdesktoplighthouse.png)

My lighthouse score for the quiz.html file for mobile:
![Screenshot of my lighthouse score - quiz.html - mobile](/assets/images/quizmobilelighthouse.png)

My lighthouse score for the quiz.html file for desktop:
![Screenshot of my lighthouse score - quiz.html - desktop](/assets/images/quizdesktoplighthouse.png)

When I tested my website through the Lighthouse tool, I got different results depending on the type of sizescreen.

I also got a lower score on the SEO, but overall the score was in the higher scale, except for the performance on the firstpage on a mobilephone.

## Broswer Testing

The webpage has been tested on different browsers such as Google Chrome, Safari and Firefox, and is working correctly.

## Device Testing

The webpage has been tested on different devices such as Iphone, Ipad, MacBook Pro and iMac, and is working correctly.

## Responsiveness

The webpage responsiveness has been tested through the Google Chrom Dev Tool, [Am I Responsive?](https://ui.dev/amiresponsive) and [Responsinator](http://www.responsinator.com/) and is working correctly.

## Quiz Testing

The quiz was tested and is compatible with different browsers and mobile devices.

## Testing of the alert

The alert is working with different browsers and mobile devices.

# Bugs and Issues

## Unfixed Bugs

The scoreboard that is showing the user their current result goes back to a 0 as soon as the user closes the alert, which isn't ideal, since if the user doesn't check their score before closing the popup they will not know how they did on the quiz.

When I tried to change it so it wouldn't be reset to zero, I got the issue that the site had to be hard refreshed to restart, because if the user just clicked the restart button, the old score would still be in the result box, and the score would start increasing from that number and not from zero.

# Deployment

The website was deployed through the hosting platform GitHub.
How to deploy through GitHub:

- Go to GitHub.com .
- Select the repository.
- Once your in the repository, select settings at the top of the page to the right.
- In the menu to your left, go into "pages".
- Under "Branch" use the dropdown menu and select "main" and "/root", and save.
- When it's saved you will get the link to your active website.

Here you can mind the active link for [European Capital Cities](https://tildeholmqvist.github.io/project-two/).

You can also choose to do a "cloning" or "forking" on a repository. It basiclly means that you're doing a copy on the repository, and that allows you to try new ideas and changes, without it affecting the public, live repository.
This is how you fork a repository on GitHub:

- Go to the repository that you're going to clone/fork.
- On the top to the right there is a button named "Fork", click that.
- You will get transfered to a page where you can through a dropdown menu choose a owner.
- Pick a repository name and a description.
- Select the "Copy the .... branch", this could either be the main branch or the default branch.
- Click the green button saying "Create Fork".

# Credits

- [Unsplash](https://unsplash.com/)
- [Tiny PNG](https://tinypng.com/)
- [Google Font](https://fonts.google.com/)
- [Adobe Color](https://color.adobe.com/sv/create/color-wheel)
- [JavaScript Slideshow With Controls](https://codepen.io/SitePoint/pen/WwqvqB)
- [GitHub Docs, Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [Love Maths](https://github.com/tildeholmqvist/love-maths)
- [Love Maths README](https://github.com/Code-Institute-Solutions/readme-love-maths)
- [Balsamic](https://balsamiq.com/wireframes/desktop/#)
- [Am I Responsive?](https://ui.dev/amiresponsive)
- My mentor Antonio for his advice and support.

### Content

- The quiz answers is from [Wikipedia](https://en.wikipedia.org/wiki/Category:Capitals_in_Europe).

### Media

- The photo used in this project is from [Unsplash](https://unsplash.com/photos/blue-green-and-yellow-abstract-painting-znhEe1cbbQE).
