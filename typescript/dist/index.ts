
const images = [
  "image/01.jpg",
  "image/02.png",
  "image/03.png",
  "image/04.png",
];

let currentIndex = 0;

const imageElement = document.getElementById("image") as HTMLImageElement;
const previousButton = document.getElementById("left") as HTMLButtonElement;
const nextButton = document.getElementById("right") as HTMLButtonElement;

function updateImage() {
  const currentImage = images[currentIndex];
  imageElement.src = currentImage;

  previousButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === images.length - 1;
}

previousButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
});

updateImage();







const slider = document.querySelector('.slider');
const sliderThumb = document.getElementById('sliderThumb');

let thumbPosition = 0;
setThumbPosition(thumbPosition);

sliderThumb.addEventListener('mousedown', startDrag);

function startDrag(event) {
  event.preventDefault();
  document.addEventListener('mousemove', dragThumb);
  document.addEventListener('mouseup', stopDrag);
}

function dragThumb(event) {
  const newPosition = event.clientX - slider.getBoundingClientRect().left;
  thumbPosition = Math.max(0, Math.min(newPosition, slider.clientWidth));
  setThumbPosition(thumbPosition);
}

function stopDrag() {
  document.removeEventListener('mousemove', dragThumb);
  document.removeEventListener('mouseup', stopDrag);
}

function setThumbPosition(position) {
  sliderThumb.style.left = `${position}px`;
}








document.addEventListener('DOMContentLoaded', function () {
  const titles = document.querySelectorAll('.accordion__title');
  titles.forEach(title => {
    title.addEventListener('click', function () {
      const accordion = title.parentElement;
      const content = accordion.querySelector('.accordion__content');

      const allAccordions = document.querySelectorAll('.accordion');
      allAccordions.forEach(acc => {
        if (acc !== accordion) {
          const accContent = acc.querySelector('.accordion__content');
          accContent.style.display = 'none';
        }
      });

      if (content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});







const newsData: string[] = [
  "News 4",
  "News 5",
  "News 6",
];

function isPageEnd(): boolean {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  return (window.innerHeight + window.pageYOffset) >= (documentHeight - windowHeight);
}

function appendNewsItems() {
  const newsList = document.getElementById("news-list");
  if (newsList) {
    for (const newsItem of newsData) {
      const listItem = document.createElement("li");
      listItem.textContent = newsItem;
      newsList.appendChild(listItem);
    }
  }
}

window.addEventListener("scroll", () => {
  if (isPageEnd()) {
    appendNewsItems();
  }
});




const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateCalendar);

function generateCalendar() {
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const calendarContainer = document.getElementById('calendarContainer');

  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  if (isNaN(month) || isNaN(year)) {
    calendarContainer.textContent = 'Будь ласка, введіть правильні дані для місяця та року.';
    return;
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  const headerRow = document.createElement('tr');
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  daysOfWeek.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    headerRow.appendChild(th);
  });
  tbody.appendChild(headerRow);

  const numRows = Math.ceil((firstDayOfMonth + daysInMonth) / 7);

  let dayOfMonth = 1;
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (i === 0 && j < firstDayOfMonth) {
        cell.textContent = '';
      } else if (dayOfMonth > daysInMonth) {
        cell.textContent = '';
      } else {
        cell.textContent = dayOfMonth.toString();
        dayOfMonth++;
      }
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }

  calendarContainer.innerHTML = '';
  calendarContainer.appendChild(table);
}




const linksList = document.getElementById('linksList');
const links = linksList.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  if (link.href.startsWith('http://')) {
    link.classList.add('external-link');
  }
}

















const bookList = document.getElementById('bookList');
const books = bookList.getElementsByTagName('li');
let selectedBooks = [];

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  book.addEventListener('click', (event) => {
    const clickedBook = event.target;
    const isCtrlKey = event.ctrlKey;
    const isShiftKey = event.shiftKey;

    if (isCtrlKey) {
      if (selectedBooks.includes(clickedBook)) {
        clickedBook.classList.remove('selected');
        selectedBooks = selectedBooks.filter(book => book !== clickedBook);
      } else {
        clickedBook.classList.add('selected');
        selectedBooks.push(clickedBook);
      }
    } else if (isShiftKey) {
      const startIndex = Array.from(books).indexOf(selectedBooks[selectedBooks.length - 1]);
      const endIndex = Array.from(books).indexOf(clickedBook);

      for (let j = Math.min(startIndex, endIndex); j <= Math.max(startIndex, endIndex); j++) {
        const bookToSelect = books[j];
        if (!selectedBooks.includes(bookToSelect)) {
          bookToSelect.classList.add('selected');
          selectedBooks.push(bookToSelect);
        }
      }
    } else {
      for (const selectedBook of selectedBooks) {
        selectedBook.classList.remove('selected');
      }

      selectedBooks = [];

      if (!selectedBooks.includes(clickedBook)) {
        clickedBook.classList.add('selected');
        selectedBooks.push(clickedBook);
      }
    }
  });
}








class TextEditor {
  private textContainer: HTMLElement;
  private isEditing: boolean;
  private initialText: string;

  constructor() {
    this.textContainer = document.getElementById('textContainer');
    this.isEditing = false;
    this.initialText = "";

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'e' && event.ctrlKey) {
      if (!this.isEditing) {
        this.initialText = this.textContainer.innerText;
        const textarea = document.createElement('textarea');
        textarea.value = this.initialText;
        this.textContainer.replaceWith(textarea);
        this.textContainer = textarea;
        this.isEditing = true;
      }
      event.preventDefault();
    } else if (event.key === 's' && event.ctrlKey) {
      if (this.isEditing) {
        const newText = this.textContainer.value;
        const div = document.createElement('div');
        div.innerText = newText;
        this.textContainer.replaceWith(div);
        this.textContainer = div;
        this.isEditing = false;
      }
      event.preventDefault();
    }
  }
}

const editor = new TextEditor();







const table = document.getElementById("myTable");
    const headers = Array.from(table.getElementsByTagName("th"));
    const rows = Array.from(table.getElementsByTagName("tr")).slice(1);

    let sortColumnIndex = -1;
    let ascending = true;

    headers.forEach((header, index) => {
      header.addEventListener("click", () => {
        sortColumn(index);
      });
    });

    function sortColumn(columnIndex) {
      if (sortColumnIndex === columnIndex) {
        ascending = !ascending;
      } else {
        sortColumnIndex = columnIndex;
        ascending = true;
      }

      rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent;
        const cellB = rowB.cells[columnIndex].textContent;

        if (columnIndex === 1) {
          return parseInt(cellA) - parseInt(cellB);
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      if (!ascending) {
        rows.reverse();
      }

      rows.forEach((row) => {
        table.tBodies[0].appendChild(row);
      });
    }