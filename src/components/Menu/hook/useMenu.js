// Copy & adapated code from https://www.w3.org/WAI/tutorials/menus/application-menus-code/

import { useEffect, useState } from "react";
import useBrowser from "hooks/useBrowser";

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

function MenuKeyboard() {
  const { isBrowser } = useBrowser();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    if (menu === null && isBrowser) {
      return;
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBrowser]);
}
