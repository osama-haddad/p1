  function f() {
    var userName = document.getElementById("user-name").value;
    var password = document.getElementById("password").value;
    if (userName==="osama" && password==="12345")
    {
      window.location.href="../pages/page2.html";
    }
    else
    {
      set_timer();
    }
  };
var the_timer, x_position = 7, the_image;

  function set_timer() {
                the_image = document.getElementById("moving_div");
                x_position = x_position + 3;
                the_image.style.top = x_position;
                the_timer = setTimeout(set_timer, 8);
                if (x_position>240)
                {
                  clearTimeout(the_timer);
                  x_position = 7;
                }
            }

var the_timer2, x_position2 = 247, the_div;

  function set_timer2() {
                the_div = document.getElementById("moving_div");
                x_position2 = x_position2 - 1;
                the_div.style.top = x_position2;
                the_timer2 = setTimeout(set_timer2, 1);
                if (x_position2<7)
                {
                  clearTimeout(the_timer2);
                  x_position2 = 247;
                }
            }
