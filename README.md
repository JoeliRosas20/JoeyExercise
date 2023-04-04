# JoeyExercise
This will be helpful for me

# How the website adds the workout
To add an exercise: 
1) I added a addEventListener to the form, which is the modal form. To prevent the form from being submitted with blank, the preventDefault() is included. 
2) Then, the formValidation method is called which is to make sure the form has what is needed before it is sent out. Those prerequisites are that the numbers are positive, that the user inserts numbers only and that nothing is blank.
3) Once all the prerequisites are fulfilled, it will call the acceptData method which adds the data into an array as a object. 
4) The data will be inserted into the Local Storage.
5) The createForm method is called which will create the cards
