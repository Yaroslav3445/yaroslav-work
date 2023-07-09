
document.addEventListener("DOMContentLoaded", function () {
    let colors = getCookies();

    function getCookies() {
        let cookies = document.cookie.split("; ");
        let colorCollection = [];

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split("=");
            if (cookie[0] === "colors") {
                colorCollection = JSON.parse(cookie[1]);
                break;
            }
        }

        return colorCollection;
    }

    function saveCookies() {
        let expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (3 * 60 * 60 * 1000));
        document.cookie = "colors=" + JSON.stringify(colors) + "; expires=" + expirationDate.toUTCString() + "; path=/";
    }

    function addColor() {
        let nameInput = document.getElementById("name-input");
        let typeSelect = document.getElementById("type-select");
        let codeInput = document.getElementById("code-input");
        let errorDiv = document.getElementById("error-div");

        let name = nameInput.value.trim();
        let type = typeSelect.value;
        let code = codeInput.value.trim();

        if (!name) {
            displayError("Name is required.");
            return;
        }

        if (!/^[a-zA-Z]+$/.test(name)) {
            displayError("Name can only contain letters.");
            return;
        }

        let existingColor = colors.find(function (color) {
            return color.name.toLowerCase() === name.toLowerCase();
        });

        if (existingColor) {
            displayError("Name must be unique.");
            return;
        }

        if (type === "RGB" && !/^(\d{1,3},){2}\d{1,3}$/.test(code)) {
            displayError("Invalid RGB code format. Must be three numbers separated by commas.");
            return;
        }

        if (type === "RGBA" && !/^(\d{1,3},){3}(0\.\d{1,2}|1(\.0)?)$/.test(code)) {
            displayError("Invalid RGBA code format. Must be four numbers separated by commas. The last number must be between 0 and 1.");
            return;
        }

        if (type === "HEX" && !/^#[0-9A-Fa-f]{6}$/.test(code)) {
            displayError("Invalid HEX code format. Must start with '#' followed by six digits or letters A-F.");
            return;
        }

        let newColor = {
            name: name,
            type: type,
            code: code
        };

        colors.push(newColor);
        saveCookies();
        displayColors();
        clearForm();
    }

    function displayError(message) {
        let errorDiv = document.getElementById("error-div");
        errorDiv.textContent = message;
        errorDiv.style.display = "block";
    }

    function displayColors() {
        let colorsContainer = document.getElementById("colors-container");
        colorsContainer.innerHTML = "";

        colors.forEach(function (color) {
            let colorItem = document.createElement("div");
            colorItem.className = "color-item";

            let colorBox = document.createElement("div");
            colorBox.className = "color-box";
            colorBox.style.backgroundColor = color.code;

            let colorDetails = document.createElement("div");
            colorDetails.className = "color-details";
            colorDetails.innerHTML = "<span>Name: " + color.name + "</span><br>" +
                "<span>Type: " + color.type + "</span><br>" +
                "<span>Code: " + color.code + "</span>";

            colorItem.appendChild(colorBox);
            colorItem.appendChild(colorDetails);
            colorsContainer.appendChild(colorItem);
        });
    }

    function clearForm() {
        let nameInput = document.getElementById("name-input");
        let typeSelect = document.getElementById("type-select");
        let codeInput = document.getElementById("code-input");
        let errorDiv = document.getElementById("error-div");

        nameInput.value = "";
        typeSelect.value = "RGB";
        codeInput.value = "";
        errorDiv.textContent = "";
        errorDiv.style.display = "none";
    }

    displayColors();

    document.getElementById("save-button").addEventListener("click", addColor);
});