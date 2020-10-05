import React, { Fragment, useState } from 'react';

import { Modal, useModal } from './components/Modal';

export default function App() {
  const [text, setText] = useState(Date.now());
  const { openModal, closeModal, modalProps } = useModal();
  const {
    openModal: openModal2,
    closeModal: closeModal2,
    modalProps: modalProps2,
  } = useModal();

  return (
    <Fragment>
      <div>
        <button onClick={openModal}>Open dialog 1</button>
        <button onClick={closeModal}>Close dialog 1</button>
        <br />
        <button onClick={openModal2}>Open dialog 2</button>
        <button onClick={closeModal2}>Close dialog 2</button>
        <br />
        <button
          onClick={() => {
            setText(Date.now());
          }}
        >
          Change text
        </button>

        <Modal {...modalProps}>
          Hello world <button onClick={openModal2}>Open dialog 2</button>
        </Modal>
        <Modal {...modalProps2}>Hello world {text}</Modal>
      </div>
    </Fragment>
  );
}
