# Jsmd
A Markdown parser written in JavaScript ES6.  
Uses regular expressions internally.

### Adding

    <script src="jsmd.min.js"></script>
That is, if you want to serve `jsmd` from your own site, if not, try [RawGit](https://rawgit.com/) (I am not affiliated with RawGit in any way).

### Usage

```javascript
jsmd("_Italics_, [google it](http://www.google.com).") // <p><i>Italics</i>, <a href='http://www.google.com'>google it</a>.</p>
```

### Why?
Because all the other parsers are fucking huge, complicated or require `require`.  
Here, for the price of speed, you use one single function `jsmd`.
