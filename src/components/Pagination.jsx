
const Pagination = ({ totalCountries, countriesPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalCountries / countriesPerPage);
    const maxVisiblePages = 5;

    if (totalPages <= 1) return null; // если только 1 страница — ничего не показываем
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

        // не выходим за пределы
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    const visiblePages = [];
    for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
    }
    return (
        <div className="pagination">
              {/* Кнопка "Назад" */}
        {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>«</button>
        )}
        {visiblePages.map((page) => (
            <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? 'active-page' : ''}
            >
                {page}
            </button>
        ))}
        {/* Кнопка "Вперёд" */}
        {currentPage < totalPages && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>»</button>
        )}
        </div>
    )
}

export default Pagination