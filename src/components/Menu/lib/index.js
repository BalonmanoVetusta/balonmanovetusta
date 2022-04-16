const appMenuItems = window.document.querySelectorAll('[role="menubar"] > li');
const allSubmenus = window.document.querySelectorAll(
  'li > ul[role="menu"] > li'
);

const Keys = {
  tab: 9,
  enter: 13,
  esc: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

let currentIndex, subIndex;

function goToIndex(idx) {
  if (idx === appMenuItems.length) {
    idx = 0;
  }

  if (idx < 0) {
    idx = appMenuItems.length - 1;
  }

  appMenuItems[idx].focus();
  currentIndex = idx;
}

function goToMenuIndex(menu, idx) {
  const items = menu.querySelectorAll("li");

  if (idx === items.length) {
    idx = 0;
  }

  if (idx < 0) {
    idx = items.length - 1;
  }

  items[idx].focus();
  subIndex = idx;
}

Array.prototype.forEach.call(appMenuItems, function (element, index) {
  if (index === 0) {
    element.setAttribute("tabindex", "0");
    element.addEventListener("focus", () => {
      currentIndex = 0;
    });
  } else {
    element.setAttribute("tabindex", "-1");
  }
});


