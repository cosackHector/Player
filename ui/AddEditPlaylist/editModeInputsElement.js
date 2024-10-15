import { createNewPlaylistTitle, editModeState } from "../../data/data.js";
import { createElement } from "../../shared/createElement.js";

export function editModeInputsElement () {
    // создание формы 
    const element = createElement('form', ['addEdit_form']);
    // создание инпута
    const inputElement = createElement('input', ['editMode_input'], {
        placeholder: 'Заголовок', 
        value: editModeState.newPlaylistTitle});
    // добавление слушателя события на изменение инпута
    inputElement.addEventListener('keyup', (e) => createNewPlaylistTitle(e.target.value));
    //  добаллене фокуса на инпут при перерисовке
    setTimeout( () => {
        // установка фокуса при перерисовке
        inputElement.focus()
        // фокус на последнем элементе
        inputElement.setSelectionRange(inputElement.value.length,inputElement.value.length)
    }, 1);
    // добавление формы в дерево
    element.append(inputElement);

    return element;
};