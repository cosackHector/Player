import { createElement } from "../../shared/createElement.js";

export function editModeHeaderElement () {
    const element = createElement('h3', ['editMode_header'], {}, 'Добавить плейлист');
    return element;
};