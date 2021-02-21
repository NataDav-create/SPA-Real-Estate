import * as view from './listingView';

export default function (state) {
  console.log('Listing');
  view.render();

  state.results.forEach(function (item) {
    view.renderCard(item);
  });

  state.emitter.subscribe('event:render-listing', () => {
    view.clearListingContainer();

    state.results.forEach(function (item) {
      view.renderCard(item);
    });
  });
}