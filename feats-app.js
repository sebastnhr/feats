const categoryNames = {
    'General': 'General',
    'Guerrero': 'Guerrero',
    'Metamágica': 'Metamágica',
    'Creación de Objetos': 'Creación',
    'Estilo': 'Estilo',
    'Táctica': 'Táctica',
    'Salvaje': 'Salvaje',
    'Fe': 'Fe',
    'Divina': 'Divina',
    'Vil': 'Vil',
    'Elevada': 'Elevada',
    'Especial': 'Especial'
};

function normalizeCategory(category) {
    // Normaliza el nombre de categoría para las clases CSS
    return category
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '')
        .replace('creaciondeobjetos', 'creacion');
}

function getPrimaryCategory(categoryString) {
    // Obtiene la primera categoría como principal
    const categories = categoryString.split(',').map(c => c.trim());
    return categories[0];
}

function getAllCategories(categoryString) {
    // Obtiene todas las categorías como array
    return categoryString.split(',').map(c => c.trim());
}

function createCard(feat) {
    const categories = getAllCategories(feat.category);
    const primaryCategory = categories[0];
    const categoryClass = normalizeCategory(primaryCategory);
    
    return `
        <div class="feat-card ${categoryClass}" 
             data-categories="${feat.category.toLowerCase()}" 
             data-type="${feat.type.toLowerCase()}" 
             data-name="${feat.name.toLowerCase()}">
            <div class="card-header ${categoryClass}">
                <div class="card-categories">
                    ${categories.map(cat => `<span class="card-category">${cat}</span>`).join('')}
                </div>
                <div class="card-name">${feat.name}</div>
                <div class="card-type">${feat.type}</div>
            </div>
            <div class="card-body">
                <div class="card-section">
                    <div class="card-section-title">📋 Prerrequisitos</div>
                    <div class="prerequisite-list">${feat.prerequisites}</div>
                </div>
                <div class="card-section">
                    <div class="card-section-title">✨ Beneficio</div>
                    <div class="benefit-text">${feat.benefit}</div>
                </div>
                ${feat.special ? `
                <div class="card-section">
                    <div class="card-section-title">⚠️ Especial</div>
                    <div class="special-text">${feat.special}</div>
                </div>
                ` : ''}
            </div>
            <div class="card-footer">
                ${feat.source}
            </div>
        </div>
    `;
}

function renderCards() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const categoryFilter = document.getElementById('categoryFilter').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value.toLowerCase();
    
    let filteredFeats = feats;
    
    // Filtro de búsqueda por nombre, beneficio y prerrequisitos
    if (searchTerm) {
        filteredFeats = filteredFeats.filter(f => 
            f.name.toLowerCase().includes(searchTerm) ||
            f.benefit.toLowerCase().includes(searchTerm) ||
            f.prerequisites.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filtro de categoría (busca en todas las categorías del dote)
    if (categoryFilter !== 'all') {
        filteredFeats = filteredFeats.filter(f => 
            f.category.toLowerCase().includes(categoryFilter)
        );
    }
    
    // Filtro de tipo
    if (typeFilter !== 'all') {
        filteredFeats = filteredFeats.filter(f => 
            f.type.toLowerCase() === typeFilter
        );
    }
    
    const grid = document.getElementById('cardGrid');
    const searchResults = document.getElementById('searchResults');
    
    if (filteredFeats.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h2>🔍 No se encontraron dotes</h2>
                <p>Intenta con otros filtros o términos de búsqueda</p>
            </div>
        `;
        searchResults.textContent = '(0 dotes encontrados)';
    } else {
        grid.innerHTML = filteredFeats.map(feat => createCard(feat)).join('');
        searchResults.textContent = `(${filteredFeats.length} dote${filteredFeats.length !== 1 ? 's' : ''} encontrado${filteredFeats.length !== 1 ? 's' : ''})`;
        
        // Animación de entrada
        if (searchTerm) {
            document.querySelectorAll('.feat-card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('highlight-search');
                    setTimeout(() => card.classList.remove('highlight-search'), 500);
                }, index * 30);
            });
        }
    }
}

function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('typeFilter').value = 'all';
    renderCards();
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', renderCards);
document.getElementById('categoryFilter').addEventListener('change', renderCards);
document.getElementById('typeFilter').addEventListener('change', renderCards);
document.getElementById('clearFilters').addEventListener('click', clearFilters);

// Render inicial
renderCards();

// Atajos de teclado
document.getElementById('searchInput').addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        this.value = '';
        renderCards();
        this.blur();
    }
});

// Auto-focus en el buscador al cargar
window.addEventListener('load', function() {
    document.getElementById('searchInput').focus();
});