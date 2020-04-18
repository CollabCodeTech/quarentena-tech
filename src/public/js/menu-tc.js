'use strict';

(function (doc) {
  const menu = 'menu-tc';
  const $action_menu = doc.querySelector(`[href="#${menu}"]`);
  const $menu_tc = doc.querySelector(`.${menu}`);
  const $close = $menu_tc.querySelector('.close');

  const $wrapper_category = $menu_tc.querySelector('.wrapper-category');
  const $call_to_action = $wrapper_category.querySelector('.-call-to-action');

  $menu_tc.addEventListener('click', updateFilter);

  $action_menu.addEventListener('click', function () {
    $menu_tc.classList.add('-active');
  });

  $wrapper_category.addEventListener('click', selectFilter);

  $close.addEventListener('click', updateFilter);
  $call_to_action.addEventListener('click', updateFilter);

  function updateFilter(event) {
    event.stopPropagation();
    $menu_tc.classList.remove('-active');
  }

  function selectFilter(event) {
    const $category_tc = event.target;

    if (
      $category_tc.classList.contains('category-tc') &&
      !$category_tc.classList.contains('-call-to-action')
    ) {
      event.stopPropagation();
      const $icon = $category_tc.querySelector('.icon');

      $icon.classList.toggle('is-transparent');

      updateCategories();
    }
  }

  function updateCategories() {
    const $icons = $menu_tc.querySelectorAll('.icon');
    const categories = [...$icons]
      .map(
        ($icon) =>
          !$icon.classList.contains('is-transparent') &&
          $icon.closest('.category-tc').getAttribute('data-category')
      )
      .filter((item) => item);
    console.log(categories);

    global.setCategories(categories);
  }
})(document);
