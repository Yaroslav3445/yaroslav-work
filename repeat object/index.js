class Marker {
    constructor(color, inkPercentage) {
        this.color = color;
        this.inkPercentage = inkPercentage;
    }

    print(text) {
        let printedText = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== " " && this.inkPercentage > 0) {
                printedText += text[i];
                this.inkPercentage -= 0.5;
            } else {
                printedText += " ";
            }
        }
        console.log("%c" + printedText, "color: " + this.color);
    }
}

class RefillableMarker extends Marker {
    refill(inkAmount) {
        this.inkPercentage += inkAmount;
        if (this.inkPercentage > 100) {
            this.inkPercentage = 100;
        }
        console.log("Marker refilled. Ink percentage: " + this.inkPercentage);
    }
}

const simpleMarker = new Marker("blue", 50);
simpleMarker.print("Hello, world!");

const refillableMarker = new RefillableMarker("red", 20);
refillableMarker.print("Lorem ipsum dolor sit amet.");
refillableMarker.refill(80);
refillableMarker.print("Lorem ipsum dolor sit amet.");










class ExtendedDate extends Date {
    formatDateText() {
        const day = this.getDate();
        const month = this.getMonth() + 1;
        return `${day}.${month}`;
    }

    isFutureDate() {
        const now = new Date();
        return this.getTime() >= now.getTime();
    }

    isPastDate() {
        const now = new Date();
        return this.getTime() < now.getTime();
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    getNextDate() {
        const nextDay = new Date(this.getTime());
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay;
    }
}

const currentDate = new ExtendedDate();
console.log("Текстове представлення дати:", currentDate.formatDateText());

console.log("Чи є поточна дата майбутньою:", currentDate.isFutureDate());
console.log("Чи є поточна дата минулою:", currentDate.isPastDate());

console.log("Чи є поточний рік високосним:", currentDate.isLeapYear());

const nextDate = currentDate.getNextDate();
console.log("Наступна дата:", nextDate);










class Employee {
    constructor(id, name, position) {
        this.id = id;
        this.name = name;
        this.position = position;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = "<table>";
        html += "<tr><th>ID</th><th>Name</th><th>Position</th></tr>";
        this.employees.forEach((employee) => {
            html += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.position}</td></tr>`;
        });
        html += "</table>";
        return html;
    }
}

const employees = [
    new Employee(1, "John Doe", "Manager"),
    new Employee(2, "Jane Smith", "Accountant"),
    new Employee(3, "Mike Johnson", "Developer"),
];

const empTable = new EmpTable(employees);

const html = empTable.getHtml();

document.getElementById("employeeTable").innerHTML = html;


















class StyledEmpTable extends EmpTable {
    getStyles() {
        return `
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 100px;
          }
          
          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          
          tr:hover {
            background-color: #f5f5f5;
          }
          
          th {
            background-color: #4CAF50;
            color: white;
          }
        </style>
      `;
    }

    getHtml() {
        const styles = this.getStyles();
        const tableHtml = super.getHtml();
        return `${styles}${tableHtml}`;
    }
}

const employeesTs = [
    new Employee(1, "John Doe", "Manager"),
    new Employee(2, "Jane Smith", "Accountant"),
    new Employee(3, "Mike Johnson", "Developer"),
];

const styledEmpTable = new StyledEmpTable(employees);

const html2 = styledEmpTable.getHtml();

document.getElementById("employeeTable2").innerHTML = html;
















