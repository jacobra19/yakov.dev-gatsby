---
title: How to use recursive component in React
date: '2015-05-01T22:12:03.284Z'
description: 'Understand how recursion works with React example'
---

How to use recursive component with react
Recursion is a computer science method where a function calls itself from the inside until it reached an exit condition. The main concern with such practice is getting stuck in an infinite loop when the exit condition isn't fulfilled correctly.
Usually, recursion is shown with the Fibonacci sequence, binary search tree, or some other theoretical example, and they are somewhat hard to grasp and implement. As a front-end developer, I tried to think where such practice will meet me—for example, a comment section where a user can comment on another comment, recursively, of course.

First of all, let's write our comment component without recursion: just a content display. Also, we need to figure out how the data schema of such an item will look.

```javascript
const comment = {
    id: 1,
    content: 'i like this article!',
};
```

```jsx
const Comment = ({ id, content }) => {
    return (
        <div>
            <p>{content}</p>
        </div>
    );
};
```
pretty straight forward, right?

now, let's think of a use case in which you can comment on this comment.
How whould we model this data?

Lets try this:
```javascript
const comment = {
    id: 1,
    content: 'i like this article!'
    subComment:
        {
            id: 2,
            content: `me too, it's great!`
            subComment: {}
        }
}
```

Let's try to render a comment within a comment. It sounds pretty basic, right? We have to call the comment component inside itself's return statement.

```jsx
const Comment = ({ id, content, subComment }) => {
    return (
        <div>
            <p>{content}</p>
            <Comment {...subComment}/>
        </div>
    );
};
```

Can you guess whas will happen once we render the new Commnent component? 

As you can see, we have encountered an error, the notorious "stack overflow" error, to be more precise. What happened is that <comment/> component rendered itself, which rendered itself, which rendered itself, which...well, you get the picture. What we are missing here is the exit condition for this recursive function/component. When do we want this component to stop rendering itself? If the comment object doesn't have a comment object of itself would be a precise case.

CODE: insert exit condition here
https://www.gatsbyjs.com/docs/how-to/routing/mdx/
