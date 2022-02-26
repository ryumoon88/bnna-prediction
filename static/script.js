$(document).ready(function () {
    var form = $("#predictForm");
    form.submit(function (e) {
        var chara = 97;
        // var data1 = $(this).find("[name='a']");
        // var data2 = $(this).find("[name='b']");
        // var data3 = $(this).find("[name='c']");
        // var data4 = $(this).find("[name='d']");
        // var data5 = $(this).find("[name='e']");
        // var data6 = $(this).find("[name='f']");
        // var data7 = $(this).find("[name='g']");
        // var data8 = $(this).find("[name='h']");
        // var data9 = $(this).find("[name='i']");
        // var data10 = $(this).find("[name='j']");
        // var data11 = $(this).find("[name='k']");
        // var data12 = $(this).find("[name='l']");
        // var data13 = $(this).find("[name='m']");
        var data = [];
        for (var i = chara; i <= chara + 12; i++) {
            data.push(
                parseInt(
                    $(this)
                        .find(`[name='${String.fromCharCode(i)}']`)
                        .val() || 0
                )
            );
        }

        $.ajax({
            url: "/",
            type: "post",
            data: { data: data },
            success: function (data) {
                var imgUrl = "../static/";
                if (data == "Underripe") imgUrl += "underripe.jpg";
                else if (data == "Ripe") imgUrl += "ripe.jpg";
                else imgUrl += "overripe.jpg";

                $(".modal-body").html(`
                <img src="${imgUrl}">
                <p>${data}</p>
                `);
                var modal = new bootstrap.Modal(document.getElementById("modal-2"));
                modal.show();
            },
        });

        e.preventDefault();
    });
});
