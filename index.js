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
