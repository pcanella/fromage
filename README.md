# fromage
Parses query strings into objects for easier query string handling. Always a pain doing this, so nice to have a small snippet do it for you!

# installation
`npm install fondue --save`

# usage

Pretty plug-and-play. Just have your URL handy and pass it in as an argument and you're done!

```javascript
var fromage = require('fromage');

var someRandomUrl = 'http://www.ebay.com/sch/i.html?_from=R40&_sacat=0&_nkw=cheese%20fondue&rt=nc&LH_ItemCondition=3&_trksid=p2045573.m1684';

var f = fromage.objectify(someRandomUrl);

console.log(f);

/*
  returns {
      "_from":"R40",
      "_sacat":"0",
      "_nkw":"cheese%20fondue",
      "rt":"nc",
      "LH_ItemCondition":"3",
      "_trksid":"p2045573.m1684"
    }
*/
```