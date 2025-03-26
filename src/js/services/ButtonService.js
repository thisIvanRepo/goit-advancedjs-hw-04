import { refs } from "../utils/consts";

class LoadMoreButton {
  static HIDDEN_CLASS = 'is-hidden';

  constructor(buttonEl) {
    if (!buttonEl) {
      throw new Error('Button element is required to initialize LoadMoreButton.');
    }
    this.button = buttonEl;
  }

  disable() {
    this.button.classList.add(LoadMoreButton.HIDDEN_CLASS);
  }

  enable() {
    this.button.classList.remove(LoadMoreButton.HIDDEN_CLASS);
  }
}

const loadMoreBtn = new LoadMoreButton(refs.loadMoreBtn);

export default loadMoreBtn;
