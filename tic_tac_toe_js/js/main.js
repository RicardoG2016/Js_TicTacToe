$(document).ready(function(){
  console.log("hey");
});

var button = [];
for (var i =1; i < 10; i++) button[i] = document.getElementById('canvas'+i);
button[i]

var ctx = [];
for (var i =1; i < 10; i++) ctx[i] = button[i].getContext('2d');

var bDisabled = [];
for (var i =1; i < 10; i++) bDisabled[i] = false;

var isResult = false;
var content = [];
