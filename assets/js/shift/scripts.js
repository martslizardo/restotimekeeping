function fetch_shift() {
    $.ajax({
        url: "shift/get_shift",
        type: "POST",
        success: function(data) {
            $("#shiftdata").html(data);
            $("#tktbl").DataTable({
                "retrieve":true,
                "scrollCollapse": true,
            });
        }
    })
}

function change_shift(data) {
    return $.ajax({
        url: 'shift/change_shift',
        type: 'POST',
        data: data,
        dataType: 'json'
    });
}

$(document).on('click','.edit_shift',function(){
    
    var shift = $(this).data('shift');
    var start = $(this).data('start');
    var end   = $(this).data('end');
    var id    = $(this).data('id');
    var front = $(this).data('front');
    var back = $(this).data('back');
    $('#btn-save').attr('data-function','edit_shift')
  
    $("#e-sh-modal").find(".modal-title").html("Edit Shift");        
    $("#shift-type").val(shift);
    $("#start-time").val(start);
    $("#end-time").val(end);
    $("#front-house").val(front);
    $("#back-house").val(back);
    $("#id").val(id);
})


$(document).on('click','#btn_add_shift',function(){
    $('#shift-form')[0].reset();
    $('#btn-save').attr('data-function','add_shift')
    $("#e-sh-modal").find(".modal-title").html("Add Shift"); 
         

})


$(document).ready(function() {
    // if ($('#shiftDock .card-columns').children().length == 0) {
    //     $('#shiftDock').html(`
    //         <h1 class="text-white text-center py-3">No Employee</h1>
    //     `);
    // }

    $(document).on('click',"button[data-function='edit_shift']",function(e){
        $.ajax({
            url: 'shift/edit_shift',
            data: $("#shift-form").serialize(),
            type: "POST",
            success: function(data) {
                var result = JSON.parse(data);
                if(result.success === 1){
                    $("h5").html("");
                    $("#e-sh-modal").modal('hide');
                    bs_notify("<strong>"+result.shift+" shift has been updated .</strong>","success","top","right");
                    fetch_shift();
                }else{
                    $("#start-error").html(result.start_error);
                    $("#end-error").html(result.end_error);
                }
            },
            error: function(data){
                alert('Opps! Something went wrong!');
            }
        })

        e.preventDefault();
    })

    $(document).on('click',"button[data-function='add_shift']",function(e){
        $.ajax({
            url: 'shift/add_shift',
            data: $("#shift-form").serialize(),
            type: "POST",
            success: function(data) {
                var result = JSON.parse(data);
                if(result.success === 1){
                    $("h5").html("");
                    $("#e-sh-modal").modal('hide');
                    bs_notify("<strong>"+result.shift+" shift has been added .</strong>","success","top","right");
                    fetch_shift();
                }else{
                    $("#start-error").html(result.start_error);
                    $("#end-error").html(result.end_error);
                }
            },
            error: function(data){
                alert('Opps! Something went wrong!');
            }
        })

        e.preventDefault();
    })


    $('#shiftDock').on('mouseenter', (e) => {

        $('#shiftDock').addClass('show');
    })

    $('#shiftDock').on('mouseleave', (e) => {

        $('#shiftDock').removeClass('show');
    })
})

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();

    console.log($(e.target));

    var $shiftColumn = $(e.target).hasClass('shiftColumn') ? $(e.target) : $(e.target).closest('.shift-table');
    var $userCard = $(`#${e.dataTransfer.getData("text")}`);
    // var $data = $(`#${e.dataTransfer.getData("text")}`);
    // e.target.appendChild(document.getElementById(e.dataTransfer.getData("text")));

    var data = {
        user_id: $userCard.attr('data-id'),
        house: $userCard.attr('data-house'),
        shift_id: $shiftColumn.closest('.shift-card').data('id'),


    };
    console.log(data);
    change_shift(data).done(function(response) {
        console.log(response);
        console.log(response['message']);
        bs_notify("<strong>"+response.message+"</strong>","success","top","right");
        if(response.status)
            $shiftColumn.append($userCard);
    });
}