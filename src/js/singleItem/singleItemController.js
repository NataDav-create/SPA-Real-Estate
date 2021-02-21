import SingleItem from './singleItemModel';

export default function (state) {
  console.log('single item control start');
  state.singleItem = new SingleItem(state.routeParams);
  state.singleItem.getItem();
}