//Code Taken from Online to Add Code to Database from UI
/*
<script>
  var config = {
    apiKey: MYAPIKEY,
    authDomain: MYDOMAIN,
    databaseURL: MYURL,
    projectId: MYPROJECT,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: SENDERID
  };
  firebase.initializeApp(config);
</script>

<script>
    function writeNewPost() {
      var postData = {
        "Name": "Brett"
      };

     var newPostKey = firebase.database().ref().push().key;

     var updates = {};
     updates['/' + newPostKey] = postData;

     return firebase.database().ref().update(updates);
   }
</script>
*/

const getMessages = () => {
   const passCode = document.querySelector("#passcode");
   const messagesRef = firebase.database().ref();
   messagesRef.on('value', (snapshot) => { //when messagesRef changes, get value of that function - .val function pulls the value out of the snapshot of the datbase
    const data = snapshot.val();
    console.log(data);
    for(let key in data){
        console.log(key,data[key]);
        if (data[key].passcode === passCode.value){
            console.log("match found");
            const messages = document.querySelector("#message");
            message.innerHTML = data[key].message;
        }
    }
   })
}