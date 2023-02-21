var iti = null;


function inViewHandler() {
  $(".image-holder").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inView");
    }
  });
}

function initFunctions() {
  AOS.init();
  var input = document.querySelector("#phone");
  iti = window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry: "ae"
  });
}

function responsiveMenuSetup() {
  if ($(window).width() < 768) {
    $(".menu ").wrap('<div class="responsive-menu"></div>');

    $("header").append(
      "<div class=burger-menu> <div> </div> <div> </div> <div> </div></div>"
    );
    $(".menu-holder-responsive").append("<div class=close-menu-icon> </div>");
  }
}

// function to toggle the active state of the bruger menu
function responsiveMenuStateHandler() {
  $(".burger-menu").click(function () {
    $(".responsive-menu").fadeToggle();
    $(this).toggleClass("active");
  });
  $(".menu li a").click(function () {
    $(".responsive-menu").fadeToggle();
    $(".burger-menu").toggleClass("active");
  });
}

function anchorSmoothScroll() {
  var headerHeight = $("header").height();
  $("a[href*=\\#]").bind("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate({
          scrollTop: $(target).offset().top - (headerHeight + 30),
        },
        600
      );
    return false;
  });
}

function loadhighlightscarousel() {
  $(".highlights .listingHolder").addClass("owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    center: true,
    dots: true,
    dotsData: false,
    nav: true,
    autoWidth: true,
    navText: ["<img class='prevbtn' src='../images/Arrowleft.png'>", "<img class='nextbtn' src='../images/Arrowright.png'>"],
    responsive: {
      0: {
        items: 1,
        autoWidth: true,
        center: false,
        nav: false,
        margin: 0

      },
      600: {
        items: 1,
      },
      800: {
        items: 3,
        autoWidth: true,
        center: false,
        nav: false,
        margin: 0
      },
      1000: {
        items: 1
      }
    }
  });
}

function loadmanifestocarousel() {
  $('.manifestocarousel').owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    navText: ["<img class='prevbtn' src='../images/Arrowleft.png'>", "<img class='nextbtn' src='../images/Arrowright.png'>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        center: false,
        autoWidth: true,
        margin: 15
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
}

function matchHeightManifestocarosel() {
  $(".ourmanifesto .manifestocarousel .listingInfo").matchHeight();
}

function loadrestaurantpicscarousel() {
  $('.restaurantpicscarousel').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    dots: true,
    dotsData: false,
    nav: true,
    navText: ["<img class='prevbtn' src='../images/Arrowleft.png'>", "<img class='nextbtn' src='../images/Arrowright.png'>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
}

function loadoureventscarousel() {

  $(".eventssection .listingHolder").addClass("owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    dots: true,
    dotsData: false,
    autoWidth: true,
    nav: true,
    navText: ["<img class='prevbtn' src='../images/Arrowleft.png'>", "<img class='nextbtn' src='../images/Arrowright.png'>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        center: false,
        autoWidth: true,
      },
      600: {
        items: 1,
        nav: false,
        dots: true,
      },
      1000: {
        items: 1
      }
    }
  });
}

