function cal()
{

// var d= document.getElementById('d').value;
// var w= document.getElementById('w').value;
var er= document.getElementById('er').value;
var ur= document.getElementById('ur').value;
// var σc= document.getElementById('sigmac').value;
// var σd= document.getElementById('sigmad').value;
// var δ= document.getElementById('skindepth').value;
var d1= document.getElementById('unitd').value;
var w1= document.getElementById('unitw').value;
var σc1= document.getElementById('unitsc').value;
var σd1= document.getElementById('unitsd').value;
// var δ1= document.getElementById('unitskd').value;
var f1= document.getElementById('unitf').value;


// for depth d

if(d1=="Gm")
{
    var d= document.getElementById('d').value * 1e9;
}

if(d1=="Mm")
{
    var d= document.getElementById('d').value * 1e6;
}

if(d1=="km")
{
    var d= document.getElementById('d').value * 1e3;
}

if(d1=="m")
{
    var d= document.getElementById('d').value;
}

if(d1=="mm")
{
    var d= document.getElementById('d').value * 1e-3;
}

if(d1=="um")
{
    var d= document.getElementById('d').value * 1e-6;
}

if(d1=="nm")
{
    var d= document.getElementById('d').value * 1e-9;
}


// for frequency f

if(f1=="Thz")
{
    var f= document.getElementById('f').value * 1e12;
}

if(f1=="Ghz")
{
    var f= document.getElementById('f').value * 1e9;
}

if(f1=="Mhz")
{
    var f= document.getElementById('f').value * 1e6;
}

if(f1=="khz")
{
    var f= document.getElementById('f').value * 1e3;
}

if(f1=="m")
{
    var f= document.getElementById('f').value;
}

if(f1=="mhz")
{
    var f= document.getElementById('f').value * 1e-3;
}

if(f1=="uhz")
{
    var f= document.getElementById('f').value * 1e-6;
}

if(f1=="nhz")
{
    var f= document.getElementById('f').value * 1e-9;
}

// for width w

if(w1=="Gm")
{
    var w= document.getElementById('w').value * 1e9;
}

if(w1=="Mm")
{
    var w= document.getElementById('w').value * 1e6;
}

if(w1=="km")
{
    var w= document.getElementById('w').value * 1e3;
}

if(w1=="m")
{
    var w= document.getElementById('w').value;
}

if(w1=="mm")
{
    var w= document.getElementById('w').value * 1e-3;
}

if(w1=="um")
{
    var w= document.getElementById('w').value * 1e-6;
}

if(w1=="nm")
{
    var w= document.getElementById('w').value * 1e-9;
}

// for conductivity of conductor σc   

if(σc1=="Gm")
{
    var σc= document.getElementById('sigmac').value * 1e9;
}

if(σc1=="Mm")
{
    var σc= document.getElementById('sigmac').value * 1e6;
}

if(σc1=="km")
{
    var σc= document.getElementById('sigmac').value * 1e3;
}

if(σc1=="m")
{
    var σc= document.getElementById('sigmac').value;
}

if(σc1=="mm")
{
    var σc= document.getElementById('sigmac').value * 1e-3;
}

if(σc1=="um")
{
    var σc= document.getElementById('sigmac').value * 1e-6;
}

if(σc1=="nm")
{
    var σc= document.getElementById('sigmac').value * 1e-9;
}

// for conductivity of dielectric σd

if(σd1=="Gm")
{
    var σd= document.getElementById('sigmad').value * 1e9;
}

if(σd1=="Mm")
{
    var σd= document.getElementById('sigmad').value * 1e6;
}

if(σd1=="km")
{
    var σd= document.getElementById('sigmad').value * 1e3;
}

if(σd1=="m")
{
    var σd= document.getElementById('sigmad').value;
}

if(σd1=="mm")
{
    var σd= document.getElementById('sigmad').value * 1e-3;
}

if(σd1=="um")
{
    var σd= document.getElementById('sigmad').value * 1e-6;
}

if(σd1=="nm")
{
    var σd= document.getElementById('sigmad').value * 1e-9;
}

// for skindepth δ

// if(δ1=="Gm")
// {
//     var δ= document.getElementById('skindepth').value * 1e9;
// }

// if(δ1=="Mm")
// {
//     var δ= document.getElementById('skindepth').value * 1e6;
// }

// if(δ1=="km")
// {
//     var δ= document.getElementById('skindepth').value * 1e3;
// }

// if(δ1=="m")
// {
//     var δ= document.getElementById('skindepth').value;
// }

// if(δ1=="mm")
// {
//     var δ= document.getElementById('skindepth').value * 1e-3;
// }

// if(δ1=="um")
// {
//     var δ= document.getElementById('skindepth').value * 1e-6;
// }

// if(δ1=="nm")
// {
//     var δ= document.getElementById('skindepth').value * 1e-9;
// }


// var δ=1/(3.14 * σc * 4 * 3.14e-7 * f);

// sk.value=δ

var r=2/(w * parseFloat(σc)* parseFloat(1/Math.sqrt(3.14 * σc * 4 * 3.14e-7 * f)));

var l=(12.56e-7 * ur * d)/w;

var c=(8.85e-12 * er * w)/d;

var g=(σd * w)/d;



document.getElementById('R').value=r;
document.getElementById('L').value=l;
document.getElementById('C').value=c;
document.getElementById('G').value=g;


console.log(r)
console.log(l)
console.log(c)
console.log(g)

}
