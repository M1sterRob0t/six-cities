# Проект «Шесть городов»

* Студент: [`Александр`](https://github.com/M1sterRob0t).
* Наставник: [`Оля 😺`](https://github.com/IOlga1).

Команды:
* cd project - перейтив  корень проекта
* npm i - установить зависимости
* npm run build - собрать проект
* npm run start - запустить проект
* npm run test - запустить тесты
* npm run lint - проверить на наличие ошибок

Запуск:
* cd project 
* npm i 
* npm run build 
* npm run start
---
## О проекте
«Шесть городов» — сервис для путешественников, не желающих переплачивать за аренду
жилья. Выбирайте один из шести популярных городов для путешествий и получайте
актуальный список предложений по аренде. Подробная информация о жилье, показ объекта
на карте, а также лаконичный интерфейс сервиса помогут быстро выбрать оптимальное
предложение

## Описание функциональности

### Страницы приложения
Приложение состоит из нескольких страниц: `Main` ( `/` ), `Sign In` ( `/login` ), `Favorites`
( `/favorites` ) (приватная), Room ( `/offer/:id` ).

Страница `Favorites` доступна только авторизованным пользователям.

Если пользователь авторизован, то при переходе на страницу `Sign In` выполняется
перенаправление на главную страницу.

Если пользователь не авторизован, то при попытке перехода к приватной странице
выполняется перенаправление на страницу «Sign In» ( `/login` ).

В шапке каждой страницы отображается ссылка на страницу «Sign In» (если пользователь
не авторизован) или email пользователя и кнопка «Sign Out» (если пользователь
авторизован).

Клик по кнопке «Sign Out» приводит к завершению сеанса работы — выходу из закрытой
части приложения.

Клик по email пользователя в шапке выполняет переход на страницу «Favorites»
( `/favorites` ).

Обращение к несуществующей странице (например, через адресную строку) не приводит
к появлению ошибок в приложении, а корректно обрабатывается маршрутизацией.

Пользователь перенаправляется на страницу «404». Дизайн страницы остаётся
на усмотрение студента. В самом простом случае это может быть страница с текстом `404
Not Found` и ссылкой для перехода на главную страницу приложения.


### Главная страница
На главной странице отображается список городов, для которых возможно запросить
предложения по аренде: `Paris` , `Cologne` , `Brussels` , `Amsterdam` , `Hamburg` , `Dusseldorf` .

Сервер всегда возвращает информацию только для этих шести городов.

После загрузки приложения всегда активен сразу первый город из списка на главной
странице — `Paris`. По этому городу загружены предложения по аренде.

На карте предложения отображаются в виде синих маркеров.

При смене города выполняется обновление списка предложений и карта.

В заголовке списка предложений отображается количество доступных предложений.
Пример корректного заголовка: `312 places to stay in Amsterdam`.

Кнопка «Избранное» каждого предложения. Клик по кнопке «Избранное» добавляет
карточку в избранное. Повторный клик по кнопке «Избранное» выполняет обратное
действие — удаляет из избранного. Если пользователь не авторизован, то выполняется
перенаправление на страницу `Sign In`. Иконка на кнопке меняется в зависимости
от действия: добавить в избранное (прозрачная), удалить из избранного (синяя).


### Список предложений
Пользователь может менять сортировку списка предложений. Варианты сортировки:
— `Popular` . Вариант по умолчанию. Предложения отображаются в порядке, полученном
с сервера.
— `Price: low to high` . От дешёвых к дорогим.
— `Price: high to low` . От дорогих к дешёвым
— `Top rated first` . От высокого рейтинга к низкому.

При смене варианта сортировки список предложений перерисовывается.

Каждая карточка в списке предложений содержит информацию:
— `Изображение` . Фотография жилья.
— `Премиальность` . Метка «Premium».
— `Стоимость за ночь` . Стоимость всегда отображается в евро.
— `Заголовок` . Краткое описание предложения. Например: «Beautiful & luxurious apartment
at great location».
— `Тип жилья` . Одно из нескольких значений: `apartment` , `room` , `house` , `hotel` .
Кнопка «Избранное» . Клик по кнопке «Избранное» добавляет карточку в избранное. Если
пользователь не авторизован, то выполняется перенаправление на страницу `Sign In` .
— `Рейтинг` . Оценка выводится в виде закрашенных звезд. Максимальное количество
звёзд — 5. Оценка пользователя округляется до ближайшего целого. Например, оценка 3.1
округляется до 3-х. Оценка 4.5 округляется до 5.
— Клик по заголовку карточки выполняет переход на страницу с подробной информацией
о предложении.

Адрес страницы с подробной информации о предложении выглядит следующим образом:
`/offer/:id` , где `id` идентификатор предложения. Например, `/offer/1704` .

Если предложения отсутствуют, то в списке отображается надпись «No places to stay
available», а вместо карты отображается статичное изображение. См. пример
соответствующей страницы макета.


### Карта
Все предложения выбранного города отображаются на карте в виде синих маркеров.

При наведении курсора на карточку предложения, маркер, соответствующий объявлению,
становится оранжевым. Пункт справедлив только для главной страницы, на странице
предложения цвет маркера изменяться не должен.


### Страница предложения
На странице предложения ( `/offer` ) представлена расширенная информация об объекте
для аренды:
— `Фотографии` . Выводится до 6-ти изображений.
— `Заголовок` . Краткое описание предложения, например: «Beautiful & luxurious studio
at great location».
— `Подробное описание` .
— `Премиальность` .
— `Тип жилья` . Одно из предопределённых значений: `apartment` (Apartment), `room` (Private 
Room), `house` (House), `hotel` (Hotel).
— `Рейтинг` . Оценка предложения отображается в виде закрашенных звезд и среднего бала
(например, 4.8). Максимальное количество звёзд — 5.
— `Количество спален` . Например, `3 Bedrooms` .
— `Максимальное количество гостей` . Например, `Max 4 adults` .
— `Стоимость аренды за ночь` . Сумма всегда отображается в евро.
— Список бытовых предметов в квартире (Wifi, Heating, Kitchen, Cable TV и т. д.);
— `Информация о хозяине` : аватарка, имя, отметка `pro` (звёздочка возле аватарки) и подпись
`Pro` под именем хозяина.

Кнопка «Избранное». Клик по кнопке «Избранное» добавляет карточку в избранное. Если
пользователь не авторизован, то выполняется перенаправление на страницу `Sign In` .

Отзывы пользователей. В заголовке блока отображается общее количество отзывов.
Например: `Reviews 1` . Количество отзывов в заголовке должно соответствовать количеству
отображаемых отзывов.

Для авторизованных пользователей отображается форма отправки нового отзыва.

Под списком отзывов отображается карта с предложениями неподалёку. На карте отмечено
3 предложения неподалёку и маркер текущего предложения (итого 4 маркера). Маркеры
предложений выделены синим. Маркер текущего предложения выделен оранжевым. Другая
функциональность для карты с предложениями неподалёку не предусмотрена.

Карточки представленных предложений отображаются сразу под картой и содержат тот же
набор информации, что и на главной странице.


### Отзывы
Каждый отзыв содержит:
— Аватар автора.
— Имя автора.
— Оценку. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5.
— Дата отзыва в формате: `Месяц Год` . Например: `April 2019` .
— Текст отзыва.

В заголовке блока отображается общее количество отзывов.

На страницу выводится не больше 10 отзывов.

Отзывы должны быть отсортированы от новых к старым (новые сверху).


### Форма отправки отзыва
Форма отправки отзыва отображается только для авторизованных пользователей.

Пользователь должен выставить рейтинг. Рейтинг выставляется от 1 до 5.

Для выбора рейтинга пользователь отмечает соответствующее количество звёзд.

Текст отзыва должен содержать от 50 до 300 символов.

Пока пользователь не выбрал оценку и не ввёл текст допустимой длины, кнопка отправки
отзыва не активна.

При нажатии кнопки «Submit» и отправке данных кнопка «Submit» и вся форма должны
блокироваться. Разблокировка формы и кнопки происходит в случае успешной отправки
или при возникновении ошибки.

В случае успешной отправки отзыва форма очищается.

В случае возникновения ошибки следует уведомить пользователя. Способ отображения
ошибки остаётся на усмотрение разработчика.

Пользователь может оставить любое количество отзывов.


### Страница Sign In

Для входа в сервис пользователь вводит логин (email) и пароль. Поскольку у сервиса
отсутствует возможность регистрации, логин и пароль могут быть любыми, но не пустыми.

В поле «логин» должен вводится корректный email.

В поле «пароль» должен вводится валидный пароль. Под валидным паролем
подразумевается пароль, который состоит минимум из одной буквы и цифры.
Страница доступна только неавторизованным пользователям. Авторизованных
пользователей перенаправляет на главную страницу


### Favorites
Страница «Favorites» доступна только авторизованным пользователям. Если пользователь
не авторизован, то выполняется перенаправление на страницу «Sign In».

Переход на страницу «Favorites» осуществляется при клике на email авторизованного
пользователя.

Данные для страницы «Favorites» всегда загружаются с сервера. Для этого предусмотрен
отдельный маршрут (см. раздел «Взаимодействие с сервером»).

На странице «Favorites» отображаются все предложения, которые пользователь добавил
в избранное. Предложения группируются по городам.

Если пользователь не добавил ни одного предложения в избранное, то на странице
отображается «Nothing yet saved» (см. макет).

На странице «Favorites» пользователь может удалить предложение из избранного. Удаление
осуществляется нажатием на кнопку «Избранное».

После удаления предложения из избранного, список предложений актуализируется
(удалённое предложение пропадает).

### Разное
В зависимости от состояния, некоторым элементам управления применяются
соответствующие классы оформления. Например, активный фильтр и так далее. Примеры
доступны в директории с вёрсткой ( `markup` ).

### Взаимодействие с сервером
Все необходимые данные загружаются с сервера.

Сервер доступен по адресу: https://8.react.pages.academy/six-cities .

В случае недоступности сервера отображается информационное сообщение. Дизайн
сообщения остаётся на усмотрение разработчика.

Сервер принимает данные в виде JSON объекта.

Авторизация на сервере происходит на основании токена. Токен передаётся с каждым
запросом в заголовке X-Token .

## Структуры данных
### Hotel
{
 "bedrooms": 3,
 "city": {
   "location": {
   "latitude": 52.370216,
   "longitude": 4.895168,
   "zoom": 10
 },
 "name": "Amsterdam"
 },
 "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
 "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
 "host": {
   "avatar_url": "img/1.png",
   "id": 3,
   "is_pro": true,
   "name": "Angelina"
 },
 "id": 1,
 "images": ["img/1.png", "img/2.png"],
 "is_favorite": false,
 "is_premium" : false,
 "location": {
   "latitude": 52.35514938496378,
   "longitude": 4.673877537499948,
   "zoom": 8
 },
 "max_adults": 4,
 "preview_image": "img/1.png",
 "price": 120,
 "rating": 4.8,
 "title": "Beautiful & luxurious studio at great location",
 "type": "apartment"
}

### CommentGet
{
 "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
 "date": "2019-05-08T14:13:56.569Z",
 "id": 1,
 "rating": 4,
 "user": {
   "avatar_url": "img/1.png",
   "id": 4,
   "is_pro": false,
   "name": "Max"
 }
}

### CommentPost
{
 "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
 "rating": 4
}

### User
{
 "email": "Oliver.conner@gmail.com",
 "password": "12345678"
}

### AuthInfo
{
 "avatar_url": "img/1.png",
 "email": "Oliver.conner@gmail.com",
 "id": 1,
 "is_pro": false,
 "name": "Oliver.conner",
 "token": "T2xpdmVyLmNvbm5lckBnbWFpbC5jb20="
}

## Маршруты
### GET /hotels
Получение списка предложений.

Коды ответов:
— 200 ОК

Пример:

Request:
— URL: GET /hotels

Response:
— Status: 200 OK
— Body: массив, содержащий структуры типа `Hotel`

### GET /hotels/: id
Получение предложения с идентификатором `id` .

Коды ответов:
— 200 ОК
— 404 Not found

Пример:

Request:
— URL: GET /hotels/1

Response:
— Status: 200 OK
— Body: структура типа `Hotel`

### GET /hotels/: hotel_id/nearby
Получение списка предложений неподалеку

Коды ответов:
— 200 ОК
— 404 Not found

Пример:

Request:
— URL: GET /hotels/: hotel_id/nearby

Response:
— Status: 200 OK
— Body: массив, содержащий структуры типа `Hotel`

### GET /favorite
Получение списка избранных предложений

Коды ответов:
— 200 ОК
— 401 Unauthorized (в случае, если не пройдена авторизация)

Пример:

Request:
— URL: GET /favorite

Response:
— Status: 200 OK
— Body: массив, содержащий структуры типа `Hotel`

### POST /favorite/: hotel_id/: status
Изменение статуса избранного у предложения. В теле ответа приходят данные по отелю
с актуальным состоянием поля `is_favorite` .

Параметры:
— `:hotel_id` — ID отеля, который нужно убрать/добавить в избранное
— `:status` — значения могут быть 1 или 0. 1 добавляет отель в избранное, 0 удаляет

Коды ответов:
— 200 ОК
— 401 Unauthorized (в случае, если не пройдена авторизация)

Пример:

Request:
— URL: POST /favorite/42/1

Response:
— Status: 200 OK
— Body:структура `Hotel` с актуальным состоянием поля `is_favorite`


### GET /comments/: hotel_id
Получить список комментариев для конкретного предложения по его `id` .

Коды ответов:
— 200 ОК
— 400 Bad request

Пример:

Request:
— URL: POST /comments/42
— Body: структура `CommentPost`

Response:
— Status: 200 OK
— Body: массив, содержащий структуры типа `CommentGet`

### POST /comments/: hotel_id
Отправить новый комментарий к конкретному предложению по его id .

Коды ответов:
— 200 ОК
— 400 Bad request
— 401 Unauthorized (в случае, если не пройдена авторизация)

Пример:

Request:
— URL: POST /comments/42
— Body: структура CommentPost

Response:
— Status: 200 OK
— Body: массив, содержащий структуры типа CommentGet для текущего предложения

### POST /login
Авторизация пользователя на сервере. В случае успешного запроса сервер вернёт токен,
по которому в дальнейшем происходит авторизация. Этот токен необходимо передавать
через заголовок `X-Token` . Если авторизация не проходит, сервер вернёт код состояния `401`
при запросах на закрытые части сайта.

Коды ответов:
— 200 OK

Пример:

Request:
— URL: POST /login
— Body: структура `User`

Response:
— Status: 200 OK
— Body: структура `AuthInfo`

### GET /login
Проверка статуса авторизации пользователя.

Коды ответов:
— 200 ОК
— 401 Unauthorized (в случае, если не пройдена авторизация)

Пример:

Request:
— URL: GET /login

Response:
— Status: 200 OK
— Body: структура `AuthInfo`

### DELETE /logout
Завершение сеанса работы — выход из закрытой части приложения

Пример:

Request:
— URL: DELETE /logout

Response:
— Status: 204 No Content

### Дополнительно
Покройте код проекта тестами. Напишите тесты для всех компонентов, редьюсеров,
асинхронных операций.

В правой части страницы «Sign In» отображается кнопка для быстрого перехода к списку
предложений по аренде в этом городе. Город для быстрого перехода определяется
случайным образом. Клик по кнопке перенаправляет пользователя на главную страницу
и устанавливает фильтр в соответствии с выбранным городом.






