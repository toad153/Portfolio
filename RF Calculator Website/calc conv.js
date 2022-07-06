function calc()
{
    var r= document.getElementById('ref').value; 

    var rl = -20 * Math.log10(r);

    document.getElementById('floatingOutput1').value = rl;

    console.log(rl);

}

function rl()
{
    var rl= document.getElementById('rl').value; 

    var rc = Math.pow(10,(-rl/20));

    document.getElementById('floatingOutput2').value = rc;

    console.log(rc);

}

function vswr()
{
    var vswr= document.getElementById('vswr').value; 

    var a = (parseFloat(vswr)-1);

    var b = (parseFloat(vswr)+1);

    var x = a/b;

    var rl1 = -20 * Math.log10(x);

    document.getElementById('floatingOutput3').value = rl1;

    console.log(rl1);

}

function vs()
{
    var vs= document.getElementById('vs').value; 

    var a = (parseFloat(vs)-1);

    var b = (parseFloat(vs)+1);

    var rc = a/b;

    document.getElementById('floatingOutput4').value = rc;

    var ml = -10 * Math.log10(1-Math.pow(rc,2));

    document.getElementById('floatingOutput5').value = ml;

    var rl = -20 * Math.log10(rc);

    document.getElementById('floatingOutput6').value = rl;


}

function rc()
{
    var vs= document.getElementById('rc').value; 

    var a = 1-(parseFloat(vs));

    var b = 1+(parseFloat(vs));

    var vswr = b/a;

    document.getElementById('floatingOutput7').value = vswr;

    var ml = -10 * Math.log10(1-Math.pow(vs,2));

    document.getElementById('floatingOutput8').value = ml;

    var rl = -20 * Math.log10(vs);

    document.getElementById('floatingOutput9').value = rl;
}

function rlcal()
{
    var rlcal= document.getElementById('rlcal').value;
    
    var rc = Math.pow(10,(-rlcal/20));

    document.getElementById('floatingOutput12').value = rc;

    var a = 1-(parseFloat(rc));

    var b = 1+(parseFloat(rc));

    var vswr = b/a;

    document.getElementById('floatingOutput10').value = vswr;

    var ml = -10 * Math.log10(1-Math.pow(rc,2));

    document.getElementById('floatingOutput11').value = ml;

}

function rcvswr()
{
    var rc= document.getElementById('rcvswr').value;

    var a = 1-(parseFloat(rc));

    var b = 1+(parseFloat(rc));

    var vswr = b/a;

    document.getElementById('floatingOutput13').value = vswr;
}

function rlvswr()
{
    var rl= document.getElementById('rlvswr').value;

    var rc = Math.pow(10,(-rl/20));

    var a = 1-(parseFloat(rc));

    var b = 1+(parseFloat(rc));

    var vswr = b/a;

    document.getElementById('floatingOutput14').value = vswr;

}

function vswrrc()
{
    var vswr= document.getElementById('vswrrc').value; 

    var a = (parseFloat(vswr)-1);

    var b = (parseFloat(vswr)+1);

    var x = a/b;

    document.getElementById('floatingOutput15').value = x;

}