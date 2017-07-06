function f() {
var a,b,c,d;
var aa,bb,cc,dd;
var m;
var m1,m2,m3,m4;
var mm1,mm2,mm3,mm4;

for (var e=-200 ; e<=203 ; e++)
{

  a=eval(document.getElementById("a").value);
  b=eval(document.getElementById("b").value);
  c=eval(document.getElementById("c").value);
  d=eval(document.getElementById("d").value);
  aa=eval(document.getElementById("aa").value);
  bb=eval(document.getElementById("bb").value);
  cc=eval(document.getElementById("cc").value);
  dd=eval(document.getElementById("dd").value);

  m1=Math.pow((e/100), aa);
  m2=Math.pow((e/100), bb);
  m3=Math.pow((e/100), cc);
  m4=Math.pow((e/100), dd);

  mm1=m1*a;
  mm2=m2*b;
  mm3=m3*c;
  mm4=m4*d;

  m=mm1+mm2+mm3+mm4;

  if ( (-m*100)<=203 )
  {
    var newItem = document.createElement("div");
    var destParent = document.getElementById("the_div");
    destParent.insertBefore(newItem, destParent.lastChild);
    newItem.style.width=1+"px";
    newItem.style.height=6+"px";
    newItem.style.position="absolute";
    newItem.style.top=(-m*100)+195+"px";
    newItem.style.left=e+197+"px"
    newItem.style.background="red";

    //document.getElementById("an").innerHTML=m;
  }
}
};
