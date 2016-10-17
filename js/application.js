// Note: comments below are sourced from jQuery webpage at http://api.jquery.com/

$(document).ready(function () {

    //Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.    
    $(".attachdata").click(function () {
        $("#data").data("greeting", "Hello World");
    });

    $(".getdata").click(function () {
        alert($('#data').data("greeting"));
    });

    //Hide the matched elements with a sliding motion.
    $(".slideUp").click(function () {
        $("#slide_up_down").slideUp();
    });

    //Display the matched elements with a sliding motion.
    $(".slideDown").click(function () {
        $("#slide_up_down").slideDown();
    });

    //Display the matched elements by fading them to opaque.
    $(".fadeIn").click(function () {
        $("#fade_in_out img").fadeIn();
    });

    // Insert content, specified by the parameter, to the end of each element in the set of matched elements.
    $(".append").click(function () {
        $("#append").append("This has been appended!!!");
    });

    // Insert content, specified by the parameter, after each element in the set of matched elements.
    $(".after").click(function () {
        $("#after").after("OH Yeah");
    });

    //Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
    $(".attr").click(function () {
        $("#attr img").attr("src", "../images/subway_image.jpg");
    });

    //Insert content, specified by the parameter, before each element in the set of matched elements.
    $(".before").click(function () {
        $("#before").before("This is kicking my butt...");
    });

    //Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
    $(".html").click(function () {
        $("#html").html("This is the html method, which replaces all the text inside my p tag");
    });

    // Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.
    $(".text").click(function () {
        $("#text").text("Ribs tip venison, ham spare chop spare capicola ham andouille pork bresaola");
    });

    //Get the current value of the first element in the set of matched elements or set the value of every matched element.
    $(".val").click(function () {
        alert($("input:text").val());
    });
    
    //Adds the specified class(es) to each element in the set of matched elements.    
    $(".add_Class").click(function () {
        $("#add_class").addClass("red");
    });
    
    //Display or hide the matched elements with a sliding motion.
    $(".slideToggle").click(function () {
        $("#slide_toggle").slideToggle();
    });

    //Hide the matched elements.
    $(".hide").click(function () {
        $("#hide_show").hide();
    });

    //Display the matched elements.
    $(".show").click(function () {
        $("#hide_show").show();
    });

    //Hide the matched elements by fading them to transparent.
    $(".fadeOut").click(function () {
        $("#fade_in_out img").fadeOut();
    });
    
    //Bind an event handler to the “focus” JavaScript event, or trigger that event on an element.
    $(".focus").click(function () {
        $("#focus").focus();
    });
    
    //Bind an event handler to the “click” JavaScript event, or trigger that event on an element.
    $(".click").click(function () {
        $("focus").click();
    });

});