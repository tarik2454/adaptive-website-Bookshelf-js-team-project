function renderTopBooksItem(topBooksItem) {
  const { list_name, books } = topBooksItem;

  const topBooksCards = books
    .map(({ title, author, book_image, _id }) => {
      return ` <li class="card-item">
      <button type="button" data-id=${_id} class="card-wrapper-btn">
          <div loading="lazy" data-id=${_id} class="book-image" style="background-image: url(${book_image})"></div>
          <p class="hover-text">quick view</p>

      </button>
                <h4 class="book-subtitle" data-id=${_id}>${title}</h4>
          <p class="book-autor">${author}</p>
    </li>
  `;
    })
    .join('');

  return `<li class="book-item">
    <h3 class="book-title">${list_name}</h3> 
    <ul class="book-info">${topBooksCards}</ul>
    </li>
    <button type="button" class="more-btn" data-listname="${list_name}">see more</button>
   `;
}

export function renderTopBooksList(topBooksList, amount) {
  const mappingTopBooksList = topBooksList.map(({ list_name, books }) => {
    return {
      list_name,
      books: books.slice(0, amount),
    };
  });
  return mappingTopBooksList.map(renderTopBooksItem).join('');
}
