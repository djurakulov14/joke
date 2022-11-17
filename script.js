let form = document.forms.joke
let place = document.querySelector('h1')

form.onsubmit = (e) => {
    e.preventDefault()

    let arr = {}
    
    let fm = new FormData(form)
    
    fm.forEach((value, key) => {
        arr[key] = value
    })
    
    if (arr.name.length == 0) {
        alert("Enter your fucking name")
    }

    let im = arr.name.toLowerCase()
    console.log(im);

    if(im.includes('sardor') || im.includes('сардор')){
        place.innerHTML = `${arr.name} is ZVER💪🏾`
    } else if(im.includes('aminjon') || im.includes('аминжон')){
        place.innerHTML = `${arr.name} is LESSAK👅`
    } else{
        place.innerHTML = `${arr.name[0].toUpperCase()}${arr.name.slice(1)} is GAY🏳️‍🌈`
    }
}