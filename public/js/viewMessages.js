const getMessages = () => {
   const passCode = document.querySelector("#passcode");
   const messagesRef = firebase.database().ref();
   messagesRef.on('value', (snapshot) => { //when messagesRef changes, get value of that function - .val function pulls the value out of the snapshot of the datbase
    const data = snapshot.val();
    console.log(data);
   })
}