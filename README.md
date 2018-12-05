# EJS layouts using includes

[EJS](https://github.com/mde/ejs) doesn't have a layouts feature but it's actually possible to implement layouts using the includes feature as described in the [docs](https://github.com/mde/ejs#layouts). This is a slightly more detailed example, using express and a variable to set the path to the template, that shows how to implement a common layout across pages.

```
npm install
npm start
```

Then load the following urls which are both using views/layout.ejs:

http://localhost:3000/page1

http://localhost:3000/page2

[Note that you can set another port using PORT env variable]
