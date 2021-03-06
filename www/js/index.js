/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// document.addEventListener('deviceready', onDeviceReady, false);

// function onDeviceReady() {
//     // Cordova is now initialized. Have fun!

//     console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//     document.getElementById('deviceready').classList.add('ready');
// }

var $$ = Dom7;

var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: routes
    // ... other parameters
  });

  $$(document).on('page:beforein', function (e) {
   const currentUrl=app.views.main.router.url;    
    if(currentUrl=="/signin/" || currentUrl=="/flash/" ||  currentUrl=="/"){
      document.querySelector("#mainNavBar .navbar-inner")["style"].display = "none"
      document.querySelector("#mainNavBar .navbar-bg")["style"].background = "#015289";
    }
    else{
      document.querySelector("#mainNavBar .navbar-inner")["style"].display = ""
      document.querySelector("#mainNavBar .navbar-bg")["style"].background = "#0072BC";
    }

    if(currentUrl=="/home/"){
      document.querySelector("#mainNavBar .navbar-inner .right #rightArrow")["style"].display = "none"
    }
    else{
      document.querySelector("#mainNavBar .navbar-inner .right #rightArrow")["style"].display = ""
    }
  })


  
  var mainView = app.views.create('.view-main');