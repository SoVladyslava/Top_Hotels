(function() {
    const wordBank = document.getElementById('word-bank');
    const sentenceArea = document.getElementById('sentence-area');
    const discountMsg = document.getElementById('discount-msg');
    let draggedEl = null;
    let offsetX = 0;
    let offsetY = 0;

    // Текст для отримання знижки
    const discountSentence = "Краще самий дешевий номер в найкращому готелі ніж самий дорогий номер в гостиниці";

    // Підготувати слова у personArea для зручності 
    sentenceArea.textContent = '';

    // Функція створення слова-елемента
    function createWordEl(wordText) {
      const div = document.createElement('div');
      div.className = 'word';
      div.textContent = wordText;
      div.style.position = 'relative';
      return div;
    }
    // Додати обробники перетягування до всіх слів в банку
    function addDragListeners(el) {
      el.addEventListener('mousedown', dragStart);
    }

    // Початок перетягування
    function dragStart(e) {
      if (e.button !== 0) return; // Ліва кнопка миші

      draggedEl = e.currentTarget;
      // Позиція курсора відносно елемента
      const rect = draggedEl.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      // Додаємо стилі для абсолютного позиціювання
      draggedEl.style.position = 'absolute';
      draggedEl.style.zIndex = 1000;
      draggedEl.style.pointerEvents = 'none';
      document.body.appendChild(draggedEl); // Виводимо в body, аби було зверху

      moveAt(e.pageX, e.pageY);

      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);

      e.preventDefault();
    }

    // Рух під час перетягування
    function dragMove(e) {
      if (!draggedEl) return;
      moveAt(e.pageX, e.pageY);
    }

    function moveAt(pageX, pageY) {
      draggedEl.style.left = pageX - offsetX + 'px';
      draggedEl.style.top = pageY - offsetY + 'px';
    }

    // Завершення перетягування
   function dragEnd(e) {
      if (!draggedEl) return;
      // Перевіряємо чи drop відбувся в sentenceArea
     const dropRect = sentenceArea.getBoundingClientRect();
      if (
        e.clientX >= dropRect.left &&
       e.clientX <= dropRect.right &&
       e.clientY >= dropRect.top &&
        e.clientY <= dropRect.bottom
      ) {
        // Створюємо копію слова у реченні
        const clone = createWordEl(draggedEl.textContent);
        clone.style.position = 'relative';
   	    clone.style.left = '';
        clone.style.top = '';
        clone.style.zIndex = '';
        clone.style.pointerEvents = 'auto';
        sentenceArea.appendChild(clone);

        // Забороняємо перетягування вже у реченні
        clone.style.cursor = 'default';
        // Перевірка речення і вивід знижки
       checkSentence();
      }

      // Повертаємо слово назад в банк слів, якщо drop поза областю речення
      draggedEl.style.position = '';
      draggedEl.style.left = '';
      draggedEl.style.top = '';
      draggedEl.style.zIndex = '';
      draggedEl.style.pointerEvents = '';
      wordBank.appendChild(draggedEl);
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
      draggedEl = null;
   }

    // Перевірка, чи зібране речення співпадає з потрібним для знижки
    function checkSentence() {
     const words = Array.from(sentenceArea.children).map(el => el.textContent.trim());
      const sentenceFormed = words.join(' ');
	   const discountCode = generateRandomCode(6);
      if (sentenceFormed === discountSentence){
	        discountMsg.innerText = `Вітаємо! Ви отримали знижку 5% на бронювання! Ваш код: ${discountCode}; `;
        discountMsg.style.color = 'green';
      } else {
        discountMsg.textContent = '';
      }
    }
	
	function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


    // Ініціалізація – додаємо обробники подій до слів
    let wordElems = wordBank.querySelectorAll('.word');
    wordElems.forEach(addDragListeners);

  })();
	