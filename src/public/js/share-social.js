'use strict';

const share = (function () {
  const $canonical = document.querySelector('link[rel=canonical]');
  const url = $canonical
    ? $canonical.getAttribute('href')
    : window.location.href;

  function facebook() {
    const width = 630;
    const height = 630;

    const left = screen.width / 2 - width / 2;
    const top = screen.height / 2 - height / 2;

    window.open(
      `http://www.facebook.com/sharer.php?u=${url}`,
      'Compartilhar no facebook',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
    );
  }

  function withWebApi(event) {
    if (navigator && navigator.share) {
      navigator
        .share({
          title: 'Quarentena Tech',
          text:
            'Site com uma lista de conteúdos gratuitos e online sobre programação',
          url,
        })
        .then(function () {
          console.log('Funcionou!!');
        })
        .catch(function (err) {
          console.error(err);
        });
    } else {
      facebook();
    }
    event.preventDefault();
  }

  return {
    withWebApi,
  };
})();
