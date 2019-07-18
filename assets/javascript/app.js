console.log("i work")

var topics = ["Luke Skywalker","Darth Vader","Chewbaca","Obi Wan","Darth Maul" ]
var queryItem = "starwars"

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=oeqqCRsnyNGcKSKjAaxiMQ07KuXLGTI1&q="+queryItem+"&limit=10&offset=0&rating=PG-13&lang=en";

$.ajax({
    url: queryURL,
    method: "get"
}).then(function(response){
for (i = 0; i < response.data.length; i++){
    var gifObject = response.data[i]
    var imgElement =  $("<img>")
    imgElement.attr("src",gifObject.images.downsized.url)
    $("#gifDump").append(imgElement)
}
})
for (i=0; i < topics.length; i++){
    var starterButtons = topics[i]
    console.log(topics[i])
    var buttonElement = $("<button</button>")
    buttonElement.addClass("btn")
    buttonElement.addClass("bg-info")

    $("#buttonDump").append(buttonElement[i])

}
  