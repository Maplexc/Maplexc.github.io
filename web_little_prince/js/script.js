$(document).ready(function () {
    /* enter the user name */
    $(".enter-name").submit(function (event) {
        event.preventDefault();
        var name = $("#form-name").val();
        var complete = false;
        console.log(name);

        if (name != "") {
            complete = true;
        }

        if (name == "") {
            $("#form-name").addClass("error");
        }

        if (complete) {

            console.log("Complete Form");
            $(".enter-name button").html("Welcome!").attr('disabled', true);

            $(".name").html(name);

            $("#story_page_1").fadeOut("slow");

        }
    });

    $("#form-name").keydown(function () {
        $(this).removeClass("error");
    });


    // right arrow to move forward to next page
    $(".right").click(function () {
        if ($("#story_page_5").is(":hidden")) {
            $("#beginning_story *").fadeOut("slow");
        } else {
            $(this).parent().fadeOut();
        }
    });


    // left arrow to move backward to previous page
    $(".left").click(function () {
        if ($("#story_page_5").is(":hidden")) {
            $("#story_page_5").fadeIn();
        } else if ($("#story_page_4").is(":hidden")) {
            $("#story_page_4").fadeIn();
        } else if ($("#story_page_3").is(":hidden")) {
            $("#story_page_3").fadeIn();
        } else if ($("#story_page_2").is(":hidden")) {
            $("#story_page_2").fadeIn();
        } else if ($("#story_page_1").is(":hidden")) {
            $("#story_page_1").fadeIn();
        }
    });

    // using keyboard to move to next page or previous page
    $(document).keydown(function (e) {
        if (e.keyCode == 37) { // left
            if ($("#story_page_6").is(":hidden")) {

            } else if ($("#story_page_5").is(":hidden")) {
                $("#story_page_5").fadeIn();
            } else if ($("#story_page_4").is(":hidden")) {
                $("#story_page_4").fadeIn();
            } else if ($("#story_page_3").is(":hidden")) {
                $("#story_page_3").fadeIn();
            } else if ($("#story_page_2").is(":hidden")) {
                $("#story_page_2").fadeIn();
            }
        } else if (e.keyCode == 39) { // right
            if ($("#story_page_1").is(":visible")) {

            } else if ($("#story_page_2").is(":visible")) {
                $("#story_page_2").fadeOut();
            } else if ($("#story_page_3").is(":visible")) {
                $("#story_page_3").fadeOut("slow");
            } else if ($("#story_page_4").is(":visible")) {
                $("#story_page_4").fadeOut("slow");
            } else if ($("#story_page_5").is(":visible")) {
                $("#story_page_5").fadeOut("slow");
            } else {
                $("#beginning_story *").fadeOut("slow");
            }
        }
    });

    // skip button to skip the introduction story
    $("#skip_button").click(function () {
        $("#beginning_story *").fadeOut("slow");
    });

    // yes button to start the introduction story
    $(".yes").click(function () {
        $("#story_page_2").fadeOut("slow");
    });

    // picture pop-up
    $(".chapter_pic").click(function (event) {
        console.log("click");
        $(this).toggleClass("chapter_pic_popup");
        event.preventDefault();
    })

});

$('.anchor-scroll').anchorScroll({
    scrollSpeed: 800, // scroll speed
    offsetTop: 0, // offset for fixed top bars (defaults to 0)
    onScroll: function () {
        // callback on scroll start
    },
    scrollEnd: function () {
        // callback on scroll end
    }
});
