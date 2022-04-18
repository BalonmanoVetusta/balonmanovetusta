import { Close, MenuHamburger } from "components/Icons";
import Link from "next/link";
import {
  Fragment,
  useId,
  useRef,
  useState,
  useTransition,
  useCallback,
} from "react";
import useKeyboardShortcut from "hooks/useKeyboard";

// Variables for css styles
// /** Colors **/
// --menu-background: tomato;
// --menu-submenu-background-color
// --menu-item-background-color: #339af0;
// --menu-item-background-color-hover: #9900aa;
// --menu-text-color
// --menu-icon-color-fill
// --menu-icon-color-stroke

// /** Sizes **/
// --menu-text-size: 1rem;
// --menu-icon-size: 2rem;
// --menu-external-border-radius: 0.5rem;

// Menu Items is an array of object to be represented in the menu,
//  submenu has the same structure and should be able to be nested
// to Infinite levels:
// [{
//   Icon?: () => <Fragment></Fragment>,
//   title?: "Page 1 is the first page",
//   label: "Item 1",
//   href: "/page-1",
//   submenu: []
// }]

const EVENT_DISTANCE_TO_BE_CLOSE = 50;

const getHrefOrPathName = (itemHref, pathname = "/") => {
  if (itemHref === "/") {
    return pathname;
  }

  if (itemHref.startsWith("/")) {
    return itemHref;
  }

  if (itemHref.startsWith("http")) {
    const url = new URL(itemHref);
    return url.href;
  }

  const fullPath = [pathname, itemHref].join("/").replace(/\/\//g, "/");
  return fullPath.startsWith("/") ? fullPath : `/${fullPath}`;
};

export function Menu({
  idIcon = "menu",
  items = [],
  pathnameNamespace = "/",
  showIcon = true,
  showLabel = true,
  showSubMenuLabel = true,
  showSubMenuIcon = true,
  hideOnScroll = true,
  ...props
} = {}) {
  const menuRef = useRef(null);
  const [menuShouldBeViewed, setMenuShoulBeViewed] = useState(true);

  const { addShortcut, removeShortcut } = useKeyboardShortcut();

  const id = useId();
  let drop = 0;

  const hideMenu = useCallback(() => {
    setMenuShoulBeViewed(false);
  }, []);

  const showMenu = useCallback(() => {
    setMenuShoulBeViewed(true);
  }, []);

  const isEventCloseOrInsideMenu = useCallback(
    (event) => {
      console.log({ event });
      const { target } = event;
      const { current } = menuRef;

      if (target === current) {
        return true;
      }

      // if (target.closest(`nav[aria-label="Menú"]`)) {
      //   return true;
      // }

      const { top, left, bottom, right } =
        menuRef.current.getBoundingClientRect();
      const { x, y } = event;
      if (
        x > left - EVENT_DISTANCE_TO_BE_CLOSE &&
        x < right + EVENT_DISTANCE_TO_BE_CLOSE &&
        y > top - EVENT_DISTANCE_TO_BE_CLOSE &&
        y < bottom + EVENT_DISTANCE_TO_BE_CLOSE
      ) {
        return true;
      }

      return false;
    },
    [menuRef]
  );

  const showHoverMenu = useCallback(
    (event) => {
      if (
        menuRef.current === event.target ||
        menuRef.current.contains(event.target)
      ) {
        return showMenu();
      }

      if (isEventCloseOrInsideMenu(event)) {
        return showMenu();
      }
    },
    [showMenu, isEventCloseOrInsideMenu]
  );

  const hideNotHoverMenu = useCallback(
    (event) => {
      if (
        menuRef.current !== event.target ||
        !menuRef.current.contains(event.target)
      ) {
        return hideMenu();
      }

      const { top, left, bottom, right } =
        menuRef.current.getBoundingClientRect();
      const { x, y } = event;

      if (!isEventCloseOrInsideMenu(event)) {
        return hideMenu();
      }
    },
    [hideMenu, isEventCloseOrInsideMenu]
  );

  const tapHoverCallback = useCallback(
    (event) => {
      showHoverMenu(event);
      hideNotHoverMenu(event);
    },
    [showHoverMenu, hideNotHoverMenu]
  );

  useTransition(() => {
    if (!hideOnScroll || !menuRef) return;

    const selfWindow = globalThis || window;

    addShortcut("esc", hideMenu);
    ["scroll", "touchmove", "wheel"].forEach((event) => {
      selfWindow.addEventListener(event, hideMenu);
    });
    selfWindow.addEventListener("click", showMenu);
    selfWindow.addEventListener("touchstart", tapHoverCallback);
    selfWindow.addEventListener("mouseover", tapHoverCallback);

    return () => {
      removeShortcut("esc", hideMenu);
      ["scroll", "touchmove", "wheel"].forEach((event) => {
        selfWindow.removeEventListener(event, hideMenu);
      });
      selfWindow.removeEventListener("click", showMenu);
      selfWindow.removeEventListener("touchstart", tapHoverCallback);
      selfWindow.removeEventListener("mouseover", tapHoverCallback);
    };
  }, [hideOnScroll, menuRef]);

  const renderMenu = (
    menuItems,
    pathname = pathnameNamespace,
    ulRole = "menu",
    { ...props } = {}
  ) => {
    return (
      <ul role={ulRole} {...props}>
        {menuItems.map(
          (
            { label, href, title, Icon = () => null, submenu = null },
            index
          ) => (
            <li key={`${id}-${href}`} role="menuitem">
              {submenu ? (
                <Fragment>
                  <input
                    type="checkbox"
                    name={`drop-${++drop}`}
                    id={`drop-${drop}`}
                  />
                  <label htmlFor={`drop-${drop}`} tabIndex={index + 1}>
                    {showSubMenuIcon && Icon ? (
                      <picture>
                        <Icon width="1rem" height="1rem" />
                      </picture>
                    ) : null}
                    {showSubMenuLabel ? label : null}
                  </label>
                  {renderMenu(submenu, `${pathname}${href}`)}
                </Fragment>
              ) : (
                <Link href={`${getHrefOrPathName(href, pathname)}`}>
                  <a title={title} tabIndex={index + 1}>
                    {showIcon && Icon ? (
                      <picture>
                        <Icon width="1rem" height="1rem" aria-hidden="true" />
                      </picture>
                    ) : null}
                    {showLabel ? (
                      <span className="menulabel">{label}</span>
                    ) : null}
                  </a>
                </Link>
              )}
            </li>
          )
        )}
      </ul>
    );
  };

  return menuShouldBeViewed ? (
    <Fragment>
      <nav aria-label="Menú" {...props} ref={menuRef}>
        <input
          type="checkbox"
          name={`drop-${++drop}`}
          id={`drop-${drop}`}
          aria-hidden="true"
        />
        <label htmlFor={`drop-${drop}`} aria-hidden="true">
          <div className="menu-icon">
            <span className="open">
              <MenuHamburger
                id={`icon-open-menu-${idIcon}`}
                width="100%"
                height="100%"
              />
            </span>
            <span className="close">
              <Close
                id={`icon-close-menu-${idIcon}`}
                width="100%"
                height="100%"
              />
            </span>
          </div>
        </label>

        {renderMenu(items, pathnameNamespace, "menubar", { id: "appmenu" })}
      </nav>
      <style jsx>{`
        picture {
          width: var(--icon-size, 1.5rem);
        }
        picture > * {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      `}</style>
    </Fragment>
  ) : null;
}
