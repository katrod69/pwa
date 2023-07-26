const installBtn = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
    installBtn.textContent = 'Click the button to install!';
});

// TODO: Implement a click event handler on the `butInstall` element
installBtn.addEventListener('click', async () => {
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    installBtn.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
});
