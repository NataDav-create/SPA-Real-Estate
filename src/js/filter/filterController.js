import Filter from './filterModel';
import * as view from './filterView';

export default function (state) {
  // view.render();

  if (!state.filter) state.filter = new Filter();
  state.filter.getParams();
}