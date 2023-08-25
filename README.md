# Master_JavaScript

---

## Async JS

### Synchronous

- `ek ke baad ek`
- `ek kaam jab tak complete nahi hoga, tab tak dusra suru nahi hoga`
- Sync ka matlab ek ke baad dusra hoga
- Jab tak ek command and instruction complete na ho, tab tak dusra shuru nahi hoga

### Asynchronous

- `ek saath kaam ko shuru karo`
- `jis-jis ka response aata jayega, us-us ka response dete jana`
- Async ka matlab shaare kaam ek saath shuru kar do
- Jinka answer pehle aajaye unka jawab de dena

---

### Q-> Kaise pata chalta hai ki hum sync code likh rahe hai ya async??

</br>
Dekho->
</br>

```js
setTimeout;
setInterval;
promises;
fetch;
axios;
XMLHttpRequest;
```

- Jaha bhi ye saare use honge wo `async`
- And baki sab `sync`

---

### Q-> Async js hai kya??

</br>
Dekho->
</br>

- Kai baar aapka code dependent hota hai kisi aur ke server par,
- iss case me hume nahi pata hota ki answer uske server se kab laut kar aayega,
- to hum kya nahi kar sakte??
- hum sync code nahi likh sakte iss case me
- iss se nipatne ke liye humlog async code likhte hai
- taki blocking naa ho and jab bhi answer aaye humara answer ke respect me chalne wala code chal jaye.

```js
syncCode ----------✅
syncCode ----------✅
syncCode ----------🤔 //-> Abhi answer bhi nahi aaya hai iss code ka
syncCode ----------✅// phir bhi ye next line code gaya
```

---

```js
syncCode ----------✅
syncCode ----------✅
asyncCode ----------🤔 //-> Abhi answer nahi aaya hai iss code ka
syncCode ----------// jab upar wala req. ka response aayega, tab hi next line chalega
```

---

### Motive of Async code

- Async code ka motive hota hai ki,
- unn cases me jinme hume pata nahi haiki code ka answer kitne der me aayega,
- to jab bhi answer aajaye uss answer ke respect me kooi particular code chala dena.

### Example

facebook se photo laao, aur jab phuta aajaye show kar dena

---

//setTimeout(callback, time in milliseconds)

```js
----sycnCode------
setTimeout(function() {}, 2000)
----sycnCode------
```

- line_1 chali
- line_2 ye `async` code hai kyuki `setTimeout` hai, to ise side me move kar diya jayega, ki tum iss separate space me chalo aaram se
- line_3 ye line `turant chal jayegi` (2sec baad nahi)
- agar 2sec baad chalana hai line_3 ke code ko, to use `callback`(function) ke andar likh do
- `callback` hamesha ek function hota hai,
- ye sirf tub chalta hai jab `asynCode` ka complition ho jata hai
- function() {} -> to ye function 2sec baad hi chalega.

```js
console.log("hey 1");
console.log("hey 2");
setTimeout(function () {
  console.log("hey 3");
}, 0);
console.log("hey 4");
```

o/p: </br>
hey 1</br>
hey 2</br>
hey 4</br>
hey 3</br>

---

### Q-> Ab iss setTimeout ke andar wale function ko callBack kyu kehte hai??

```js
setTimeout(function () {
  console.log("Hey 2");
}, 2000);
```

- kyuki ise 2 sec ke baad call-back kiya jayega run hone ke liye.
- callback function hamesha async code me answer aane par chalta hai.

---

### JS is not Asynchronous

- async ka matlab hota hai ek se jyada kaam ek saath hona
- But JS do kaam ek saath nahi karta
- Async ek dhoka hai
- JS ek se jyada kaam ek saath kar hi nahi sakti,
- JS `multi-thread` hai hi nahi, `single-thread` hai.
- single-thread matlab single computation

---

### main-stack & side-stack | Event-loop

- Jo bhi main stack par hai wo output deta hai
- and jo bhi side stack par hota hai, wo behind the scene processing kar sakta hai,
- aur jab usi processing complete ho jaye, use main-stack par lakar chalaya jaa sakta hai.

- `main-stack` matlab => `execution`
- agar koi code main-stack me hai to iska matlb wo execute ho raha hai.

- `asyncCode` always moved to `side-stack` for processing, and after thte complition of processing, it is called back in main-stack.

<img src="" />

- Jab main-stack khali hoga,
- tab hi, side-stack ko check kiya jayega, kya uska answer aa chuka hai,
- aur agar uska answer aa chuka hai
- tab hi, uss asyncCode ko side stack me se main stack me laya jayega.

- ye check karna aur side-stack se code ko main-stack me lane ka kaam `Event-loop` karta hai.

---

### request & response

- Ab dekho ->

```js
fetch;
axios;
promises;
XMLHttpRequest;
setTimeout;
setInterval;
```

- ye sare☝ async hai
- ye request ko bhejte hai
- jab request complete ho jaye to uska answer yaha 👇 milta hai :

```js
then catch
callbacks
async await
```

---

- Ab dekho ->

```js
var ans = fetch("https://www.facebook.com");
console.log(ans);
```

- hum aisa☝ nahi kar sakte.
- kyu??
- kyuki, req ka response milne me time lagega.
  o/p:
  Promise { <pending> }

```js
fetch;
axios;
promise;
XMLHttpRequest;
setTimeout;
setInterval;
```

- ye sabhi☝ side stack me chale jayenge.
- inka answer chalane ke liye 👇:

```js
callbacks
then catch
async await
```

---

### Promises

- Let say:
- Agar humne ek promise kiya, ki kal hum kuchh bhi karenge, to iske do hi scenes ban sakte hai:
- 1. ya to promise pura karenge,
- 2. ya phir promise pura nahi karenge.

<img src="">

- So this☝ is in `pending` state for now,
- wo to kal hi pata chalega ki pura hoga ya nahi
- hum ise save kar sakte hai ek variable me.

- Ab kal agar humne apna promise pura kiya, to wo `pending` state me se hatke `resolve` state me aajayega.

- Aur agar humne promise pura nahi kiya, to wo `pending` state me se hatkar `reject` state me aajayega.

- Agar `resolve` ho gaya, to uss variable ko bol sakte ho `then`.
- aur agar `reject` ho gaya, to uss variable ko bol sakte ho `catch`.

---

- Promise hamesha function mangta hai.

```js
var ans = new Promise((resolve, reject) => {
  if (true) {
    return resolve();
  } else {
    return reject();
  }
});
ans
  .then(function () {
    console.log("resolve hogaya tha");
  })
  .catch(function () {
    console.log("reject hua tha");
  });
```

o/p: </br>
resolve hogaya tha

```js
var ans = new Promise((resolve, reject) => {
  if (false) {
    return resolve();
  } else {
    return reject();
  }
});
ans
  .then(function () {
    console.log("resolve hogaya tha");
  })
  .catch(function () {
    console.log("reject hua tha");
  });
```

o/p: </br>
reject hua tha
