# Task 5
## About The Task
* Using any CI  and App of your choice, automate a deployment from your github repo to Heroku

## Built With
* CircleCi
* Node.js

## Prerequisites
* Create a Github account
* Create an Heroku account


## How It Works

#### 1. I got my Node.js code
* I pulled a project from my git hub, this is the project i would like to deploy to Heroku

#### 2. Preparing My App For Deployment
* I did this by creating a new folder called ".cicleci" and inside this folder i created a new file called config.yml, 
  this file consist of code which describes the jobs cicrcle ci is to carry out on the code, 
  in my case this was for circle ci to deploy my code automatically to heroku. circleci has a documentation for codes decribing jobs for circleci to carry out, for various        programming languages.
 
#### 3. Creation of Heroku Account
* I created my Heroku account and created a new app,got my API key, from my project settings

#### 4. Creation of CircleCi Account
* I created my CircleCi account using my github, once i did this i was directed to the dash board where i could see all my github projects.
 
* I ran my project Node.js project, which was directed to a windoe, then i added my enviroment variables, which are my app name and api key. This is  basically lika na handshake between heroku and circle ci.

#### 5. Making changes
* any change made to my code from here on does not need to be pushed manually as cicleci does that automatically.


## Issues that might be encountered
* adding enviroment variables, i solved this by regenerating a new api key

....................................................................

a full documentation of how i carried out this task can be found on meduim https://serikiayodele.medium.com/ci-cd-of-code-to-heroku-using-circle-ci-88f04680ca5f



