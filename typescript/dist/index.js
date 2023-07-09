var images = [
    "image/01.jpg",
    "image/02.png",
    "image/03.png",
    "image/04.png",
];
var currentIndex = 0;
var imageElement = document.getElementById("image");
var previousButton = document.getElementById("left");
var nextButton = document.getElementById("right");
function updateImage() {
    var currentImage = images[currentIndex];
    imageElement.src = currentImage;
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}
previousButton.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});
nextButton.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});
updateImage();
var slider = document.querySelector('.slider');
var sliderThumb = document.getElementById('sliderThumb');
var thumbPosition = 0;
setThumbPosition(thumbPosition);
sliderThumb.addEventListener('mousedown', startDrag);
function startDrag(event) {
    event.preventDefault();
    document.addEventListener('mousemove', dragThumb);
    document.addEventListener('mouseup', stopDrag);
}
function dragThumb(event) {
    var newPosition = event.clientX - slider.getBoundingClientRect().left;
    thumbPosition = Math.max(0, Math.min(newPosition, slider.clientWidth));
    setThumbPosition(thumbPosition);
}
function stopDrag() {
    document.removeEventListener('mousemove', dragThumb);
    document.removeEventListener('mouseup', stopDrag);
}
function setThumbPosition(position) {
    sliderThumb.style.left = "".concat(position, "px");
}
document.addEventListener('DOMContentLoaded', function () {
    var titles = document.querySelectorAll('.accordion__title');
    titles.forEach(function (title) {
        title.addEventListener('click', function () {
            var accordion = title.parentElement;
            var content = accordion.querySelector('.accordion__content');
            var allAccordions = document.querySelectorAll('.accordion');
            allAccordions.forEach(function (acc) {
                if (acc !== accordion) {
                    var accContent = acc.querySelector('.accordion__content');
                    accContent.style.display = 'none';
                }
            });
            if (content.style.display === 'none') {
                content.style.display = 'block';
            }
            else {
                content.style.display = 'none';
            }
        });
    });
});
var newsData = [
    "News 4",
    "News 5",
    "News 6",
];
function isPageEnd() {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    return (window.innerHeight + window.pageYOffset) >= (documentHeight - windowHeight);
}
function appendNewsItems() {
    var newsList = document.getElementById("news-list");
    if (newsList) {
        for (var _i = 0, newsData_1 = newsData; _i < newsData_1.length; _i++) {
            var newsItem = newsData_1[_i];
            var listItem = document.createElement("li");
            listItem.textContent = newsItem;
            newsList.appendChild(listItem);
        }
    }
}
window.addEventListener("scroll", function () {
    if (isPageEnd()) {
        appendNewsItems();
    }
});
var generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateCalendar);
function generateCalendar() {
    var monthInput = document.getElementById('month');
    var yearInput = document.getElementById('year');
    var calendarContainer = document.getElementById('calendarContainer');
    var month = Number(monthInput.value);
    var year = Number(yearInput.value);
    if (isNaN(month) || isNaN(year)) {
        calendarContainer.textContent = 'Будь ласка, введіть правильні дані для місяця та року.';
        return;
    }
    var daysInMonth = new Date(year, month, 0).getDate();
    var firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    var headerRow = document.createElement('tr');
    var daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
    daysOfWeek.forEach(function (day) {
        var th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    tbody.appendChild(headerRow);
    var numRows = Math.ceil((firstDayOfMonth + daysInMonth) / 7);
    var dayOfMonth = 1;
    for (var i = 0; i < numRows; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < 7; j++) {
            var cell = document.createElement('td');
            if (i === 0 && j < firstDayOfMonth) {
                cell.textContent = '';
            }
            else if (dayOfMonth > daysInMonth) {
                cell.textContent = '';
            }
            else {
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
var linksList = document.getElementById('linksList');
var links = linksList.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.href.startsWith('http://')) {
        link.classList.add('external-link');
    }
}
var bookList = document.getElementById('bookList');
var books = bookList.getElementsByTagName('li');
var selectedBooks = [];
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    book.addEventListener('click', function (event) {
        var clickedBook = event.target;
        var isCtrlKey = event.ctrlKey;
        var isShiftKey = event.shiftKey;
        if (isCtrlKey) {
            if (selectedBooks.includes(clickedBook)) {
                clickedBook.classList.remove('selected');
                selectedBooks = selectedBooks.filter(function (book) { return book !== clickedBook; });
            }
            else {
                clickedBook.classList.add('selected');
                selectedBooks.push(clickedBook);
            }
        }
        else if (isShiftKey) {
            var startIndex = Array.from(books).indexOf(selectedBooks[selectedBooks.length - 1]);
            var endIndex = Array.from(books).indexOf(clickedBook);
            for (var j = Math.min(startIndex, endIndex); j <= Math.max(startIndex, endIndex); j++) {
                var bookToSelect = books[j];
                if (!selectedBooks.includes(bookToSelect)) {
                    bookToSelect.classList.add('selected');
                    selectedBooks.push(bookToSelect);
                }
            }
        }
        else {
            for (var _i = 0, selectedBooks_1 = selectedBooks; _i < selectedBooks_1.length; _i++) {
                var selectedBook = selectedBooks_1[_i];
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
var TextEditor = /** @class */ (function () {
    function TextEditor() {
        this.textContainer = document.getElementById('textContainer');
        this.isEditing = false;
        this.initialText = "";
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
    TextEditor.prototype.handleKeyDown = function (event) {
        if (event.key === 'e' && event.ctrlKey) {
            if (!this.isEditing) {
                this.initialText = this.textContainer.innerText;
                var textarea = document.createElement('textarea');
                textarea.value = this.initialText;
                this.textContainer.replaceWith(textarea);
                this.textContainer = textarea;
                this.isEditing = true;
            }
            event.preventDefault();
        }
        else if (event.key === 's' && event.ctrlKey) {
            if (this.isEditing) {
                var newText = this.textContainer.value;
                var div = document.createElement('div');
                div.innerText = newText;
                this.textContainer.replaceWith(div);
                this.textContainer = div;
                this.isEditing = false;
            }
            event.preventDefault();
        }
    };
    return TextEditor;
}());
var editor = new TextEditor();
var table = document.getElementById("myTable");
var headers = Array.from(table.getElementsByTagName("th"));
var rows = Array.from(table.getElementsByTagName("tr")).slice(1);
var sortColumnIndex = -1;
var ascending = true;
headers.forEach(function (header, index) {
    header.addEventListener("click", function () {
        sortColumn(index);
    });
});
function sortColumn(columnIndex) {
    if (sortColumnIndex === columnIndex) {
        ascending = !ascending;
    }
    else {
        sortColumnIndex = columnIndex;
        ascending = true;
    }
    rows.sort(function (rowA, rowB) {
        var cellA = rowA.cells[columnIndex].textContent;
        var cellB = rowB.cells[columnIndex].textContent;
        if (columnIndex === 1) {
            return parseInt(cellA) - parseInt(cellB);
        }
        else {
            return cellA.localeCompare(cellB);
        }
    });
    if (!ascending) {
        rows.reverse();
    }
    rows.forEach(function (row) {
        table.tBodies[0].appendChild(row);
    });
}
