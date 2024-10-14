import { createElement } from "../../shared/createElement.js";

export function editModeInputsElement () {
    // создание формы и поля ввода
    const element = createElement('form', ['addEdit_form']);
    const inputElement = createElement('input', ['editMode_input']);
    // добавление слушателя события на изменение
        inputElement.addEventListener('change', () => {});
    // добавление формы в дерево
        element.append(inputElement);

    return element;
};