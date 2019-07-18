console.log("i work")

var topics = ["Luke Skywalker", "Darth Vader", "Chewbaca", "Obi Wan", "Darth Maul"]
var queryItem = "starwars"

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=oeqqCRsnyNGcKSKjAaxiMQ07KuXLGTI1&q=" + queryItem + "&limit=10&offset=0&rating=PG-13&lang=en";


function gifGetter(query){
    $.ajax({
        url: queryURL,
        method: "get"
    }).then(function (response){
        console.log(response)
        for (var i = 0; i < response.data.length; i++){
           var gifObject = response.data[i]
           var imgElement = $("<img>")
           imgElement.attr("src",gifObject.images.downsized_still.url)
           $("#gifDump").append(imgElement)


        }
    })













// $.ajax({
//     url: queryURL,
//     method: "get"
// }).then(function (response) {
//     for (var i = 0; i < response.data.length; i++) {
//         var gifObject = response.data[i]
//         var imgElement = $("<img>")
//         imgElement.attr("src", gifObject.images.downsized.url)
//         $("#gifDump").append(imgElement)
//     }
// })

}
gifGetter(queryItem)


for (var i = 0; i < topics.length; i++) {
    var starterButtons = topics[i]
    console.log(topics[i])
    buttonMaker(starterButtons,i)
}


function buttonMaker(topic,index){
    var buttonElement = $("<button>")
    buttonElement.addClass("btn bg-info border border-dark mx-1")
    buttonElement.text(topic)
    buttonElement.attr("value",index)
    $("#buttonDump").append(buttonElement)
};

$("#buttonDump").on("click", ".btn", function(e) {
    console.log(e.target.value)

})

