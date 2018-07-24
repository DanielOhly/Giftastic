

var subjects= ["horse", "cat"];

function displayGifs(){
    var subject = $(this).attr("data-name"); 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC&limit=10";
    $("#gif-dump").empty();
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response){
        console.log(response);
        var results= response.data;

        for (var i=0; i < results.length; i++){
        
        var gifDiv = $("<div class= 'gifclick'>");
        var gifSpace = $("<img class= 'gifclick' data-state='still'>");
        var gifAnimate = results[i].images.fixed_height.url
        var gifStill = results[i].images.fixed_height_still.url


        gifSpace.attr("src", results[i].images.fixed_height_still.url);
        // gifSpace.attr("id", "jif")
        // gifSpace.attr();

        // gifSpace.attr("data-still", stillUrl);
        // gifSpace.attr("data-animate", movUrl);
        
        var rating= results[i].rating;
        var rateText= $("<p>").text("Rated: "+ rating );
        
        gifDiv.append(gifSpace); 
        gifDiv.append(rateText);
    
       
        $("#gif-dump").append(gifDiv);
   
    }})}
    ;

    $(".gifclick").click(function(event){
        console.log("I've been touched")
        console.log(this);
        var state = $(this).attr("data-state");
        if (state === "still") {
                console.log("button make it move")
                $(this).attr("src", movUrl);
                $(this).attr("data-state", "animate");
            } else {
                console.log("button make it stop")
                $(this).attr("src", gifUrl);
                $(this).attr("data-state", "still");
            }});
        

$(document).ready(function(){


$("#add-gif").on("click", function(event) {
    $("#button-storage").empty();
    event.preventDefault();
    var subject = $("#gif-input").val().trim();
    subjects.push(subject);
    makeButtons();

});



});

function makeButtons(){
    $("#button-storage").empty();
    for (var i=0; i<subjects.length; i++){
    var button= $("<button>");
    button.addClass("gif-btn");
    button.attr("data-name", subjects[i]);
    button.text(subjects[i]);
    $("#button-storage").append(button);}
    $("#gif-input").val("");
    console.log(subjects);

}


$(document).on("click", ".gif-btn", displayGifs);
makeButtons();
