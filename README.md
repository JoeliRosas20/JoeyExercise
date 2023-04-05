# JoeyExercise
This will be helpful for me

# How the website adds the workout
To add an exercise: 
1) I added a addEventListener to the form, which is the modal form. To prevent the form from being submitted with blank, the preventDefault() is included. 
2) Then, the formValidation method is called which is to make sure the form has what is needed before it is sent out. Those prerequisites are that the numbers are positive, that the user inserts numbers only and that nothing is blank.
3) Once all the prerequisites are fulfilled, it will call the acceptData method which adds the data into an array as a object. 
4) The data will be inserted into the Local Storage.
5) The createForm method is called which will create the cards

# How can we see the workout
The createTasks method helps us to see the workout. In an innerHTML, the the cards are created. The array which stores each workout object is called to be put on each card. 

# How the website edits the workout
1) The edit icon calls the editTask method.
2) It selects the element.
3) The selected element calls the array and changes the value in each of the part it has.
4) The deleteTask method is called so it can delete the original card and add the new card which is the edited version. 

# How the website deletes the workout
1) The delete icon calls the deleteTask method.
2) It selects the element and removes it.
3) It removes the element from the array.
4) The local storage is updated to have that element removed.