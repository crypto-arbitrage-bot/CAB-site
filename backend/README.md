# How to use

We are using Heroku to serve this API, it only has 1 real endpoint

### `/version`
this will give you a JSON object like so
`{"version": 1.2}`

thats it

to change this, you need the Heroku CLI and git.

cd to the root of the repository and commit/push all changes
then run `git subtree push --prefix backend heroku main` 
to push your changes to Heroku, and the changes should be visible on 
https://cab-version.herokuapp.com/ after a bit