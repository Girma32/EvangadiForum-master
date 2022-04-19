$(document).ready(function () {
  // Ajax call to Register
  $(".signupForm").ajaxForm({
    url: Ns_Ajax_Call() + "?v=signup",
    dataType: "text",
    beforeSend: function () {
      // alert("go");
      $(".signupForm .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      try {
        var obj = $.parseJSON(e);
        // $('.ajax-return-login').html('');
        $.each(obj, function (key, value) {
          $(".form-control").removeClass("error");
          $(".authfy-panel")
            .find("." + value.class)
            .addClass("error");
          if (value.note) {
            $(".ajax-return").html(value.note);
          }
        });
        $(".signupForm .btn-primary").attr("disabled", false);
      } catch (e) {
        window.scrollTo(0, 0);
        location.reload();
      }
    },
  });
  // Ajax call to Login
  $(".loginForm").ajaxForm({
    url: Ns_Ajax_Call() + "?v=login",
    dataType: "text",

    beforeSend: function () {
      $(".loginForm .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      try {
        var obj = $.parseJSON(e);

        $.each(obj, function (key, value) {
          $(".form-control").removeClass("error");
          $(".authfy-panel")
            .find("." + value.class)
            .addClass("error");
          $(".ajax-return-login").html(value.note);
        });
        $(".loginForm .btn-primary").attr("disabled", false);
      } catch (e) {
        window.scrollTo(0, 0);
        location.reload();
      }
    },
  });
  // Ajax call to add location
  $(".locationForm").ajaxForm({
    url: Ns_Ajax_Call() + "?v=location",
    dataType: "text",

    beforeSend: function () {
      // alert("go");
      $(".locationForm .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // Ajax call to add tech pro
  $(".inTechFormPro").ajaxForm({
    url: Ns_Ajax_Call() + "?v=inTechFormPro",
    dataType: "text",

    beforeSend: function () {
      // alert("go");
      $(".inTechFormPro .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // Ajax call to add new comers to tech
  $(".inTechFormNew").ajaxForm({
    url: Ns_Ajax_Call() + "?v=inTechFormNew",
    dataType: "text",

    beforeSend: function () {
      // alert("go");
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // Add Job Title
  $(".jobTitle").ajaxForm({
    url: Ns_Ajax_Call() + "?v=jobTitle",
    dataType: "text",
    beforeSend: function () {
      // alert("go");
      $(".jobTitle .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      try {
        var obj = $.parseJSON(e);

        $.each(obj, function (key, value) {
          $(".form-control").removeClass("error");
          $(".authfy-panel")
            .find("." + value.class)
            .addClass("error");
        });
        $(".jobTitle .btn-primary").attr("disabled", false);
      } catch (e) {
        window.scrollTo(0, 0);
        location.reload();
      }
    },
  });
  // Choose interests
  $(".choose_interests").ajaxForm({
    url: Ns_Ajax_Call() + "?v=choose_interests",
    dataType: "text",

    beforeSend: function () {
      // alert("go");
      $(".choose_interests .btn-primary").attr("disabled", true);
      $(".beginner_advice button").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // Skill levels chosen
  $(".interest_skill").ajaxForm({
    url: Ns_Ajax_Call() + "?v=interest_skill",
    dataType: "text",

    beforeSend: function () {
      // alert("go");
      $(".interest_skill .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // Skill levels chosen
  $(".applications_chosen").ajaxForm({
    url: Ns_Ajax_Call() + "?v=applications_chosen",
    dataType: "text",

    beforeSend: function () {
      $(".applications_chosen .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      try {
        window.scrollTo(0, 0);
        var obj = $.parseJSON(e);
        $(".ajax-return-login").html(
          "Please enter your phone number and choose an application to contact you with"
        );
        $(".applications_chosen .btn-primary").attr("disabled", false);
      } catch (e) {
        window.scrollTo(0, 0);
        location.reload();
      }
    },
  });
  // Goin study group
  $(".study_group_chosen").ajaxForm({
    url: Ns_Ajax_Call() + "?v=study_group_chosen",
    dataType: "text",

    beforeSend: function () {
      $(".study_group_chosen .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });

  // Choose mentor
  $(".choose_mentor").ajaxForm({
    url: Ns_Ajax_Call() + "?v=choose_mentor",
    dataType: "text",

    beforeSend: function () {
      // alert("go");
      $(".choose_mentor button").attr("disabled", true);
      $(".choose_mentor button").addClass("btn-primary");
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // beginner_advice
  $(".beginner_advice").ajaxForm({
    url: Ns_Ajax_Call() + "?v=beginner_advice",
    dataType: "text",

    beforeSend: function () {
      // alert("go");
      $(".beginner_advice button").attr("disabled", true);
      $(".choose_interests button").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // Mark the congratulations page as seen
  $(".beginner_welcome_intro").ajaxForm({
    url: Ns_Ajax_Call() + "?v=beginner_welcome_intro",
    dataType: "text",

    beforeSend: function () {
      $(".beginner_welcome_intro button").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // skip_profile_pic
  $(".skip_profile_pic").ajaxForm({
    url: Ns_Ajax_Call() + "?v=skip_profile_pic",
    dataType: "text",

    beforeSend: function () {
      $(".skip_profile_pic button").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // Choose another mentor
  $(".choose_another_mentor").ajaxForm({
    url: Ns_Ajax_Call() + "?v=choose_another_mentor",
    dataType: "text",

    beforeSend: function () {
      $(".choose_another_mentor button").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // Choose another mentor
  $(".deleteUser").ajaxForm({
    url: Ns_Ajax_Call() + "?v=deleteUser",
    dataType: "text",

    beforeSend: function () {
      $(".deleteUser button").attr("disabled", true);
    },
    success: function (e) {
      window.scrollTo(0, 0);
      location.reload();
    },
  });
  // Admin area - Add user to a class
  $(".register-to-class").ajaxForm({
    url: Ns_Ajax_Call() + "?v=registerToClass",
    dataType: "text",

    beforeSend: function () {
      $(".register-to-class button").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Reset password
  $(".forgetForm").ajaxForm({
    url: Ns_Ajax_Call() + "?v=forgetPassword",
    dataType: "text",

    beforeSend: function () {
      $(".forgetForm button").attr("disabled", true);
    },
    success: function (e) {
      // location.reload();
      try {
        var obj = $.parseJSON(e);
        $.each(obj, function (key, value) {
          $(".email-not-found").show();
          $(".email-not-found").html("This email address was not found");
          $(".forgetForm button").attr("disabled", false);
        });
      } catch (e) {
        $(".reset-wrapper").hide();
        $(".reset-link-sent").show();
      }
    },
  });

  // Enter new password
  $(".newPassword").ajaxForm({
    url: Ns_Ajax_Call() + "?v=newPassword",
    dataType: "text",

    beforeSend: function () {
      $(".newPassword button").attr("disabled", true);
    },
    success: function (e) {
      // location.reload();
      $(".new-pass-wrapper").hide();
      $(".new-pass-set").show();
    },
  });

  // Request to join class
  $(".requestToJoinClass").ajaxForm({
    url: Ns_Ajax_Call() + "?v=requestToJoinClass",
    dataType: "text",

    beforeSend: function () {
      $(".requestToJoinClass .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      try {
        var obj = $.parseJSON(e);
        // $('.ajax-return-login').html('');
        $.each(obj, function (key, value) {
          $(".form-control").removeClass("error");
          $(".authfy-panel")
            .find("." + value.class)
            .addClass("error");
        });
        $(".requestToJoinClass .btn-primary").attr("disabled", false);
      } catch (e) {
        $(".request-class-wrapper").hide();
        $(".authfy-login").addClass("success");
        $(".successfully-requested").show();
      }
    },
  });

  // Add to potential
  $(".addToPotential").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addToPotential",
    dataType: "text",

    beforeSend: function () {
      $(".addToPotential .btn-primary").attr("disabled", true);
    },

    success: function (e) {
      location.reload();
    },
  });
  // Add to DMV potential
  $(".addToPotentialDMV").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addToPotentialDMV",
    dataType: "text",

    beforeSend: function () {
      $(".addToPotentialDMV .btn-primary").attr("disabled", true);
    },

    success: function (e) {
      location.reload();
    },
  });
  // Save note on potential students
  $(".prospectNote").ajaxForm({
    url: Ns_Ajax_Call() + "?v=prospectNote",
    dataType: "text",

    beforeSend: function () {
      $(".prospectNote .btn-outline-primary").attr("disabled", true);
    },

    success: function (e) {
      location.reload();
    },
  });
  // Confirm member
  $(".confirmGroupMember").ajaxForm({
    url: Ns_Ajax_Call() + "?v=confirmGroupMember",
    dataType: "text",

    beforeSend: function () {
      $(".confirmGroupMember .btn-primary").attr("disabled", true);
    },

    success: function (e) {
      location.reload();
    },
  });
  // Send initial welcome email
  $(".sendInitialEmail").ajaxForm({
    url: Ns_Ajax_Call() + "?v=sendInitialEmail",
    dataType: "text",

    beforeSend: function () {
      $(".sendInitialEmail .btn-primary").attr("disabled", true);
    },

    success: function (e) {
      location.reload();
    },
  });

  // Save note on prospect student (Those who request to join)
  $(".prospectNoteOnProspectPage").ajaxForm({
    url: Ns_Ajax_Call() + "?v=prospectNoteOnProspectPage",
    dataType: "text",

    beforeSend: function () {
      $(".prospectNoteOnProspectPage .btn-outline-primary").attr(
        "disabled",
        true
      );
    },

    success: function (e) {
      location.reload();
    },
  });

  // Save note on students
  $(".studentNote").ajaxForm({
    url: Ns_Ajax_Call() + "?v=studentNote",
    dataType: "text",

    beforeSend: function () {
      $(".studentNote .btn-outline-primary").attr("disabled", true);
    },

    success: function (e) {
      location.reload();
    },
  });

  // Save access of students
  $(".studentAccess").ajaxForm({
    url: Ns_Ajax_Call() + "?v=studentAccess",
    dataType: "text",

    beforeSend: function () {
      $(".studentNote .btn-outline-primary").attr("disabled", true);
    },

    success: function (e) {
      location.reload();
    },
  });

  // Save study group additional info
  $(".addedToWhatsAppStudyGroup").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addedToWhatsAppStudyGroup",
    dataType: "text",

    beforeSend: function () {
      $(".addedToWhatsAppStudyGroup .btn-primary").attr("disabled", true);
    },

    success: function (e) {
      location.reload();
    },
  });

  // Request to unsubscribe
  $(".requestToUnsubscribe").ajaxForm({
    url: Ns_Ajax_Call() + "?v=requestToUnsubscribe",
    dataType: "text",

    beforeSend: function () {
      $(".requestToUnsubscribe .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      try {
        var obj = $.parseJSON(e);
        // $('.ajax-return-login').html('');
        $.each(obj, function (key, value) {
          $(".form-control").removeClass("error");
          $(".authfy-panel")
            .find("." + value.class)
            .addClass("error");
        });
        $(".requestToUnsubscribe .btn-primary").attr("disabled", false);
      } catch (e) {
        $(".request-class-wrapper").hide();
        $(".authfy-login").addClass("success");
        $(".successfully-requested").show();
      }
    },
  });
  // Onboarding step
  $(".onboarding_steps").ajaxForm({
    url: Ns_Ajax_Call() + "?v=onboarding_steps",
    dataType: "text",

    beforeSend: function () {
      $(".onboarding_steps .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  $(".job-search-ready").ajaxForm({
    url: Ns_Ajax_Call() + "?v=job-search-ready",
    dataType: "text",

    beforeSend: function () {
      $(".job-search-ready .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Update student batch
  $(".studentBatch").ajaxForm({
    url: Ns_Ajax_Call() + "?v=update-batch",
    dataType: "text",

    beforeSend: function () {
      $(".studentBatch .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Add course topic

  $(".addtopic").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addtopic",
    dataType: "text",

    beforeSend: function () {
      $(".addtopic .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Add checklist topic id in session
  $(".addchecklistsession").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addchecklistsession",
    dataType: "text",

    beforeSend: function () {
      $(".addchecklistsession .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      window.location.href =
        "https://www.evangadi.com/guaro/evaluation/addchecklistitem";
      // location.reload();
    },
  });

  // Add checklist item
  $(".addchecklistitem").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addchecklistitem",
    dataType: "text",

    beforeSend: function () {
      $(".addchecklistitem .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Mark checklist complete
  $(".checklist-item-mark-complete").ajaxForm({
    url: Ns_Ajax_Call() + "?v=checklist-item-mark-complete",
    dataType: "text",

    beforeSend: function () {
      $(".checklist-item-mark-complete .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Additional note to checklist item
  $(".additionalnote").ajaxForm({
    url: Ns_Ajax_Call() + "?v=additionalnote",
    dataType: "text",

    beforeSend: function () {
      $(".additionalnote .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Group checklist form
  // Submit on value change
  $(".groups-checklist-filter").change(function () {
    $("form").submit();
  });

  $(".groups-checklist-filter").ajaxForm({
    url: Ns_Ajax_Call() + "?v=groups-checklist-filter",
    dataType: "text",

    beforeSend: function () {
      $(".groups-checklist-filter .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Live sessions link creation
  // Submit on value change
  $(".add-new-session-link .select-css").change(function () {
    $("form.add-new-session-link").submit();
  });

  // Add new session link
  $(".add-new-session-link").ajaxForm({
    url: Ns_Ajax_Call() + "?v=add-new-session-link",
    dataType: "text",

    beforeSend: function () {
      $(".add-new-session-link .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Submit group filter form on change
  $(".filter-group-member .select-css").change(function () {
    $("form.filter-group-member").submit();
  });
  // Filter group members
  $(".filter-group-member").ajaxForm({
    url: Ns_Ajax_Call() + "?v=filter-group-member",
    dataType: "text",

    beforeSend: function () {
      $(".filter-group-member .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Confirm user group
  $(".change-group .select-css").change(function () {
    $("form.change-group").submit();
  });
  // Filter group members
  $(".change-group").ajaxForm({
    url: Ns_Ajax_Call() + "?v=change-group",
    dataType: "text",

    beforeSend: function () {
      $(".change-group .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Mark user as completed course
  $(".completedCourse").ajaxForm({
    url: Ns_Ajax_Call() + "?v=completedCourse",
    dataType: "text",

    beforeSend: function () {
      $(".completedCourse .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Generate certificate
  $(".generateCertificate").ajaxForm({
    url: Ns_Ajax_Call() + "?v=generateCertificate",
    dataType: "text",

    beforeSend: function () {
      $(".generateCertificate .btn-primary").attr("disabled", true);
      $(".authfy-panel.panel-signup").hide();
      $(".workingonit").show();
    },
    success: function (e) {
      location.reload();
    },
  });

  // Add course topic
  $(".addCoursetopic").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addCoursetopic",
    dataType: "text",

    beforeSend: function () {
      $(".addCoursetopic .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Add class video
  $(".addClassVideo").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addClassVideo",
    dataType: "text",

    beforeSend: function () {
      $(".addClassVideo .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Confirm user group
  $(".watchedClass .select-css").change(function () {
    $("form.watchedClass").submit();
  });

  // Watched video filter
  $(".watchedClass").ajaxForm({
    url: Ns_Ajax_Call() + "?v=watchedClass",
    dataType: "text",

    beforeSend: function () {
      $(".watchedClass .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });

  // Attendance filter
  $(".attendanceSessions .select-css").change(function () {
    $("form.attendanceSessions").submit();
  });
  // Watched video filter
  $(".attendanceSessions").ajaxForm({
    url: Ns_Ajax_Call() + "?v=attendanceSessions",
    dataType: "text",

    beforeSend: function () {
      $(".attendanceSessions .btn-primary").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Deactivate active session
  $(".deactivateSession").ajaxForm({
    url: Ns_Ajax_Call() + "?v=deactivateSession",
    dataType: "text",

    beforeSend: function () {
      $(".deactivateSession .btn-success").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Activate session
  $(".activateSession").ajaxForm({
    url: Ns_Ajax_Call() + "?v=activateSession",
    dataType: "text",

    beforeSend: function () {
      $(".activateSession .btn-light").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Edit class video/note
  $(".editClassVideo").ajaxForm({
    url: Ns_Ajax_Call() + "?v=editClassVideo",
    dataType: "text",

    beforeSend: function () {
      $(".editClassVideo .btn").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Update minimum minutes required
  $(".minMinutesRequired").ajaxForm({
    url: Ns_Ajax_Call() + "?v=minMinutesRequired",
    dataType: "text",

    beforeSend: function () {
      $(".minMinutesRequired .btn").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Add Question Asked In Class
  $(".addQuestionAskedInClass").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addQuestionAskedInClass",
    dataType: "text",

    beforeSend: function () {
      $(".addQuestionAskedInClass .btn").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Add checklist item per video
  $(".addchecklistForVideo").ajaxForm({
    url: Ns_Ajax_Call() + "?v=addchecklistForVideo",
    dataType: "text",

    beforeSend: function () {
      $(".addchecklistForVideo .btn").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Remove question asked in class
  $(".removeQuestion").ajaxForm({
    url: Ns_Ajax_Call() + "?v=removeQuestion",
    dataType: "text",

    beforeSend: function () {
      $(".removeQuestion .btn").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Remove checklist item
  $(".removeChecklistItem").ajaxForm({
    url: Ns_Ajax_Call() + "?v=removeChecklistItem",
    dataType: "text",

    beforeSend: function () {
      $(".removeChecklistItem .btn").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
  // Remove checklist item original format
  $(".removeChecklistItemOriginal").ajaxForm({
    url: Ns_Ajax_Call() + "?v=removeChecklistItemOriginal",
    dataType: "text",

    beforeSend: function () {
      $(".removeChecklistItemOriginal .btn").attr("disabled", true);
    },
    success: function (e) {
      location.reload();
    },
  });
});
