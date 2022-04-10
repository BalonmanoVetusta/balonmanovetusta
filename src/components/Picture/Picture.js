import { Fragment } from "react";

export function Picture({ children, ...props } = {}) {
  return (
    <Fragment>
      <picture {...props}>{children}</picture>
      <style jsx>{`
        picture {
          display: flex;
          flex-direction: column;
          justify-content: center;
          object-fit: cover;
          height: 100%;
        }
      `}</style>
    </Fragment>
  );
}
