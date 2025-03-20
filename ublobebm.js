(function() {
  var iframe, container, closeButton;

  function createIframe() {
    container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '2147483647';

    iframe = document.createElement('iframe');
    iframe.src = 'https://coderva.duckdns.org';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    container.appendChild(iframe);

    closeButton = document.createElement('button');
    closeButton.innerHTML = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.padding = '5px 10px';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', function() {
      container.style.visibility = 'hidden';
    });
    container.appendChild(closeButton);
    document.body.appendChild(container);
  }

  function toggleIframeVisibility(event) {
    if (event.key === '\\') {
      if (iframe) {
        container.style.visibility = container.style.visibility === 'hidden' ? 'visible' : 'hidden';
      } else {
        createIframe();
      }
    }
  }

  document.addEventListener('keydown', toggleIframeVisibility);
})();
