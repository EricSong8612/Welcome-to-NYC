'use strict';

//事件绑定函数，兼容浏览器差异
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }
    else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    }
    else {
        element["on" + event] = listener;
    }
}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 120
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    let navigation = $("#navigation ul li");
    navigation[0].style.backgroundColor = "rgb(236,200,0)";
    window.onscroll = () => {
        let pos = document.documentElement.scrollTop || document.body.scrollTop; 
        if (pos < 490) {
            navigation[0].style.backgroundColor = "rgb(236,200,0)";
        } else {
            navigation[0].style.backgroundColor = "rgb(183,203,226)";
        }
        if (pos > 490 && pos < 1550) {
            navigation[1].style.backgroundColor = "rgb(236,200,0)";
        } else {
            navigation[1].style.backgroundColor = "rgb(183,203,226)";
        }
        if (pos > 1550 && pos < 2890) {
            navigation[2].style.backgroundColor = "rgb(236,200,0)";
        } else {
            navigation[2].style.backgroundColor = "rgb(183,203,226)";
        }
        if (pos > 2890 && pos < 4070) {
            navigation[3].style.backgroundColor = "rgb(236,200,0)";
        } else {
            navigation[3].style.backgroundColor = "rgb(183,203,226)";
        }
        if (pos > 4070 && pos < 4650) {
            navigation[4].style.backgroundColor = "rgb(236,200,0)";
        } else {
            navigation[4].style.backgroundColor = "rgb(183,203,226)";
        }
        if (pos > 4650) {
            navigation[5].style.backgroundColor = "rgb(236,200,0)";
        } else {
            navigation[5].style.backgroundColor = "rgb(183,203,226)";
        }
    } 

    let name = $("input[name=Name]")[0];
    let email = $("input[name=Email]")[0];
    let range = $("input[name=Price_Range]")[0];
    let checkForm = () => {
        if (name.value == "" || email.value == "" || range.value == "") {
            alert("姓名、Email和价格区间不能为空");
            return false;
        } else {
            return true;
        }
    }
    $("form #submit").click(checkForm);
});