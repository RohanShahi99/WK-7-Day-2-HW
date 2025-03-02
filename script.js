//User interaction with table cells
 $(document).ready(function () {  
     $("td").click(function () {
    var content = $(this).text();
    var columnIndex = $(this).index(); 
    var cliffSiteName = $("th").eq(columnIndex).text(); 

     if (content != "Not Available") {
      $(this).toggleClass("tdhighlight");

       if ($(this).hasClass("tdhighlight")) {
         $("#displaySelected").css("visibility", "visible");         $("#displaySelected").css("margin-top", "2em");
         // Include the cliff site name with the activity
         $("#result").append("<p>" + content + " at " + cliffSiteName + "</p>");
      } else {
        $("#result p:contains(" + content + ")").remove(); 

         if ($("#result").has("p").length == 0) {
           
           //check if there are any child elements within parent
           $("#displaySelected").css("visibility", "hidden"); 
           $("#displaySelected").css("margin-top", "0"); 
         }
       }
     }
   });
 });
$(document).ready(function () {
    $("td").click(function () {
      var content = $(this).text();
      var columnIndex = $(this).index();
      var cliffSiteName = $("th").eq(columnIndex).text();
  
      if (content !== "Not Available") {
        $(this).toggleClass("tdhighlight");
  
        if ($(this).hasClass("tdhighlight")) {
          $("#selectedActivities").append("<p>" + content + " at " + cliffSiteName + "</p>");
        } else {
          $("#selectedActivities p:contains(" + content + ")").remove();
        }
  
        // If there's at least one selected activity, show the modal
        if ($("#selectedActivities").has("p").length > 0) {
          $("#activityModal").modal("show");
        }
      }
    });
  });
  // Create a time data function
function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
  
    var utchr = d.getUTCHours();
    var timeDiff = utchr - hr;
}
    if (timeDiff < 0) {
      timeDiff += 24; // 
  
    if (timeDiff < 0) {
      adjTimeDiff = -timeDiff;
    } else {
      adjTimeDiff = timeDiff;
    }
    //var adjTimeDiff;
    var timeZone; // PT
    switch (adjTimeDiff) {
      case 8:
        timeZone = "PT"; 
        break;
      default:
        timeZone = "Unknown Zone"; // Catch-all for other cases
    }
  
    // Add 0 single digits for seconds
    if (sec < 10) {
      sec = "0" + sec;
    }
    // Add 0 single digits for minutes
    if (min < 10) {
      min = "0" + min;
    }
  
    // Determine AM or PM string
    if (hr == 12) {
      ampm = "PM";
    } else if (hr > 12) {
      hr -= 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }
    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
  
    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerHTML = time;
  
    setInterval(currentTime, 1000);
  }
  
  currentTime();
  $(document).ready(function(){
    /* Append lightbox and backdrop to body */
    $('body').append('<div class="backdrop"></div><div class="box"><div class="close">&times;</div></div>');
    
    /* Open lightbox on image click */
    $('.cliffs-container img').click(function(){
        var imgSrc = $(this).attr('src'); 

        // Show backdrop and lightbox with proper z-index
        $('.backdrop').css({'display': 'block', 'z-index': '998'}).animate({'opacity':'.50'}, 300, 'linear');
        $('.box').css({'z-index': '999'}).fadeIn();
        
       
        if ($('.box img').length) {
            $('.box img').attr('src', imgSrc); 
        } else {
            var img = $('<img>').attr('src', imgSrc); 
            $('.box').append(img); 
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});

var code = "";
var getCode = '';
var btnValue;
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

function generateCode() {

  for (var i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }

  return code;
}

document.getElementById("codes").innerHTML = generateCode();

function disableButton(btnValue) {
    document.getElementById("submit").disabled = btnValue;
    if (btnValue == true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    getCode = document.getElementById("codeentered").value;
    var charset1 = getCode.trim();
    var charset2 = code.trim();

    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
}
const partners = [
    { filename: "partner-bustour.png", alt: "Partner Bus Tours" },
    { filename: "partner-cabinrental.png", alt: "Partner Cabin Rental" },
    {
      filename: "partner-campingadv.png",
      alt: "Partner Camping Adventure",
    },
    { filename: "partner-collegetours.png", alt: "Partner College Tours" },
    { filename: "partner-rentalbike.png", alt: "Partner Bike Rentals" },
    { filename: "partner-tourgroup.png", alt: "Partner Tour Group" },
  ];
  
  const partnerList = document.getElementById("partner-list");
  console.log(partnerList);
  
  partners.forEach((partner) => {
    const li = document.createElement("li");
    li.classList.add("partner");
  
    const img = document.createElement("img");
    img.src = `img/parnters/${partner.filename}`;
    img.alt = partner.alt;
  
    li.appendChild(img);
    partnerList.appendChild(li);
  });