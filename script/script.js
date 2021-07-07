/* eslint-disable */

$(function () {

    /* GNB메뉴 */
    $("li.gnbLi").mouseover(function () {
        $("ul.subMenu").show();
    });

    $("li.gnbLi").mouseout(function () {
        $("ul.subMenu").hide();
    });
    /* GNB메뉴 */

    $("li.gnbLi").mouseover(function () {
        $("#gnbBG").show();
    });

    $("li.gnbLi").mouseout(function () {
        $("#gnbBG").hide();
    });


    /*주소검색*/
    $("input#searchWord").keyup(function () {
        var txt = $("input#searchWord").val(); //변수:값을 임시저장
        /* txt에 저장된 값이 비어있는 공백(="")이 아니라면
         제이쿼리css를 사용하여 x기호를 표기하라*/

        /*
        txt가 공백이라면 ->    if (txt=="") {실행코드}
        txt가 공백아니라면 -> if (txt !="") {실행코드}
        */

        if (txt == "") {
            $("span#closeMark").css({
                "visibility": "hidden"
            });
        }
        //= txt값이 공백이라면 x기호를 숨겨쥬세요.

        if (txt != "") {
            $("span#closeMark").css({
                "visibility": "visible"
            });
        }
        //txt값이 공백이 아니라면 x기호를 표시해주세요.
    });


    /*검색내용 제거 (close버튼)*/
    /*1차 기능 -> closeMark클릭
       2차 기능-> input내부 입력된 value값 지우기 */
    $("span#closeMark").click(function () {
        $("input#searchWord").val(""); /*("")의 따옴표는 공백을 의미함*/
        $(this).css({
            "visibility": "hidden"
        });
        /*     $("span#closeMark").css({"visibility":"hidden"});
                :1차 기능에서 사용한 선택자가 동일하게 지정될때  this라고 지정*/
    });


    //검색창 실행
    //--> 검색창이 공백일때 검색실행버튼을 누르면 경고창발생효과
    //올바른행동을 유도하는 코드작성 --> JS유효성 검사 = Validation 유효성
    $("span#searchImg").click(function () {
        var txt = $("input#searchWord").val(); //=txt입력값
        // 변수 =  텍스트 박스 입력값이 변수에 임시저장되어있음

        if (txt == "") {
            // if조건식 (txt=="") :변수의 값이 공백이라면 --> 알림창띄우기
            alert("검색어을(를) 입력해주세요!");
        }

        if (txt != "") { // 검색어가 공백이 아니라면 데이터 전송
            $("form").submit();
        }
        // 텍스트박스에 포커스 설정하기
        // $("선택자").포커스설정기능(); => 해당메서드 .focus()
        $("input#searchWord").focus();

        /*검색내용 제거 (close버튼)*/
    });


    /* 도로명 주소 클래스 속성 추가/제거 div#contentsArea ul#sudUl>li */
    $("ul#subUl>li").click(function () {
        $("ul#subUl>li").removeClass("selected");

        $(this).addClass("selected");
    });


    $("ul#subUl>li:nth-child(2)").click(function () {
        $("div#article").animate({
                "margin-left": "-900px"
            },
            900
        );
    });


    /*개발자센터 페이지(활용서비스) 이동*/



    $("div.apiBox").eq(0).click(function () {
        //eq()--> 0부터 시작, 숫자지정
        //location.href="addrlink/developerCenter_01.html";  --> 현재창에서 오픈
        window.open("addrlink/developerCenter_01.html"); //--> 새로운 창에서 오픈
        return false; //클릭후 페이지가 위로 올라가는 현상을 막아줌
    });

    $("div.apiBox").eq(1).click(function () {
        window.open("addrlink/developerCenter_02.html");
         return false;
    });

    $("div.apiBox").eq(2).click(function () {
        window.open("addrlink/developerCenter_03.html");
         return false;
    });

    $("div.apiBox").eq(3).click(function () {
        window.open("addrlink/developerCenter_04.html");
         return false;
    });






});
