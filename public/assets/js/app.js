
$('#contactForm').on("submit", function (event) {
    event.preventDefault();
    const newFriend = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        phone: $("#phone").val().trim(),
        message: $("#message").val().trim()
    };
    console.log(newFriend);

    $.post('/email', newFriend, function () {
        console.log('server recieved data')
    })

});
