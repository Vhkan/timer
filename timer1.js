const alarm = function (numbers) {
  for (let num of numbers) {
    if (num !== NaN && num > 0) {
      setTimeout(() => {
        process.stdout.write('beep ');
      }, num * 300)
    }
  }
}
console.log(alarm([3, 5, 7, 10]));


