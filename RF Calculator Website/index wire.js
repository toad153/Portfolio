

function calc()
{

    var a1= document.getElementById('unita').value;
    var d1= document.getElementById('unitd').value;
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

    if(d1 == "Gm")
    {
        var d= document.getElementById('d').value * 1e9;
    }
    if(d1 == "Mm")
    {
        var d= document.getElementById('d').value * 1e6;
    }
    if(d1 == "Km")
    {
        var d= document.getElementById('d').value * 1e3;
    }
    if(d1 == "m")
    {
        var d= document.getElementById('d').value;
    }
    if(d1 == "mm")
    {
        var d= document.getElementById('d').value * 1e-3;
    }
    if(d1 == "μm")
    {
        var d= document.getElementById('d').value * 1e-6;
    }
    if(d1 == "nm")
    {
        var d= document.getElementById('d').value * 1e-9;
    }
    if(d1 == "Unit")
    {
        alert("Select proper unit for diameter of d.")
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

     var r = 1 / Math.PI * (a) * parseFloat(σc) * parseFloat(δ);
    //          // var result1 = r;
    //
            var l = (parseFloat(μr) * (12.56* 1e-7)/ Math.PI) * (a) * Math.cosh((d)/2*(a));
    //          var result2 = l;
    //
        var g = (Math.PI * parseFloat(σd)) / (a)* Math.cosh((d)/2*(a));
    //          // var result3 = c;
    //
             var c= (Math.PI * parseFloat(εr)) / (a) * Math.cosh((d) / 2 * (a));
    //       // var result4 = g;







    document.getElementById('result1').value = r;
    document.getElementById('result2').value = c;
    document.getElementById('result3').value = l;
    document.getElementById('result4').value = g;
    console.log(r);
    console.log(c);
    console.log(l);
    console.log(g);






}
