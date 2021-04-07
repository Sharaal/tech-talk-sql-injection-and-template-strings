[Previous](./5-2-how-we-want-it-looks-like.md)


# MVP of a SQL Template String library

## The tag function

Now we need to define the behavior how the text fragments and variables get processed. In theory the text fragments just needs to be concatenated with the increment numbered placeholders:

```javascript
function sql(textFragments, ...values) {
  let text = ''
  for (let i = 0; i < textFragments.length; ++i) {
    if (text !== '') {
      text += `$${i}`
    }
    text += textFragments[i]
  }
  return { text, values }
}
```

And... that's it. This function is the MVP of a SQL Template String library.


[Next](./5-4-but-there-was-more-or.md)
