import CollapseWidget from './collapse-widget';

const root = document.querySelector('.root');

const text =
  'Sed ut perspiciatis, consectetur adipiscing elit, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga! Duis aute irure dolor in reprehenderit in voluptate, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, qui dolorem eum fugiat, quo voluptas nulla pariatur?';

const collapseWidget = new CollapseWidget(text);

collapseWidget.bindToDOM(root);
