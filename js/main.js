/*Sidebar*/
$('.menu li a').on('click',function(){
  $('a').removeClass('active');
  $(this).addClass('active');
});

$('.menu li a').on('click',function(e){
  $(this).parent().siblings().children('.sub-menu').removeClass('open').next().slideUp();
  $(this).toggleClass('open').next().slideToggle();
});


/*horizontal assesment*/
$('.viewall').on('click',function(e){
    $('.graph-bx').show();
    $('.after-img').hide();
    $('.after-menu').hide();
    $('.af-head-menu').show();
    $('.bf-head-menu').hide();
});

$('.activeall').on('click',function(e){
    $('.graph-bx').hide();
    $('.after-img').show();
    $('.after-menu').show();
    $('.af-head-menu').hide();
    $('.bf-head-menu').show();
});
/***/

/*Stop jumping top*/
$('a[href="#"]').on("click", function(e) {
  return false;
});


/*Multi-select Picker*/
(function($) {
   $(function() {
       $('.multi-sl').fSelect();
   });
})(jQuery);


/*Tooltip*/
 $( function() {
   $(document).tooltip();
 });

 $( function() {
   $('[data-placement=top]').tooltip({
    position: {  
      my: "center bottom",  
      at: "right top-3",  
      collision: "none"  
      }  
   });

   $('[data-placement=up]').tooltip({
    position: {  
      my: "right+15 bottom",
      at: "left top-3",  
      collision: "none"  
      }  
   });
   
 });


/*dropdown*/
$(document).ready(function($){
	$('.drp-down').hide();
	$("#deletemsg").hide();

	$('.drp').on('click',function(e){
    e.preventDefault();
		$(".drp-down").slideUp();
		$('.drp').removeClass('active');

      var nextSibling = $(this).next('.drp-down');
      if($(nextSibling).is(":visible")){
      	nextSibling.slideUp();
      	$(this).removeClass('active');
      }
      else
      {
      	nextSibling.slideDown();
      	$(this).addClass('active');
      }
	});
	
});


/*fold section and unfold section*/
$(document).ready(function(){
  $(".acc-close").click(function(){
    var target = $(this).data("target"); 
    $('#'+target).addClass("close");
 });
  $(".acc-open").click(function(){
    var target = $(this).data("target"); 
    $('#'+target).removeClass("close");
 });
  $(".acc-open").hide();
  $(".acc-close").click(function(){
     $(".acc-open").show();
     $(".acc-close").hide();
  });
  $(".acc-open").click(function(){
     $(".acc-close").show();
     $(".acc-open").hide();
  });
});
/**/


/*overview*/
 $(document).ready(function(){
   $('#openrecentview').click(function(e){  
      e.stopPropagation();
   });
   $('#openrecentview-btn').click(function(e){ 
      e.preventDefault();
      e.stopPropagation();
      $('#openrecentview').slideToggle(); 
      $('#bookmark').slideUp(); 
      $('#mentionbox').slideUp();
      $('#mentionbox1').slideUp();
   });

   /**/
    $('#bookmark').click(function(e){  
      e.stopPropagation();
   });
   $('#bookmarkopen').click(function(e){ 
      e.preventDefault();
      e.stopPropagation();
      $('#bookmark').slideToggle(); 
      $('#openrecentview').slideUp(); 
      $('#mentionbox').slideUp();
      $('#mentionbox1').slideUp();
   });

   /**/
   $('#mentionbox').click(function(e){  
      e.stopPropagation();
   });
   $('#mentionbox-btn').click(function(e){ 
      e.preventDefault();
      e.stopPropagation();
      $('#mentionbox').slideToggle(); 
      $('#mentionbox1').slideUp(); 
      $('#bookmark').slideUp(); 
      $('#openrecentview').slideUp(); 
   });

   /**/
   $('#mentionbox1').click(function(e){  
      e.stopPropagation();
   });
   $('#mentionbox-btn1').click(function(e){ 
      e.preventDefault();
      e.stopPropagation();
      $('#mentionbox1').slideToggle(); 
      $('#mentionbox').slideUp(); 
      $('#bookmark').slideUp(); 
      $('#openrecentview').slideUp(); 
   });

   /**/
    $('#mentionbox').hide();
    $('#mentionbox1').hide();
    $('.bookmark-drop-down-menu').hide();
    $('.bookmark-sub-ul').hide();
    $('.bookmark-ul li a').on('click',function(){
       $('a').removeClass('active');
       $(this).addClass('active');
    });
      
    $('.bookmark-ul li a').on('click',function(e){
       $(this).parent().siblings().children('.bookmark-sub-ul').removeClass('open').next().slideUp();
       $(this).toggleClass('open').next().slideToggle();
    });

});
 
