"use strict";

(function() {
  const $needsJs = document.querySelector(".need-js");

  $needsJs.forEach(function($element) {
    $element.classList.remove("need-js");
  });
})();
