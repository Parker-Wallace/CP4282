# CP4282 Assignment #2

**Due:** Thurs June 6th (20 marks total)

For this assignment, you will create a simple mobile application that will display a top 3 list. You get to decide the theme of your app in terms of what the top 3 list is for. Some examples could be:
- Top 3 video games
- Top 3 food recipes
- Top 3 movies
- Top 3 sports

The mobile app must include 3 buttons to switch between the different items in your top 3 list. It is up to you how you layout your buttons and description of the item. Here is a sample mockup:

## Requirements:

1. **(5 marks)** Generate a blank template project using `create-expo-app` and place it on GitHub version control. Please see the tutorial [here](https://docs.expo.dev/tutorial/create-your-first-app/) for the command to create the template project.  
   Please note that you will also need to follow the steps “Install Dependencies”. Then, to be able to run your project on the Android Emulator, you will need to follow the steps from the “Set up your environment” guide.

2. **(5 marks)** Create a React Native component that will display the current item (either #1, #2, or #3 in the top 3 list). This component should receive a `props` argument and use the `props` to display the information for the item. The information should include 1 image. Make sure to use React Native components inside this component.

3. **(3 marks)** Create a button component that will be placed on the screen 3 times to switch between the different items. I suggest using the `<Pressable>` React Native component for this. Please see the button created [here](https://docs.expo.dev/tutorial/build-a-screen/) for an example.

4. **(3 marks)** Add the logic to handle switching between the different items when a button is pressed. You will want to use the `useState` hook to keep track of which item is currently selected.

5. **(4 marks)** Modify the button which is selected to render with a different style to indicate which item is selected.
