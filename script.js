var x = 0,
temp1 = 0,
temp2 = 0;
function go() {
x = parseInt(document.getElementById('input').value);
temp1 = x.toString('6');
temp2 = temp1.replace(/0/g, '(');
temp1 = temp2.replace(/1/g, ')');
temp2 = temp1.replace(/2/g, '[');
temp1 = temp2.replace(/3/g, ']');
temp2 = temp1.replace(/4/g, '{');
temp1 = temp2.replace(/5/g, '}');
document.getElementById('out').innerText = temp1;
}
document.querySelector('#body').addEventListener('keypress', function (e) {var key = e.which || e.keyCode;if (key === 13) {go();}});