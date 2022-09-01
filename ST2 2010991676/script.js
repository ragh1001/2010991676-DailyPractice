function fnclick(){
    let num=document.getElementById("n1").value;
    if(num=="" || num== " " || num==null){
        alert("Enter a value");
    }else{
        num=Number(num);
        let count=num.toString().length;
        if(!isNaN(num) && count==5){
            let d1=num.toString().split("");
            let d2=d1.map(Number);
            let sum=0;
            for(let i=0; i<d2.length; i++){
                sum+=d2[i];
            }
            document.getElementById("p1").style.width=sum+"rem";
            document.getElementById("p1").style.height=sum+"rem";
            document.getElementById("p1").style.backgroundColor="green";
            document.getElementById("p1").style.borderRadius=sum/5+"rem";
            document.getElementById("p1").style.transitionDuration="2s";
            document.getElementById("p1").style.transitionDelay="1s";
        }else{
            alert("Enter a 5 digit Number.")
        }
    }
}