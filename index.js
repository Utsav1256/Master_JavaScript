let pr1 = new Promise((resolve, reject) => {
  return resolve("Sabse pehle ghar par aao");
});

let pr2 = pr1.then(function (data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    return resolve("gate kholo aur gate lagao");
  });
});

let pr3 = pr2.then(function (data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    return resolve("khana pakao");
  });
});

let pr4 = pr3.then(function (data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    resolve("khana khao");
  });
});

let pr5 = pr4.then(function (data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    resolve("sojao");
  });
});

pr5.then(function (data) {
  console.log(data);
});
