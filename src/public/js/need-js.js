"use strict";

(function () {
  const $needsJs = document.querySelectorAll(".need-js");

  $needsJs.forEach(function ($element) {
    $element.classList.remove("need-js");
  });
})();
