// 1
class Marker {
    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    print(text) {
        let printedText = '';
        for (let i = 0; i < text.length; i++) {
            const character = text[i];
            if (character !== ' ' && this.inkLevel > 0) {
                printedText += character;
                this.inkLevel -= 0.5;
            } else {
                printedText += ' ';
            }
        }
        console.log('%c' + printedText, `color: ${this.color}`);
    }
}

class RefMarker extends Marker {
    refill(inkAmount) {
        this.inkLevel = Math.min(this.inkLevel + inkAmount, 100);
    }
}

const marker = new Marker('violet', 10);

marker.print('Hello, world!');

const refMarker = new RefMarker('yellow', 160);

refMarker.print('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi possimus aliquid accusamus voluptate commodi ratione atque sapiente deserunt minima quam temporibus reiciendis cum laboriosam porro magnam animi odio nemo repellat, assumenda nihil ea omnis ut. Provident excepturi quo obcaecati quia quaerat modi! Adipisci sed, odio ut incidunt corporis excepturi?');

refMarker.refill(80);

refMarker.print('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi possimus aliquid accusamus voluptate commodi ratione atque sapiente deserunt minima quam temporibus reiciendis cum');

// 2

class ExtendedDate extends Date {
    getFormattedDate() {
        const day = this.getDate();
        const month = this.getMonth() + 1;
        return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}`;
    }

    isFuture() {
        const testDate = new Date();
        return this.getTime() >= testDate.getTime();
    }

    isPast() {
        const testDate = new Date();
        return this.getTime() < testDate.getTime();
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    getNextDate() {
        const nextDate = new ExtendedDate(this);
        nextDate.setDate(nextDate.getDate() + 1);
        return nextDate;
    }
}

const nameDate = new ExtendedDate();

console.log(nameDate.getFormattedDate());

console.log(nameDate.isFuture());

console.log(nameDate.isPast());

console.log(nameDate.isLeapYear());

const nextDate = nameDate.getNextDate();
console.log(nextDate);


// 3
class Employee {
    constructor(id, name, position) {
        this.id = id;
        this.name = name;
        this.position = position;
    }
}

class Table {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let des = '<table>';
        des += '<tr><th>ID</th><th>імя</th><th>професія</th></tr>';

        this.employees.forEach((employee) => {
            des += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.position}</td></tr>`;
        });

        des += '</table>';

        return des;
    }
}

const sum = [
    new Employee(1, 'Андрій', 'юрист'),
    new Employee(2, 'Сергій', 'бариста'),
    new Employee(3, 'Михайло', 'письменник'),
];

const soft = new Table(sum);

console.log(soft.getHtml());

// 4 
class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let tabHtml = '<table>';
        tabHtml += '<tr><th>імя</th><th>професія</th></tr>';
        this.employees.forEach((employee) => {
            tabHtml += `<tr><td>${employee.name}</td><td>${employee.position}</td></tr>`;
        });
        tabHtml += '</table>';
        return tabHtml;
    }
}

class StyledEmpTable extends EmpTable {
    getStyles() {
        return `
        <style>
          table {
            width: 100%;
          }
          th, td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid black;
          }
          th {
            background-color: #fff;
          }
        </style>
      `;
    }

    getHtml() {
        const styles = this.getStyles();
        const tabHtml = super.getHtml();
        return `${styles}${tabHtml}`;
    }
}

const employees = [
    new Employee(1, 'Андрій', 'юрист'),
    new Employee(2, 'Сергій', 'бариста'),
    new Employee(3, 'Михайло', 'письменник'),
];

const styledEmpTable = new StyledEmpTable(employees);

const tabHtml = styledEmpTable.getHtml();

const tableContainer = document.getElementById('tableContainer');
tableContainer.innerHTML = tabHtml;
