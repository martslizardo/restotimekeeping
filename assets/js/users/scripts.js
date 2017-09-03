function fetch_users() {
    $.ajax({
        url: base_url + "get/users",
        type: "POST",
        success: function(data) {
            $("#userdata").html(data);
            $("#tktbl").DataTable();
        }
    })
}

function fetch_details() {
    var id = $("#detail_id").val();
    $.ajax({
        url: base_url + "users/get_details/" + id,
        type: "POST",
        success: function(data) {
            var result = JSON.parse(data);
            $("#firstname").val(result.firstname);
            $("#lastname").val(result.lastname);
            $("#email").val(result.email);
            $("#prof_pic").attr('src','assets/uploads/'+result.profile_picture);
            $("#school").val(result.school);
            $("#no-of-hrs").val(result.no_of_hrs);
            $("#course").val(result.course);
            $("#bday").val(result.birthday);
            $("#year").val(result.year);
            $("#start-date").val(result.start_date);
            $("#tin").val(result.tin_no);
            $("#sss").val(result.sss_no);
            $("#phil-health").val(result.phil_health);
            $("#remaining").html(result.remaining);
        }
    })
}

$(document).ready(function(){
    $("#add-user-form").on('submit',function(e){
        $.ajax({
            url: base_url + 'add/user',
            type: "POST",
            data: $("#add-user-form").serialize(),
            success: function(data){
                var result = JSON.parse(data);

                if(result.success === 1) {
                    $("input").val("");
                    $(".fname-error").html("");
                    $(".lname-error").html("");
                    $(".mname-error").html("");
                    $(".email-error").html("");
                    $(".pos-error").html("");
                    $("#add-users-modal").modal("hide");
                    bs_notify("<strong>Successfully added " +result.name + "</strong>","success","top","right");
                    fetch_users();
                    
                }else{
                    $(".fname-error").html(result.fname_error);
                    $(".lname-error").html(result.lname_error);
                    $(".mname-error").html(result.mname_error);
                    $(".email-error").html(result.email_error);
                    $(".pos-error").html(result.pos_error);
                }
            }
        })
        e.preventDefault();
    })
})

$(document).on('click','.activate-user',function(){
    var id = $(this).data('id');
    var name = $(this).data('name');
    $(".modal-title").html("Activate "+name);
    $("#u-a-id").val(id);
    $("#u-a-name").val(name);
    $("#activate-confirm-message").html("Are your sure you want to activate "+name+"?");
})

$(document).ready(function(){
    $("#user-activated-form").on('submit',function(e) {
        $.ajax({
            url: base_url + 'activate/user',
            type: "POST",
            data: $("#user-activated-form").serialize(),
            success: function(data){
                var result = JSON.parse(data);
                $("#u-a-modal").modal('hide');
                bs_notify("<strong>Successfully activated " +result.name + "</strong>","success","top","right");
                fetch_users();
            }
        })
        e.preventDefault();
    }) 
})

$(document).on('click','.deactivate-user',function(){
    var id = $(this).data('id');
    var name = $(this).data('name');
    $(".modal-title").html("Deactivate "+name);
    $("#u-d-id").val(id);
    $("#u-d-name").val(name);
    $("#deactivate-confirm-message").html("Are your sure you want to deactivate "+name+"?");
})

$(document).ready(function(){
    $("#user-deactivated-form").on('submit',function(e) {
        $.ajax({
            url: base_url + 'deactivate/user',
            type: "POST",
            data: $("#user-deactivated-form").serialize(),
            success: function(data){
                var result = JSON.parse(data);
                $("#u-d-modal").modal('hide');
                bs_notify("<strong>Successfully deactivated " +result.name + "</strong>","success","top","right");
                fetch_users();
            }
        })
        e.preventDefault();
    }) 
})

