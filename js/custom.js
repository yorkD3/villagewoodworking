/* ============================================
   VW LEAD-TIME BANNER — Dismiss Logic
   ============================================ */

function dismissBanner() {
  var banner = document.getElementById('vwLeadBanner');
  if (banner) {
    banner.classList.add('is-hidden');
    try { sessionStorage.setItem('vw_banner_dismissed', '1'); } catch(e) {}
  }
}

(function() {
  try {
    if (sessionStorage.getItem('vw_banner_dismissed') === '1') {
      var banner = document.getElementById('vwLeadBanner');
      if (banner) {
        banner.style.transition = 'none';
        banner.classList.add('is-hidden');
      }
    }
  } catch(e) {}
})();


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//  course section owl carousel

$(".work_owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    autoHeight: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Attempt at form-sheets submission
// async function signup(){
//   var form = document.getElementById("sheetdb-form");
//   form.addEventListener("submit", e => {
//     e.preventDefault();

//     let email = document.getElementById("newsletter_email").value;
//     // console.log(email);
//     if (email == "" || !email.contains("@")){
//         //throw error
//         // alert("Confirm you have a valid email address!")
//     } else{
//         // alert("Form Submitted")
//         // send data
//         // console.log('email address : ${email.value}');

//         const url = "https://script.google.com/macros/s/AKfycbxpBogxbGVRkfT-jyhxYvFUX2WfCZS6yB42Twyc83UPsxuGCiXmfpJl39qITbUhJdTR/exec"
//         let formData = new FormData();
//         formData.append("Email", email);
        
//         fetch(url, {
//             method: "POST",
//             body: formData
//         }).then(
//             response => response.json()
//         ).then(r=>console.log(r))

//         return alert 
//     }
//   }
//   )
// }


// function formDataToJson(f) {
//     return Object.fromEntries(Array.from(f.keys(), k =>
//       k.endsWith('[]') ? [k.slice(0, -2), f.getAll(k)] : [k, f.get(k)]));
// }

// const url = "https://script.google.com/macros/s/AKfycbxpBogxbGVRkfT-jyhxYvFUX2WfCZS6yB42Twyc83UPsxuGCiXmfpJl39qITbUhJdTR/exec"
// let formData = new FormData();
// formData.append("Email", "ledonna.griffin@gmail.com");

// fetch(url, {method:'POST', body: formDataToJson(formData)}).then(r=>r.json()).then(r=>console.log(r))