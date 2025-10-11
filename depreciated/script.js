function filterApps(category) {
  const cards = document.querySelectorAll('.app-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterApps(category, language = 'all') {
  const cards = document.querySelectorAll('.app-card');
  cards.forEach(card => {
    const matchesCategory = category === 'all' || card.dataset.category === category;
    const matchesLanguage = language === 'all' || card.dataset.language === language;
    card.style.display = matchesCategory && matchesLanguage ? 'block' : 'none';
  });
}
