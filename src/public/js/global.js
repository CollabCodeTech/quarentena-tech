'use strict';

const global = (function (doc) {
  const module = {};
  module.categories = [];
  module.cards_tc = doc.querySelectorAll('.card-tc');

  module.updateScreen = (categories) => {
    module.cards_tc.forEach((card_tc) => card_tc.classList.remove('-active'));
    categories.forEach((category) =>
      module.cards_tc.forEach(
        (card_tc) =>
          card_tc.getAttribute('data-category') === category &&
          card_tc.classList.add('-active')
      )
    );
    module.categories.length === 0 &&
      module.cards_tc.forEach((card_tc) => card_tc.classList.add('-active'));
  };

  module.setCategories = (categories) => {
    module.categories = categories;
    module.updateScreen(categories);
  };

  return {
    setCategories: module.setCategories,
  };
})(document);
