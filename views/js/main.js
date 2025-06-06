let output;

document.getElementById("btn").onclick = function(){
  output = document.getElementById("age").value;
  document.getElementById("true-age").textContent = `${output}!`;
}