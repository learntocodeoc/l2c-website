$(document).ready(function(){
    $.fn.serializeObject = function()
        {
            var object = {};
            var a = this.serializeArray();
            $.each(a, function() {
                object[this.name] = this.value || '';
            });
            return object;
        };

    $('#submitButton').on('click', function(event){
        event.preventDefault();
        var object = $('#form1').serializeObject();
        var jsonObject = JSON.stringify(object);
        $('#result').text(jsonObject);
        if(formValidation()){
            $.ajax({
                method: "POST",
                contentType: "application/json",
                url: "/applicants",
                data: jsonObject,
                success: function(data){
                    $("#myModal").modal("show");
                    $('#modalButton').on('click', function(){
                        window.location = "/";
                    });
                    console.log("Data saved!");
                }, 
                error: function(data){
                    console.log("error thrown");
                }
            });
        } else {
            alert("Please enter the require fields")
            return false;
        }
    })

    // Form validation
    function formValidation(){
        var count = 0;
        $("#form1 :input").not(".optional").each(function(){
            var input = ($(this));
            var form_id = input.prop('id');
            if(input.val() === ""){
                input.next('span').removeClass("noError").addClass("error");
                input.addClass("invalid");
                count++;
            } else if($('#' + form_id).hasClass("invalid")) {
                count++;
            }
        })
        if(count > 0){
            return false;
        } else {
            return true;
        }
    }

    function formErrorOutline(input, regex){
        var valid = regex.test(input.val());
        var form_id = input.prop('id');
        var span_id = input.next('span').prop('id');
        if(input.val().length === 0){
            $('#' + span_id).addClass("noError");
            input.removeClass("invalid");
        } else if(valid){
            $('#' + span_id).removeClass("error").addClass("noError");
            input.removeClass("invalid");
        } else {
            $('#' + span_id).removeClass("noError").addClass("error");
            input.addClass("invalid");
        }
    }

    $('.basicFields').on('input', function(){
        var input = $(this);
        if(input.val().length > 0 ){
            input.next('span').removeClass("error").addClass("noError");
            input.removeClass("invalid");
        }
    })

    $('#contactEmail').on('input', function(){
        var input = $(this);
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Zdoes0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        formErrorOutline(input, regex)
    })

    $('#contactNumber').on('input', function(){
        var input = $(this);
        var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        formErrorOutline(input, regex)
    })

    $("#webUrl").on("input", function(){
        var input = $(this);
        var regex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        formErrorOutline(input, regex)
    });
});
