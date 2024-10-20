import { createElement } from "../../../../shared/createElement.js";


export const createFooterPlayerButton = (className, textBtn) => {
  const element = createElement('button', [className], {}, textBtn);
  return element;
};
