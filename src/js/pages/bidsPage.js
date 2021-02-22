import bids from './../bids/bidsControlller';

export default function (state) {
  document.querySelector('#app').innerHTML = '';
  bids(state);
}