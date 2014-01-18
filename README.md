GitHubby
========

GitHubby - Rails Issue Tracker



DO NOT VIEW index.html in root folder, please browse to build/index.html.
Everything is minified and concated in the build folder using the 'grunt build' task described below.
All source files are in the root folder for you viewing pleasure.

If you are interested check out the Gruntfile.  You should be able clone and run npm install easily if you are interested in trying it out.

Grunt tasks
========


I have 2 grunt tasks set up for this project:

1) 'grunt' (uses grunt-contrib-connect on port 19476, task will fail if you happen to use it already)
  -  This task is meant to be used during dev.
  -  It does a few things then runs the watch task see if I make changes to any important files.
  -  It will compile all handlebars templates.
  -  It will use the system notify to tell you if you make any jshint errors.
  -  Finally, it will run jasmine unit tests and let you browse to localhost:19476/SpecRunner.html to view the jasmine tests.

2)  'grunt build'
  -  This task copies over files you would want to go to prod.
  -  It contacts all require files into 1 file so the client doesnt have to download hundreds of files.
  -  It minifies everything.