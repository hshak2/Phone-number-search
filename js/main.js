document.querySelector('button').addEventListener('click', callingYou)
function callingYou(){
    const num = document.querySelector('input').value
    let url = `http://apilayer.net/api/validate?access_key=58891631fac3f9c86e983d26a5451a9d&number=${Number(num)}&country_code=&format=1`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if(data.valid === true && num.toString().length > 10){
        document.querySelector('#isItTrue').innerText = `${num} is a valid phone number!`
      }else if(data.valid && num.toString().length > 10){
        document.querySelector('#isItTrue').innerText = `${num} is a fake phone number!` 
      }else if(num.toString().length < 10){
        document.querySelector('#isItTrue').innerText = 'Please enter a valid number.'
      }else{
        document.querySelector('#isItTrue').innerText = 'Is it a real or fake number?'
      }
    
      data.country_name ? document.querySelector('#country').innerText = data.country_name : document.querySelector('#country').innerText = 'Country'
      data.location ? document.querySelector('#city').innerText = data.location : document.querySelector('#city').innerText = 'City'
      data.carrier ? document.querySelector('#carrier').innerText = data.carrier : document.querySelector('#carrier').innerText = 'Carrier'
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
      

}


