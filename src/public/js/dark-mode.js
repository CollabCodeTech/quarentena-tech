"use strict";

(function(doc) {
  const $input_dark_mode = doc.querySelector("#dark-mode > [type=checkbox]");
  const $nes = doc.querySelectorAll("[class*=nes]");

  verifyDarkModeOnload();

  $input_dark_mode.addEventListener("change", function() {
    $nes.forEach(function($element) {
      $element.classList.toggle("is-dark");
    });

    updateDarkMode();
  });

  function verifyDarkModeOnload() {
    const dark_mode = localStorage.getItem("dark_mode") == "true";

    dark_mode && setDarkMode();
  }

  function updateDarkMode() {
    const dark_mode = localStorage.getItem("dark_mode") == "true";

    localStorage.setItem("dark_mode", !dark_mode);
  }

  function setDarkMode() {
    $input_dark_mode.setAttribute("checked", true);
    $nes.forEach(function($element) {
      $element.classList.add("is-dark");
    });
  }
})(document);
