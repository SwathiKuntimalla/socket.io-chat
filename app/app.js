const socket = io('ws://localhost:3500')

// input functionality
function sendMessage(e){
    e.preventDefault()
        const input = document.querySelector('input');
        if(input.value){
            socket.emit('message',input.value);
            input.value= " ";
        }
        input.focus();
    }

    // button functionlity 

    document.querySelector('form')
    .addEventListener("submit",sendMessage);

    // listing the messages  from server 
    socket.on("message",(data) =>{
        const li = document.createElement('li');
        li.textContent = data;
        document.querySelector('ul').appendChild(li);
    })
