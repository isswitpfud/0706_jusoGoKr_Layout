/*eslint-disable*/

$(function () {

    $("li.gnbLi").mouseover(function () {
        $("ul.subMenu").show();
    });

    $("li.gnbLi").mouseout(function () {
        $("ul.subMenu").hide();
    });
});

$(function () {

    $("li.gnbLi").mouseover(function () {
        $("#gnbBG").show();
    });

    $("li.gnbLi").mouseout(function () {
        $("#gnbBG").hide();
    });
});


