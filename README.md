# Task-Manager-API
Built in Node js, MongoDB which can be tested from postman and performs following functionalities:
1.Create user with details name, email address, password
2.Stores tasks for the logged in user with its description and status
3.Provide filtering ,pagination, sorting of tasks for the logged in user
4.Allows user to upload profile picture for customize sizes using multer and sharp packages.
5.provide sending Email feature using sendGrid module.

How to run this API :
1. Prod version of API is running at https://minal-task-manager.herokuapp.com/ <br />
2. use following postman URLs to test the API :
Create User POST :  https://minal-task-manager.herokuapp.com/users <br />
Login User POST : https://minal-task-manager.herokuapp.com/users/login <br />
Read Profile GET : https://minal-task-manager.herokuapp.com/users/me <br />
Logout User POST : https://minal-task-manager.herokuapp.com/users/logout <br />
Upload Profile Pic POST :https://minal-task-manager.herokuapp.com/users/me/avatar <br />
Delete Profile Pic DELETE :https://minal-task-manager.herokuapp.com/users/me/avatar <br />
Create Task POST : https://minal-task-manager.herokuapp.com/tasks <br />

3.Please look at the user schema and task schema to provide JSON body details while triggering post requests.

4. to run the API in dev env please check the git repository and import in visual studio
5. set up dev.env for following variables :
SENDGRID_API_KEY this can be generated on free trial with sendGrid.com for sending emails
MONGODB_URL this can be set up for localhost MongoDb database connection
JWT_SECRET can be provided as a combination of random characters for eg : "thisisasecretformyapp" for JSON JWT authentication





