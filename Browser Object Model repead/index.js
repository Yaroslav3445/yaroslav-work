function change(event) {
    let slider = document.getElementById('slid');
    let thumb = document.getElementById('slid-thumb');

    let position = event.clientX - slider.getBoundingClientRect().left;
    let maxPosition = slider.clientWidth - thumb.clientWidth;

    if (position < 0) {
        position = 0;
    } else if (position > maxPosition) {
        position = maxPosition;
    }

    thumb.style.left = position + 'px';
}

let images = [
    'image/01.jpg',
    'image/02.png',
    'image/03.png',
    'image/04.png',

];
let currentImageIndex = 0;

function showImage(index) {
    let imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '<img src="' + images[index] + '" alt="Image">';

    let leftButton = document.getElementById('left-button');
    let rightButton = document.getElementById('right-button');

    leftButton.disabled = (index === 0);
    rightButton.disabled = (index === images.length - 1);

    currentImageIndex = index;
}

function showLeftImage() {
    if (currentImageIndex > 0) {
        showImage(currentImageIndex - 1);
    }
}

function showRightImage() {
    if (currentImageIndex < images.length - 1) {
        showImage(currentImageIndex + 1);
    }
}


function toggleContent(block) {
    let content = block.querySelector('.content');
    let isActive = block.classList.contains('active');

    let activeBlock = document.querySelector('.info-block.active');
    if (activeBlock && activeBlock !== block) {
        activeBlock.classList.remove('active');
        activeBlock.querySelector('.content').style.display = 'none';
    }

    if (isActive) {
        block.classList.remove('active');
        content.style.display = 'none';
    } else {
        block.classList.add('active');
        content.style.display = 'block';
    }
}

let newsData = [
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 1",
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 2",
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 3",
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 4",
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 5",
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 6",
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 7",
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 8",
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 9",
    "rem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque, vitae a, labore, distinctio 10"
];

let newsList = document.getElementById("news-list");
let loadingMessage = document.getElementById("loading-message");
let batchSize = 5;
let startIndex = 0;
let endIndex = Math.min(startIndex + batchSize, newsData.length);

function loadMoreNews() {
    loadingMessage.style.display = "block";

    setTimeout(function () {
        for (let i = startIndex; i < endIndex; i++) {
            let listItem = document.createElement("li");
            listItem.classList.add("news-item");
            listItem.textContent = newsData[i];
            newsList.appendChild(listItem);
        }

        loadingMessage.style.display = "none";

        startIndex = endIndex;
        endIndex = Math.min(startIndex + batchSize, newsData.length);
    }, 2000);
}

function handleScroll() {
    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop + windowHeight >= documentHeight) {
        loadMoreNews();
    }
}

function init() {
    loadMoreNews();
    window.addEventListener("scroll", handleScroll);
}

document.addEventListener("DOMContentLoaded", init);


