// Теоретичне питання
// Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
// Дуже доречно використовувати при розпаковці JSON.parse, для обробки некоректної відповіді.
// При роботі із своїм кодом, для виявлення синтаксичних помилок

const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];

let root = document.getElementById("root");

function createNote(book) {
  let liList = document.createElement("li");
  liList.textContent = `Author: ${book.author || "Unknown"},
    Name: ${book.name || "Unnamed"},
    Price: ${book.price || "Not specified"}`;
  return liList;
}

function createList() {
  let list = document.createElement("ul");
  list.className = "list__item";
  books.forEach((book) => {
    try {
      if (!("author" in book)) {
        throw new Error("Не вказаний автор");
      }
      if (!("name" in book)) {
        throw new Error("Не вказана назва книги");
      }
      if (!("price" in book)) {
        throw new Error("Не вказана вартість книги");
      }
      let listBook = createNote(book);
      list.appendChild(listBook);
    } catch (error) {
      console.error(`${error.message}`);
    }
  });
  root.appendChild(list);
}

createList();
