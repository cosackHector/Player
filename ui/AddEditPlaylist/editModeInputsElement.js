import { createNewPlaylistTitle } from "../../data/data.js";
import { createElement } from "../../shared/createElement.js";

export function editModeInputsElement () {
    // создание формы 
    const element = createElement('form', ['addEdit_form']);
    // создание инпута
    const inputElement = createElement('input', ['editMode_input'], {placeholder: 'Заголовок'});
    // добавление слушателя события на изменение инпута
        inputElement.addEventListener('change', (e) => createNewPlaylistTitle(e.target.value));
        // добавление формы в дерево
        element.append(inputElement);

    return element;
};