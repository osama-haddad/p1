var x1=0, x2=0, x3=0;
var xx1=1351, xx2=1351, xx3=1351;
var y_position=0, y_position2=7;
var t, n_score=0, w_ggnew2=0, w_ggnew3=0;
var w_mmnew1=0, w_mmnew2=0, w_mmnew3=0;
var the_dinosaur, the_div1;
var n1, n2;
var m1, m2, m3;

var the_timer1;    //jump1
var the_timer2;    //jump2
var the_timer3;    //score
var the_timer4;    //game_over
var gg_timer2;     //ggnew2
var gg_timer3;     //ggnew3
var m_timer1;      //mnew1
var m_timer2;      //mnew2
var m_timer3;      //mnew3
var mm_timer1;     //mmnew1
var mm_timer2;     //mmnew2
var mm_timer3;     //mmnew3

  function jump() {

                the_dinosaur = document.getElementById("dinosaur");
                y_position = y_position - 3;
                the_dinosaur.style.top = y_position;
                the_timer1 = setTimeout(jump, 1);

                if (y_position <= -210)
                {
                  clearTimeout(the_timer1);
                  jump2()
                }

                if ( y_position >= -75 && y_position <= 0 )
                {
                  document.getElementById("c2").innerHTML="a";

                  if ( document.getElementById("c1").innerHTML=="a" )
                  {
                    clearTimeout(the_timer1);
                    t=true;
                  }
                }
                else
                {
                  document.getElementById("c2").innerHTML="";
                }

                if ( y_position >= -210 && y_position < 0 )
                {
                  document.getElementById("c3").innerHTML="";
                }
                if ( y_position == 0 )
                {
                  document.getElementById("c3").innerHTML="a";
                }
  };

  function jump2() {

                the_dinosaur = document.getElementById("dinosaur");
                y_position = y_position + 3;
                the_dinosaur.style.top = y_position;
                the_timer2 = setTimeout(jump2, 5);

                if (y_position >= 0)
                {
                  clearTimeout(the_timer2);
                  y_position = 0;
                }

                if ( y_position >= -75 && y_position <= 0 )
                {
                  document.getElementById("c2").innerHTML="a";

                  if ( document.getElementById("c1").innerHTML=="a" )
                  {

                    clearTimeout(the_timer2);
                    t=true;
                  }
                }
                else
                {
                  document.getElementById("c2").innerHTML="";
                }
                if ( y_position >= -210 && y_position < 0 )
                {
                  document.getElementById("c3").innerHTML="";
                }
                if ( y_position == 0 )
                {
                  document.getElementById("c3").innerHTML="a";
                }
  };

  function sscore() {

                var cc9=eval(document.getElementById("c5").innerHTML);
                if ( cc9<1 )
                {
                  score();
                }
  };

  function score() {

                document.getElementById("c5").innerHTML="1";

                n_score++;
                document.getElementById("score").innerHTML=n_score;
                the_timer3 = setTimeout(score,75);
                if ( t==true )
                {
                  game_over();
                  clearTimeout(the_timer3);
                }
  };

  function game_over() {

                the_div1 = document.getElementById("moving_div");
                y_position2 = y_position2 + 3;
                the_div1.style.top = y_position2;
                the_timer4 = setTimeout(game_over, 8);
                if (y_position2>240)
                {
                  clearTimeout(the_timer4);
                  y_position2 = 7;
                }

  };

  function ok() {

                window.location.href="page3.html";
  };
