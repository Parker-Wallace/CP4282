
# Assignment #1, Introduction to React

1. For this assignment you will use [`create-react-app`](https://create-react-app.dev/) to generate a react
project.  
:exclamation: Don’t worry about styling for this assignment as it is just to practice using React components.

    Use the [linkedin learning course](https://www.linkedin.com/learning/react-js-essential-training-14836121/building-modern-user-interfaces-with-react?u=27766394) as a reference

Please Post your assignment on github and submit the github url to the dropbox.

## Requirements:

1. Generate a create-react-app project and place on github version control. Make sure that the
`node_modules` folder is not included on version control. Make your github repo private and
invite EricStockTeacher as a collaborator.

2. Create and display a react component named “NavBar”. This component should display
“Assignment 3” in text, and also have a login button. When the login button is pressed it
changes its text to “logout”, which when pressed will flip the text back to “login”.

3. Create a react component named “Movie” this component will accept a movie name, year and
rating though its ‘props’ argument.

4. Create and display a react component “MovieList” this component will accept a json object
through its ‘props’ argument. The json is contained in the file movies.json. The “MovieList”
object will loop through each of the movies and display a “Movie” component.

> :exclamation: **Bonus** Add react-bootstrap styling to the components ( in order to attempt the bonus you must have successfully completed the basic requirements of the assignment)
