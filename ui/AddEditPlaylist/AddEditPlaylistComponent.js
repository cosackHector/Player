import { editModeState } from "../../data/data.js";
import { createElement } from "../../shared/createElement.js";
import { editModeButtonsElement } from "./editModeButtonsElement.js";
import { editModeHeaderElement } from "./editModeHeaderElement.js";
import { editModeInputsElement } from "./editModeInputsElement.js";

export function AddEditPlaylistComponent () {
    if(editModeState.isOpen) {
        const element = createElement('dialog', ['dialog'], {open});
        element.append(
            editModeHeaderElement(),
            editModeInputsElement(), 
            editModeButtonsElement()
        );
        return element;
    } else {
        const element = createElement('dialog', ['dialog'], {});
        element.append(
            editModeHeaderElement(),
            editModeInputsElement(), 
            editModeButtonsElement()
        );
        return element;
    };
};