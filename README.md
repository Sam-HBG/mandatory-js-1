# Mandatory Exercise 1 - JavaScript
**The deadline for this exercise is Friday January 3 08:59**

## Preparation

1. Create a new repository on [GitHub](github.com) called **mandatory-js-1**

2. Follow the instructions that GitHub gives you; create a local repository and add a remote or clone the recently created repository.

## Submission

When you do the submission of your exercise in Ping Pong, **before the deadline**,
you will enter the link to your repository, such as:

```
https://github.com/mygithubusername/mandatory-js-1
```

The teacher will look in the **master branch**. If any commits are done to the master branch after the deadline, the grade IG will follow.

You will either get **G** or **IG** on the mandatory exercises.

## Resources

[https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## Instructions

Look at the file `index.html` and compare it to `want.html`. Your job is to implement code in `index.js` to transform the DOM structure in `index.html` so it looks exactly like `want.html`

It's up to you how to want to complete the task. However, you are only allowed to write JavaScript. So any modifications to the DOM will need to be done in JS. *You are not allowed to use innerHTML in the exercise.*

### More details

I'll list all the details that are wrong here and that should be fixed.

* The previous developer thought the company is named Fruits & Bananas Corp, but it's actually called Fruits & Vegetables Corp
* Text content in `header h1` is wrong, should be Fruits & Vegetables Corp (see first issue)
* The last `a` tag in `header ul` has wrong text content and href attribute (should be Vegetables and not Bananas)
* The section #contact and #about are in the wrong order. Swap them.
* Each `section` should have a `h2` tag at the top with corresponding text according to its id
* The text "We're the best in fruits & vegetables" under #about should be wrapped in a `p` tag
* The developer used `td` elements in `thead` instead of `th`. Fix it.
* The developer forgot to include the `main.css` file. Add it to `head`.
* Head title is wrong [MDN info](https://developer.mozilla.org/en-US/docs/Web/API/Document/title). Should be "Fruits & Vegetables Corp"
