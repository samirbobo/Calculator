function Num(val) {
  document.getElementById('result').value += val; 
}
function equl () {
  let cond = true;
  let output;
  let input =  document.getElementById('result').value; 
  if(cond) {
    for(let i = 0; i < input.length; i++) {
      if(input[i] === '+' && input[i + 1] === '+') {
        document.getElementById('result').value = 'Error';
        cond = false;
      }if(input[i] === '-' && input[i + 1] === '-') {
        document.getElementById('result').value = 'Error';
        cond = false;
      }if(input[i] === '/' && input[i + 1] === '/') {
        document.getElementById('result').value = 'Error';
        cond = false;
      }
    }
  }
  if(cond) {
    output = eval(input);
    document.getElementById('result').value = output;
  }
}
function Clear() {
  document.getElementById('result').value = '';
}
function Ec() {
  let input = document.getElementById("result").value;
  document.getElementById("result").value = input.slice(0, input.length - 1);
}