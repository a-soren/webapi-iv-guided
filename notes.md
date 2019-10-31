# Deployment Notes

Web Servers run web applications
-accept requests from clients
-send back responses to clients

Web servers are software running on someone's machine

[client]===[web server(multiple web applications/apis)]

Dev process
-write code
-commit and push
-profit (deployed automatically to heroku)

## Steps to prepare the API for deployment to Heroku

- Dynamic port
- setup a 'start' script that uses `node` (not `nodemon`) to run the server

The environment is the platform where the application is running. (place/operating system)


