function start() {

              document.getElementById("c4").innerHTML="a";

              div1 = document.getElementById("d1");
              div2 = document.getElementById("d2");
              div3 = document.getElementById("d3");

              x1 = x1 - 3;
              x2 = x2 - 3;
              x3 = x3 - 3;

              div1.style.left = x1;
              div2.style.left = x2;
              div3.style.left = x3;

              timer = setTimeout(start , 10);

              if ( x1 <= -1265 )
              {
                x1 = 101;
              }
              if ( x2 <= -915 )
              {
                x2 = 451;
              }
              if ( x3 <= -565 )
              {
                x3 = 801;
              }

              if ( x1 >= -1164 && x1 <= -1089 )
              {
                document.getElementById("c1").innerHTML="a";

                if ( document.getElementById("c2").innerHTML=="a" )
                {
                  clearTimeout(timer);
                  clearTimeout(the_timer);
                  clearTimeout(the_timer2);
                  t=true;
                }
              }
              else if ( x2 >= -814 && x2 <= -739 )
              {
                document.getElementById("c1").innerHTML="a";

                if ( document.getElementById("c2").innerHTML=="a" )
                {
                  clearTimeout(timer);
                  clearTimeout(the_timer);
                  clearTimeout(the_timer2);
                  t=true;
                }
              }
              else if ( x3 >= -464 && x3 <= -389 )
              {
                document.getElementById("c1").innerHTML="a";

                if ( document.getElementById("c2").innerHTML=="a" )
                {
                  clearTimeout(timer);
                  clearTimeout(the_timer);
                  clearTimeout(the_timer2);
                  t=true;
                }
              }
              else
              {
                document.getElementById("c1").innerHTML="";
              }

};
