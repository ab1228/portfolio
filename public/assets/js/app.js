
$('#contactForm').on("submit", function (event) {
    event.preventDefault();
    var newFriend = {
        name: $("#name").val().trim(),
        emial: $("#email").val().trim(),
        phone: $("#phone").val().trim(),
        message: $("#message").val().trim()
    };
    console.log(newFriend);


});
