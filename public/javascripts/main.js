
var singleRestaurentTemplate = "";

/**
 * Method to get the template of single restaurent
 * @param {*} type 
 */
var getRestaurentTemplate = () => {
    $.ajax({
        url: 'templates/singleRestaurentTmplt.htm',
        method: 'GET',
        success: (responseTemplate) => {
            singleRestaurentTemplate = responseTemplate;
            console.log(responseTemplate);
            singleRestaurentTemplate = Handlebars.compile(singleRestaurentTemplate);
        }

    })
}

var loadSelectedTemplate = (type) => {
    $("mainTemplateContainer").addClass("background-image");
    var url = '';
    switch (type) {
        case 'login':
            url = 'templates/login.htm';
            break;
        case 'fgpwd':
            url = 'templates/forgotPwd.htm';
            break;
        case 'newSignup':
            url = 'templates/signup.htm';
            break;
        case 'expRestrnt':
            $("#mainTemplateContainer").removeClass("loginBlock");
            $("#hideOnLogin").remove();
            url = 'templates/restaurentExplore.htm';
            break;
    }
    $.ajax({
        url: url,
        method: 'GET',
        success: (responseTemplate) => {
            $("#mainTemplateContainer").html(responseTemplate);
            runCarousel();

            if (type == 'expRestrnt') {
                getRestaurentData({});

            }
        }
    })
}

var searchRestaurents = () => {
    var data = {
        searchText: $("#searchText").val()
    }
    console.log(data);
    getRestaurentData(data);
}

var getRestaurentData = (data) => {
    var url = '/get/restaurentDetails';
    $.ajax({
        url: url,
        method: 'POST',
        dataType: 'JSON',
        data: data,
        success: (response) => {
            console.log(response);
            $("#exploreRestaurants").html("");
            var restaurentData = response.details;
            for (var i = 0; i < restaurentData.length; i++) {
                restaurentData[i].starTemplate = getRatingStarTemplate(restaurentData[i].ratings);
                $("#exploreRestaurants").append(singleRestaurentTemplate(restaurentData[i]));
            }
        },
        error: (err) => {
            console.log(err);
        }
    })
}

var getRatingStarTemplate = (rating) => {
    var startTemplate = '';
    var isHalfStarThere = false;
    if (rating % 1 == 0) { // No half stars
        isHalfStarThere = false;
    } else {
        isHalfStarThere = true;
    }
    for (var i = 0; i < Math.floor(rating); i++) {
        startTemplate += "<i class='fa fa-star'></i>";
    }
    if (isHalfStarThere) {
        startTemplate += '<i class="fa fa-star-half-empty"></i>';
    }
    var emptyStarCount = Math.floor(5 - rating);
    for (var i = 0; i < emptyStarCount; i++) {
        startTemplate += "<i class='fa fa-star-o'></i>";
    }
    return startTemplate;
}

$(document).ready(() => {


    fetch('/check/isUserLoggedin', {
        method: 'POST', // or 'PUT'
        headers: {
        },
        body: {},
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("data");
            console.log(data);
            if (data.isUserLoggedin) {
                loadSelectedTemplate('expRestrnt');
            } else {
                loadSelectedTemplate('login');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    /*
        $.ajax({
            url: '/check/isUserLoggedin',
            method: 'POST',
            dataType: 'JSON',
            success: (response) => {
                console.log("response");
                console.log(response);
                
            }
        })*/
    getRestaurentTemplate();
})


var validateCustomer = () => {
    var userInfo = {};
    userInfo.userAccountId = $("#userAccountId").val();
    userInfo.accountPwd = $("#userPassword").val();
    console.log(userInfo);


    $.ajax({
        url: '/validate/customer/details',
        method: 'POST',
        dataType: 'JSON',
        data: userInfo,
        success: (response) => {
            if (response.status == 'Success') {
                // valid user
                loadSelectedTemplate('expRestrnt');
            } else {
                $("#loginError").show(100);
            }
        }
    })
}


function runCarousel(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        autoplay: true,
        stagePadding: 100,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900:{
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

}