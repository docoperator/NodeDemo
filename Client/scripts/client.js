function clientsend(){
    var url = "http://localhost:8080/testplain";``

    for(i=1;i < 10000; i++){
        $.ajax({
            method: "POST",
            url: url,
            data: { name: "John", location: "Boston" }
        })
        .done(function( msg ) {
            alert( "request complete" + i.toString());
        });
    }

}