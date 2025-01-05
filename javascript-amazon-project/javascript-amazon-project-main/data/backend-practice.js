const xhr = new XMLHtttpRequest() //this creates a new http messag to send to the backend
//message === request

//to set up up this request we can do the following
xhr.open('GET', 'https://supersimplebackend.dev')

xhr.addEventLitsener('load', ()=>{
    console.log(xhr.response)
})
xhr.send()
//open is going to take two types of parameter the first is what type of request to send, types: GET, POST, PUT, DELETE
//2nd parameter tellls the computer where to send this message(a URL => to locate another computer we need to use a URL
//Its like an adress but for the computer, The URL helps us locate another computer on the internet )

xhr.reaposnse //if you try to access this the result will be undefined since the send() methos is asynchronous