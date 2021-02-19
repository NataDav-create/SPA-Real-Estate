import Filter from './filterModel';
import * as view from './filterView';

export default async function (state) {

  if (!state.filter) state.filter = new Filter();
  await state.filter.getParams();

  view.render(state.filter.params);

  await state.filter.getResults();

  view.changeButtonText(state.filter.result.length);

  const form = document.querySelector('#filter-form');
  form.addEventListener('change', function (e) {
    e.preventDefault();
    state.filter.query = view.getInput();
    console.log(state.filter.query)
  });
}