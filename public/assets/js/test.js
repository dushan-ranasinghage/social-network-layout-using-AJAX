console.log("CONSOLE WORKS FINE!")

// $(document).ready(function(){
//     $("button").click(function(){
//         $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
//             // alert("Data: " + data + "\nStatus: " + status);
//             console.log("STATUS",status);
//             console.log("DATA",data);
//             var array = data
//             for(i=0 ;i<5;i++){
//                 $("#content").load(array[i].title);
//             }
//         });
//     });
// });



// FETCH DATA TO THE DOM USING API
$(document).ready(function(){
    $("#search-topics").click(function(){
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
      xhttp.send();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var posts = response;
            console.log(posts);
            var output = '';
            for(var i = 0;i < 5;i++){ 
              // u can use any value for 5 or photos.length
              output += '<li  class="list-group-item d-flex justify-content-between align-items-center">'+posts[i].title+'</li>';
              // output += '<li><h5>'+photos[i].title+'</h5></li><br />'+'<img src='
              // +photos[i].url+
              // ' alt="Smiley face" height="200" width="200">'+'<button type="button" class="btn btn-danger float-right">Delete</button><br /><br />';

            }
            document.getElementById('posts').innerHTML = output;
          } 
      };

  });
});


$(function(){
  $("#search").keypress(function(){
      // var search = this.value;
      // console.log("Search Value",search);
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
      xhttp.send();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var posts = response;
            console.log(posts);
            var output = '';
            for(var i = 0;i < 5;i++){ 
                if(posts[i].title=this.value){
                  output += '<li  class="list-group-item d-flex justify-content-between align-items-center">'+posts[i].title+'</li>';
                } else{
                  output += '';
                }
            }
            document.getElementById('posts').innerHTML = output;
          } 
      };

  });
});

// $('.chatinput').keyup(function(event) {
//   newText = event.target.value;
//   $('.printchatbox').text(newText);
// });