// Comparator function for sorting by year.
function compareYear(a, b) {
  return a.year - b.year;
}

// Comparator function for sorting by title, ignoring "The " at the start.
function compareTitle(a, b) {
  const titleA = a.title.replace(/^The /, '');
  const titleB = b.title.replace(/^The /, '');
  return titleA.localeCompare(titleB);
}

// Function to sort an array of movies by year.
function sortYear(movies) {
  return [...movies].sort(compareYear);
}

// Function to sort an array of movies by title.
function sortTitle(movies) {
  return [...movies].sort(compareTitle);
}

module.exports = {
  sortYear,
  sortTitle,
  compareYear,
  compareTitle,
};
