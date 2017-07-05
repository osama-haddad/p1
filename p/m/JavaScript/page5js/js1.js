
var the_timer, the_timer2, y_position=-19.032, y_position2=-1.9, theDiv;

function ff() {

  for (var e=-2 ; e<=2.01 ; e=e+0.01)
  {
    var m=eval(document.getElementById("text1").value);
    document.getElementById("back1").innerHTML=m;

    if ( (-m*100)<=201 )
    {
      var newItem = document.createElement("div");
      var destParent = document.getElementById("the_div");
      destParent.insertBefore(newItem, destParent.lastChild);
      newItem.style.width=0.0732+"vw";
      newItem.style.height=0.4392+"vw";
      newItem.style.position="absolute";
      newItem.style.top=(((-m*100)+195)*0.0732)+"vw";
      newItem.style.left=(((e*100)+200)*0.0732)+"vw"
      newItem.style.background="red";
      newItem.class="dd";
      newItem.style.zIndex= "98";
    }
  }
};

function b(n){

  if (document.getElementById("bla").innerHTML=="0")
  {
    b1(n,'text');
    b1(n,'text1');
  }
  else if (document.getElementById("bla").innerHTML=="1")
  {
    b1(n,'xpow');
    b1(n,'xpow1');
  }
  else if (document.getElementById("bla").innerHTML=="2")
  {
    b1(n,'xrad');
    b1(n,'xrad1');
  }

};

function b1(n,tx){

  var s=document.getElementById(tx).value;

  var m00 = s.lastIndexOf('.');     //var mm00 = ss.lastIndexOf('.');
  var m0 = s.lastIndexOf('0');      //var mm0 = ss.lastIndexOf('0');
  var m1 = s.lastIndexOf('1');      //var mm1 = ss.lastIndexOf('1');
  var m2 = s.lastIndexOf('2');      //var mm2 = ss.lastIndexOf('2');
  var m3 = s.lastIndexOf('3');      //var mm3 = ss.lastIndexOf('3');
  var m4 = s.lastIndexOf('4');      //var mm4 = ss.lastIndexOf('4');
  var m5 = s.lastIndexOf('5');      //var mm5 = ss.lastIndexOf('5');
  var m6 = s.lastIndexOf('6');      //var mm6 = ss.lastIndexOf('6');
  var m7 = s.lastIndexOf('7');      //var mm7 = ss.lastIndexOf('7');
  var m8 = s.lastIndexOf('8');      //var mm8 = ss.lastIndexOf('8');
  var m9 = s.lastIndexOf('9');      //var mm9 = ss.lastIndexOf('9');
  if (m00==-1) { m00=-1000; }       //if (mm00==-1) { mm00=-1000; }
  if (m0==-1) { m0=-1000; }         //if (mm0==-1) { mm0=-1000; }
  if (m1==-1) { m1=-1000; }         //if (mm1==-1) { mm1=-1000; }
  if (m2==-1) { m2=-1000; }         //if (mm2==-1) { mm2=-1000; }
  if (m3==-1) { m3=-1000; }         //if (mm3==-1) { mm3=-1000; }
  if (m4==-1) { m4=-1000; }         //if (mm4==-1) { mm4=-1000; }
  if (m5==-1) { m5=-1000; }         //if (mm5==-1) { mm5=-1000; }
  if (m6==-1) { m6=-1000; }         //if (mm6==-1) { mm6=-1000; }
  if (m7==-1) { m7=-1000; }         //if (mm7==-1) { mm7=-1000; }
  if (m8==-1) { m8=-1000; }         //if (mm8==-1) { mm8=-1000; }
  if (m9==-1) { m9=-1000; }         //if (mm9==-1) { mm9=-1000; }
  var n1 = s.lastIndexOf('+');      //var nn1 = ss.lastIndexOf('+');
  var n2 = s.lastIndexOf('-');      //var nn2 = ss.lastIndexOf('-');
  var n3 = s.lastIndexOf('×');      //var nn3 = ss.lastIndexOf('*');
  var n4 = s.lastIndexOf('/');      //var nn4 = ss.lastIndexOf('/');
  var n5 = s.lastIndexOf('(');      //var nn5 = ss.lastIndexOf('(');
  var n6 = s.lastIndexOf('*');      //var nn6 = ss.lastIndexOf('*');
  if (n1==-1) { n1=-1000; }         //if (nn1==-1) { nn1=-1000; }
  if (n2==-1) { n2=-1000; }         //if (nn2==-1) { nn2=-1000; }
  if (n3==-1) { n3=-1000; }         //if (nn3==-1) { nn3=-1000; }
  if (n4==-1) { n4=-1000; }         //if (nn4==-1) { nn4=-1000; }
  if (n5==-1) { n5=-1000; }         //if (nn5==-1) { nn5=-1000; }
  if (n6==-1) { n6=-1000; }         //if (nn6==-1) { nn6=-1000; }

  var max=Math.max(n1,n2,n3,n4,n5,n6,m00,m0,m1,m2,m3,m4,m5,m6,m7,m8,m9);

  if (s=="") { document.getElementById(tx).value+=n; }
  else if (max==s.length-1) { document.getElementById(tx).value+=n; }

};

