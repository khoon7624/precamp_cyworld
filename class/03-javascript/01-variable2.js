const accessPhoneNum = ()=>{
  const result = document.getElementById('result');
  const num = String(Math.floor(Math.random()*1000000) + 1).padStart(6,"0")
  const timerEl = document.getElementById('timer');
  result.innerText = num

let timer = 5;
timerEl.innerText = "3:00"
  setInterval(() => {
    if(timer >= 0){
      let timerToFirst = timer / 60;
      let timerToSecond = String(timer % 60).padStart(2,"0");
      timerEl.innerText = Math.floor(timerToFirst) + ":" + timerToSecond;
      timer = timer - 1
      console.log(timer)
    }else{
      document.getElementById('confirmBtn').disabled = true
    }

  }, 1000);

}