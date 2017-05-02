﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";   

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        /*
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }
})();

function testDatabase() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCGybAZT1hrNpF0wxH9UOVmNwUeAyWwafI",
        authDomain: "myprojects-67e32.firebaseapp.com",
        databaseURL: "https://myprojects-67e32.firebaseio.com",
        projectId: "myprojects-67e32",
        storageBucket: "myprojects-67e32.appspot.com",
        messagingSenderId: "566617132517"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    database.ref('/test').once('value').then(function (snappyData) {
        //console.log(snappyData.val().value);
        $("#derptest").html("<h1>" + snappyData.val().value + "</h1>");
    });
}
testDatabase();