function bb(n,m){

  if (document.getElementById("bla").innerHTML=="0")
  {
    bb1(n,'text');
    bb1(m,'text1');
  }
  else if (document.getElementById("bla").innerHTML=="1")
  {
    bb1(n,'xpow');
    bb1(m,'xpow1');
  }
  else if (document.getElementById("bla").innerHTML=="2")
  {
    bb1(n,'xrad');
    bb1(m,'xrad1');
  }

};

function bb1(mn,tx){

  var s=document.getElementById(tx).value;

  var n1 = s.lastIndexOf('+');      //var nn1 = ss.lastIndexOf('+');
  var n2 = s.lastIndexOf('-');      //var nn2 = ss.lastIndexOf('-');
  var n3 = s.lastIndexOf('×');      //var nn3 = ss.lastIndexOf('*');
  var n4 = s.lastIndexOf('/');      //var nn4 = ss.lastIndexOf('/');
  var n5 = s.lastIndexOf('(');      //var nn5 = ss.lastIndexOf('(');
  var n6 = s.lastIndexOf('*');      //var nn6 = ss.lastIndexOf('*');
  if (n1==-1) { n1=-1000; }         //if (nn1==-1) { nn1=-1000; }
  if (n2==-1) { n2=-1000; }         //if (nn2==-1) { nn2=-1000; }
  if (n3==-1) { n3=-1000; }         //if (nn3==-1) { nn3=-1000; }
  if (n4==-1) { n4=-1000; }         //if (nn4==-1) { nn4=-1000; }
  if (n5==-1) { n5=-1000; }         //if (nn5==-1) { nn5=-1000; }
  if (n6==-1) { n6=-1000; }         //if (nn6==-1) { nn6=-1000; }

  var max=Math.max(n1,n2,n3,n4,n5,n6);

  if (s=="") { document.getElementById(tx).value+=mn; }
  else if (max==s.length-1) { document.getElementById(tx).value+=mn; }

};

function r(n,m){

  if (document.getElementById("bla").innerHTML=="0")
  {
    r1(n,'text');
    r1(m,'text1');
  }
  else if (document.getElementById("bla").innerHTML=="1")
  {
    r1(n,'xpow');
    r1(m,'xpow1');
  }
  else if (document.getElementById("bla").innerHTML=="2")
  {
    r1(n,'xrad');
    r1(m,'xrad1');
  }

};

function r1(mn,tx){

  var s=document.getElementById(tx).value;

  var n1 = s.lastIndexOf('+');      //var nn1 = ss.lastIndexOf('+');
  var n2 = s.lastIndexOf('-');      //var nn2 = ss.lastIndexOf('-');
  var n3 = s.lastIndexOf('×');      //var nn3 = ss.lastIndexOf('*');
  var n4 = s.lastIndexOf('/');      //var nn4 = ss.lastIndexOf('/');
  var n5 = s.lastIndexOf('(');      //var nn5 = ss.lastIndexOf('(');
  var n6 = s.lastIndexOf('*');      //var nn6 = ss.lastIndexOf('*');
  if (n1==-1) { n1=-1000; }         //if (nn1==-1) { nn1=-1000; }
  if (n2==-1) { n2=-1000; }         //if (nn2==-1) { nn2=-1000; }
  if (n3==-1) { n3=-1000; }         //if (nn3==-1) { nn3=-1000; }
  if (n4==-1) { n4=-1000; }         //if (nn4==-1) { nn4=-1000; }
  if (n5==-1) { n5=-1000; }         //if (nn5==-1) { nn5=-1000; }
  if (n6==-1) { n6=-1000; }         //if (nn6==-1) { nn6=-1000; }

  var max=Math.max(n1,n2,n3,n4,n5,n6);

  if (s!="")
  {
    if (max!=s.length-1) { document.getElementById(tx).value+=mn; }
  }

};

