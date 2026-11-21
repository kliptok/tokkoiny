// Общая навигация + каталог магазина.
// Изображения товаров подключены из папки images.

(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const header = document.querySelector('.site-header');

  if (menuButton && header) {
    menuButton.addEventListener('click', () => {
      const isOpen = header.classList.toggle('nav-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.focus();
      }
    });

    header.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const products = [
  { name: 'Картина «GLAM»', price: 666, image: 'images/Kartina3-converted-compressed.webp', category: 'furniture', isNew: true },
{ name: 'Тапочки «BWA»', price: 585, image: 'images/IMG_9324.webp', category: 'clothes', isNew: true },
    { name: 'Кресло «Каблук Любы»', price: 483, image: 'images/IMG_9323.webp', category: 'furniture', isNew: true },
    { name: 'Светлая накидка «Аксель»', price: 449, image: 'images/IMG_9321.webp', category: 'axel', isNew: false },
    { name: 'Тёмная накидка «Аксель»', price: 449, image: 'images/IMG_9320.webp', category: 'axel', isNew: false },
    { name: 'Фотодоска «Клипток»', price: 250, image: 'images/IMG_9311.webp', category: 'furniture', isNew: false },
    { name: 'Сумка доставщика «Onion»', price: 435, image: 'images/IMG_9312.webp', category: 'clothes', isNew: false },
    { name: 'Лонгслив «Крысиная любовь»', price: 450, image: 'images/IMG_9310.webp', category: 'clothes', isNew: false },
    { name: 'Клипбокс', price: 599, image: 'images/IMG_9309.webp', category: 'unique', isNew: false },
    { name: 'Шапка «Аксель»', price: 333, image: 'images/IMG_9313.webp', category: 'axel', isNew: false },
    { name: 'Наушники «Аксель»', price: 444, image: 'images/IMG_9314.webp', category: 'axel', isNew: false },
    { name: 'Шапка бини «Star shine»', price: 250, image: 'images/IMG_9319.webp', category: 'star-shine', isNew: false },
    { name: 'Очки «Star shine»', price: 200, image: 'images/IMG_9315.webp', category: 'star-shine', isNew: false },
    { name: 'Серьга «Star shine»', price: 150, image: 'images/IMG_9318.webp', category: 'star-shine', isNew: false },
    { name: 'Лонгслив «Star shine»', price: 550, image: 'images/IMG_9317.webp', category: 'star-shine', isNew: false },
    { name: 'Штаны «Star shine»', price: 300, image: 'images/IMG_9316.webp', category: 'star-shine', isNew: false },
    { name: 'Кеды «Star shine»', price: 250, image: 'images/IMG_9322.webp', category: 'star-shine', isNew: false }
  ];

  const categoryIcons = {
    clothes: '👕',
    furniture: '🪑',
    axel: '✦',
    'star-shine': '✧',
    unique: '💎'
  };

  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const search = document.getElementById('productSearch');
  const sort = document.getElementById('productSort');
  const empty = document.getElementById('emptyProducts');
  const categoryFilters = document.getElementById('categoryFilters');

  if (!search || !sort || !empty || !categoryFilters) return;

  let activeCategory = 'all';
  let resultCount = document.getElementById('productResultCount');

  if (!resultCount) {
    resultCount = document.createElement('p');
    resultCount.id = 'productResultCount';
    resultCount.className = 'muted product-result-count';
    resultCount.setAttribute('aria-live', 'polite');
    resultCount.style.textAlign = 'center';
    resultCount.style.margin = '0 0 16px';
    grid.before(resultCount);
  }

  categoryFilters.querySelectorAll('.category-filter').forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category || 'all';

      categoryFilters.querySelectorAll('.category-filter').forEach(item => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });

      renderProducts();
    });
  });

  function makeProductVisual(product) {
    const photo = document.createElement('div');
    photo.className = 'product-image';

    photo.setAttribute('role', 'img');
    photo.setAttribute(
      'aria-label',
      product.image
        ? `Фото товара: ${product.name}`
        : `Декоративная иллюстрация товара: ${product.name}`
    );

    if (product.image) {
      const image = document.createElement('img');

      image.src = product.image;
      image.alt = product.name;
      image.loading = 'lazy';

      image.onerror = () => {
        photo.replaceChildren();
        photo.removeAttribute('role');
        photo.setAttribute(
          'aria-label',
          `Иллюстрация товара: ${product.name}`
        );
        addFallbackVisual(photo, product);
      };

      photo.append(image);
    } else {
      addFallbackVisual(photo, product);
    }

    if (product.isNew) {
      const badge = document.createElement('span');
      badge.className = 'product-badge';
      badge.textContent = 'Новинка';
      photo.append(badge);
    }

    return photo;
  }

  function addFallbackVisual(photo, product) {
    const icon = document.createElement('span');
    icon.className = 'product-placeholder-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = categoryIcons[product.category] || '✦';

    const label = document.createElement('span');
    label.className = 'product-placeholder-label';
    label.textContent = 'ИЗОБРАЖЕНИЕ ТОВАРА';

    photo.append(icon, label);
  }

  function renderProducts() {
    const term = search.value.trim().toLocaleLowerCase('ru');

    let list = products
      .map((product, order) => ({ ...product, order }))
      .filter(product => {
        const matchesSearch = product.name
          .toLocaleLowerCase('ru')
          .includes(term);

        const matchesCategory =
          activeCategory === 'all' ||
          product.category === activeCategory;

        return matchesSearch && matchesCategory;
      });

    if (sort.value === 'asc') {
      list.sort((a, b) => a.price - b.price || a.order - b.order);
    } else if (sort.value === 'desc') {
      list.sort((a, b) => b.price - a.price || a.order - b.order);
    } else if (sort.value === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    }

    grid.replaceChildren();

    const fragment = document.createDocumentFragment();

    list.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';

      card.append(makeProductVisual(product));

      const title = document.createElement('h3');
      title.textContent = product.name;

      const price = document.createElement('div');
      price.className = 'product-price';

      const coin = document.createElement('img');
      coin.src = 'images/tokcoin.webp';
      coin.alt = '';
      coin.setAttribute('aria-hidden', 'true');
      coin.onerror = () => {
        coin.hidden = true;
      };

      const priceText = document.createElement('span');
      priceText.textContent =
        `${new Intl.NumberFormat('ru-RU').format(product.price)} ТокКоинов`;

      price.append(coin, priceText);
      card.append(title, price);

      fragment.append(card);
    });

    grid.append(fragment);

    empty.hidden = list.length !== 0;

    resultCount.textContent =
      `Найдено товаров: ${list.length} из ${products.length}`;
  }

  search.addEventListener('input', renderProducts);
  sort.addEventListener('change', renderProducts);

  renderProducts();
})();
