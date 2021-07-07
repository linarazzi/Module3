$(document).ready(function() {
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".catalog .col-sm-auto").each(function() {
            $(this).filter(function() {
                $(this).toggle($(this).find(".info").text().toLowerCase().indexOf(value) > -1)
            })
        });
    });
});