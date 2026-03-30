/* ================================================================
   script.js — plik przygotowany przez prowadzącego
   Zadanie dla osób 8–10: uzupełnij miejsca oznaczone // TODO:
   Nie zmieniaj reszty kodu!
   ================================================================ */

// Czekamy, aż przeglądarka wczyta całą stronę HTML,
// zanim zaczniemy szukać elementów na stronie.
document.addEventListener('DOMContentLoaded', function () {

  // Informacja w konsoli przeglądarki, że skrypt działa.
  // Otwórz DevTools (F12) → zakładka Console, żeby to zobaczyć.
  console.log('Strona załadowana! Skrypt działa poprawnie.');

  /* --------------------------------------------------------------
     TODO 1 — Pobierz formularz ze strony
     Znajdź element HTML o id="contact-form" i przypisz go
     do zmiennej o nazwie: form

     Wskazówka: użyj document.getElementById('...')
     Przykład dla innego elementu:
       const przyklad = document.getElementById('about');

     Twój kod poniżej (zamień null na właściwe wywołanie):
  -------------------------------------------------------------- */
  const form = document.getElementById('contact-form');

  /* --------------------------------------------------------------
     TODO 2 — Pobierz pole imienia z formularza
     Znajdź element HTML o id="name" i przypisz go
     do zmiennej o nazwie: inputName

     Twój kod poniżej (zamień null na właściwe wywołanie):
  -------------------------------------------------------------- */
  const inputName = document.getElementById('name');

  /* --------------------------------------------------------------
     TODO 3 — Reaguj na wysłanie formularza
     Na zmiennej form dodaj nasłuchiwanie zdarzenia 'submit'.
     Wewnątrz funkcji obsługi zdarzenia wykonaj dwie rzeczy:
       1. Wywołaj event.preventDefault()  — zatrzymuje przeładowanie strony
       2. Wyświetl alert z podziękowaniem, np.:
            alert('Dziękujemy, ' + inputName.value + '! Odezwiemy się wkrótce.');

     Wskazówka: użyj form.addEventListener('submit', function(event) { ... })

     Twój kod poniżej (zastąp ten komentarz gotowym wywołaniem):
  -------------------------------------------------------------- */
  form.addEventListener('submit', function(event) {
   event.preventDefault();
   alert('Dziękujemy, ' + inputName.value + '! Odezwiemy się wkrótce.');
  });
}); // koniec bloku DOMContentLoaded