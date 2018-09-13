# Мне нравятся ...
Приложение для формирования списков рекомендаций 💙

Первая версия работает только с фильмами.

![Главная страница](https://i.imgur.com/dmHYPsT.png)

> **Внимание**. Возможны проблемы с подключением у некоторых провайдеров. Если у вас повисла загрузка сайта или его компонентов, попробуйте включить VPN.

---
## 🏎️ Возможности

### 👫 Для пользователей

1. Приложение загружает список файлов с [внешнего сервера](https://xsolla-ss-films-api.herokuapp.com/films) и отображает его на главной странице. Нажатие на фильм вызывает панель с детальной информацией о нем.
1. Фильмы группируются по годам и сортируются по убыванию, то есть сверху в списке оказываются фильмы, которые пользователь посмотрел последними.
1. Можно добавлять новые фильмы и изменять существующие через удобную форму.
1. Каждый раз подгружается актуальный рейтинг фильма с Кинопоиска и IMDb.
1. Если загрузка любых элементов занимает время, до момента появления элемента крутится лоадер.
1. Элементы управления анимированы. Присмотритесь к мелочам 😉
1. При отправке данных через форму производится валидация — пользователь может сразу изменить некорректные данные.
1. Верстка «тянется» на мобильных устройствах, адаптируется под сенсорный ввод.
1. Приложение переведено на два языка. Переключение производится через свитчер.
1. Заголовок вкладки меняется в зависимости от того, какая страница открыта.

### ⚙ Для разработчиков

1. **«Мне нравятся ...»** — одностраничное приложение (SPA), написано на [Реакте](https://reactjs.org/). Для роутинга используется [React Router](https://github.com/ReactTraining/react-router). 
1. [ESLint](https://eslint.org/) ([Airbnb Javascript Style Guide](https://github.com/airbnb/javascript/) + [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)) и [Stylelint](https://stylelint.io/) ([Stylelint Config Recommended](https://github.com/stylelint/stylelint-config-recommended)) гарантируют чистоту кода.
1. [PostCSS](https://postcss.org/) помогает создавать стили: 
    - [postcss-nested](https://github.com/postcss/postcss-nested) — вложенность
    - [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) — переменные
1. С помощью [Formik](https://jaredpalmer.com/formik) создается форма добавления или редактирования фильма, поля которой удобно проверять с помощью встроенных функций [Yup](https://github.com/jquense/yup#stringmatchesregex-regex-message-string-schema)'а и регулярных выражений.
1. В разработке применяется практика CI/CD: тесты прогоняются на [CircleCI](https://circleci.com/), осуществляется код ревью при помощи [Code Climate](https://codeclimate.com/). Если тесты пройдены, производится деплой продакшн-версии приложения на [Heroku](https://heroku.com).

> *Тут сделать крутую гифку с перелистыванием шагов Коммит → Прогон → Деплой → Приложуха*

---
## 📑 Доступные страницы

#### `/`
Cписок фильмов

![Список фильмов](https://i.imgur.com/ky9KcBY.png)

#### `/film/[идентификатор фильма]/`
О фильме

![Список фильмов](https://i.imgur.com/Vd9QBaJ.png)

#### `/newfilm`
Добавление фильма в базу данных

![Список фильмов](https://i.imgur.com/1oR5THS.png)

#### `/editfilm/[идентификатор фильма]`
Редактирование существующего фильма

#### `/[любой другой текст]`
Страница не найдена
    
<img src="https://i.imgur.com/rRx1quV.png" title="Ошибка 404 по-русски" width="280"/><img src="https://i.imgur.com/Q7zTXo6.png" title="Ошибка 404" width="280"/>

---
## 🎨 Как выглядит

🖥️ На десктопе:
`[Сюда гифку ↓]`

📱 На телефоне:
`[Сюда гифку ↓]`

---
## 🌐 Как открыть в интернете

Перейти по ссылке: https://xsolla-ss-favourite-films.herokuapp.com/.

---
## 💿 Как запустить у себя

```
git clone https://github.com/albertmolodec/xsolla-summer-school.git
cd xsolla-summer-school
npm install
```

### 🦄 Dev

```
npm run dev
```

В режиме разработки приложение открывается на [порту 4000](http://localhost:4000).

### 🏇 Prod

```
npm run prod
npm start
```

В продакшн-режиме приложение открывается на [порту 8080](http://localhost:8080).

---
## 🌏 Поддержка браузеров

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> IE | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Да | 10+ | Да | Да | Да |

---
## 🇷🇺🇬🇧 Локализация

В правой верхней части экрана расположен переключатель языков. Сейчас доступны два: русский и английский.

![Локализация](https://i.imgur.com/aAlhZkZ.gif)

---
## 👨‍💻 Автор

[Абдульманов Альберт](https://github.com/albertmolodec)

<a href="https://github.com/albertmolodec"><img src="https://i.imgur.com/ECT91Lf.jpg" alt="Абдульманов Альберт" width="160px"/></a>


Выполнено в рамках выпускной работы **[Летней школы разработки компании Xsolla](http://school.xsolla.com/)** в 2018 году 🎯
