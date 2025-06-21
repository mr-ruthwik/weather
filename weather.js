myform.addEventListener("submit",function(e){
    e.preventDefault();
    let input =document.getElementById('info');
    // alert(input.value);
    let apiKey="0f5c0ba37d02efb68c91fe6500b96c68";
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`)
// .then(res=>console.log(res));
.then(res=>{
    console.log(res)
        document.getElementById('display').innerHTML=`<h3>City : ${res.data.name}</h3>
        <h4>Temparature : ${res.data.main.temp}<sup>0</sup>C</h4>
        <p>clouds : ${res.data.weather[0].description}</p>`;
    })
    .catch(error => alert("Enter valid city"));
})



