
/* 7th tradition "Donate" button.
*/
function addDonateButton() {
  const CFG = document.querySelector('[data-paypal-pool-url]').dataset;
  const NAV = document.querySelector('.site-nav .trigger');

  NAV.innerHTML += `<a
    href="${CFG.paypalPoolUrl}"
    target="_blank"
    title="7th tradition contributions (Opens in a new window)"
    >Donate</a>
  `; // ☞;
}
addDonateButton();


/* Accessibility fix!
*/
const TOGGLE = document.querySelector('.site-nav [ for = nav-trigger ]');
const CHECK  = document.querySelector('.site-nav .nav-trigger');

TOGGLE.setAttribute('tabindex', 0);
TOGGLE.role = 'button';
TOGGLE.title = 'Toggle navigation';
TOGGLE.onkeypress = ev => {
  ev.preventDefault();

  console.debug('Toggle:', CHECK, CHECK.checked, ev);

  CHECK.checked = CHECK.checked ? '' : 'checked';
};

console.debug('custom.js:', CFG);
