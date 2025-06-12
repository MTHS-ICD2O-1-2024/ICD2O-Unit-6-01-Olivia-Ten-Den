// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 6, 2025
// This file contains the JS functions for index.html
//test

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-01b-Olivia-Ten-Den/sw.js", {
    scope: "/ICD2O-Unit-6-01b-Olivia-Ten-Den/",
  })
}

function calculate() {
  let answer = 0
  let integer = parseInt(document.getElementById("integer").value)

  for (let counter = 1; counter <= integer; counter++) {
    answer = answer + counter
  }
  document.getElementById('result').innerHTML = "<p>The product is " + answer + ".</p>"
}
