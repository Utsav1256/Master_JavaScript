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
Q-> Kaise pata chalta hai ki hum sync code likh rahe hai ya async??
Dekhp->
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
Q-> Async js hai kya??
Dekho-> 
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

Example - facebook se photo laao, aur jab phuta aajaye show kar dena
--

