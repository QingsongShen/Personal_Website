$.ajax({
    url: "./admin/html.inc.php",
    type: "GET",
    async: false,
    dataType: "json",
    success: function (result){
        // alert(result)
        $(".style1").html(result.header)
        $(".footer").html(result.footer)
        // $("#selector").html(result.typer)
    }
})