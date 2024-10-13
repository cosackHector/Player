// функция создания элементов

export function createElement(tag, classes = [], attributes = {}, textContent = "") {
  const element = document.createElement(tag);
  if (classes.length) {
    classes.forEach((cl) => {
      element.classList.add(cl);
    });
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  element.textContent = textContent;
  return element;
}
;
