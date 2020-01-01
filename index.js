var time = moment().format("h:mm:ss a")

if( parseInt(time) < 12){
    $("body").css("background-image: url('https://media3.giphy.com/media/DL6Ji9CMrtlok/giphy.gif?cid=790b761107dbd61c95f6196b303aa3f737bd00f7a3586e69&rid=giphy.gif')")
}