var storedvalue = "";
butt1.addEventListener("click", function() {
    storedvalue += "1";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
butt2.addEventListener("click", function() {
    storedvalue += "2";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
butt3.addEventListener("click", function() {
    storedvalue += "3";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
butt4.addEventListener("click", function() {
    storedvalue += "4";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
butt5.addEventListener("click", function() {
    storedvalue += "5";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
butt6.addEventListener("click", function() {
    storedvalue += "6";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
butt7.addEventListener("click", function() {
    storedvalue += "7";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
butt8.addEventListener("click", function() {
    storedvalue += "8";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
butt9.addEventListener("click", function() {
    storedvalue += "9";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
butt0.addEventListener("click", function() {
    storedvalue += "0";
    console.log("Storedvalue:",storedvalue);
    document.getElementById("screen").textContent = storedvalue;
});
var a;
var b;
var ans;
var sign;
plus.addEventListener("click", function() {
    a = Number(storedvalue);  
    storedvalue = "";
    sign = "+"
    console.log("Storedvalue:",storedvalue,"a = ",a);
});
minus.addEventListener("click", function() {
    a = Number(storedvalue);  
    storedvalue = "";
    sign = "-";
    console.log("Storedvalue:",storedvalue,"a = ",a);
});
multi.addEventListener("click", function() {
    a = Number(storedvalue);  
    storedvalue = "";
    sign = "x";
    console.log("Storedvalue:",storedvalue,"a = ",a);
});
divide.addEventListener("click", function() {
    a = Number(storedvalue);  
    storedvalue = "";
    sign = "/";
    console.log("Storedvalue:",storedvalue,"a = ",a);
});
equal.addEventListener("click", function() {
    b = Number(storedvalue);
    if (sign == "+"){
        ans = a + b; 
    }
    if (sign == "-"){
        ans = a - b;
    }
    if(sign == "x"){
        ans = a * b;
    }
    if(sign == "/"){
        ans = a / b;
    }
    storedvalue = "";
    console.log("Storedvalue:",storedvalue,"a = ",a,"b = ",b,"ans =",ans);
});
document.getElementById("plus").addEventListener("click", function() {
    document.getElementById("screen").textContent = a + "+";
});
document.getElementById("minus").addEventListener("click", function() {
    document.getElementById("screen").textContent = a + "-";
});
document.getElementById("multi").addEventListener("click", function() {
    document.getElementById("screen").textContent = a + "x";
});
document.getElementById("divide").addEventListener("click", function() {
    document.getElementById("screen").textContent = a + "/";
});
document.getElementById("equal").addEventListener("click", function() {
  document.getElementById("screen").textContent = a + sign + b + " = " + ans;
});
clear.addEventListener("click", function() {
    storedvalue = "";
    a = 0;
    b = 0;
    ans = 0;
    console.log("Storedvalue:",storedvalue,"a: ",a,"b: ",b,"ans: ",ans);
    document.getElementById("screen").textContent = "";
});                     