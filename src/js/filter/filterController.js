import Filter from './filterModel';
import * as view from './filterView';

export default async function (state) {

  if (!state.filter) state.filter = new Filter();
  await state.filter.getParams();

  view.render(state.filter.params);

  await state.filter.getResults();

  view.changeButtonText(state.filter.result.length);
}