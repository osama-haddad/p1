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

  function uniKeyCode(event) {

                var key = event.keyCode;
                if ( key == "32" )
                {
                  if ( document.getElementById("c3").innerHTML=="a" )
                  {
                    jump();
                    gnew();
                    sscore();
                  }
                }
                if ( key == "13" )
                {
                  if ( t==true )
                  {
                    ok();
                  }
                }
  };

  function gnew() {

                var cc8=eval(document.getElementById("c4").innerHTML);
                if ( cc8<1 )
                {
                  n1 = Math.floor((Math.random()*3)+4);
                  n2 = n1 + (Math.floor((Math.random()*3)+4));
                  gnew1();
                  ggnew2();
                  ggnew3();
                }
  };

  function ggnew2() {

                document.getElementById("c4").innerHTML="1";
                gg_timer2 = setTimeout(ggnew2 , 250);

                if ( w_ggnew2==n1 )
                {
                  gnew2();
                  clearTimeout(gg_timer2);
                }
                w_ggnew2=w_ggnew2+1;
  };

  function ggnew3() {

                document.getElementById("c4").innerHTML="1";
                gg_timer3 = setTimeout(ggnew3 , 250);

                if ( w_ggnew3==n2 )
                {
                  gnew3();
                  clearTimeout(gg_timer3);
                }
                w_ggnew3=w_ggnew3+1;
  };

  function gnew1() {

                var newItem = document.createElement("div");
                var destParent = document.getElementsByTagName("body")[0];
                destParent.insertBefore(newItem, destParent.firstChild);
                newItem.id="bl1";
                newItem.style.width=15+"px";
                newItem.style.height=75+"px";
                newItem.style.position="absolute";
                newItem.style.top=305+"px";
                newItem.style.left=1351+"px"
                newItem.style.visibility="hidden";
                newItem.style.background="black";

                var cc7=eval(document.getElementById("c6").innerHTML);
                if ( cc7<1 )
                {
                  mnew1();
                  document.getElementById("c6").innerHTML="1";
                }
                else
                {
                  m1 = Math.floor((Math.random()*3)+1);
                  mmnew1();
                }
  };

  function gnew2() {

                var newItem = document.createElement("div");
                var destParent = document.getElementsByTagName("body")[0];
                destParent.insertBefore(newItem, destParent.firstChild);
                newItem.id="bl2";
                newItem.style.width=15+"px";
                newItem.style.height=75+"px";
                newItem.style.position="absolute";
                newItem.style.top=305+"px";
                newItem.style.left=1351+"px"
                newItem.style.visibility="hidden";
                newItem.style.background="black";

                var cc7=eval(document.getElementById("c7").innerHTML);
                if ( cc7<1 )
                {
                  mnew2();
                  document.getElementById("c7").innerHTML="1";
                }
                else
                {
                  m2 = Math.floor((Math.random()*3)+1);
                  mmnew2();
                }
  };

  function gnew3() {

                var newItem = document.createElement("div");
                var destParent = document.getElementsByTagName("body")[0];
                destParent.insertBefore(newItem, destParent.firstChild);
                newItem.id="bl3";
                newItem.style.width=15+"px";
                newItem.style.height=75+"px";
                newItem.style.position="absolute";
                newItem.style.top=305+"px";
                newItem.style.left=1351+"px"
                newItem.style.visibility="hidden";
                newItem.style.background="black";

                var cc7=eval(document.getElementById("c8").innerHTML);
                if ( cc7<1 )
                {
                  mnew3();
                  document.getElementById("c8").innerHTML="1";
                }
                else
                {
                  m3 = Math.floor((Math.random()*3)+1);
                  mmnew3();
                }
  };

  function mmnew1() {

                var mm_timer1 = setTimeout(mmnew1 , 250);
                if ( w_mmnew1==m1 )
                {
                  mnew1();
                  clearTimeout(mm_timer1);
                  w_mmnew1=0;
                }
                w_mmnew1=w_mmnew1+1;
  }

  function mmnew2() {

                var mm_timer2 = setTimeout(mmnew2 , 250);
                if ( w_mmnew2==m2 )
                {
                  mnew2();
                  clearTimeout(mm_timer2);
                  w_mmnew2=0;
                }
                w_mmnew2=w_mmnew2+1;
  }

  function mmnew3() {

                var mm_timer3 = setTimeout(mmnew3 , 250);
                if ( w_mmnew3==m3 )
                {
                  mnew3();
                  clearTimeout(mm_timer3);
                  w_mmnew3=0;
                }
                w_mmnew3=w_mmnew3+1;
              }

  function mnew1() {

                document.getElementById("bl1").style.visibility="visible";
                xx1 = xx1 - 3;
                document.getElementById("bl1").style.left = xx1;
                m_timer1 = setTimeout(mnew1 , 6);

                if ( xx1 >= 85 && xx1 <= 160 )
                {
                  document.getElementById("c1").innerHTML="a";

                  if ( document.getElementById("c2").innerHTML=="a" )
                  {
                    clearTimeout(gg_timer2);        //ggnew2
                    clearTimeout(gg_timer3);        //ggnew3
                    clearTimeout(m_timer1);         //mnew1
                    clearTimeout(m_timer2);         //mnew2
                    clearTimeout(m_timer3);         //mnew3
                    clearTimeout(mm_timer1);        //mmnew1
                    clearTimeout(mm_timer2);        //mmnew2
                    clearTimeout(mm_timer3);        //mmnew3
                    t=true;
                  }
                }
                else
                {
                  document.getElementById("c1").innerHTML="";
                }
                if ( xx1<=-15 )
                {
                  var the_node=document.getElementById("bl1");
                  the_node.parentNode.removeChild(the_node);
                  xx1=1351;
                  gnew1();
                  clearTimeout(m_timer1);
                }
  };

  function mnew2() {

                document.getElementById("bl2").style.visibility="visible";
                xx2 = xx2 - 3;
                document.getElementById("bl2").style.left = xx2;
                m_timer2 = setTimeout(mnew2 , 6);

                if ( xx2 >= 85 && xx2 <= 160 )
                {
                  document.getElementById("c1").innerHTML="a";

                  if ( document.getElementById("c2").innerHTML=="a" )
                  {
                    clearTimeout(gg_timer2);        //ggnew2
                    clearTimeout(gg_timer3);        //ggnew3
                    clearTimeout(m_timer1);         //mnew1
                    clearTimeout(m_timer2);         //mnew2
                    clearTimeout(m_timer3);         //mnew3
                    clearTimeout(mm_timer1);        //mmnew1
                    clearTimeout(mm_timer2);        //mmnew2
                    clearTimeout(mm_timer3);        //mmnew3
                    t=true;
                  }
                }
                else
                {
                  document.getElementById("c1").innerHTML="";
                }
                if ( xx2<=-15 )
                {
                  var the_node=document.getElementById("bl2");
                  the_node.parentNode.removeChild(the_node);
                  xx2=1351;
                  gnew2();
                  clearTimeout(m_timer2);
                }
  };

  function mnew3() {

                document.getElementById("bl3").style.visibility="visible";
                xx3 = xx3 - 3;
                document.getElementById("bl3").style.left = xx3;
                m_timer3 = setTimeout(mnew3 , 6);

                if ( xx3 >= 85 && xx3 <= 160 )
                {
                  document.getElementById("c1").innerHTML="a";

                  if ( document.getElementById("c2").innerHTML=="a" )
                  {
                    clearTimeout(gg_timer2);        //ggnew2
                    clearTimeout(gg_timer3);        //ggnew3
                    clearTimeout(m_timer1);         //mnew1
                    clearTimeout(m_timer2);         //mnew2
                    clearTimeout(m_timer3);         //mnew3
                    clearTimeout(mm_timer1);        //mmnew1
                    clearTimeout(mm_timer2);        //mmnew2
                    clearTimeout(mm_timer3);        //mmnew3
                    t=true;
                  }
                }
                else
                {
                  document.getElementById("c1").innerHTML="";
                }
                if ( xx3<=-15 )
                {
                  var the_node=document.getElementById("bl3");
                  the_node.parentNode.removeChild(the_node);
                  xx3=1351;
                  gnew3();
                  clearTimeout(m_timer3);
                }
  };
