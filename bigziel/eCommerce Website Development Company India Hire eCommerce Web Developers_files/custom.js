$(document).ready(function () {


    $('ul.as_model li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.as_tab_content').removeClass('as_tab_active')
        $('#' + attrVal).addClass('as_tab_active');
        $('ul.as_model li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });
   
  
    $(".as-set").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find(".as-content").removeClass('as-show');
            $(this).find(".as-content").slideUp();
         
        } else {
            
            $(".as-set").removeClass("active");
            $(this).addClass("active");
            $(".as-content").slideUp();
            $(this).find(".as-content").slideDown();
        }
    });

    // $('.cus').click(function () {
    //     let attrVal = $(this).data('tab');
    //     $('.cus_tab').removeClass('show_tab')
    //     $('#' + attrVal).addClass('show_tab');
    //     $('.cus').removeClass('active_tab');
    //     $(this).addClass('active_tab');
    // });

    $('ul.tech_tab li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.tech_tab_content').removeClass('tech_tab_active')
        $('#' + attrVal).addClass('tech_tab_active');
        $('ul.tech_tab li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });
      
    $('ul.fr_model li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.fr_tab_content').removeClass('fr_tab_active')
        $('#' + attrVal).addClass('fr_tab_active');
        $('ul.fr_model li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });

    $(".fr-set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".fr-content").removeClass('fr-show');
            $(this).siblings(".fr-content").slideUp();
         
        } else {
            
            $(".fr-set > a").removeClass("active");
            $(this).addClass("active");
            $(".fr-content").slideUp();
            $(this).siblings(".fr-content").slideDown();
        }
    });

    $('ul.gs_model li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.gs_tab_content').removeClass('gs_tab_active')
        $('#' + attrVal).addClass('gs_tab_active');
        $('ul.gs_model li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });

    $(".pb-set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".pb-content").removeClass('pb-show');
            $(this).siblings(".pb-content").slideUp();
         
        } else {
            
            $(".pb-set > a").removeClass("active");
            $(this).addClass("active");
            $(".pb-content").slideUp();
            $(this).siblings(".pb-content").slideDown();
        }
    });

    $(".faq_set > a").on("click", function () {
        if ($(this).hasClass("faq_active")) {
            $(this).removeClass("faq_active");
            $(this).siblings(".faq_content").removeClass('faq_show');
            $(this).siblings(".faq_content").slideUp();
            $(".faq_set > a i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        } else {
            $(".faq_set > a i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $(this).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $(".faq_set > a").removeClass("faq_active");
            $(this).addClass("faq_active");
            $(".faq_content").slideUp();
            $(this).siblings(".faq_content").slideDown();
        }
    });

    $('ul.mf_model li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.mf_tab_content').removeClass('mf_tab_active')
        $('#' + attrVal).addClass('mf_tab_active');
        $('ul.mf_model li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });

    $('.Tools_Technologies_ul li').click(function () {
        let attrVal = $(this).data('tab');
        $('.Tools_Technologies_tab_content').removeClass('Tools_Technologies_tab_active')
        $('#' + attrVal).addClass('Tools_Technologies_tab_active');
        $('.Tools_Technologies_ul li').removeClass('active_tab');
        $(this).addClass('active_tab');
    });


    $(".mc-set > a").on("click", function () {
        if ($(this).hasClass("mc-active")) {
            $(this).removeClass("mc-active");
            $(this).siblings(".mc-content").removeClass('mc-show');
            $(this).siblings(".mc-content").slideUp();
            $(".mc-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).parent().removeClass('mc_set_border');
        } else {
            $(".mc-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).find("i").addClass("fa-chevron-down").removeClass("fa-chevron-right");
            $(".mc-set > a").removeClass("mc-active");
            $(this).addClass("mc-active");
            $(".mc-content").slideUp();
            $(this).siblings(".mc-content").slideDown();
            $('.mc-set').removeClass('mc_set_border');
            $(this).parent().addClass('mc_set_border');
        }
    });

    $(".mc-set-two > a").on("click", function () {
        if ($(this).hasClass("mc-active-two")) {
            $(this).removeClass("mc-active-two");
            $(this).siblings(".mc-content-two").removeClass('mc-show-two');
            $(this).siblings(".mc-content-two").slideUp();
            $(".mc-set-two > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).parent().removeClass('mc_set_border');
        } else {
            $(".mc-set-two > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).find("i").addClass("fa-chevron-down").removeClass("fa-chevron-right");
            $(".mc-set-two > a").removeClass("mc-active-two");
            $(this).addClass("mc-active-two");
            $(".mc-content-two").slideUp();
            $(this).siblings(".mc-content-two").slideDown();
            $('.mc-set-two').removeClass('mc_set_border');
            $(this).parent().addClass('mc_set_border');
        }
    });

    $(".fc-set > a").on("click", function () {
        if ($(this).hasClass("fc-active")) {
            $(this).removeClass("fc-active");
            $(this).siblings(".fc-content").removeClass('fc-show');
            $(this).siblings(".fc-content").slideUp();
            $(".fc-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).parent().removeClass('fc_set_border');
        } else {
            $(".fc-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).find("i").addClass("fa-chevron-down").removeClass("fa-chevron-right");
            $(".fc-set > a").removeClass("fc-active");
            $(this).addClass("fc-active");
            $(".fc-content").slideUp();
            $(this).siblings(".fc-content").slideDown();
            $('.fc-set').removeClass('fc_set_border');
            $(this).parent().addClass('fc_set_border');
        }
    });

    $(".fc-set-two > a").on("click", function () {
        if ($(this).hasClass("fc-active-two")) {
            $(this).removeClass("fc-active-two");
            $(this).siblings(".fc-content-two").removeClass('fc-show-two');
            $(this).siblings(".fc-content-two").slideUp();
            $(".fc-set-two > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).parent().removeClass('fc_set_border');
        } else {
            $(".fc-set-two > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).find("i").addClass("fa-chevron-down").removeClass("fa-chevron-right");
            $(".fc-set-two > a").removeClass("fc-active-two");
            $(this).addClass("fc-active-two");
            $(".fc-content-two").slideUp();
            $(this).siblings(".fc-content-two").slideDown();
            $('.fc-set-two').removeClass('fc_set_border');
            $(this).parent().addClass('fc_set_border');
        }
    });

    $(".wp-set > a").on("click", function () {
        if ($(this).hasClass("wp-active")) {
            $(this).removeClass("wp-active");
            $(this).siblings(".wp-content").removeClass('wp-show');
            $(this).siblings(".wp-content").slideUp();
            $(".wp-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).parent().removeClass('wp_set_border');
        } else {
            $(".wp-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).find("i").addClass("fa-chevron-down").removeClass("fa-chevron-right");
            $(".wp-set > a").removeClass("wp-active");
            $(this).addClass("wp-active");
            $(".wp-content").slideUp();
            $(this).siblings(".wp-content").slideDown();
            $('.wp-set').removeClass('wp_set_border');
            $(this).parent().addClass('wp_set_border');
        }
    });

    $(".pg-set > a").on("click", function () {
        if ($(this).hasClass("pg-active")) {
            $(this).removeClass("pg-active");
            $(this).siblings(".pg-content").removeClass('pg-show');
            $(this).siblings(".pg-content").slideUp();
            $(".pg-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).parent().removeClass('pg_set_border');
        } else {
            $(".pg-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).find("i").addClass("fa-chevron-down").removeClass("fa-chevron-right");
            $(".pg-set > a").removeClass("pg-active");
            $(this).addClass("pg-active");
            $(".pg-content").slideUp();
            $(this).siblings(".pg-content").slideDown();
            $('.pg-set').removeClass('pg_set_border');
            $(this).parent().addClass('pg_set_border');
        }
    });

    $(".zs_set > a").on("click", function () {
        if ($(this).hasClass("zs_active")) {
            $(this).removeClass("zs_active");
            $(this).siblings(".zs_content").removeClass('show');
            $(this).siblings(".zs_content").slideUp(200);
            $(".zs_set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).parent().removeClass('zs_set_border');
        } else {
            $(".zs_set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).find("i").addClass("fa-chevron-down").removeClass("fa-chevron-right");
            $(".zs_set > a").removeClass("zs_active");
            $(this).addClass("zs_active");
            $(".zs_content").slideUp(200);
            $(this).siblings(".zs_content").slideDown(200);
            $('.zs_set').removeClass('zs_set_border');
            $(this).parent().addClass('zs_set_border');
        }
    });

    $('.zielmarket_software_list li').click(function () {
        let attrVal = $(this).data('tab');
        $('.tab_content').removeClass('tab_active')
        $('#' + attrVal).addClass('tab_active');
        $('.zielmarket_software_list li').removeClass('active_tab');
        $(this).addClass('active_tab');
    });

    $('.bs_model_list li').click(function () {
        let attrVal = $(this).data('tab');
        $('.nw_tab_content').removeClass('nw_tab_active')
        $('#' + attrVal).addClass('nw_tab_active');
        $('.bs_model_list li').removeClass('nw_active_tab');
        $(this).addClass('nw_active_tab');
    });


    $(".ou-set > a").on("click", function () {
        if ($(this).hasClass("ou-active")) {
            $(this).removeClass("ou-active");
            $(this).siblings(".ou-content").removeClass('ou-show');
            $(this).siblings(".ou-content").slideUp();
            $(".ou-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
        } else {
            $(".ou-set > a i").addClass("fa-chevron-right").removeClass("fa-chevron-down");
            $(this).find("i").addClass("fa-chevron-down").removeClass("fa-chevron-right");
            $(".ou-set > a").removeClass("ou-active");
            $(this).addClass("ou-active");
            $(".ou-content").slideUp();
            $(this).siblings(".ou-content").slideDown();
        }
    });


    $('ul.pd_model li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.pd_tab_content').removeClass('pd_tab_active')
        $('#' + attrVal).addClass('pd_tab_active');
        $('ul.pd_model li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });

    $('ul.li_model li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.li_tab_content').removeClass('li_tab_active')
        $('#' + attrVal).addClass('li_tab_active');
        $('ul.li_model li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });

    $('.what_you_ul li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.wy_tab_content').removeClass('wy_tab_active')
        $('#' + attrVal).addClass('wy_tab_active');
        $('.what_you_ul li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });


    $(".acc-set").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find(".acc-content").removeClass('acc-show');
            $(this).find(".acc-content").slideUp();
         
        } else {
            
            $(".acc-set").removeClass("active");
            $(this).addClass("active");
            $(".acc-content").slideUp();
            $(this).find(".acc-content").slideDown();
        }
    });

    $(".in-set").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find(".in-content").removeClass('in-show');
            $(this).find(".in-content").slideUp();
         
        } else {
            
            $(".in-set").removeClass("active");
            $(this).addClass("active");
            $(".in-content").slideUp();
            $(this).find(".in-content").slideDown();
        }
    });

    $('ul.on_model li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.on_tab_content').removeClass('on_tab_active')
        $('#' + attrVal).addClass('on_tab_active');
        $('ul.on_model li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });

    $('ul.sd_model li ').click(function () {
        let attrVal = $(this).data('tab');
        $('.sd_tab_content').removeClass('sd_tab_active')
        $('#' + attrVal).addClass('sd_tab_active');
        $('ul.sd_model li ').removeClass('active_tab');
        $(this).addClass('active_tab');
    });
   
    $(".sd-set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".sd-content").removeClass('sd-show');
            $(this).siblings(".sd-content").slideUp();
         
        } else {
            
            $(".sd-set > a").removeClass("active");
            $(this).addClass("active");
            $(".sd-content").slideUp();
            $(this).siblings(".sd-content").slideDown();
        }
    });

    $(".tt-set").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find(".tt-content").removeClass('tt-show');
            $(this).find(".tt-content").slideUp();
         
        } else {
            
            $(".tt-set").removeClass("active");
            $(this).addClass("active");
            $(".tt-content").slideUp();
            $(this).find(".tt-content").slideDown();
        }
    });

   


    $(".bigziel_header_sub:nth-child(2)").click(function () {
        $(".bigziel_header_sub:nth-child(3)").css({"left":"0px"});

    });

    $(".bigziel_header_sub:nth-child(3) i").click(function () {
        $(".bigziel_header_sub:nth-child(3)").css({"left":"-100%"});

    });

    $(".list_link").click(function () {
        if ($(window).width() <= 992) {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).siblings(".bigziel_header_dropdown").slideUp("slow");

            } else {
                $(".list_link").removeClass("active");
                $(this).addClass("active");
                $(".bigziel_header_dropdown").slideUp("slow");
                $(this).siblings(".bigziel_header_dropdown").slideDown("slow");
            }
        }
    });
     
    	// Number Validation Check
	$(document).on('keydown', '.number_validate', function (e) {
		-1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) || (/65|67|86|88/.test(e.keyCode) && (e.ctrlKey === true || e.metaKey === true)) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && 40 >= e.keyCode || (e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) && (96 > e.keyCode || 105 < e.keyCode) && e.preventDefault()

	});


// Form Validation
	//General Form Validation
    $('#main_form').on('submit', function(e) {

        var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		var phone = $("#phone").val();
		var emailaddress = $("#emailaddress").val();
        var social = $("#social").val();
        var company = $("#company").val();
		var country = $("#country").val();
        var countrycode = $("#countrycode").val();
		var detail = $("#detail").val();
        var message = $("#message").val();
        var form_type = $("#register_form_type").val();

       // alert("firstname:"+firstname+" lastname: "+lastname+" phone: "+phone+" social: "+social+"company: "+company+ "form_type:"+form_type);

        if (form_type == 1 ) {
            if (firstname == "" && lastname == "" && phone == "" && emailaddress == "" && social == "" && country == "" && company == "" && countrycode == "" && detail == "" && message == "") {
                $("p.error").show();
                return false;
            } else {

                if (firstname == "") {
                    $("p.firstnameerror").show();
                    return false;

                } else {
                    $("p.firstnameerror").hide();
                }

                if (lastname == "") {
                    $("p.lastnameerror").show();
                    return false;

                } else {
                    $("p.lastnameerror").hide();
                }


                if (phone == "") {
                    $("p.numbererror").show();
                    return false;

                } else {
                    $("p.numbererror").hide();
                }

                if (emailaddress == "") {
                    $("p.emailerror").show();
                    return false;

                } else {
                    $("p.emailerror").hide();
                }

                if (social == "") {
                    $("p.socialerror").show();
                    return false;

                } else {
                    $("p.socialerror").hide();
                }

                if (detail == "") {
                    $("p.detailerror").show();
                    return false;

                } else {
                    $("p.detailerror").hide();
                }

                if (country == "") {
                    $("p.countryerror").show();
                    return false;

                } else {
                    $("p.countryerror").hide();
                }

                if (company == "") {
                    $("p.companyerror").show();
                    return false;

                } else {
                    $("p.companyerror").hide();
                }

                if (message == "") {
                    $("p.messageerror").show();
                    return false;

                } else {
                    $("p.messageerror").hide();
                }
            }
        }

		var formdata = "";

		if (form_type == 1) {
 
            formdata = "&firstname=" + encodeURIComponent(firstname) + "&lastname=" + encodeURIComponent(lastname) + "&phone=" + encodeURIComponent(phone) + "&emailaddress=" + encodeURIComponent(emailaddress) + "&social=" + encodeURIComponent(social) + "&company=" + encodeURIComponent(company) + "&country=" + encodeURIComponent(country) + "&detail=" + encodeURIComponent(detail) + "&message=" + encodeURIComponent(message) + "&form_type=" + encodeURIComponent(form_type);
            // alert(formdata);

		}

		// $.ajax({
		// 	type: 'POST',
		// 	url: 'add-enquiry.php',
		// 	data: formdata,
		// 	success: function (response) {
		// 		console.log("server response", response)
        //        			 response = JSON.parse(response)
		// 		if (response.message == "success") {
		// 			$("#main_form").find('input[type=text], input[type=email]').val('');
		// 			// window.location.href = 'https://www.courseinn.com/thankyou.php';
		// 		}

		// 	},
		// 	error: function (data) {
		// 		$("#main_form").show().addClass("alert alert-danger").text("Nothing").fadeOut(5000);

		// 	}
		// });
    });

    //$("#contact_form").click(function () {
    $('#contact_register_form').on('submit', function(e) {

        var firstname = $("#contactfirstname").val();
		var lastname = $("#contactlastname").val();
		var phone = $("#contactphone").val();
		var emailaddress = $("#contactemailaddress").val();
        var social = $("#contactsocial").val();
        var company = $("#contactcompany").val();
		var country = $("#contactcountry").val();
		var detail = $("#contactdetail").val();
        var message = $("#contactmessage").val();
        var form_type = $("#contact_form_type").val();

 console.log("firstname:"+firstname+" lastname: "+lastname+" phone: "+phone+" social: "+social+"company: "+company+ "form_type:"+form_type);

   if (form_type == 2 ) {
    if (firstname == "" && lastname == "" && phone == "" && emailaddress == ""  && country == "" && company == "" && detail == "" && message == "") {
        $("p.contacterror").show();
        return false;
    } else {

        if (firstname == "") {
            $("p.contactfirstnameerror").show();
            return false;

        } else {
            $("p.contactfirstnameerror").hide();
        }

        if (lastname == "") {
            $("p.contactlastnameerror").show();
            return false;

        } else {
            $("p.contactlastnameerror").hide();
        }


        if (phone == "") {
            $("p.contactnumbererror").show();
            return false;

        } else {
            $("p.contactnumbererror").hide();
        }

        if (emailaddress == "") {
            $("p.contactemailerror").show();
            return false;

        } else {
            $("p.contactemailerror").hide();
        }
/* 
        if (social == "") {
            $("p.contactsocialerror").show();
            return false;

        } else {
            $("p.contactsocialerror").hide();
        } */

        if (detail == "") {
            $("p.contactdetailerror").show();
            return false;

        } else {
            $("p.contactdetailerror").hide();
        }

        if (country == "") {
            $("p.contactcountryerror").show();
            return false;

        } else {
            $("p.contactcountryerror").hide();
        }

        if (company == "") {
            $("p.contactcompanyerror").show();
            return false;

        } else {
            $("p.contactcompanyerror").hide();
        }

        if (message == "") {
            $("p.contactmessageerror").show();
            return false;

        } else {
            $("p.contactmessageerror").hide();
        }
    }
}
		var formdata = "";

		if (form_type == 2) {
 
            formdata = "&firstname=" + encodeURIComponent(firstname) + "&lastname=" + encodeURIComponent(lastname) + "&phone=" + encodeURIComponent(phone) + "&emailaddress=" + encodeURIComponent(emailaddress) + "&social=" + encodeURIComponent(social) + "&company=" + encodeURIComponent(company) + "&country=" + encodeURIComponent(country) + "&detail=" + encodeURIComponent(detail) + "&message=" + encodeURIComponent(message) + "&form_type=" + encodeURIComponent(form_type);
            // alert(formdata);

        }
        
       // $("#contact_register_form").submit();


		/*$.ajax({
			type: 'POST',
			url: 'add-enquiry.php',
			data: formdata,
			success: function (response) {
				console.log("server response", response)
               			 response = JSON.parse(response)
				if (response.message == "success") {
					$("#contact_register_form").find('input[type=text], input[type=email]').val('');
					 window.location.href = 'https://www.bigziel.com/thankyou.php';
				}

			},
			error: function (data) {
				$("#contact_register_form").show().addClass("alert alert-danger").text("Nothing").fadeOut(5000);

			}
        });
        */
    });

    $("#career_register_form").on('submit', function(e) {

        var firstname = $("#careerfirstname").val();
		var lastname = $("#careerlastname").val();
		var phone = $("#careerphone").val();
		var emailaddress = $("#careeremailaddress").val();
        var  experience= $("#careerexperience").val();
		var detail = $("#careerdetail").val();
        var file = $("#careerfile").val();
        var form_type = $("#career_form_type").val();

 //alert("firstname:"+firstname+" lastname: "+lastname+" phone: "+phone+" experience: "+experience+ "form_type:"+form_type);


 if (form_type == 3 ) {
    if (firstname == "" && lastname == "" && phone == "" && emailaddress == "" && experience == "" && detail == "" && file == "") {
        $("p.careererror").show();
        return false;
    } else {

        if (firstname == "") {
            $("p.careerfirstnameerror").show();
            return false;

        } else {
            $("p.careerfirstnameerror").hide();
        }

        if (lastname == "") {
            $("p.careerlastnameerror").show();
            return false;

        } else {
            $("p.careerlastnameerror").hide();
        }

        if (phone == "") {
            $("p.careernumbererror").show();
            return false;

        } else {
            $("p.careernumbererror").hide();
        }

        if (emailaddress == "") {
            $("p.careeremailerror").show();
            return false;

        } else {
            $("p.careeremailerror").hide();
        }
        if (experience == "") {
            $("p.careerexperienceerror").show();
            return false;

        } else {
            $("p.careerexperienceerror").hide();
        }

        if (detail == "") {
            $("p.careerdetailerror").show();
            return false;

        } else {
            $("p.careerdetailerror").hide();
        }

        if (file == "") {
            $("p.careerfileerror").show();
            return false;

        } else {
            $("p.careerfileerror").hide();
        }
    }
}

		var formdata = "";

		if (form_type == 3) {
 
            formdata = "&firstname=" + encodeURIComponent(firstname) + "&lastname=" + encodeURIComponent(lastname) + "&phone=" + encodeURIComponent(phone) + "&emailaddress=" + encodeURIComponent(emailaddress) + "&experience=" + encodeURIComponent(experience) + "&detail=" + encodeURIComponent(detail) + "&file=" + encodeURIComponent(file) + "&form_type=" + encodeURIComponent(form_type);
            // alert(formdata);

		}

		// $.ajax({
		// 	type: 'POST',
		// 	url: 'add-enquiry.php',
		// 	data: formdata,
		// 	success: function (response) {
		// 		console.log("server response", response)
        //        			 response = JSON.parse(response)
		// 		if (response.message == "success") {
		// 			$("#career_register_form").find('input[type=text], input[type=email]').val('');
		// 			// window.location.href = 'https://www.courseinn.com/thankyou.php';
		// 		}

		// 	},
		// 	error: function (data) {
		// 		$("#career_register_form").show().addClass("alert alert-danger").text("Nothing").fadeOut(5000);

		// 	}
		// });
    });

});