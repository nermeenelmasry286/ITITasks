$("img").css({"width":"200px", "height":"300px", "position":"relative"});

$("img").hover(function() {
    var $originalImg = $(this);
    var copyImg = $('<img class="copy-image" src="' + $originalImg.attr('src') + '" alt="copy image">');
    $("body").append(copyImg);

    $(copyImg).css({
        position: "absolute",
        width: "400px",
        height: "600px",
        pointerEvents: "none"
    });

    $originalImg.on("mousemove", function(event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        var copyImgX = mouseX + 20;
        var copyImgY = mouseY + 20; 

        copyImg.css({ left: copyImgX, top: copyImgY });
    });
}, function() {
    $(".copy-image").remove();
});