function fetch_user_info() {
    $.ajax({
        url: base_url + "profile/get_user",
        type: "POST",
        success: function(data) {
            var result = JSON.parse(data);
            $("#firstname").val(result.firstname);
            $("#lastname").val(result.lastname);
            $("#email").val(result.email);
            $('#prof_pic').attr('src','assets/uploads/'+result.profile_picture);
        }
    })
}


$(document).ready(function(){
    $("#intern-picture-form").on('submit',function(e){
        var form = new FormData(document.getElementById("intern-picture-form"));
        $.ajax({
            url: base_url + 'users/change_intern_picture',
            data: form,
            type: "POST",
            processData: false, // tell jQuery not to process the data
            contentType: false, // tell jQuery not to set contentType
            success: function(data)
            {
                var result = JSON.parse(data);
                if(result === "success"){
                    $("#intern-picture-modal").modal('hide');
                    $("#error-message-picture").hide();
                    $("#profile_pic").val("");
                    bs_notify("<strong> Successfully Change Your Profile Picture.</strong>","success","top","right");
                    fetch_details();
                }
                else{
                    error_message("#error-message-picture",result);
                }
            },
            error: function(data)
            {
                alert('Opps! Something went wrong. please contact the administrator. ');
            },
        })
      e.preventDefault();
    });
});

$(document).ready(function(){
    $("#employee-picture-form").on('submit',function(e){
        var form = new FormData(document.getElementById("employee-picture-form"));
        $.ajax({
            url: base_url + 'users/change_intern_picture',
            data: form,
            type: "POST",
            processData: false, // tell jQuery not to process the data
            contentType: false, // tell jQuery not to set contentType
            success: function(data)
            {
                var result = JSON.parse(data);
                if(result === "success"){
                    $("#employee-picture-modal").modal('hide');
                    $("#error-message-picture").hide();
                    $("#profile_pic").val("");
                    bs_notify("<strong> Successfully Change Your Profile Picture.</strong>","success","top","right");
                    fetch_details();
                }
                else{
                    error_message("#error-message-picture",result);
                }
            },
            error: function(data)
            {
                alert('Opps! Something went wrong. please contact the administrator. ');
            },
        })
      e.preventDefault();
    });
});

$(document).ready(function() {
    $("#intern-info-form").on('submit',function(e){
        $.ajax({
            url: base_url + "users/update_intern_info",
            type: "POST",
            data: $("#intern-info-form").serialize(),
            success:function(data) {
                var result = JSON.parse(data);
                if(result === 'success') {
                    $(".text-danger").html("");
                    bs_notify("<strong>Successfully Updated Your Information</strong>","success","top","right");
                    fetch_details();
                }else{
                    perfield_error_message("#fname_err",result.f_error);
                    perfield_error_message("#lname_err",result.l_error);
                    perfield_error_message("#email_err",result.e_error);
                }
            },
            error: function(data){
                alert('Opps! Something went wrong. please contact the administrator. ');
            }
        })
        e.preventDefault();
    })
})

$(document).ready(function() {
    $("#intern-other-info-form").on('submit',function(e){
        $.ajax({
            url: base_url + "users/update_intern_other_info",
            type: "POST",
            data: $("#intern-other-info-form").serialize(),
            success:function(data) {
                var result = JSON.parse(data);
                if(result === 'success') {
                    $(".text-danger").html("");
                    bs_notify("<strong>Successfully Updated Your Information</strong>","success","top","right");
                    fetch_details();
                }else{
                    perfield_error_message("#school_err",result.school_error);
                    perfield_error_message("#no_of_hrs_err",result.no_of_hrs_error);
                    perfield_error_message("#course_err",result.course_error);
                    perfield_error_message("#bday_err",result.bday_error);
                    perfield_error_message("#year_err",result.year_error);
                    perfield_error_message("#start_date_err",result.start_date_error);
                }
            },
            error: function(data){
                alert('Opps! Something went wrong. please contact the administrator. ');
            }
        })
        e.preventDefault();
    })
})