function set_timer1() {
  document.getElementById("xpow").value="";
  document.getElementById("xpow1").value="";

  var s=document.getElementById("text").value;

  var n1 = s.lastIndexOf('+');
  var n2 = s.lastIndexOf('-');
  var n3 = s.lastIndexOf('×');
  var n4 = s.lastIndexOf('/');
  var n5 = s.lastIndexOf('(');
  if (n1==-1) { n1=-1000; }
  if (n2==-1) { n2=-1000; }
  if (n3==-1) { n3=-1000; }
  if (n4==-1) { n4=-1000; }
  if (n5==-1) { n5=-1000; }

  var max=Math.max(n1,n2,n3,n4,n5);

  if (s=="" || max==s.length-1)
  {
    if (document.getElementById("bla").innerHTML=="0")
    {
      theDiv = document.getElementById("movingdiv1");
      y_position = y_position + 0.22;
      theDiv.style.top = y_position+"vw";
      the_timer = setTimeout(set_timer1, 8);
      if (y_position>=-1.9)
      {
        clearTimeout(the_timer);
        y_position = -19.032;
        document.getElementById("bla").innerHTML="1";
      }
    }
  }
};

function set_timer2() {
    theDiv = document.getElementById("movingdiv1");
    y_position2 = y_position2 - 0.07;
    theDiv.style.top = y_position2+"vw";
    the_timer2 = setTimeout(set_timer2, 1);
    if (y_position2<-19.032)
    {
      clearTimeout(the_timer2);
      y_position2 = -1.9;
      document.getElementById("bla").innerHTML="0";
    }
};

function set_ttimer1() {
  document.getElementById("xrad").value="";
  document.getElementById("xrad1").value="";

  var s=document.getElementById("text").value;

  var n1 = s.lastIndexOf('+');
  var n2 = s.lastIndexOf('-');
  var n3 = s.lastIndexOf('×');
  var n4 = s.lastIndexOf('/');
  var n5 = s.lastIndexOf('(');
  if (n1==-1) { n1=-1000; }
  if (n2==-1) { n2=-1000; }
  if (n3==-1) { n3=-1000; }
  if (n4==-1) { n4=-1000; }
  if (n5==-1) { n5=-1000; }

  var max=Math.max(n1,n2,n3,n4,n5);

  if (s=="" || max==s.length-1)
  {
    if (document.getElementById("bla").innerHTML=="0")
    {
      theDiv = document.getElementById("movingdiv2");
      y_position = y_position + 0.22;
      theDiv.style.top = y_position+"vw";
      the_timer = setTimeout(set_ttimer1, 8);
      if (y_position>=-1.9)
      {
        clearTimeout(the_timer);
        y_position = -19.032;
        document.getElementById("bla").innerHTML="2";
      }
    }
  }
};

function set_ttimer2() {
    theDiv = document.getElementById("movingdiv2");
    y_position2 = y_position2 - 0.07;
    theDiv.style.top = y_position2+"vw";
    the_timer2 = setTimeout(set_ttimer2, 1);
    if (y_position2<-19.032)
    {
      clearTimeout(the_timer2);
      y_position2 = -1.9;
      document.getElementById("bla").innerHTML="0";
    }
};

function write1(){
  var pow = document.getElementById("pow").value;
  var xpow = document.getElementById("xpow").value;
  var xpow1 = document.getElementById("xpow1").value;
  if (xpow!="")
  {
    document.getElementById("text").value += "["+xpow+"]"+"^"+pow;
    document.getElementById("text1").value +="(Math.pow("+xpow1+","+pow+"))";
  }
  else
  {
    document.getElementById("text").value +="";
    document.getElementById("text1").value +="";
  }
};

