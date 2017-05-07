$(document).ready(function () {
    "use strict";

    $(".link").click(function () {
        $(this).attr('target', '_blank');
    });

    $('.dropdown_text').text("Semester 2");

    function hide() {
        $(".oneInfo").addClass("hide");
        $(".twoInfo").addClass("hide");
        $(".threeInfo").addClass("hide");
        $(".fourInfo").addClass("hide");
        $(".fiveInfo").addClass("hide");
        $(".sixInfo").addClass("hide");
        $(".sevenInfo").addClass("hide");
        $(".eightInfo").addClass("hide");
        $(".nineInfo").addClass("hide");
        $(".futureInfo").addClass("hide");

        $(".s2_oneInfo").addClass("hide");
        $(".s2_twoInfo").addClass("hide");
        $(".s2_threeInfo").addClass("hide");
        $(".s2_fourInfo").addClass("hide");
        $(".s2_fiveInfo").addClass("hide");
        $(".s2_sixInfo").addClass("hide");
        $(".s2_sevenInfo").addClass("hide");
        $(".s2_eightInfo").addClass("hide");
        $(".s2_nineInfo").addClass("hide");
        $(".s2_tenInfo").addClass("hide");
        $(".s2_elevenInfo").addClass("hide");
        $(".s2_twelveInfo").addClass("hide")

    }

    //Process Bar
    var endDate = new Date("07/26/2017"),
        beginDate = new Date("05/03/2017"),
        totalTime = (endDate - beginDate),
        d = new Date(),
        dateProgress = new Date(d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()) - beginDate,
        completionPercentage = (Math.round((dateProgress / totalTime) * 100)),
        output = completionPercentage + 2 + "%";

       
    $(".progress-bar.semester-1").css('width', 100 + "%");

    $(".progress-bar.semester-2").css('width', output);


    function color(x) {
        $(".primary-color").css("background-color", "turquoise");
        $(".no-color").css("background-color", "inherit");
        $(x).css("background-color", "orange");
    }

    $(".one").on('click mouseover', function () {
        color(this);
        if ($(".oneInfo").hasClass("hide")) {
            hide();
            $(".oneInfo").removeClass("hide");
        }
    });
    $(".two").on('click mouseover', function () {
        color(this);
        if ($(".twoInfo").hasClass("hide")) {
            hide();
            $(".twoInfo").removeClass("hide");
        }
    });
    $(".three").on('click mouseover', function () {
        color(this);
        if ($(".threeInfo").hasClass("hide")) {
            hide();
            $(".threeInfo").removeClass("hide");
        }
    });
    $(".four").on('click mouseover', function () {
        color(this);
        if ($(".fourInfo").hasClass("hide")) {
            hide();
            $(".fourInfo").removeClass("hide");
        }
    });
    $(".five").on('click mouseover', function () {
        color(this);
        if ($(".fiveInfo").hasClass("hide")) {
            hide();
            $(".fiveInfo").removeClass("hide");
        }
    });
    $(".six").on('click mouseover', function () {
        color(this);
        if ($(".sixInfo").hasClass("hide")) {
            hide();
            $(".sixInfo").removeClass("hide");
        }
    });
    $(".seven").on('click mouseover', function () {
        color(this);
        if ($(".sevenInfo").hasClass("hide")) {
            hide();
            $(".sevenInfo").removeClass("hide");
        }
    });
    $(".eight").on('click mouseover', function () {
        color(this);
        if ($(".eightInfo").hasClass("hide")) {
            hide();
            $(".eightInfo").removeClass("hide");
        }
    });
    $(".nine").on('click mouseover', function () {
        color(this);
        if ($(".nineInfo").hasClass("hide")) {
            hide();
            $(".nineInfo").removeClass("hide");
        }
    });
    $(".future").on('click mouseover', function () {
        color(this);
        if ($(".futureInfo").hasClass("hide")) {
            hide();
            $(".futureInfo").removeClass("hide");
        }
    });

    $(".s2_one").on('click mouseover', function () {
        color(this);
        if ($(".s2_oneInfo").hasClass("hide")) {
            hide();
            $(".s2_oneInfo").removeClass("hide");
        }
    });
    $(".s2_two").on('click mouseover', function () {
        color(this);
        if ($(".s2_twoInfo").hasClass("hide")) {
            hide();
            $(".s2_twoInfo").removeClass("hide");
        }
    });
    $(".s2_three").on('click mouseover', function () {
        color(this);
        if ($(".s2_threeInfo").hasClass("hide")) {
            hide();
            $(".s2_threeInfo").removeClass("hide");
        }
    });
    $(".s2_four").on('click mouseover', function () {
        color(this);
        if ($(".s2_fourInfo").hasClass("hide")) {
            hide();
            $(".s2_fourInfo").removeClass("hide");
        }
    });
    $(".s2_five").on('click mouseover', function () {
        color(this);
        if ($(".s2_fiveInfo").hasClass("hide")) {
            hide();
            $(".s2_fiveInfo").removeClass("hide");
        }
    });
    $(".s2_six").on('click mouseover', function () {
        color(this);
        if ($(".s2_sixInfo").hasClass("hide")) {
            hide();
            $(".s2_sixInfo").removeClass("hide");
        }
    });
    $(".s2_seven").on('click mouseover', function () {
        color(this);
        if ($(".s2_sevenInfo").hasClass("hide")) {
            hide();
            $(".s2_sevenInfo").removeClass("hide");
        }
    });
    $(".s2_eight").on('click mouseover', function () {
        color(this);
        if ($(".s2_eightInfo").hasClass("hide")) {
            hide();
            $(".s2_eightInfo").removeClass("hide");
        }
    });
    $(".s2_nine").on('click mouseover', function () {
        color(this);
        if ($(".s2_nineInfo").hasClass("hide")) {
            hide();
            $(".s2_nineInfo").removeClass("hide");
        }
    });
    $(".s2_ten").on('click mouseover', function () {
        color(this);
        if ($(".s2_tenInfo").hasClass("hide")) {
            hide();
            $(".s2_tenInfo").removeClass("hide");
        }
    });
    $(".s2_eleven").on('click mouseover', function () {
        color(this);
        if ($(".s2_elevenInfo").hasClass("hide")) {
            hide();
            $(".s2_elevenInfo").removeClass("hide");
        }
    });
    $(".s2_twelve").on('click mouseover', function () {
        color(this);
        if ($(".s2_twelveInfo").hasClass("hide")) {
            hide();
            $(".s2_twelveInfo").removeClass("hide");
        }
    });



    $("#semester_1").click(function(event){
        event.preventDefault();
        $('.dropdown_text').text("Semester 1");
        $('#semester_2').removeClass("active");
        $('#semester_1').addClass("active");
        $('.progressbar_1').removeClass("hide");
        $('.progressbar_2').addClass("hide");
        $('.content_row').removeClass("hide");
    });

    $("#semester_2").click(function(event){
        event.preventDefault();
        $('.dropdown_text').text("Semester 2");
        $('#semester_1').removeClass("active");
        $('#semester_2').addClass("active");
        $('.progressbar_2').removeClass("hide");
        $('.progressbar_1').addClass("hide");
        $('.content_row').removeClass("hide");
    });

    //fancybox
    $(function () {
        var addToAll = true,
            gallery = true,
            titlePosition = 'inside';
        $(addToAll ? 'img' : 'img.fancybox').each(function () {
            var $this = $(this),
                title = $this.attr('title'),
                src = $this.attr('data-big') || $this.attr('src'),
                a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        if (gallery) {
            $('a.fancybox').attr('rel', 'fancyboxgallery');
        }
        $('a.fancybox').fancybox({
            titlePosition: titlePosition
        });
    });
});