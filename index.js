$(document).ready(function () {
    var m, m2;
    $("#add_project").click(function () {
        $("ul").append("<li>ppppp</li>");
    });

    $("#add_task1").click(function () {
        var assign_id = $("#personal").children().length;
        console.log(assign_id);
        assign_id += 1;
        var content = $("#content").val();

        $("#personal").append("<div id = " + assign_id + " ></div>");
        $("#personal div:nth-child(" + assign_id + ")").append("<p " + ">" + content + "</p><input type = 'checkbox' class='finished'> ");
        $("#personal #" + assign_id + " p").attr("id", "p" + assign_id);

        console.log($("#personal p:nth-child(" + assign_id + ")"));
        console.log("done");

        $("#personal  #" + assign_id + " .finished").after("<button type = 'button' class = 'del_btn' >Delete</button");
        $("#personal #" + assign_id + " .del_btn").attr("id", "delete-" + assign_id)

        $("#personal  #" + assign_id + "  .finished").after("<button type = 'button' class = 'edit_btn'>Edit</buttton");
        $("#personal #" + assign_id + " .edit_btn").attr("id", "edit-" + assign_id);
    });

    $(document).on("click", ".finished", function () {

        if ($(this).parent().parent().attr('id') == "personal") {
            let x = $(this).parent();
            console.log(x);
            $("#completed").append(x);
        }
        else {
            let y = $(this).parent();
            console.log(y);
            $("#personal").append(y);
        }
    });
    $(document).on("click", ".del_btn", function () {
        var n = $(this).attr("id");
        console.log(n);
        var n2 = n.split("-");
        console.log(n2);
        $("#" + n2[1]).remove();
    })
    $(document).on("click", ".edit_btn", function () {
        m = $(this).attr("id");
        console.log(m);
        m2 = m.split("-");
        console.log(m2);

        console.log($("#" + m2[1]).text());
        var text = $("#p" + m2[1]).text();
        console.log(text)

        $("#content").val(text);
        $("textarea").after("<button type ='button' id = 'ok'>Ok</buttton>");
        console.log($("#content").html());
    })
    $(document).on("click", "#ok", function () {
        console.log(m2[1])
        var content = $("#content").val();
        console.log(content);
        $("#" + m2[1] + "  > p  ").text(content);
        console.log("done");
        $(this).remove();
    })
});