function write2(){
  var rad = document.getElementById("rad").value;
  var xrad = document.getElementById("xrad").value;
  var xrad1 = document.getElementById("xrad1").value;
  var rr = document.getElementById("bla-rad").value;
  if (xrad!="")
  {
    document.getElementById("text").value += rad+"^"+rr+"["+xrad+"]";
    document.getElementById("text1").value +="(Math.sqrt("+xrad1+","+rad+"))";
  }
  else
  {
    document.getElementById("text").value +="";
    document.getElementById("text1").value +="";
  }
};

function bss(){
  if (document.getElementById("bla").innerHTML=="0")
  {
    bs1('text');
    bs2('text1');
  }
  else if (document.getElementById("bla").innerHTML=="1")
  {
    bs1('xpow');
    bs2('xpow1');
  }
  else if (document.getElementById("bla").innerHTML=="2")
  {
    bs1('xrad');
    bs2('xrad1');
  }
};

function bs1(id){

  var s=document.getElementById(id).value;
  var rr = document.getElementById("bla-rad").value;
  var n1 = s.lastIndexOf('+');
  var n2 = s.lastIndexOf('-');
  var n3 = s.lastIndexOf('×');
  var n4 = s.lastIndexOf('/');
  var n5 = s.lastIndexOf(']');
  var n6 = s.lastIndexOf('[');
  var n7 = s.lastIndexOf("sin");
  var n8 = s.lastIndexOf("cos");
  var n9 = s.lastIndexOf('(');
  var n10 = s.lastIndexOf(')');
  var n11 = s.lastIndexOf('^');
  var n12 = s.lastIndexOf(rr);
  var n13 = s.lastIndexOf("log");
  var n14 = s.lastIndexOf("ln");

  if (n1==-1) { n1=-1000; }
  if (n2==-1) { n2=-1000; }
  if (n3==-1) { n3=-1000; }
  if (n4==-1) { n4=-1000; }
  if (n5==-1) { n5=-1000; }
  if (n6==-1) { n6=-1000; }
  if (n7==-1) { n7=-1000; }
  if (n8==-1) { n8=-1000; }
  if (n9==-1) { n9=-1000; }
  if (n10==-1) { n10=-1000; }
  if (n11==-1) { n11=-1000; }
  if (n12==-1) { n12=-1000; }
  if (n13==-1) { n13=-1000; }
  if (n14==-1) { n14=-1000; }

  var max=Math.max(n1,n2,n3,n4);

  if (max==s.length-1) { document.getElementById(id).value = s.substring(0,max); }
  else if (n10==s.length-1 && n7==s.length-6) { document.getElementById(id).value = s.substring(0,n7); }
  else if (n10==s.length-1 && n8==s.length-6) { document.getElementById(id).value = s.substring(0,n8); }
  else if (n10==s.length-1 && n13==s.length-6) { document.getElementById(id).value = s.substring(0,n13); }
  else if (n10==s.length-1 && n14==s.length-5) { document.getElementById(id).value = s.substring(0,n14); }
  else if (n10==s.length-1 && n8!=s.length-6 && n7!=s.length-6 && n13!=s.length-6 && n14!=s.length-5) { document.getElementById(id).value = s.substring(0,n10);}
  else if (n9==s.length-1) { document.getElementById(id).value = s.substring(0,n9); }
  else if (n6==n12+1) { document.getElementById(id).value = s.substring(0,n12-2); }
  else if (n11==s.length-2) { document.getElementById(id).value = s.substring(0,n6); }
  else if (n1==-1000 && n2==-1000 && n3==-1000 && n4==-1000 && n5==-1000 && n6==-1000 && n7==-1000 && n8==-1000 && n9==-1000 && n10==-1000 && n11==-1000 && n12==-1000 && n13==-1000 && n14==-1000)
  { document.getElementById(id).value = s.substring(0,0); }
  else { document.getElementById(id).value = s.substring(0,max+1); }
};

