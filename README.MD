hello Joanna,

This task can actually be done completely on the frontend without the complexity of Ruby. In fact if you have some frontend client accessing an API, chances are you may want to use client-heavy javascript in an environment where Ruby may not be available.

Here is my proposed solution: https://github.com/piousbox/leapfrog-exercise

My solution has three parts: a mock-up of the APi in node.js (subfolder node-exampler). It always returns the same values. To use it, perform the following tasks on Ubuntu:
```
 sudo apt-get install npm
 cd node-exampler && node install && node http_server.js`
```

The above installs node.js, the express.js framework, and runs the server on port 3000.

Next, you can access the index.html file - which contains a simple Backbone.js view - and it should communicate with the node.js server to take some input and produce some output. I take into account that this is a cross-domain ajax call, so I use JSONP to get the data.

The third part of my solution is the jasmine test. I test only the validations. To run the tests, point your browser at the SpecRunner.html file.

I actually am much more skilled in ruby than in javascript, and I used node/backbone/jasmine here due to the desire to learn new things. Also, as I mentioned, the complexity of Ruby is not needed for such GET HTTP requests. For a sample of my ruby code please see https://github.com/piousbox/pi-resume-sample

I have availability for a phone interview Friday 4pm Central.

Regards,
--
Victor