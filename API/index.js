async function add_data(url) {
    const data = await fetch(url)
    const response = await data.json()
        // console.log(response);
    Data(response);

}

function show_image(url) {
    var img = document.createElement("img");
    img.src = url;
    var block = document.getElementById("x");
    block.appendChild(img);
}

function Data(res) {
    var p = res;

    for (var i = 0; i < p.photos.photo.length; i++) {
        var farm_id = p.photos.photo[i].farm;
        var server_id = p.photos.photo[i].server;
        var id = p.photos.photo[i].id;
        var secret = p.photos.photo[i].secret;
        const photoG = "https://farm" + farm_id + ".staticflickr.com/" + server_id + "/" + id + "_" + secret + ".jpg";
        show_image(photoG);
    }
}

function getVal() {
    var tag_title = document.querySelector('#search').value;
    var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=20ea712cb3fd3c2577005f9142a020f7&tags=${tag_title}&format=json&nojsoncallback=1`

    add_data(url);

}