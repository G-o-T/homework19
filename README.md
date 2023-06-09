# homework19

## 1. Опишите разницу между синхронными и асинхронными функциями.

Синхронные функции - те, что выполняются одна за другой. Если интерпретатор встречает вызов функции, то мгновенно выполняет её. Пока выполняется операция, больше ничего произойти не может (т.к. JS однопоточный язык).
Эти характеристики могут негативно влиять на пользовательский опыт, т.к. для завершения задачи могут потребоваться время (например, загрузить картинку с сервера). Решает эту проблему использованиие асинхронного кода. При использовании таких функций программа не будет ожидать завершения операции, а продолжит реагировать на действия пользователя.

## 2. Сравните подходы работы с асинхронным кодом: *сallbacks* vs *promises* vs *async / await*

- Асинхронное программирование с использованием колбэков. Суть в том, что в функцию, которая выполняет какие-либо асинхронные операции, передается агрументом колбэк, т.е. функция, которая будет вызвана по завершению асинхронного действия. Изначально колбэк был единственным способом работать с асинронностью в JS. Но у него есть ряд минусов. Например, ад колбэков (или адская пирамида колбэков) (возникает, когда надо выполнить несколько асинхронныхй действий друг за другом. Характеризуеся большой вложенностью, сложно читать и поддерживать).

- Асинхронное программирование с использованием промисов. Это способ уйти от ада колбэков. Суть промиса в следующем. Это функция, которая принимает на вход два колбэка: resolve (при успешном выполнени) и reject (при ошибке). У промиса есть три метода: then - выполняется, если промис исполнен, catch - при ошибке, finally - в любом случае (нужно для общих завершающих процедур).

- Асинхронное программирование с использованием async / await. Ключевое слово async, стоящее перед функцией говорит о том, что такая функция всегда будет возвращать промис. Она дает более изящное решение при связке с await (код становится чище и короче, упрощается работа с промисами, но ничего нового в нем нет). Это ключевое слово (исполняется только внутри асинхронной функции) позволяет вызвать другие асинхронные функции. await заставляет интерпритатор ждать пока промис справа от await не выполнится. И только потом возвращается результат и выполнение продолжается.

## 3. Что такое цикл событий (event loop) в JS ?

На событийном цикле основан поток выполнения в браузере. event loop призван создать в однопоточном JS дополнительные потоки, чтобы код работал быстрее. Он позволяет наладить взаимодействие между стеком вызовов и очередью задач. Так задачи поступают на выполнение и выполняются движком (это происходит в стеке). Если в этот момент поступает новая задача, а стек вызовов не пустой, новая таска попадает в очередь задач. Как только стек вызовов очиститься, задача из очереди попадет с помощью event loop в стек для выполнения.

## 4. Какая разница между «стеком вызовов» (call stack) и «очередью задач» (task queue)?

Стек вызовов - структура данных, работающая по методу lifo (last in, first out). То есть первой выполняется задача, добавленная в стек последней.
Очередь задач - тут метод другой - fifo (first in, first out). А тут первой выполняется та, что стала первой.

## 5. Какие версии HTTP-протокола вам известны?

Самая последняя - HTTP/3 (опубликована 27.05.21), есть и более ранние:
- HTTP/0,9 - первая (1991 г.). Поддерживал только один метод запроса get;
- HTTP/1.0 - поддерживал уже get, post, head (1996). Здесь впервые появились HTTP Headers. Опеределение Content-Type в заголовках позволяло передавать не только HTML файлы (но не является официальным стандартом)
- HTTP/1.1 - первая стандартизированная версия протокола (1997), было уже 7 методов + в частности, пересылка данных по частям, поддержка кэширования. Использовали более 15 лет. В этот период появилось расширение HTTPS
- HTTP/2 - (2015) - нацелен на параллелизацию, приоритизацию и управление потоками передачи данных. Используется TPC соединение
 - HTTP/3 - призван решать проблемы скорости, надежности, безопасности. Например, вместо TPC используют QUIC, т.к. первый может создавать задержки в вопросах и ответах.


## 6. Какие знаете коды ответа (состояния) HTTP?

Коды ответа делятся на 5 групп:
Информационные 100 - 199
Успешные 200 - 299
Перенаправления 300 - 399
Клиентские ошибки 400 - 499
Серверные ошибки 500 - 599

Примеры, наиболее распросаненных 200 - ок, 404 - not found, 403 - forbidden

## 7. Как клиент взаимодействует с сервером?

Клиент и сервер взаимподействуют одиночными сообщениями. То, что отправлено клиентом (как правило, веб-браузером) - запрос. То, что сервером, - ответ. Между этими вопросами и ответами могут существовать посредники (т.н. прокси), они могут работать как шлюзы или кэш + могут быть еще доппосредники (маршрутизаторы, модемы и т.д.). В основе обмена данными лежит HTTP-протокол

## 8. Самостоятельно разберитесь, что такое Cross-Origin Resource Sharing. Как устранить проблемы с CORS?

CORS, или Cross-Origin Resource Sharing - технология браузера, которая использует доп HTTP-заголовки и тем самым дает агенту пользователя возможность получать разрешения на доступ к ресурсам на домене, отличном от используемого сайтом в данный момент.
Чтобы устранить проблемы с CORS можно, в частности, используя заголовки Access-Control-Allow-*, а также добавить заголовок CORS к конечной точке POST

## 9. Самостоятельно разберитесь, что такое REST?

REST (от REpresentational State Transfer). Переводят как «передача репрезентативного состояния» или «передача „самоописываемого“ состояния». Под REST понимают согласованный набор ограничений (правил), учитываемых при проектировании, написании кода. Другими словами, REST - это архитектурный стиль

## 10. Как посмотреть заголовки запроса к странице или API?

В инструментах разработчика, во вкладке Network => Headers

## 11. Что можно писать в параметре заголовков `Content-Type` ?

Он нужен, чтобы сообщить, какой будет тип передаваемого контента. Например: "application"  / "audio"  / "image"   / "message"  / "multipart"  / "text"  / "video" 

Через / от типа указывают формат. Например, application/json, значит что отправятся данные в JSON.

## 12. Давайте отправим информацию о собачке в API по адресу `localhost/pets/add` 

    fetch('https://localhost/pets/add', {
    method: 'POST',
    body: JSON.stringify({
            "breed": "Beagle",
    		"size": "large",
    		"color": "orange",
    		"age": 6
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then...