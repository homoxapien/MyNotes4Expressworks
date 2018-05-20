# MyNotes4Expressworks
This is a repository where I put my code for each challenge in expressworks from freecodecamp.com. If you are looking for solution, you could refer to those scripts with names which begin with '1-' (i.e. Chp1)

## 1. Installing expressworks command
$ git clone https://github.com/FreeCodeCamp/fcc-expressworks.git && chmod 744 fcc-expressworks/setup.sh && fcc-expressworks/setup.sh && source ~/.profile

Unfortunately, this is not enough(A bug that hasn't been solved...).

$ nvm install v4.1

$ chmod 744 fcc-expressworks/setup.sh && fcc-expressworks/setup.sh && source ~/.profile

## 2. Solving challenges given in the workshop

Basically, just using process.argv list in the .js script. 

Then,

$ expressworks run XXX.js

$ expressworks verify XXX.js

## 3. Turning solutions into self project

Replacing process.argv list with specific path or file on the server. 

Then,

$ node XXX.js

When finish, press crtl+C to end the session.

## 4. Contents

Chp0: Introduction to Express.js (http://evanhahn.com/understanding-express/)

Chp1: The Expressworks

Chp2: My corresponding DIY works

