
const CFG = document.querySelector('[data-paypal-pool-url]').dataset;
const NAV = document.querySelector('.site-nav .trigger');

NAV.innerHTML += `<a
  href="${CFG.paypalPoolUrl}"
  target="_blank"
  title="7th tradition contributions (Opens in a new window)"
  >Donate</a>
`;

console.debug('custom.js:', CFG);
