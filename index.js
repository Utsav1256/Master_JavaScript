let ans = new Promise((resolve, reject) => {
  let n = Math.floor(Math.random() * 10);
  if (n < 5) {
    return resolve();
  } else {
    return reject();
  }
});

ans
  .then(function () {
    console.log("below");
  })
  .catch(function () {
    console.log("above");
  });