$(document).click(function(){
   $('#openrecentview').hide(); 
   $('#bookmark').hide(); 
   $('#mentionbox').hide(); 
   $('#mentionbox1').hide(); 
});


/*entity*/
function openeditnotes(){
	$("#editnotes").addClass("sidebarnav-width"); 
	$("body").addClass("menu-overlay"); 
}
function closeeditnote() {
	$("#editnotes").removeClass("sidebarnav-width"); 
	$("body").removeClass("menu-overlay"); 
}

function opennewnotes(){
	$("#editnotes").removeClass("sidebarnav-width")
	$("#newnotes").addClass("sidebarnav-width"); 
	$("body").addClass("menu-overlay"); 
}
function closenewnote() {
	$("#newnotes").removeClass("sidebarnav-width"); 
	$("body").removeClass("menu-overlay"); 
}


/*entity screening*/
function opennewscreening(){
	$("#newscreening").addClass("sidebarnav-width"); 
	$("body").addClass("menu-overlay"); 
}
function closenewscreening() {
	$("#newscreening").removeClass("sidebarnav-width"); 
	$("body").removeClass("menu-overlay"); 
}
function openeditscreening(){
	$("#editscreening").addClass("sidebarnav-width"); 
	$("body").addClass("menu-overlay"); 
}
function closeeditscreening() {
	$("#editscreening").removeClass("sidebarnav-width"); 
	$("body").removeClass("menu-overlay"); 
}


/*teamwork-note*/
function opendelmsg(){
	$("#deletemsg").show();
}
function closedelmsg(){
 	$("#deletemsg").hide();
}

function opensearchentity(){
	$("#searchentity").show();
	$("#searchentity").addClass("sidebarnav-width"); 
	$("body").addClass("menu-overlay"); 
}
function closesearchentity() {
	$("#searchentity").removeClass("sidebarnav-width"); 
	$("body").removeClass("menu-overlay"); 
}

function openentitydel(){
	$("#searchentity").hide();
	$("#entitydel").addClass("sidebarnav-width"); 
	$("body").addClass("menu-overlay"); 
}
function closeentitydel() {
	$("#entitydel").removeClass("sidebarnav-width"); 
	$("body").removeClass("menu-overlay"); 
}


/*portfolio*/
 function openeditmember(){
    $("#editmember").addClass("sidebarnav-width"); 
    $("body").addClass("menu-overlay"); 
 }
 function closeeditmember() {
    $("#editmember").removeClass("sidebarnav-width"); 
    $("body").removeClass("menu-overlay"); 
 }

 function openmemberhistory(){
    $("#memberhistory").addClass("sidebarnav-width"); 
    $("body").addClass("menu-overlay"); 
 }
 function closememberhistory() {
    $("#memberhistory").removeClass("sidebarnav-width"); 
    $("body").removeClass("menu-overlay"); 
 }

function openpfmanager(){
  $("#pfmanager").addClass("sidebarnav-width"); 
  $("body").addClass("menu-overlay"); 
}
function closepfmanager() {
  $("#pfmanager").removeClass("sidebarnav-width"); 
  $("body").removeClass("menu-overlay"); 
}

function opennewportfolio(){
  $("#pfmanager").removeClass("sidebarnav-width"); 
  $("#newportfolio").addClass("sidenav-md"); 
  $("body").addClass("menu-overlay"); 
}
function closenewportfolio() {
  $("#newportfolio").removeClass("sidenav-md"); 
  $("body").removeClass("menu-overlay");
  openpfmanager();
}

function opennewportfolio1(){
  $("#newportfolio").removeClass("sidenav-md"); 
  $("#editportfolio").removeClass("sidenav-md"); 
  $("#newportfolio1").addClass("sidenav-lg"); 
  $("body").addClass("menu-overlay"); 
}
function closenewportfolio1() {
  $("#newportfolio1").removeClass("sidenav-lg"); 
  $("body").removeClass("menu-overlay");
  opennewportfolio(); 
}

function openeditportfolio(){
  $("#newportfolio1").removeClass("sidenav-lg"); 
  $("#editportfolio").addClass("sidenav-md"); 
  $("body").addClass("menu-overlay"); 
}
function closeeditportfolio() {
  $("#editportfolio").removeClass("sidenav-md"); 
  $("body").removeClass("menu-overlay"); 
  opennewportfolio1();
}

/*date-range-picker*/
$(function() {
   $('input[name="daterange"]').daterangepicker({
     opens: 'left',
     locale: {
          format: 'MMMM D, YYYY'
      }
   }, function(start, end, label) {
     console.log("A new date selection was made: " + start.format('MMMM D, YYYY') + ' to ' + end.format('MMMM D, YYYY'));
   });
 });


/**/
$(".js-example-basic-single").select2({
  placeholder: "Select some option",
  allowClear: true
});