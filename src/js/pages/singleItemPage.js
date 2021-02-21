import singleItem from './../singleItem/singleItemController';
export default function () {
  document.querySelector('#app').innerHTML = '';

  singleItem();
}