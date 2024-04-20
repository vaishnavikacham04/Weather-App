let inputele=document.getElementById("location-input")
let tempele=document.getElementById("temp-value")
let locele=document.getElementById("location")
let weatherele=document.getElementById('weather-desc')
let btnele=document.getElementById('btn')
 
const apikey="d3fb0c472910c4901f29b5d885384a6f";
var pro2;
btnele.onclick=function (){
    if(inputele.value=="")
    {
        alert("please enter some location")
    }
    else{
        loc=inputele.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
        var pro1=fetch(url).catch((res)=>alert("enter correctly"));
        pro1.then((res)=>{
            console.log(res);
             pro2=res.json().catch((res)=>{
                alert("enter valid location")
            })
             pro2.then((res)=>{
              console.log(res);
                
                    if(res.message=='city not found')
                    {
                        alert("enter valid location")
                    }
                    else{
                        tempele.innerText=(Math.floor(res.main.temp-273));
                        locele.innerText=res.name
                        weatherele.innerText=res.weather[0].description
                    }  
            })
        })
        
    inputele.value="";
    }
}
