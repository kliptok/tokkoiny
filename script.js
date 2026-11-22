
(() => {
  // ===== НАВИГАЦИЯ =====

  const menuButton = document.querySelector('.menu-toggle');
  const header = document.querySelector('.site-header');

  if (menuButton && header) {
    menuButton.addEventListener('click', () => {
      const isOpen = header.classList.toggle('nav-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Закрыть меню' : 'Открыть меню'
      );
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

  // ===== КАТАЛОГ ТОВАРОВ =====

  const products = [
    // ===== НОВИНКИ =====

    {
      name: 'Картина «GLAM»',
      price: 666,
      image: 'images/Kartina3-converted-compressed.webp',
      category: 'furniture',
      isNew: true
    },
    {
      name: 'Кресло «Каблук Любы»',
      price: 483,
      image: 'images/IMG_9323.webp',
      category: 'furniture',
      isNew: true
    },
    {
      name: 'Тапочки «BWA»',
      price: 585,
      image: 'images/IMG_9324.webp',
      category: 'clothes',
      isNew: true
    },
    {
      name: 'Эффект «Alter Axel»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'clothes',
      isNew: true
    },

    // ===== ОСТАЛЬНЫЕ ТОВАРЫ =====

    {
      name: 'Светлая накидка «Аксель»',
      price: 449,
      image: 'images/IMG_9321.webp',
      category: 'axel'
    },
    {
      name: 'Тёмная накидка «Аксель»',
      price: 449,
      image: 'images/IMG_9320.webp',
      category: 'axel'
    },
    {
      name: 'Фотодоска «Клипток»',
      price: 250,
      image: 'images/IMG_9311.webp',
      category: 'furniture'
    },
    {
      name: 'Сумка доставщика «Onion»',
      price: 435,
      image: 'images/IMG_9312.webp',
      category: 'clothes'
    },
    {
      name: 'Лонгслив «Крысиная любовь»',
      price: 450,
      image: 'images/IMG_9310.webp',
      category: 'clothes'
    },
    {
      name: 'Клипбокс',
      price: 599,
      image: 'images/IMG_9309.webp',
      category: 'unique'
    },
    {
      name: 'Шапка «Аксель»',
      price: 333,
      image: 'images/IMG_9313.webp',
      category: 'axel'
    },
    {
      name: 'Наушники «Аксель»',
      price: 444,
      image: 'images/IMG_9314.webp',
      category: 'axel'
    },
    {
      name: 'Шапка бини «Star shine»',
      price: 250,
      image: 'images/IMG_9319.webp',
      category: 'star-shine'
    },
    {
      name: 'Очки «Star shine»',
      price: 200,
      image: 'images/IMG_9315.webp',
      category: 'star-shine'
    },
    {
      name: 'Серьга «Star shine»',
      price: 150,
      image: 'images/IMG_9318.webp',
      category: 'star-shine'
    },
    {
      name: 'Лонгслив «Star shine»',
      price: 550,
      image: 'images/IMG_9317.webp',
      category: 'star-shine'
    },
    {
      name: 'Штаны «Star shine»',
      price: 300,
      image: 'images/IMG_9316.webp',
      category: 'star-shine'
    },
    {
      name: 'Кеды «Star shine»',
      price: 250,
      image: 'images/IMG_9322.webp',
      category: 'star-shine'
    },
    {
      name: 'Вывеска «Клипток»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'furniture'
    },
    {
      name: 'Кольцевая лампа',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'furniture'
    },
    {
      name: 'Декор «Аксель»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'furniture'
    },

    // ===== ИНТЕРЬЕР «ЭЙ, КЛИПТОК!» =====

    {
      name: 'Интерьер «Эй, Клипток!»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'furniture',
      items: [
        'Большой стеллаж «Эй, Клипток!»',
        'Диван «Эй, Клипток!»',
        'Дверь «Эй, Клипток!»',
        'Журнальный столик «Эй, Клипток!»',
        'Картина с Антоном «Эй, Клипток!»',
        'Картина с самолетом «Эй, Клипток!»',
        'Компьютер «Эй, Клипток!»',
        'Кулер с Акселем «Эй, Клипток!»',
        'Куча носков «Эй, Клипток!»',
        'Мяч для регби «Эй, Клипток!»',
        'Окно «Эй, Клипток!»',
        'Панорамная крыша «Эй, Клипток!»',
        'Пол «Эй, Клипток!»',
        'Полка настенная «Эй, Клипток!»',
        'Потолочные светильники «Эй, Клипток!»',
        'Пуф «Эй, Клипток!»',
        'Радиатор «Эй, Клипток!»',
        'Скейтборд «Эй, Клипток!»',
        'Стакан с карандашами «Эй, Клипток!»',
        'Стационарный телефон «Эй, Клипток!»',
        'Стены «Эй, Клипток!»',
        'Стол «Эй, Клипток!»',
        'Стул «Эй, Клипток!»',
        'Фигурка динозавра Тренди «Эй, Клипток!»',
        'Фигурка Иннокентия «Эй, Клипток!»',
        'Фигурка планеты «Эй, Клипток!»',
        'Цветок «Эй, Клипток!»',
        'Цветок в горшке «Эй, Клипток!»',
        'Часы настенные «Эй, Клипток!»'
      ]
    },

    // ===== ИНТЕРЬЕР «LUVANDI» =====

    {
      name: 'Интерьер «Luvandi»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'furniture',
      items: [
        'Фонарики «Luvandi»',
        'Настенное украшение «Luvandi»',
        'Настольное украшение «Luvandi»',
        'Окно «Luvandi»',
        'Стол «Luvandi»'
      ]
    },

    // ===== ОДЕЖДА =====

    {
      name: 'Майка «TikTok»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'clothes'
    },
    {
      name: 'Кот «Антон»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'clothes'
    },
    {
      name: 'Худи «Аксель»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'clothes'
    },
    {
      name: 'Шапка «Luvandi»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'clothes'
    },
    {
      name: 'Бенгальский огонь «Luvandi»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'clothes'
    },
    {
      name: 'Костюм динозавра «Тренди»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'clothes'
    },
    {
      name: 'Пикми-указка «Гламур»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'clothes'
    },

    // ===== КОСТЮМ «LOSER CORE» =====

    {
      name: 'Свитер «Loser Core»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'loser-core'
    },
    {
      name: 'Юбка «Loser Core»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'loser-core'
    },
    {
      name: 'Чулки «Loser Core»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'loser-core'
    },
    {
      name: 'Ботинки «Loser Core»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'loser-core'
    },
    {
      name: 'Сумка «Loser Core»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'loser-core'
    },

    // ===== КОСТЮМ «NO PARTIES» =====

    {
      name: 'Шуба «No parties»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'no-parties'
    },
    {
      name: 'Очки «No parties»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'no-parties'
    },
    {
      name: 'Шапка «No parties»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'no-parties'
    },
    {
      name: 'Штаны «No parties»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'no-parties'
    },
    {
      name: 'Блузка «No parties»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'no-parties'
    },
    {
      name: 'Ботинки «No parties»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'no-parties'
    },

    // ===== УНИКАЛЬНОЕ =====

    {
      name: 'Танец «swaga»',
      displayPrice: 'Участие в конкурсах',
      image: null,
      category: 'unique'
    }
  ];

  // ===== ПРИНУДИТЕЛЬНО ОСТАВЛЯЕМ ТОЛЬКО 4 НОВИНКИ =====

  const newProducts = new Set([
    'Картина «GLAM»',
    'Кресло «Каблук Любы»',
    'Тапочки «BWA»',
    'Эффект «Alter Axel»'
  ]);

  products.forEach(product => {
    product.isNew = newProducts.has(product.name);
  });

  // ===== ИКОНКИ КАТЕГОРИЙ =====

  const categoryIcons = {
    clothes: '👕',
    furniture: '🪑',
    axel: '✦',
    'star-shine': '✧',
    'loser-core': '🖤',
    'no-parties': '✨',
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

  // ===== ФИЛЬТРЫ =====

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

  // ===== ИЗОБРАЖЕНИЯ =====

  function makeProductVisual(product) {
    const photo = document.createElement('div');
    photo.className = 'product-image';

    if (product.image) {
      const image = document.createElement('img');

      image.src = product.image;
      image.alt = product.name;
      image.loading = 'lazy';

      image.onerror = () => {
        photo.replaceChildren();
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

  // ===== ЦЕНА ИЛИ УСЛОВИЕ ПОЛУЧЕНИЯ =====

  function makeProductPrice(product) {
    const price = document.createElement('div');
    price.className = 'product-price';

    if (product.displayPrice) {
      const text = document.createElement('span');

      text.textContent = product.displayPrice;
      price.append(text);

      return price;
    }

    const coin = document.createElement('img');

    coin.src = 'images/tokcoin.webp';
    coin.alt = '';
    coin.setAttribute('aria-hidden', 'true');

    coin.onerror = () => {
      coin.hidden = true;
    };

    const text = document.createElement('span');

    text.textContent =
      `${new Intl.NumberFormat('ru-RU').format(product.price)} ТокКоинов`;

    price.append(coin, text);

    return price;
  }

  // ===== РАСКРЫВАЮЩИЙСЯ СПИСОК ИНТЕРЬЕРА =====

  function makeProductDetails(product) {
    if (!product.items || !product.items.length) return null;

    const details = document.createElement('details');
    details.className = 'product-details';

    const summary = document.createElement('summary');
    summary.textContent = 'Посмотреть предметы';

    const list = document.createElement('ul');
    list.className = 'product-details-list';

    product.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.append(listItem);
    });

    details.append(summary, list);

    return details;
  }

  // ===== ОТОБРАЖЕНИЕ КАТАЛОГА =====

  function renderProducts() {
    const term = search.value.trim().toLocaleLowerCase('ru');

    let list = products
      .map((product, order) => ({ ...product, order }))
      .filter(product => {
        const searchableText = [
          product.name,
          ...(product.items || [])
        ].join(' ').toLocaleLowerCase('ru');

        const matchesSearch = searchableText.includes(term);

        const matchesCategory =
          activeCategory === 'all' ||
          product.category === activeCategory;

        return matchesSearch && matchesCategory;
      });

    // ===== СОРТИРОВКА =====

    if (sort.value === 'asc') {
      list.sort((a, b) => {
        if (a.price == null && b.price == null) return a.order - b.order;
        if (a.price == null) return 1;
        if (b.price == null) return -1;

        return a.price - b.price || a.order - b.order;
      });
    } else if (sort.value === 'desc') {
      list.sort((a, b) => {
        if (a.price == null && b.price == null) return a.order - b.order;
        if (a.price == null) return 1;
        if (b.price == null) return -1;

        return b.price - a.price || a.order - b.order;
      });
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

      card.append(title, makeProductPrice(product));

      const details = makeProductDetails(product);

      if (details) {
        card.append(details);
      }

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
