$(".create-form").on("click", function(event) {
    event.preventDefault();
    console.log("trying to add burger");
    var newBurger = {
        burger: $("#burger").val().trim(),
        eaten: false
    };

    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("added burger");
            location.reload();
        }
    );
});