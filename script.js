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

// Функція для порівняння двох рядків
function compareHotelPrices() {
    let hotel1Name = prompt("Введіть назву першого готелю:");
    let hotel1Price = prompt("Введіть ціну за ніч у першому готелі:");
    let hotel1Nights = prompt("Введіть кількість ночей у першому готелі:");
    
    let hotel2Name = prompt("Введіть назву другого готелю:");
    let hotel2Price = prompt("Введіть ціну за ніч у другому готелі:");
    let hotel2Nights = prompt("Введіть кількість ночей у другому готелі:");

    let totalCost1 = +hotel1Price * +hotel1Nights;
    let totalCost2 = +hotel2Price * +hotel2Nights;

    if (totalCost1 < totalCost2) {
        alert(`Вартість проживання в ${hotel1Name} менша: ${totalCost1} грош. од. ніж в ${hotel2Name} :${totalCost2} грош. од.`);
    } else if (totalCost1 > totalCost2) {
        alert(`Вартість проживання в ${hotel2Name} менша: ${totalCost2} грош. од. ніж в ${hotel1Name} :${totalCost1} грош. од. `);
    } else {
        alert(`Вартість проживання в обох готелях однакова: ${totalCost1} грош. од.`);
    }
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

// Перенаправлення на іншу сторінку
function redirect() {
	alert(`Ви зараз на сторінці:  ${location.href}`);
	if(confirm("Хочете перейти на іншу сторінку?")){
    location.href = "https://www.bulgarihotels.com/en_US/london";}
}


let contentOnScreen = false; //перевірка чи контент вже відображено
//Додати новий контент 
function updateContent() {
	if (contentOnScreen) return; // якщо відображено, то повертаєм
	contentOnScreen = true; // встановлюємо, що контент відображено
	
   // const element = document.getElementById("new-space");
	let element = document.createElement('div');
    element.innerHTML = "<strong>Новий контент!</strong>"; // Змінюємо HTML вміст
	
	// Знаходимо footer
    const footer = document.querySelector("footer");
    footer.parentNode.insertBefore(element, footer); // Додаємо новий div перед footer
	
    //document.body.append(element);
	
    const newElement = document.createElement("p");
    newElement.textContent = "На сторінці ще немає інформації про нові готелі. Скоро буде :)"; // Додаємо текст
    element.append(newElement); // Додаємо новий елемент
	
	const newElementDel = document.createElement("p");
    newElementDel.innerHTML = "<i>*Повідомлення буде видалено через 10 секунд</i>"; // Додаємо текст
	footer.parentNode.insertBefore(newElementDel, footer); // Додаємо новий p перед footer
    //document.body.append(newElementDel); // Додаємо новий елемент
	
	setTimeout(()=> {element.remove(); contentOnScreen=false;},10000);
	setTimeout(()=> { newElementDel.remove(); contentOnScreen=false;},10000);	//setTimeout (() =>{ text.remove(); contentOnScreen = false;}, 3000);
}



// Вивести зміст сторінки
function showPageInfo() {
    const hotelNames = document.querySelectorAll(".hotel-name");
    let info = "Список готелів:\n";
	for(let i =0; i<hotelNames.length; i++){
		info += hotelNames[i].textContent + "\n";
	}
   // hotelNames.forEach(hotel => {
    //    info += hotel.textContent + "\n"; // Додаємо назви готелів до рядка
   // });
    alert(info); // Виводимо інформацію

}
// Видалити зміст сторінки
function closeIT(){
	// Створюємо порожній рядок
        const emptyLine = document.createElement("p");
        emptyLine.textContent = ""; // Порожній рядок

        // Знаходимо div з кнопкою "Список готелів"
        const PageContent = document.getElementById("PageContent"); 

        // Замінюємо div на порожній рядок
        PageContent.replaceWith(emptyLine);
}


// Форма
function CreateForm(){
	const br = document.createElement("br");
	let message = document.write("<b>Нова форма!</b>");
	let massageDescription = document.write ("<br> <br> Введіть всі комірки та відправте форму. Незабаром її буде перевірено.");
	
	// Контейнер для форми
	let element = document.createElement('p');
	element.style.backgroundColor ="#f0e0d8";
    document.body.append(element);
	//element.before(br);
	
    const newName = document.createElement("label");
    newName.textContent = "Назва: "; // Додаємо текст
	newName.style.display = "block"; // Вирівнюємо один під одним
    element.append(newName); // Додаємо новий елемент
	//newName.prepend(br);
	
	const newNameInput = document.createElement("input");
	newNameInput.style.width = "500px";
    element.append(newNameInput); // Додаємо новий елемент
	
	const newLocation = document.createElement("label");
    newLocation.textContent = "Місце розташування: "; // Додаємо текст
	newLocation.style.display = "block"; // Вирівнюємо один під одним
    element.append(newLocation); // Додаємо новий елемент
	
	const newLocationInput = document.createElement("input");
	newLocationInput.style.width = "500px";
    element.append(newLocationInput); // Додаємо новий елемент

	
	const newDescription = document.createElement("label");
    newDescription.textContent = "Опис: "; // Додаємо текст
	newDescription.style.display = "block"; // Вирівнюємо один під одним
    element.append(newDescription); // Додаємо новий елемент
	
	const newDescriptionInput = document.createElement("input");
	newDescriptionInput.style.width = "500px";
	newDescriptionInput.style.height = "50px";
    element.append(newDescriptionInput); // Додаємо новий елемент

    // Кнопка "Відправити"
    const submitButton = document.createElement("button");
	submitButton.style.backgroundColor ="#f0e0d8";
    submitButton.textContent = "Відправити";
    submitButton.addEventListener("click", function() {
        alert("Вашу форму відправлено!");
	});
	submitButton.style.display = "block"; // Вирівнюємо один під одним
    document.body.append(submitButton); // Додаємо кнопку
	submitButton.after(br);

	// Кнопка "Повернутись назад на сторінку"
    const backButton = document.createElement("button");
	backButton.style.display = "block";
    backButton.textContent = "Повернутись назад на сторінку";
    backButton.addEventListener("click", function() {
        window.location.href = "Europe.html"; 
    });
	
    document.body.append(backButton); // Додаємо кнопку
}


