# Code Challenge 28: sort-and-filter-movies

This challenge is to sort an array of movie objects by title or year.  There's also comparator functions for titles and years.

## Whiteboard UML

![UML](./CC28UML.png)

## Approach/Efficency

Space: O(1)
Time: between O(n log n) and O(n^2) depending on browser.

Since we used a built in sort function, efficiency is dependent on the browser.  Brief google-fu says most browsers built in sort has worst case time complexity of O(n log n).

### Acknowledgements

Got lots of help from referring to Brenda Jow and Steven Gant's previous work, as well as asking questions on Phind.
