  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhRwy9Lln3tMNPdjQ3rOFgZSZgtPgAOlM",
    authDomain: "fir-spaceshuttle.firebaseapp.com",
    databaseURL: "https://fir-spaceshuttle.firebaseio.com",
    projectId: "fir-spaceshuttle",
    storageBucket: "",
    messagingSenderId: "1034001318270"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

var name = ""
var destination = ""
var arriveTime = ""
var rate = ""
var nextShuttle = ""

//Add Shuttle on CLICK
$("#addShuttle").on("click", function(event){
    event.preventDefault();
    name = $("#nameInput").val().trim();
    destination = $("#shuttleDest").val().trim();
    arriveTime = $("#arriveTime").val().trim();
    //arriveTime = moment(arriveTime).format("HHHH")
    rate = $("#rateVal").val().trim()

     database.ref().set({
         Name: name,
         Dest: destination,
         Arrival: arriveTime,
         Rate: rate,
    })

    database.ref().on("value", function (snapshot) {
        console.log(snapshot.val());
    })

    // $("#shuttleInfo").text(snapshot.val().Dest + " | " + snapshot.val().Name + " | " + snapshot.val().Arrival + " | " + snapshot.val().Rate);
    // $("#shuttleInfo").html(
    //     `
    //     <tr>
    //         <td></td>
    //         <td>${destination}</td>
    //         <td>${arriveTime}</td>
    //         <td>${rate}</td>
    //         <td><!--ETA!--></td>
    //     `
    // )

    $("#nameInput").val("");
    $("#shuttleDest").val("");
    $("#arriveTime").val("");
    $("#rateVal").val("")
    })
// database.ref().on("child_added", function (snapshot){
//     var arrivalTime = snapshot.val().arriveTime
//     var minTillArrival = moment(arrivalTime).fromNow()
//     $("#shuttleInfo").append(
//         `
//         <tr>
//             <td>${name}</td>
//             <td>${destination}</td>
//             <td>${arriveTime}</td>
//             <td>${rate}</td>
//             <td>${minTillArrival}</td>
//         `
//     )
// })