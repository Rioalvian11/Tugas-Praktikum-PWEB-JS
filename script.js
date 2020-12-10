var row = 1;
var entry=document.getElementById('entry');
entry.addEventListener('click', displayDetails);


function displayDetails() {
  var Game=document.getElementById('game').value;
  var Jenis=document.getElementById('jenis').value;
  if (!Game || !Jenis) {
    alert("Masukkan Game yang ingin didata");
    return ;
  }
  var display =document.getElementById('display');
  var newRow= display.insertRow(row);
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  cell1.innerHTML= Game;
  cell2.innerHTML= Jenis;
  row++;

  if ( Game  && Jenis) {
  	alert("Data Game telah di entry")
  	return;
  }

}

function welcome(){
  alert("Selamat datang di House of Game")
}
