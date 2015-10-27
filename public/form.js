$(document).ready(function(){

  $('#submitButton').on('click', function(){

    // serialize form to array of objects
    var a = $('#form1').serializeArray();
    // create lookup reference object
    var lookup = {};
    for (var i = 0, len = a.length; i < len; i++) {
        lookup[a[i].name] = a[i];
    }

    var formData = {};
    formData.orgName = lookup.orgName.value;
    formData.webUrl = lookup.webUrl.value;
    var primaryContact = {};
    primaryContact.firstName = lookup.contactName.value;
    primaryContact.lastName = lookup.contactLastName.value;
    primaryContact.email = lookup.contactEmail.value;
    primaryContact.contactNumber = lookup.contactNumber.value;
    formData.primaryContact = primaryContact
    var webContact = {};
    webContact.firstName = lookup.webContactName.value;
    webContact.lastName = lookup.webContactLastName.value;
    webContact.email = lookup.emailAddress.value;
    webContact.phone = lookup.phoneNumber.value;
    formData.webContact = webContact;


    var jsonString = JSON.stringify(formData);

    console.log(jsonString);
    $('#result').text(jsonString);

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "/applicants",
        data: jsonString,
        success: function(data){
            console.log("data_saved!")
        }, error: function(data){
            console.log("error thrown");
        }
    });
    return false;
  })
});
