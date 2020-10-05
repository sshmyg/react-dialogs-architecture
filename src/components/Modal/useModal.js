import { useState, useCallback, useMemo } from 'react';

export const useModal = (props = {}) => {
  const { isOpen: isOpenDefault = false } = props;
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const toggleModal = useCallback(() => setIsOpen((s) => !s), []);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const modalProps = useMemo(
    () => ({
      isOpen,
      onClose: closeModal,
    }),
    [isOpen, closeModal]
  );

  return {
    isOpen,
    toggleModal,
    openModal,
    closeModal,
    modalProps,
  };
};
