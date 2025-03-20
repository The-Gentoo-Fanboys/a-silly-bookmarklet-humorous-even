javascript:(function(){
  alert('Welcome to the JarzaClay proxy embedder!');
  alert('If you would like to switch to the proxy, make sure you aren\'t in any text boxes and press backslash (\\)');
  var iframe = document.createElement('iframe');
  iframe.src = 'https://coderva.duckdns.org';
  iframe.hidden = true;
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.border = 'none';
  document.body.appendChild(iframe);
  function toggleIframeVisibility(event) {
    if (event.key === '\\') {
      iframe.hidden = !iframe.hidden;
    }
  }
  document.addEventListener('keydown', toggleIframeVisibility);
  iframe.addEventListener('load', function() {
    iframe.contentWindow.addEventListener('blur', function() {
      window.focus();
    });
  });
  setInterval(function() {
    window.focus();
  }, 500);
})();
