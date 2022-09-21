let stars = (num, str) => {
  num = typeof num === "undefined" || !Boolean(num) ? 10 : num;
  str = typeof str === "undefined" ? "hi" : str;
  let stars = "";
  for (let i = 0; i < num; i++) {
    stars += "*";
  }
  console.log(`${stars}\n${str}\n${stars}`);
};

export default stars;
