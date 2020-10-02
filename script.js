document.body.addEventListener('copy', function(event){
    event.preventDefault();
    Swal.fire({
        icon: 'error',
        title: "Can't do this in here!",
        text: 'You shall not pass!',

    })
})