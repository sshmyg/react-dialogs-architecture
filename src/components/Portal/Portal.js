import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export const Portal = ({ children, id }) => {
  const dropdownLayoutEl = useMemo(() => {
    if (!id) {
      return null;
    }

    let el = document.getElementById(id);

    if (!el) {
      el = document.createElement('div');
      el.id = id;

      document.body.appendChild(el);
    }

    return el;
  }, [id]);

  return dropdownLayoutEl && children
    ? createPortal(children, dropdownLayoutEl)
    : null;
};

Portal.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};
