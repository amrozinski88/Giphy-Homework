console.log("i work")

var topics = ["Luke Skywalker", "Darth Vader", "Chewbaca", "Obi Wan", "Darth Maul"]
var queryItem = "starwars"

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=oeqqCRsnyNGcKSKjAaxiMQ07KuXLGTI1&q=" + queryItem + "&limit=10&offset=0&rating=PG-13&lang=en";


function gifGetter(query) {
    $("#gifDump").html("")
    $.ajax({
        url: queryURL,
        method: "get"
    }).then(function (response) {
        console.log(response)
        for (var i = 0; i < response.data.length; i++) {
            var gifObject = response.data[i]
            var imgElement = $("<img>")
            imgElement.attr("src", gifObject.images.downsized_still.url)
            imgElement.attr("data-animated", gifObject.images.downsized.url)
            imgElement.attr("data-still", gifObject.images.downsized_still.url)
            imgElement.attr("data-state", "still")
            $("#gifDump").append(imgElement)
        }
    })
}
gifGetter(queryItem)


for (var i = 0; i < topics.length; i++) {
    var starterButtons = topics[i]
    console.log(topics[i])
    buttonMaker(starterButtons, i)
}


function buttonMaker(topic, index) {
    var buttonElement = $("<button>")
    buttonElement.addClass("btn bg-info border border-dark mx-1")
    buttonElement.text(topic)
    buttonElement.attr("value", index)
    $("#buttonDump").append(buttonElement)
};

$("#buttonDump").on("click", ".btn", function (e) {
    console.log(e)
    queryItem = topics[e.target.value]
    queryURL = "https://api.giphy.com/v1/gifs/search?api_key=oeqqCRsnyNGcKSKjAaxiMQ07KuXLGTI1&q=" + queryItem + "&limit=10&offset=0&rating=PG-13&lang=en";
    gifGetter(queryItem)

})
$("#searchBtn").on("click", function () {
    topics.push($("#searchTopic").val().trim())
    $("#searchTopic").val("")
    buttonMaker(topics[topics.length - 1], topics.length - 1)




})
$(document.body).on("click", "img", function () {
    if ($(this).attr("data-state") === "still") {
        $(this).attr("src", $(this).attr("data-animated"))
        $(this).attr("data-state","animated")

        console.log(this)
    }else{
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state","still")
    }

})


