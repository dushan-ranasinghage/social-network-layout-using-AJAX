console.log("TEST DOM")
$(document).ready(function(){
    $("button").click(function(){
        $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
            // alert("Data: " + data + "\nStatus: " + status);
            console.log("STATUS",status);
            console.log("DATA",data);
        });
    });
});