var notReg = true;
// localStorage.clear();

function random(begin, end) {
  var max = end;
  var min = begin;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function chr(number) {
  return String.fromCharCode(number);
}

function genID() {
  var str = "";
  for(var i=0;i<20;i++) {
    if(random(1,2) == 1) {
      str += chr(random(65,65+25));
    }else{
      str += chr(random(48,48+9));
    }
  }
  return str;
}

if(localStorage.getItem("ID") != undefined && localStorage.getItem("ID").length == 20) {
  notReg = false;
  $(".found").html("進入頁面");
  $(".found")[0].setAttribute("href","inner.html");
}else{
  if(notReg) {
      $(".found")[0].addEventListener("click", function(){
        var newID = genID();
        localStorage.setItem("ID", newID);
        alert("您已成功加入計畫！\n您的ID是:"+newID+"\n請按「進入頁面」。");
        // $(".found").html("進入頁面");
        // $(".found")[0].setAttribute("href","inner.html");
        notReg = false;
        location.href = location.href;
    });
  }
}