//  Функція "Діалог з користувачем"
function askUser() {
    let name;

    // Цикл для отримання імені
    while (true) {
        name = prompt("Як вас звати?");
        
        // Перевірка на пусте значення або пробіли
        if (name === null) {
            // Якщо натиснуто "Відмінити", виходимо з функції
            return;
        } else if (name.trim() === "") //string.trim() видаляє пробіли з початку і кінця рядка
			{
            alert("Не задано ім'я. Спробуйте ще раз.");
        } else {
            break; // Виходимо з циклу, якщо ім'я введено коректно
        }
    }

    alert(`Привіт, ${name}!`);
    let isCorrect = confirm(`Ваше ім'я ${name} вірне?`);
    
    if (isCorrect) {
        let consultation = confirm("Вам потрібна консультація? Ок - так, Відмінити - ні.");
        if (consultation) {
            let phone;

            // Цикл для отримання номера телефону
            while (true)
			{
                phone = prompt("Введіть ваш номер телефону:");
                
                // Перевірка на пусте значення, пробіли або букви
                if (phone === null) {
                    // Якщо натиснуто "Відмінити", виходимо з функції
                    return;
                } else if (phone.trim() === "" || !/^\d+$/.test(phone)) // / вираз/ - це так задається вираз, ^ -початок вхідних даних(перевірка починається з початку рядка),  \d = [0-9], + це 1 або більше введених символів, $-кінець вхідних даних}
														// test - метод який порівнює регулярний вираз з вказаною строкою, повертає true or false
				{
                    alert("Невірно введений номер. Спробуйте ще раз.");
                } else {
                    break; // Виходимо з циклу, якщо номер введено коректно
                }
            }
            alert(`Дякуємо, ${name}. Вам передзвонить асистент.`);
        } 
		else {  alert("Добре, якщо потрібна буде інформація - звертайтесь."); }
    } 
	else {    alert("Спробуйте ще раз."); }
}

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function askUser2() {
    let name;
    // Цикл для отримання імені
    while (true) {
        name = prompt("Як вас звати?");
        
        // Перевірка на пусте значення або пробіли
        if (name === null) {
            // Якщо натиснуто "Відмінити", виходимо з функції
            return;
        } else if (name.trim() === "") {
            alert("Не задано ім'я. Спробуйте ще раз.");
        } else {
            break; // Виходимо з циклу, якщо ім'я введено коректно
        }
    }
    alert(`Привіт, ${name}!`);
    
    // Використання колбек-функції для підтвердження імені
    ask(`Ваше ім'я ${name} вірне?`, 
        function() {
            let consultation = confirm("Вам потрібна консультація? Ок - так, Відмінити - ні.");
            if (consultation) {
                let phone;

                // Цикл для отримання номера телефону
                while (true) {
                    phone = prompt("Введіть ваш номер телефону:");
                    
                    // Перевірка на пусте значення, пробіли або букви
                    if (phone === null) {
                        // Якщо натиснуто "Відмінити", виходимо з функції
                        return;
                    } else if (phone.trim() === "" || !/^\d+$/.test(phone)) {
                        alert("Невірно введений номер. Спробуйте ще раз.");
                    } else {
                        break; // Виходимо з циклу, якщо номер введено коректно
                    }
                }

                alert(`Дякуємо, ${name}. Вам передзвонить асистент.`);
            } else {
                alert("Добре, якщо потрібна буде інформація - звертайтесь.");
            }
        }, 
        function() {
            alert("Спробуйте ще раз.");
        }
    );
}

// Функція для виводу інформації про розробника
function showDeveloperInfo(firstName, lastName, position = "Розробник") {
    alert(`Розробник: ${firstName} ${lastName}, Посада: ${position}`);
}

// Зміна фону сторінки на 30 секунд
function changeBackground() {
    document.body.style.backgroundColor = "lightblue"; // Змінюємо фон
	
	let textP = document.createTextNode("звичайний фон сторінки буде повернено через 30 секунд");
	document.body.after(textP);

	setTimeout(() => {
        document.body.style.backgroundColor = ""; // Повертаємо фон через 30 секунд
    }, 30000);
}


