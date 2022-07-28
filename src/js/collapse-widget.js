export default class CollapseWidget {
  constructor(text) {
    this.el = document.createElement('div');
    this.el.classList.add('collapse-widget', 'w-50', 'm-3');

    this.button = document.createElement('button');
    this.button.classList.add(
      'btn',
      'btn-primary',
      'collapse-button',
      'p-2',
      'mt-2',
      'mx-2'
    );

    this.button.textContent = 'Collapse';

    this.collapseBlock = document.createElement('div');
    this.collapseBlock.classList.add('collapse-block', 'collapse-animation');

    this.collapseContent = document.createElement('div');
    this.collapseContent.classList.add('collapse-content');
    this.collapseContent.textContent = text;

    this.collapseBlock.insertAdjacentElement('beforeEnd', this.collapseContent);

    this.el.insertAdjacentElement('beforeEnd', this.button);
    this.el.insertAdjacentElement('beforeEnd', this.collapseBlock);

    this.setListeners();
  }

  setListeners() {
    this.button.addEventListener('click', () => {
      if (this.collapseBlock.classList.contains('start-aniamtion')) {
        return;
      }

      this.collapseBlock.classList.add('start-animation');
    });

    this.collapseBlock.addEventListener('animationiteration', () => {
      this.collapseBlock.classList.remove('start-animation');
    });
  }

  bindToDOM(parentElement) {
    parentElement.insertAdjacentElement('beforeEnd', this.el);
  }
}
