// function freq()
// {
//     var f1 = document.getElementById('unitf').value;

//     // for freq
//     if(f1 == "Tm")
//     {
//         var f= document.getElementById('f').value * 1e12;
//     }
//     if(f1 == "Gm")
//     {
//         var f= document.getElementById('f').value * 1e9;
//     }
//     if(f1 == "Mm")
//     {
//         var f= document.getElementById('f').value * 1e6;
//     }
//     if(f1 == "Km")
//     {
//         var f= document.getElementById('f').value * 1e3;
//     }
//     if(f1 == "m")
//     {
//         var f= document.getElementById('f').value;
//     }
//     if(f1 == "mm")
//     {
//         var f= document.getElementById('f').value * 1e-3;
//     }
//     if(f1 == "μm")
//     {
//         var f = document.getElementById('f').value * 1e-6;
//     }
//     if(f1 == "nm")
//     {
//         var f = document.getElementById('f').value * 1e-9;
//     }
//     if(f1 == "Unit")
//     {
//         alert("Select proper unit for frequency.")
//     }

//     var δn = 1/Math.sqrt(3.14 * σc * 4 * 3.14e-7 * f)

//     document.getElementById('floatingOutput0').value = δn;
//     console.log(δn);

// }

function calc()
{
    
    var a1= document.getElementById('unita').value;
    var b1= document.getElementById('unitb').value;
    var εr= document.getElementById('εr').value;
    var μr= document.getElementById('μr').value;
    var δ1= document.getElementById('unitδ').value;
    var σc1= document.getElementById('unitσc').value;
    var σd1= document.getElementById('unitσd').value;


// for a

    if(a1 == "Gm")
    {
        var a= document.getElementById('a').value * 1e9;
    }
    if(a1 == "Mm")
    {
        var a= document.getElementById('a').value * 1e6;
    }
    if(a1 == "Km")
    {
        var a= document.getElementById('a').value * 1e3;
    }
    if(a1 == "m")
    {
        var a= document.getElementById('a').value;
    }
    if(a1 == "mm")
    {
        var a= document.getElementById('a').value * 1e-3;
    }
    if(a1 == "μm")
    {
        var a= document.getElementById('a').value * 1e-6;
    }
    if(a1 == "nm")
    {
        var a= document.getElementById('a').value * 1e-9;
    }
    if(a1 == "Unit")
    {
        alert("Select proper unit for diameter of a.")
    }


// for b

    if(b1 == "Gm")
    {
        var b= document.getElementById('b').value * 1e9;
    }
    if(b1 == "Mm")
    {
        var b= document.getElementById('b').value * 1e6;
    }
    if(b1 == "Km")
    {
        var b= document.getElementById('b').value * 1e3;
    }
    if(b1 == "m")
    {
        var b= document.getElementById('b').value;
    }
    if(b1 == "mm")
    {
        var b= document.getElementById('b').value * 1e-3;
    }
    if(b1 == "μm")
    {
        var b= document.getElementById('b').value * 1e-6;
    }
    if(b1 == "nm")
    {
        var b= document.getElementById('b').value * 1e-9;
    }
    if(b1 == "Unit")
    {
        alert("Select proper unit for diameter of b.")
    }


// for  δ

    if(δ1 == "Gm")
    {
        var δ= document.getElementById('δ').value * 1e9;
    }
    if(δ1 == "Mm")
    {
        var δ= document.getElementById('δ').value * 1e6;
    }
    if(δ1 == "Km")
    {
        var δ= document.getElementById('δ').value * 1e3;
    }
    if(δ1 == "m")
    {
        var δ= document.getElementById('δ').value;
    }
    if(δ1 == "mm")
    {
        var δ= document.getElementById('δ').value * 1e-3;
    }
    if(δ1 == "μm")
    {
        var δ= document.getElementById('δ').value * 1e-6;
    }
    if(δ1 == "nm")
    {
        var δ= document.getElementById('δ').value * 1e-9;
    }



// for σc
     if(σc1 == "Gm")
    {
        var σc= document.getElementById('σc').value * 1e9;
    }
    if( σc1 == "Mm")
    {
        var σc= document.getElementById('σc').value * 1e6;
    }
    if( σc1 == "Km")
    {
        var σc= document.getElementById('σc').value * 1e3;
    }
    if( σc1 == "m")
    {
        var σc= document.getElementById('σc').value;
    }
    if( σc1 == "mm")
    {
        var σc= document.getElementById('σc').value * 1e-3;
    }
    if( σc1 == "μm")
    {
        var σc= document.getElementById('σc').value * 1e-6;
    }
    if( σc1 == "nm")
    {
        var σc= document.getElementById('σc').value * 1e-9;
    }
    if(σc1 == "Unit")
    {
        alert("Select proper unit for conductivity of conductor(σcond).")
    }


// for σd

    if(σd1 == "Gm")
    {
        var σd= document.getElementById('σd').value * 1e9;
    }
    if(σd1 == "Mm")
    {
        var σd= document.getElementById('σd').value * 1e6;
    }
    if(σd1 == "Km")
    {
        var σd= document.getElementById('σd').value * 1e3;
    }
    if(σd1 == "m")
    {
        var σd= document.getElementById('σd').value;
    }
    if(σd1 == "mm")
    {
        var σd= document.getElementById('σd').value * 1e-3;
    }
    if(σd1 == "μm")
    {
        var σd= document.getElementById('σd').value * 1e-6;
    }
    if(σd1 == "nm")
    {
        var σd= document.getElementById('σd').value * 1e-9;
    }
    if(σd1 == "Unit")
    {
        alert("Select proper unit conductivity of dielectric(σdiel).")
    }


    

    var r = 1 / (2 * Math.PI * parseFloat(σc) * parseFloat(δ)) * ((1/a)+(1/b));

    var c = (2* Math.PI * εr * 8.85e-12) / (Math.log(b/a));

    var l = ((μr * 12.56e-7)/ (2 * Math.PI)) * (Math.log (b/a))

    var g = (2 * Math.PI * σd) / (Math.log(b/a));


    

    document.getElementById('floatingOutput1').value = r;
    document.getElementById('floatingOutput2').value = c;
    document.getElementById('floatingOutput3').value = l;
    document.getElementById('floatingOutput4').value = g;
    console.log(r);
    console.log(c);
    console.log(l);
    console.log(g);

    

    
    

}