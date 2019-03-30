console.log("CONSOLE WORKS FINE!")

// FETCH DATA TO THE DOM USING API

$(document).ready(function(){
    $("#search1").keypress(function(){
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
      xhttp.send();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var posts = response;
            var output = '';
            var inputVal = $(this).val();
            console.log("onChange val",inputVal);
            for(var i = 0;i <100;i++){ 
                              // if(posts[i].title.includes(this.value)){ 
                               console.log(posts[i]);
                                output += '<li  class="list-group-item d-flex justify-content-between align-items-center">'+posts[i].title+'</li>';
                              // } else{
                              //   output += '';
                              // }
                          }
                          console.log(output);
                          document.getElementById('posts').innerHTML = output;
          } 
      };

  });
});


$(document).ready(function(){
  $("#get").hide();
  $("#post").hide();
  $("#newsFeed").click(function(){
    $("#get").hide();
    $("#main").hide();
    $("#post").show();
  });
  $("#search").click(function(){
    $("#post").hide();
    $("#main").hide();
    $("#get").show();
  });
  $("#home").click(function(){
    $("#get").hide();
    $("#post").hide();
    $("#main").show();
  });
});