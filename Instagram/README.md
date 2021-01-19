"# FinalCap" 

For this particular task I will be using the MERN stack as it makes it easier to deploy and develop. 
I will be using React.js for the frontend as it is easier develop the different pages of navigation. 
The project will be made avaiable on both Github and Heroku. To style , i will be using materialize and CSS.

I will also be making use of cloudinary as it is a efficient website to store images.

It is a simple application whereby users can upload a variety of images and other users can interact with the users uploading the images by either hearting it or commenting on the image itself. 
There is also an option to follow different users and they have the option to follow you back or not. This applications' target market is mostly for teens to young adults for leisure purposes. 
As this market would focus more on being influencers. This market would find this application beneficital to upload images quick and easy. 
This application also has a target market for small businesses to get exposure. Other softwares that are similar are tumblr and Facebook. 
What makes this one different is that its user interface is more easier to use and it's a more simpler interactive application.

User story 1 : As a registered user I want the application to remember my password so that no on else can log in but me. 
User story 2: As a new user I want to be able to sign up quickly via 3rd party authentication. 
User story 3: As a user I want all my data to be backed up by the cloud so that I can access the application on various devices.

The funcionalities will be : The website must be able to add, delete, edit and view images uploaded. 
The non-functionality - The website must be able to tell the user that the page is loading and they should wait.
The website must be able to have some sort of authentication with the sign in/up process. The website must be easy to use.


***
How to use 
***

Download the node modules. I have kept everything together, however, the server side is still the server side.
Therefore cd into the client folder and download node modules - npm install
open another terminal and npm install for the server side as well.
Type npm start for the server side 
FIRST 	ensure that the server side is 1- listening on a port ,preferably 5000. 2- connected to mongo.
Then type npm start for the client side. The server should automatically open up and take you to the Instagram Login/signup page.
Signup with your email,name and password.
Then login using just your email and password as before.
Upload an image while youre at it.

Home page is where you'll find a bunch of random images posted by random users.
Profile tab is all YOU and YOUR posts. Here you can see who youre following and who follows you.
Explore will show you all the users you have decided to follow. 
Once you upload an image , only YOU can remove it.

****
Security
****

I have used hashing and bcrypt.
Hashing is more for the frontend so that no one can see the users password while looking over their shoulder.
bcrypt is for the database, so all passwords are in a completely different format, so if anyone decides to hack the database
they can only get email addresses but not passwords.

***
Depolyment
***

I have decided to deploy my app using heroku. I deployed it together

A link to the deployed project is below


https://capstonelvel3.herokuapp.com/
