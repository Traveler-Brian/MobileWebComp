  // The example Image is stored here as a base64 string.
  rootUrl = "https://findthatcomp.netlify.app";
  
  function exampleImageData() {
    return "data:image/jpeg;base64,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";
  }

  function exampleImageData1() {
    return "data:image/jpeg;base64,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";
  }

  function share(name, remark, address) {
    if (navigator.share) {
      navigator.share({
        title: ("發現寶藏！" + name),
        text: (("發現寶藏！" + name + "！\n\n") + remark),
        url: rootUrl,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }

  function compare(name, remark, keyword) {
    a = FuzzySet([name, remark]);
    console.log(a.get(keyword));
    if(a.get(keyword) != null) {
      return true;
    }
    return false;
  }

  // A Function used for calculating the actual string size.
  function byteLength(str) {
    // returns the byte length of an utf8 string
    var s = str.length;
    for (var i=str.length-1; i>=0; i--) {
      var code = str.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) s++;
      else if (code > 0x7ff && code <= 0xffff) s+=2;
      if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
    }
    return s;
  }
  
  var _lsTotal = 0,
    _xLen, _x;
  for (_x in localStorage) {
      if (!localStorage.hasOwnProperty(_x)) {
          continue;
      }
      _xLen = ((localStorage[_x].length + _x.length) * 2);
      _lsTotal += _xLen;
      
  };

  var localStorageUsed = _lsTotal;

  if(localStorage.getItem("ID") == undefined || localStorage.getItem("ID").length != 20) {
    location.href = "index.html";
  }
  
  // Set an example
  var ex = {
    Name: "茶里湯時",
    AddressText: "高士德賈伯樂提督街世紀豪庭I鋪",
    AddressRec: {
      Latitude: 22.2002089,
      Longitude: 113.5403356,
    },
    Remark: "不論什麼季節，不論在哪個角落, 只要你擁有華人文化，就離不開一碗湯水。「茶裡湯時」主打有營飲食文化。喝湯不再是傳統，而是一種潮流。而是：男人的加油站，女人的美容院。",
    Image: [exampleImageData(), exampleImageData1()]
  }
  
  localStorage.setItem("Example", LZString.compress(JSON.stringify(ex))); /**Save the example to localStorage */
  if(localStorage.getItem("Longitude") !== undefined) {
    localStorage.removeItem("Latitude");
    localStorage.removeItem("Longitude");
  }
  
  if(window.outerHeight < window.outerWidth && !location.href.includes("127.0.0.1")) {
    alert("很抱歉，本網站暫時只提供移動端設備使用。\n如果您正在使用移動端訪問此網站，請勿使用橫向螢幕。\n按下「確認」重新載入。");
    location.href = location.href;
  }
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    localStorage.setItem("Latitude", position.coords.latitude);
    localStorage.setItem("Longitude", position.coords.longitude);
    if(localStorage.getItem("Latitude") !== undefined && localStorage.getItem("Longitu") !== undefined) {
      $("input[name=address]")[0].setAttribute("placeholder","已嘗試獲得經緯度，您也可以在此輸入更為準確的地址。");
      $("input[name=latitude]")[0].setAttribute("value",localStorage.getItem("Latitude"));
      $("input[name=longitude]")[0].setAttribute("value",localStorage.getItem("Longitude"));
    }
  }
  
  
  function removeImg(data) {
    $("div[data='"+data+"']")[0].remove();
  }
  
  function readFile() {
    if($(".selectedImages").length >= 2) {
      alert("您最多只能上載兩張照片。");
      return;
    }
    
    

    if (this.files && this.files[0]) {
      
      var FR= new FileReader();
      
      FR.addEventListener("load", function(e) {
        let image = new Image() 
        image.src = e.target.result
        image.onload = function() {
            let canvas = document.createElement('canvas'), 
            context = canvas.getContext('2d'),
            imageWidth = 400, // Resized Width
            imageHeight = (400/image.width)*image.height, // Resized Height
            data = ''

            canvas.width = imageWidth
            canvas.height = imageHeight

            context.drawImage(image, 0, 0, imageWidth, imageHeight)
            data = canvas.toDataURL('image/jpeg')
            $(".imageView").html($(".imageView")[0].innerHTML + "<div data-aos=\"flip-left\" data='" + data + "' width=150px height=150px class='selectedImages' style='background-image:url(\""+data+"\")'>" + "<a href='javascript:removeImg(\""+data+"\")'>移除</a></div>")
        }
      }); 
      
      FR.readAsDataURL( this.files[0] );
    }
    
  }
  
  function recSubmit() {
    $(".loading > img")[0].style.display = "block";
    setTimeout(() => {
      var Name = $("input[name=name]")[0].value;
      var Address = $("input[name=address]")[0].value;
      var Latitude = $("input[name=latitude]")[0].value;
      var Longitude = $("input[name=longitude]")[0].value;
      var Remark = $("input[name=remark]")[0].value;
      var Images = [];
      if(Name == "" || Remark == "") {
        $(".loading > img")[0].style.display = "none";
        alert("請完整填寫資訊！");
        return;
      }else{
        if((Latitude == "" || Latitude == undefined || Latitude == null) && Address == "") {
          $(".loading > img")[0].style.display = "none";
            alert("請完整填寫資訊！");
            return;
          }
      }
      if($(".selectedImages")[0] == undefined) {
        $(".loading > img")[0].style.display = "none";
        alert("您必須拍攝至少一張照片！");
        return;
      }
      
      var r = confirm("我們正在對圖片進行壓縮，可能需要一些時間，如果可以開始請按下確認按鈕。");
      if(r!=true){$(".loading > img")[0].style.display = "none";return;}
      var fileSize = 0;
      $(".selectedImages").each(function(index){
        Images.push($(".selectedImages")[index].getAttribute("data"));
      });
      
      /**Generate a dictionary for convertion to json */
      var Dict = {
        Name: Name,
        AddressText: Address,
        AddressRec: {
          Latitude: Latitude,
          Longitude: Longitude
        },
        Remark: Remark,
        Image: Images
      }
      
      fileSize = byteLength(LZString.compress(LZString.decompress(localStorage.getItem("myData")) + "," + JSON.stringify(Dict)));

      if(fileSize > 4*1024*1024) {
        $(".loading > img")[0].style.display = "none";
        alert("很抱歉，您的本地存儲空間不足，請嘗試清除或更換其他瀏覽器。");
        return;
      }
      
      if(localStorage.getItem("myData") == undefined) {
        localStorage.setItem("myData", LZString.compress(""));
      }
      if(localStorage.getItem("myData") != LZString.compress("")) {
        localStorage.setItem("myData", LZString.compress(LZString.decompress(localStorage.getItem("myData")) + "," + JSON.stringify(Dict)));
      }else{
        localStorage.setItem("myData", LZString.compress(LZString.decompress(localStorage.getItem("myData")) + JSON.stringify(Dict)));
      }

      $("input[name=name]")[0].value = "";
      $("input[name=address]")[0].value = "";
      $("input[name=latitude]")[0].value = "";
      $("input[name=longitude]")[0].value = "";
      $("input[name=remark]")[0].value = "";
      $(".selectedImages").remove();
      $(".lity-close")[0].click();
      $(".loading > img")[0].style.display = "none";
      var ex = LZString.decompress(localStorage.getItem("Example"));
      ex = JSON.parse(ex);
      var dom = "";
      dom += "<h2>所有「發現」</h2>";
      dom += "<input id='search' type='text' placeholder=' 搜尋'></input>";
      // dom += "<li><a href='javascript:showDetails(\"" + "Example" + "\", \"Example\")'>" + ex.Name + "</a></li>";
          dom += "<ul>";
          dom += "<a href='javascript:showDetails(\"" + "Example" + "\", \"Example\")'>" + "<li>";
          dom += "<img src=\"" + ex.Image[0] + "\"/>";
          dom += "<h3>" + ex.Name + "</h3>";
          dom += "<p>" + ex.Remark + "</p>";
          dom += "</li> </a>";
      if(localStorage.getItem("myData") != undefined) {
        var localData = JSON.parse("["+LZString.decompress(localStorage.getItem("myData"))+"]");
        localData.forEach(function(item){
          // dom += "<li><a href='javascript:showDetails(\"" + item.Image[0] + "\", \"" + item.Name + "\")'>" + item.Name + "</a></li>";
          dom += "<a href='javascript:showDetails(\"" + item.Image[0] + "\", \"" + item.Name + "\")'><li>";
          dom += "<img src=\"" + item.Image[0] + "\"/>";
          dom += "<h3>" + item.Name + "</h3>";
          dom += "<p>" + item.Remark + "</p>";
          dom += "</li></a>";
        });
        dom += "</ul>"
      }else{
        dom += "</ul>"
      }
      $("#details")[0].innerHTML = dom;
        alert("數據儲存成功！");
      }, 100);
    
  }
  
  
  document.getElementById("camera").addEventListener("change", readFile);
  
  
  
  
  $(".submit-record")[0].addEventListener("click", getLocation());
  $(".submit-record")[0].addEventListener("click", function(){$("#openSubmitPage").click();});
  $(".view-all-records")[0].addEventListener("click", function(){
    $("#openViewAllPage").click();
  });

  function showDetails(rec, ver) {
    $(".loading > img")[0].style.display = "block";
    setTimeout(() => {
      
    var ex = LZString.decompress(localStorage.getItem("Example"));
    ex = JSON.parse(ex);
    if(rec == "Example") {
      $("#popupViewDetails")[0].innerHTML = "<h1>" + ex.Name + "</h1>" +
      "<h4>" + ex.AddressText + "</h4><div class='imgShow'>" +
      "<a href=\"javascript:lity('" + ex.Image[0] + "')\"><img src='" + ex.Image[0] + "' /></a>" +
      (ex.Image[1]!=undefined?"<a href=\"javascript:lity('" + ex.Image[1] + "')\"><img src='" + ex.Image[1] + "' /></a>":"") + 
      "</div><p>" + ex.Remark + "</p>";
      console.log(ex.Latitude);
      if(ex.AddressRec.Latitude > 1 && ex.AddressRec.Longitude > 1) {
        $("#popupViewDetails")[0].innerHTML += 
        '<div class="iframecontainer"><iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+ex.AddressRec.Latitude +','+ex.AddressRec.Longitude+'&hl=zh-TW&z=14&amp;output=embed"></iframe></div>' + 
        "<a href=\"javascript:share('" + ex.Name + "', '" + ex.Remark + "', '" + ex.AddressText + "')\" class='sharebtn'>分享</a>";
      }
      $("#openViewDetailsPage").click();
    }else{
      var localData = JSON.parse("["+LZString.decompress(localStorage.getItem("myData"))+"]");
      localData.forEach(function(item){
        if(rec == item.Image[0]&& item.Name == ver) {
          $("#popupViewDetails")[0].innerHTML = "<h1>" + item.Name + "</h1>" +
          "<h4>" + item.AddressText + "</h4><div class='imgShow'>" +
          "<a href=\"javascript:lity('" + item.Image[0] + "')\"><img src='" + item.Image[0] + "' /></img>" +
          (item.Image[1]!=undefined?"<a href=\"javascript:lity('" + item.Image[1] + "')\"><img src='" + item.Image[1] + "' /></img>":"") + 
          "</div><p>" + item.Remark + "</p>";
          // if(item.Image[1] != undefined) {
          //   $("#popupViewDetails")[0].innerHTML += "<img src='" + item.Image[1] + "' />";
          // }
          if(item.AddressRec.Latitude > 1 && item.AddressRec.Longitude > 1) {
            $("#popupViewDetails")[0].innerHTML += 
            '<div class="iframecontainer"><iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+item.AddressRec.Latitude +','+item.AddressRec.Longitude+'&hl=zh-TW&z=14&amp;output=embed"></iframe></div>' +
            "<a href=\"javascript:share('" + item.Name + "', '" + item.Remark + "', '" + item.AddressText + "')\" class='sharebtn'>分享</a>";
          }
          $("#openViewDetailsPage").click();
        }
      });
    }
    $(".loading > img")[0].style.display = "none";
    }, 100);
  }

  var ex = LZString.decompress(localStorage.getItem("Example"));
  ex = JSON.parse(ex);
  var dom = "";
  dom += "<h2>所有「發現」</h2>";
  dom += "<input id='search' type='text' placeholder=' 搜尋'></input>";
  // dom += "<li><a href='javascript:showDetails(\"" + "Example" + "\", \"Example\")'>" + ex.Name + "</a></li>";
      dom += "<ul>";
      dom += "<a href='javascript:showDetails(\"" + "Example" + "\", \"Example\")'>" + "<li>";
      dom += "<img src=\"" + ex.Image[0] + "\"/>";
      dom += "<h3>" + ex.Name + "</h3>";
      dom += "<p>" + ex.Remark + "</p>";
      dom += "</li> </a>";
  if(localStorage.getItem("myData") != undefined) {
    var localData = JSON.parse("["+LZString.decompress(localStorage.getItem("myData"))+"]");
    localData.forEach(function(item){
      // dom += "<li><a href='javascript:showDetails(\"" + item.Image[0] + "\", \"" + item.Name + "\")'>" + item.Name + "</a></li>";
      dom += "<a href='javascript:showDetails(\"" + item.Image[0] + "\", \"" + item.Name + "\")'><li>";
      dom += "<img src=\"" + item.Image[0] + "\"/>";
      dom += "<h3>" + item.Name + "</h3>";
      dom += "<p>" + item.Remark + "</p>";
      dom += "</li></a>";
    });
    dom += "</ul>"
  }else{
    dom += "</ul>"
  }
  $("#details")[0].innerHTML = dom;
  
  /**Temp */    
  // $("#openViewAllPage").click();

  function showdata() {
    console.log(JSON.parse("[" + LZString.decompress(localStorage.getItem("myData")) + "]"));
  }

  setInterval(function(){
    if($("div > div > div > #popupSubmit")[0] != undefined) {
      $(".lity-opened")[0].style = "background: rgba(220,232,239,1)";
    }else if($("div > div > div > #popupViewAll")[0] != undefined){
      $(".lity-opened")[0].style = "background-image: url('img/bg.jpg')";
      if($(".lity-opened")[1] != undefined) {
        $(".lity-opened")[1].style = "background-image: url('img/bg.jpg')";
      }
    }
  },1);

  $("#search")[0].addEventListener("input", function(){
    var search = $("#search")[0].value;
    if(search != "") {
      $("ul > li").remove;
      var list = "";
      var ex = LZString.decompress(localStorage.getItem("Example"));
      ex = JSON.parse(ex);
      if(compare(ex.Name, ex.Remark, search)){
        list += "<a href='javascript:showDetails(\"" + "Example" + "\", \"Example\")'>" + "<li>";
        list += "<img src=\"" + ex.Image[0] + "\"/>";
        list += "<h3>" + ex.Name + "</h3>";
        list += "<p>" + ex.Remark + "</p>";
        list += "</li> </a>";
      }
      if(localStorage.getItem("myData") != undefined) {
        var localData = JSON.parse("["+LZString.decompress(localStorage.getItem("myData"))+"]");
        localData.forEach(function(item){
          // dom += "<li><a href='javascript:showDetails(\"" + item.Image[0] + "\", \"" + item.Name + "\")'>" + item.Name + "</a></li>";
          if(compare(item.Name, item.Remark, search)) {
            list += "<a href='javascript:showDetails(\"" + item.Image[0] + "\", \"" + item.Name + "\")'><li>";
            list += "<img src=\"" + item.Image[0] + "\"/>";
            list += "<h3>" + item.Name + "</h3>";
            list += "<p>" + item.Remark + "</p>";
            list += "</li></a>";
            }
        });
      }
      $("ul")[0].innerHTML = list;
    }else{
      $("ul > li").remove;
      var list = "";
      var ex = LZString.decompress(localStorage.getItem("Example"));
      ex = JSON.parse(ex);
      list += "<a href='javascript:showDetails(\"" + "Example" + "\", \"Example\")'>" + "<li>";
      list += "<img src=\"" + ex.Image[0] + "\"/>";
      list += "<h3>" + ex.Name + "</h3>";
      list += "<p>" + ex.Remark + "</p>";
      list += "</li> </a>";
      if(localStorage.getItem("myData") != undefined) {
        var localData = JSON.parse("["+LZString.decompress(localStorage.getItem("myData"))+"]");
        localData.forEach(function(item){
          // dom += "<li><a href='javascript:showDetails(\"" + item.Image[0] + "\", \"" + item.Name + "\")'>" + item.Name + "</a></li>";
          list += "<a href='javascript:showDetails(\"" + item.Image[0] + "\", \"" + item.Name + "\")'><li>";
          list += "<img src=\"" + item.Image[0] + "\"/>";
          list += "<h3>" + item.Name + "</h3>";
          list += "<p>" + item.Remark + "</p>";
          list += "</li></a>";
        });
      }
      $("ul")[0].innerHTML = list;
    }
  });