function LoadPrivateEventCarousel() {

  $(".privateeventcarousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    dotsData: false,
    nav: true,
    navText: ["<img class='prevbtn' src='../images/Arrowleft.png'>", "<img class='nextbtn' src='../images/Arrowright.png'>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
}

function matchheightmarket() {
  $(".section2Market .listingInfos").matchHeight({
    byRow: false
  });
}

function matchheightcookingclasses() {
  $(".section2CookingClasses .listingItem").matchHeight();
  $(".section2CookingClasses .listingImage").matchHeight();
  $(".section2CookingClasses .listingInfos").matchHeight({

  });
}

function showpopup() {
  $(".booknow").click(function () {
    $(".overlaypopup").fadeIn();
    $(".eventpopup").fadeIn();
  });
}

function closepopup() {
  $('.closebtn').click(function () {
    $(".overlaypopup").fadeOut();
    $(".eventpopup").fadeOut();
  });
}

function loadselect() {
  $('.customSelect select').dropkick({
    mobile: true
  });
}

function submitprivateEventform() {
  $("#submitprivateEventform").click(function () {
    $(".preloader").show().fadeOut(3000);
    $(".PrivateEventForm").delay(500).fadeOut();
    $(".PrivateEventFormSubmitted").delay(1500).fadeIn();
  });
}

function submitjobapplication() {
  $("#submitjobapplication").click(function () {
    $(".loaderjobappform").show().fadeOut(3000);
    // $(".PrivateEventForm").delay(500).fadeOut();
    // $(".PrivateEventFormSubmitted").delay(1500).fadeIn();
  });
}

function loadPrivateEventForm() {
  $(".sendanotherrequest").click(function () {
    $(".PrivateEventFormSubmitted").delay(1500).fadeOut();
    $(".PrivateEventForm").delay(500).fadeIn();
  });
}

function uploadresumechangetxt() {
  $('.JobApplicationForm .resumefile').change(function () {
    var srt = $(this).val()
    $('.resumevalue').text(srt)
  });
}

function uploadCoverchangetxt() {
  $('.JobApplicationForm .coverletterfile').change(function () {
    var srt = $(this).val()
    $('.coverlettervalue').text(srt)
  });
}

function matchHeightJoinOurTeam() {
  $(".JoinOurTeamSection .listingItem").matchHeight();
}

function OpenCloseBurgerMenu() {
  $(".burger-menuicon").click(function () {
    $(".menu").addClass("OpenAnimation");
  });
  $(".CloseBurgerMenu").click(function () {
    $(".menu").removeClass("OpenAnimation");
  });
}

function formatFooter() {
  if ($(window).width() < 900) {
    $('.footermenuitems2').detach().appendTo('.rowfirst');
    $('.footermenuitems1').detach().appendTo('.rowfirst');
    $('.openingdaysfooter').detach().appendTo('.rowsecond');
    $('.visiteatalyarabiadiv').detach().appendTo('.rowthird');
    $('.social-media-icons').detach().prependTo('.rowfourth');
  } else {
    $('.footermenuitems1').detach().appendTo('.rowfirst');
    $('.footerlogo').detach().appendTo('.rowfirst');
    $('.footermenuitems2').detach().appendTo('.rowfirst');
    $('.social-media-icons').detach().appendTo('.socialmediadiv');
    $('.visiteatalyarabiadiv').detach().appendTo('.rowsecond');
    $('.openingdaysfooter').detach().prependTo('.rowthird');
  }
}

function formatcontactus() {
  if ($(window).width() > 768 && $(window).width() < 900) {
    $(".contactusform").removeClass("offset-md-4");
    $(".contactusform").removeClass("col-md-4");
    $(".contactusform").addClass("col-md-8");
    $(".contactusform").addClass("offset-md-2");
  }
}

function loadmobileCarouselRestaurant() {
  if ($(window).width() < 768) {
    $(".typesoffood .listingHolder").addClass("owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      dots: true,
      dotsData: false,
      nav: false,
      navText: ["<img class='prevbtn' src='../images/Arrowleft.png'>", "<img class='nextbtn' src='../images/Arrowright.png'>"],
      responsive: {
        0: {
          items: 1,

        }
      }
    });
  }
  $(".typesoffood .listingItem").matchHeight();
}
$(document).ready(function (e) {
  loadhighlightscarousel();
  loadmanifestocarousel();
  loadoureventscarousel();
  loadrestaurantpicscarousel();
  LoadPrivateEventCarousel()
  matchheightmarket();
  matchHeightManifestocarosel();
  matchheightcookingclasses();
  matchHeightJoinOurTeam();
  uploadresumechangetxt();
  uploadCoverchangetxt();
  loadmobileCarouselRestaurant();
  submitjobapplication();
  formatFooter();
  formatcontactus();
  loadselect();
  OpenCloseBurgerMenu();
  submitprivateEventform();
  loadPrivateEventForm();
  showpopup();
  closepopup();
  initFunctions();
  inViewHandler();
  responsiveMenuSetup();
  responsiveMenuStateHandler();
  anchorSmoothScroll();

});

$(window).resize(function () {
  formatFooter();
  formatcontactus();
});