import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// Cities
const autocompleteCities = document.querySelectorAll('.autocomplete-city');

export function getAutocompleteCities(autocompleteCities) {
  return M.Autocomplete.init(autocompleteCities);
}

// Countries
const autocompleteCountry = document.querySelectorAll('.autocomplete-country');

export function getAutocompleteCountry(autocompleteCountry) {
  return M.Autocomplete.init(autocompleteCountry);
}
