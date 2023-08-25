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
setTimeout
setInterval
promises
fetch
axios
XMLHttpRequest
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

```js
console.log("hey 1");
console.log("hey 2");
setTimeout(function() {
    console.log("hey 3");
}, 0)
console.log("hey 4");
```
---
o/p: </br>
hey 1
hey 2
hey 4
hey 3

### Q-> Ab iss setTimeout ke andar wale function ko callBack kyu kehte hai??
```js
setTimeout(function() {
    console.log('Hey 2');
}, 2000)
```
- kyuki ise 2 sec ke baad call-back kiya jayega run hone ke liye.
- callback function hamesha async code me answer aane par chalta hai.
---
## JS is not Asynchronous
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