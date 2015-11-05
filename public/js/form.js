$(document).ready(function(){

    $.fn.serializeObject = function()
    {
        var object = {};
        var a = this.serializeArray();
        // console.log(a);
        $.each(a, function() {
            object[this.name] = this.value || '';
        });
        return object;
    };

    $('#submitButton').on('click', function(){
        var jsonObject = JSON.stringify($('#form1').serializeObject());
        $('#result').text(jsonObject);
        $.ajax({
            type: "POST",
            url: "/applicants",
            data: jsonObject,
            success: function(data){
                console.log("data_saved!")
            }, error: function(data){
                console.log("error thrown");
            }
        });
        return false;
    })
});