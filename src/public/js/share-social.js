function shareFacebook(url) {
  const width = 630;
  const height = 630;

  const left = screen.width / 2 - width / 2;
  const top = screen.height / 2 - height / 2;

  window.open(
    `http://www.facebook.com/sharer.php?u=${url}`,
    "Compartilhar no facebook",
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
  );
}