function bs2(id){

  var ss=document.getElementById(id).value;
  var nn1 = ss.lastIndexOf('+');
  var nn2 = ss.lastIndexOf('-');
  var nn3 = ss.lastIndexOf('*');
  var nn4 = ss.lastIndexOf('/');
  var nn5 = ss.lastIndexOf("Math.sin((Math.PI*100*e)/180)");
  var nn6 = ss.lastIndexOf("Math.cos((Math.PI*100*e)/180)");
  var nn7 = ss.lastIndexOf(',');
  var nn8 = ss.lastIndexOf('(');
  var nn9 = ss.lastIndexOf(')');
  var nn10 = ss.lastIndexOf("Math.log10(e)");
  var nn11 = ss.lastIndexOf("Math.log(e)");

  if (nn1==-1) { nn1=-1000; }
  if (nn2==-1) { nn2=-1000; }
  if (nn3==-1) { nn3=-1000; }
  if (nn4==-1) { nn4=-1000; }
  if (nn5==-1) { nn5=-1000; }
  if (nn6==-1) { nn6=-1000; }
  if (nn7==-1) { nn7=-1000; }
  if (nn8==-1) { nn8=-1000; }
  if (nn9==-1) { nn9=-1000; }
  if (nn10==-1) { nn10=-1000; }
  if (nn11==-1) { nn11=-1000; }

  var mmax=Math.max(nn1,nn2,nn3,nn4);

  if (mmax==ss.length-1) { document.getElementById(id).value = ss.substring(0,mmax); }
  else if (nn8==ss.length-1) { document.getElementById(id).value = ss.substring(0,nn8); }
  else if (nn9==ss.length-1 && nn5==ss.length-29) { document.getElementById(id).value = ss.substring(0,nn5); }
  else if (nn9==ss.length-1 && nn6==ss.length-29) { document.getElementById(id).value = ss.substring(0,nn6); }
  else if (nn9==ss.length-1 && nn10==ss.length-13) { document.getElementById(id).value = ss.substring(0,nn10); }
  else if (nn9==ss.length-1 && nn11==ss.length-11) { document.getElementById(id).value = ss.substring(0,nn11); }
  else if (nn9==ss.length-1 && nn7==ss.length-4)
  {
    var nn10 = ss.lastIndexOf("Math.pow");
    var nn11 = ss.lastIndexOf("Math.sqrt");
    var mmmax=Math.max(nn10,nn11);
    document.getElementById(id).value = ss.substring(0,mmmax-1);
  }
  else if (nn9==ss.length-1 && nn7!=ss.length-4 && nn5!=ss.length-29 && nn6!=ss.length-29 && nn10!=ss.length-13 && nn11!=ss.length-11)
  { document.getElementById(id).value = ss.substring(0,nn9); }
  else if (nn1==-1000 && nn2==-1000 && nn3==-1000 && nn4==-1000 && nn5==-1000 && nn6==-1000 && nn7==-1000 && nn8==-1000 && nn9==-1000 && nn10==-1000 && nn11==-1000)
  { document.getElementById(id).value = ss.substring(0,0); }
  else { document.getElementById(id).value = ss.substring(0,mmax+1); }
};

function clr() {
  var s=document.getElementById("text").value;
  var ss=document.getElementById("text1").value;
  var sss=document.getElementById("back1").value;
  var p=document.getElementById("xpow").value;
  var pp=document.getElementById("xpow1").value;
  var r=document.getElementById("xrad").value;
  var rr=document.getElementById("xrad1").value;

  document.getElementById("text").value = s.substring(0,0);
  document.getElementById("text1").value = ss.substring(0,0);
  document.getElementById("back1").value = sss.substring(0,0);
  document.getElementById("xpow").value = p.substring(0,0);
  document.getElementById("xpow1").value = pp.substring(0,0);
  document.getElementById("xrad").value = r.substring(0,0);
  document.getElementById("xrad1").value = rr.substring(0,0);

  var thediv = document.getElementById("the_div");
  while (thediv.hasChildNodes())
  {
    thediv.removeChild(thediv.firstChild);
  }
};

function v1() {
  alert("use the buttons above");
  document.getElementById("num1").focus();
};

function v2() {
  alert("using the buttons below");
  document.getElementById("num1").focus();
};
