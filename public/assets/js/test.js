console.log("CONSOLE WORKS FINE!")
$(document).ready(function(){
    $("button").click(function(){
        $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
            // alert("Data: " + data + "\nStatus: " + status);
            console.log("STATUS",status);
            console.log("DATA",data);
            var array = data
            for(i=0 ;i<5;i++){
                $("#content").load(array[i].title);
            }
        });
    });
});