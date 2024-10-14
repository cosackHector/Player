import { createElement } from "../../shared/createElement.js";

export function editModeButtonsElement () {
    const element = createElement('div', ['container_addEditModeBtn']);
    const addPlaylistButtonElement = createElement('button', ['addEditMode_dtn'], {}, 'add');
    const cancelPlaylistButtonElement = createElement('button', ['cancelEditMode_dtn'], {}, 'cancel');
    element.append(cancelPlaylistButtonElement, addPlaylistButtonElement)
    return element;
};