const profileTextELm = document.querySelector('form input')
const formElm = document.querySelector('form')
const showProfilePlace = document.querySelector('main')
const USER_API = 'https://api.github.com/users/'

formElm.addEventListener('submit', e => {
    e.preventDefault()
    let isTrue = isValid(profileTextELm.value)  

    if(isTrue){
        alert('Please Write Github Profile Username')
    }else{
        userData(profileTextELm.value)
    }
})

function isValid(profileVal){
    let isTrue = false
    if(!profileVal){
        isTrue = true
    }else{
        isTrue = false
    }
    return isTrue
}

async function userData(Username){
    const res = await fetch(USER_API + Username)
    const resData = await res.json()
    showDataInUi(resData)
}

function showDataInUi(data){

    if(data.name){
        showProfilePlace.innerHTML = `
        <div class="card">
            <div class="profile_pic">
                <img src="${data.avatar_url}" alt="">
            </div>
            <div class="profile_details">
                <p><b>Name</b> : ${data.name}</p>
                <p><b>followers</b> : ${data.followers}</p>
                <p><b>Following</b> : ${data.following}</p>
                <p><b>Location</b> : ${data.location}</p>
                <p><b>Github Porfile Link</b> : <a href="${data.html_url}">Click Here</a></p>
            </div>
        </div>
    `
    }else{
        alert('No Data Found')
    }

    
}