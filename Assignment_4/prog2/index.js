const multiply=()=>{
    const a=parseInt(document.getElementById("n1").value);
    const b=parseInt(document.getElementById("n2").value);
    const re=a*b;
    document.getElementById("result").textContent=re;
}
const divide=()=>{
    const a=parseInt(document.getElementById("n1").value);
    const b=parseInt(document.getElementById("n2").value);
    const re=a/b;
    document.getElementById("result").textContent=re;
}