const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // ❗ Не даємо сторінці перезавантажуватися

  const { email, password } = form.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // ❗ Перевірка на порожні поля
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  // ❗ Створюємо об’єкт даних
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  // ❗ Очищаємо форму
  form.reset();
});