//Рамка для меню
document.addEventListener("DOMContentLoaded", function() {
// Додаємо обробники подій до контейнера
const hotelMenu = document.getElementById("hotel-menu");

// Додаємо обробники для додавання рамки контейнера
hotelMenu.addEventListener("mouseover", function() {
    hotelMenu.style.border = "2px solid #007BFF"; // Підсвічування рамки
});

hotelMenu.addEventListener("mouseleave", function() {
    hotelMenu.style.border = "2px solid"; // Прибираємо рамку
});
});


//Підсвічування списку
document.addEventListener("DOMContentLoaded", function() {
// Додаємо обробник подій до списку 
	let a = document.getElementById("list_index");

	a.addEventListener("click", function(event) {
	
    const target = event.target.closest("OL");
	
    // Перевіряємо, чи клікнули на елемент списку
    if (target) {
        target.classList.toggle("highlight"); // Підсвічуємо елемент
	}		
});
});



//Зміна теми
let isDarkTheme = false;
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("SwitchTheme").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    isDarkTheme = !isDarkTheme;
});
});

//Меню data-action
document.addEventListener("DOMContentLoaded", function() {
// Додаємо обробник подій до навігаційного меню
const navbar = document.getElementById("navbar");
navbar.addEventListener("click", function(event) {
    const target = event.target;

    // Перевіряємо, чи клікнули на посилання
    if (target.tagName === "A") {
        const action = target.parentElement.getAttribute("data-action");
        alert(`Ви натиснули на: ${action}`);
    }
});
});

/*
// Знижка від сайту
document.addEventListener("DOMContentLoaded", function() {
    // Додаємо обробник подій до кнопки "Отримати знижку"
    const getDiscountButton = document.getElementById("getDiscount");
    const discountMessage = document.getElementById("discountMessage");

    const handleClick = () => {
        const randomSymbol = Math.random() + "ajnDls;lm$&1!" + Math.LN10 + Math.random() + "ujakml_02unas*F^a%";

        // Виводимо повідомлення про знижку
        discountMessage.innerHTML = randomSymbol + "<br>Дякуємо! Ваша знижка 3% на наступне бронювання активована.";
        discountMessage.style.display = "block"; // Показуємо повідомлення

        // Видаляємо обробник події, щоб запобігти повторному натисканню
        getDiscountButton.removeEventListener("click", handleClick);
    };

    getDiscountButton.addEventListener("click", handleClick);
});
*/

//Підсвітка цікавих фактів 
document.addEventListener("DOMContentLoaded", function() {
// Додаємо обробники подій для списку фактів
const factList = document.getElementById("fact-list");

factList.addEventListener("mouseover", function(event) {
    const target = event.target;
    if (target.tagName === "LI" && event.relatedTarget) {
        target.style.backgroundColor = "#e0f7fa"; // Підсвічування
        target.style.color = "#007BFF"; // Зміна кольору тексту
    }
});

factList.addEventListener("mouseout", function(event) {
    const target = event.target;
    if (target.tagName === "LI") {
        target.style.backgroundColor = ""; // Прибираємо підсвічування
        target.style.color = ""; // Повертаємо колір тексту
    }
});
});

/*
document.addEventListener("DOMContentLoaded", function() {
// Перетягування елемента
const puzzlePiece = document.getElementById("puzzle-piece");

puzzlePiece.addEventListener("mousedown", function(event) {
    const offsetX = event.clientX - puzzlePiece.getBoundingClientRect().left;
    const offsetY = event.clientY - puzzlePiece.getBoundingClientRect().top;

    function mouseMoveHandler(e) {
        puzzlePiece.style.position = "absolute";
        puzzlePiece.style.left = (e.clientX - offsetX) + "px";
        puzzlePiece.style.top = (e.clientY - offsetY) + "px";
    }

    function mouseUpHandler() {
        // Перевірка, чи елемент знаходиться в зоні скидки
        const puzzleArea = document.getElementById("puzzle-area");
        const areaRect = puzzleArea.getBoundingClientRect();
        const pieceRect = puzzlePiece.getBoundingClientRect();

        if (
            pieceRect.left >= areaRect.left &&
            pieceRect.right <= areaRect.right &&
            pieceRect.top >= areaRect.top &&
            pieceRect.bottom <= areaRect.bottom
        ) {
            document.getElementById("discount-message").style.display = "block"; // Показуємо повідомлення
        }

        // Видаляємо обробники подій
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
    }

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
});

});
*/
