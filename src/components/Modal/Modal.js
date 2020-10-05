import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Portal } from '../Portal';

const modalsLayoutId = 'id-modals';
const overlayClassName = 'js-overlay';

export const Modal = ({ children, isOpen = false, onClose = () => {} }) => {
  return (
    <Portal id={modalsLayoutId}>
      {isOpen ? (
        <Fragment>
          <div className="c-modal">{children}</div>
          <div
            onClick={onClose}
            className={`c-modal-overlay ${overlayClassName}`}
          />
        </Fragment>
      ) : null}
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
