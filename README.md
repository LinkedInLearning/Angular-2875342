# Angular: Testing and Debugging
This is the repository for the LinkedIn Learning course Angular: Testing and Debugging. The full course is available from [LinkedIn Learning][lil-course-url].

![Angular: Testing and Debugging][lil-thumbnail-url] 
Errors caused by missing dependencies, undefined variables, or poorly formatted data can cause your web application to stop working. In this course, learn how to track down and eliminate these types of errors in your Angular applications through the process of testing and debugging. Instructor Derek Peruo breaks down common error messages and goes over a variety of testing and debugging options. He also covers code linting, shares some tips and tricks for avoiding pitfalls during development, and goes into writing custom error handlers to make it easier to work with errors as your application grows.

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing
1. To use these exercise files, you must have the following installed:
    - [Node and npm](https://nodejs.org/)
    - [Visual Studio Code](https://code.visualstudio.com/) (optional - use any editor you like)
    - [Google Chrome](https://www.google.com/chrome/) (optional - use any browser you like)
    - Mac, Windows, Linux
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like [SourceTree](https://www.sourcetreeapp.com/).
3. Run `npm install` from the `main` branch to install project dependencies.

### Instructor

**Derek Peruo**

_Angular.js Architect_

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/derek-peruo?u=104).

[lil-course-url]: https://www.linkedin.com/learning/angular-testing-and-debugging-10201318
[lil-thumbnail-url]: https://cdn.lynda.com/course/2875342/2875342-1619631339971-16x9.jpg

