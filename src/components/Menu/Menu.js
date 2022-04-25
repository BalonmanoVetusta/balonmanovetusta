import { Close, MenuHamburger } from "components/Icons";
import Link from "next/link";
import { Fragment, useId, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useVisibleMenu } from "./context/ScrollTapOutsideElementContext";
import { useMediaQuery } from "./hook/useMediaQuery";

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

// Helper to set href in nested menus
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
  menuBarMinPixels = 960,
  menuBarMaxPixels = 0,
  key = null,
  ...props
} = {}) {
  let drop = 0; // Counter to set checkbox id

  // State
  const id = useId();
  const menuRef = useRef(null);
  const { isElementVisible: isMenuVisible, setRef: setMenuRef } =
    useVisibleMenu();

  const isMenuBarScreenSize = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    if (!menuRef) return;
    setMenuRef(menuRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuRef]);

  const navAnimationProps = {
    drag: true,
    dragConstraints: { top: 0, left: 0, right: 0, bottom: 0 },
    dragMomentum: true,
    variants: {
      hidden: {
        opacity: 0,
        transition: { duration: 1 },
        rotate: 0,
      },
      show: {
        visibility: "visible",
        opacity: 1,
        zIndex: 1,
        transition: {
          duration: 0.5,
        },
        rotate: 360,
      },
    },
    initial: "hidden",
    animate: isMenuVisible ? "show" : "hidden",
    exit: "hidden",
  };

  const liAnimationProps = {
    variants: {
      tap: { scale: 0.9 },
      hover: { scale: 1.1 },
    },
    whileHover: "hover",
    whileTap: "tap",
  };

  const renderMenu = (
    menuItems,
    pathname = pathnameNamespace,
    ulRole = "menu",
    { ...props } = {}
  ) => {
    return (
      <ul role={ulRole} key={`${id}-${ulRole}-${pathname}`} {...props}>
        {menuItems.map(
          (
            { label, href, title, Icon = () => null, submenu = null },
            index
          ) => (
            <motion.li
              key={`${id}-${href}`}
              custom={index}
              {...liAnimationProps}
              role="menuitem"
            >
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
            </motion.li>
          )
        )}
      </ul>
    );
  };

  return (
    <Fragment key={key || `${id}-navmenu-fragment`}>
      <AnimatePresence>
        <motion.nav
          {...navAnimationProps}
          aria-label="Menú"
          {...props}
          ref={menuRef}
          key={`${id}-navmenu`}
        >
          <input
            type="checkbox"
            name={`drop-${++drop}`}
            id={`drop-${drop}`}
            key={`drop-${drop}`}
            aria-hidden="true"
          />
          <label
            htmlFor={`drop-${drop}`}
            key={`drop-${drop}-label`}
            aria-hidden="true"
          >
            <div className="menu-icon">
              <motion.span layout className="open">
                <MenuHamburger
                  id={`icon-open-menu-${idIcon}`}
                  width="100%"
                  height="100%"
                />
              </motion.span>
              <motion.span layout className="close">
                <Close
                  id={`icon-close-menu-${idIcon}`}
                  width="100%"
                  height="100%"
                />
              </motion.span>
            </div>
          </label>

          {renderMenu(items, pathnameNamespace, "menubar", { id: "appmenu" })}
        </motion.nav>
      </AnimatePresence>
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
  );
}