function generateCalendar() {
    let monthInput = document.getElementById("month");
    let yearInput = document.getElementById("year");
    let calendarContainer = document.getElementById("calendar-container");

    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        alert("Введіть правильний номер місяця (1-12) та рік");
        return;
    }

    let date = new Date(year, month - 1, 1);
    let firstDay = date.getDay();

    let daysInMonth = new Date(year, month, 0).getDate();

    calendarContainer.innerHTML = "";

    let headerRow = document.createElement("tr");
    let headerCell = document.createElement("th");
    headerCell.colSpan = 7;
    headerCell.textContent = new Date(year, month - 1).toLocaleString("uk-UK", { month: "long", year: "numeric" });
    headerRow.appendChild(headerCell);
    calendarContainer.appendChild(headerRow);

    let daysOfWeekRow = document.createElement("tr");
    let daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SUT", "SUN"];
    for (let i = 0; i < daysOfWeek.length; i++) {
        let dayOfWeekCell = document.createElement("th");
        dayOfWeekCell.textContent = daysOfWeek[i];
        daysOfWeekRow.appendChild(dayOfWeekCell);
    }
    calendarContainer.appendChild(daysOfWeekRow);

    let currentDate = 1;
    for (let week = 0; week < 6; week++) {
        let row = document.createElement("tr");

        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            let cell = document.createElement("td");

            if (week === 0 && dayOfWeek < firstDay) {
                cell.textContent = "";
            } else if (currentDate > daysInMonth) {
                break;
            } else {
                cell.textContent = currentDate;
                currentDate++;
            }

            row.appendChild(cell);
        }

        calendarContainer.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("a");

    links.forEach(function (link) {
        let href = link.getAttribute("href");

        if (href && href.startsWith("http://")) {
            link.classList.add("external-link");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let books = document.querySelectorAll(".book");
    let lastClickedBook = null;
    let selectedBooks = [];

    function bookClick(event) {
        let book = event.target;

        if (event.ctrlKey) {
            if (book.classList.contains("selected")) {
                book.classList.remove("selected");
                selectedBooks = selectedBooks.filter(function (selectedBook) {
                    return selectedBook !== book;
                });
            } else {
                book.classList.add("selected");
                selectedBooks.push(book);
            }
        } else if (event.shiftKey && lastClickedBook) {
            let startIndex = Array.prototype.indexOf.call(books, lastClickedBook);
            let endIndex = Array.prototype.indexOf.call(books, book);

            if (startIndex > endIndex) {
                let temp = startIndex;
                startIndex = endIndex;
                endIndex = temp;
            }

            for (let i = startIndex; i <= endIndex; i++) {
                let currentBook = books[i];

                if (!currentBook.classList.contains("selected")) {
                    currentBook.classList.add("selected");
                    selectedBooks.push(currentBook);
                }
            }
        } else {
            if (book.classList.contains("selected")) {
                book.classList.remove("selected");
                selectedBooks = selectedBooks.filter(function (selectedBook) {
                    return selectedBook !== book;
                });
            } else {
                books.forEach(function (book) {
                    book.classList.remove("selected");
                });

                book.classList.add("selected");
                selectedBooks = [book];
            }
        }

        lastClickedBook = book;
    }

    books.forEach(function (book) {
        book.addEventListener("click", bookClick);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let textContainer = document.getElementById("text-container");
    let textDiv = textContainer.querySelector("div");
    let textarea = textContainer.querySelector("textarea");

    function switchToEditMode() {
        textarea.value = textDiv.textContent;
        textDiv.style.display = "none";
        textarea.style.display = "block";
        textarea.focus();
    }

    function switchToDisplayMode() {
        textDiv.textContent = textarea.value;
        textarea.style.display = "none";
        textDiv.style.display = "block";
    }

    function handleKeyPress(event) {
        if (event.ctrlKey && event.key === "e") {
            event.preventDefault();
            switchToEditMode();
        }

        if (event.ctrlKey && event.key === "s") {
            event.preventDefault();
            switchToDisplayMode();
        }
    }

    document.addEventListener("keydown", handleKeyPress);
});


document.addEventListener("DOMContentLoaded", function () {
    let table = document.getElementById("data-table");
    let tableHeaders = table.querySelectorAll("th");
    let currentSortColumn = null;
    let isSortAscending = true;

    function sortTable(columnIndex, isNumeric) {
        let rows = Array.from(table.querySelectorAll("tbody tr"));

        rows.sort(function (a, b) {
            let cellA = a.querySelectorAll("td")[columnIndex].textContent.trim();
            let cellB = b.querySelectorAll("td")[columnIndex].textContent.trim();

            if (isNumeric) {
                return parseFloat(cellA) - parseFloat(cellB);
            } else {
                return cellA.localeCompare(cellB);
            }
        });

        if (!isSortAscending) {
            rows.reverse();
        }

        table.querySelector("tbody").innerHTML = "";
        rows.forEach(function (row) {
            table.querySelector("tbody").appendChild(row);
        });
    }

    function toggleSort(columnIndex, isNumeric) {
        if (currentSortColumn !== null) {
            tableHeaders[currentSortColumn].classList.remove("ascending");
            tableHeaders[currentSortColumn].classList.remove("descending");
        }

        if (currentSortColumn === columnIndex && isSortAscending) {
            tableHeaders[columnIndex].classList.add("descending");
            isSortAscending = false;
        } else {
            tableHeaders[columnIndex].classList.add("ascending");
            isSortAscending = true;
        }

        sortTable(columnIndex, isNumeric);
        currentSortColumn = columnIndex;
    }

    tableHeaders.forEach(function (header, index) {
        header.addEventListener("click", function () {
            let isNumeric = header.dataset.numeric === "true";
            toggleSort(index, isNumeric);
        });
    });
});