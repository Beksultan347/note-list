let inputBox = document.querySelector(".input-box");
let row = document.querySelector(".row");
let deleteBox = document.querySelector(".delete");

// Функция для сохранения данных в localStorage
function showTask() {
    localStorage.setItem("data", inputBox.innerHTML);
}

// Функция для загрузки данных из localStorage
function loadTasks() {
    // Проверяем, есть ли данные в localStorage
    let savedData = localStorage.getItem("data");
    
    // Если данные есть, восстанавливаем их
    if (savedData) {
        inputBox.innerHTML = savedData;
    }
}

// Загрузка данных при старте страницы
document.addEventListener("DOMContentLoaded", loadTasks);

row.addEventListener("click", () => {
    let fifa = document.createElement("p");
    let img = document.createElement("img");
    
    fifa.className = "delete";
    fifa.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    
    // Добавляем изображение в p
    fifa.appendChild(img);
    
    // Добавляем p в inputBox
    inputBox.appendChild(fifa);
    
    // Сохраняем данные в localStorage после добавления нового элемента
    showTask();
});

inputBox.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        // Удаляем родительский элемент, который содержит изображение
        e.target.parentElement.remove();
        
        // Обновляем данные в localStorage после удаления элемента
        showTask();
    }
});