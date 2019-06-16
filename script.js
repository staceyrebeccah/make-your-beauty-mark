
"use strict"

/* Jump to place on page */

if (navigator.userAgent.match(/Chrome|AppleWebKit/)) { 
    window.location.href = "#about";
    window.location.href = "#about";  /* these take twice */
} else {
    window.location.hash = "about";
}

if (navigator.userAgent.match(/Chrome|AppleWebKit/)) { 
    window.location.href = "#what-we-do";
    window.location.href = "#what-we-do";  /* these take twice */
} else {
    window.location.hash = "what-we-do";
}

if (navigator.userAgent.match(/Chrome|AppleWebKit/)) { 
    window.location.href = "#how-we-can-help";
    window.location.href = "#how-we-can-help";  /* these take twice */
} else {
    window.location.hash = "how-we-can-help";
}


if (navigator.userAgent.match(/Chrome|AppleWebKit/)) { 
    window.location.href = "#contact";
    window.location.href = "#contact";  /* these take twice */
} else {
    window.location.hash = "contact";
}

