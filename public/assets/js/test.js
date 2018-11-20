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


// qui est esse

$(function(){
  $("#search").keypress(function(){

    // Dynamic Search Part Start
      // var search = this.value;
      // console.log("Search Value",search);



      // var xhttp = new XMLHttpRequest();
      // xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
      // xhttp.send();
      // xhttp.onreadystatechange = function() {
      //     if (this.readyState == 4 && this.status == 200) {
      //       var response = JSON.parse(xhttp.responseText);

            var posts = [{userId: 1, id: 1, title: "sunt aut facere", body: "quia et suscipit↵suscipit recusandae consequuntur"},
             {userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non "},
             {userId: 1, id: 3, title: "ea molestias quasi exercitationem ", body: "et iusto sed quo iure↵voluptatem occaecati omnis"},
             {userId: 1, id: 4, title: "eum et est occaecati", body: "ullam et saepe reiciendis voluptatem adipisci↵sit "},
             {userId: 1, id: 5, title: "nesciunt quas odio", body: "repudiandae veniam quaerat sunt sed↵alias aut "}];
            console.log(posts);
            var output = '';
            for(var i = 0;i < 5;i++){ 
                if(posts[i].title.includes(this.value)){
                  output += '<li  class="list-group-item d-flex justify-content-between align-items-center">'+posts[i].title+'</li>';
                } else{
                  output += '';
                }
            }
            console.log(output);
            document.getElementById('posts').innerHTML = output;
          // } 
  //     };

  });
});

// $('.chatinput').keyup(function(event) {
//   newText = event.target.value;
//   $('.printchatbox').text(newText);
// });