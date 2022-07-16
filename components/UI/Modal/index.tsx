import type { ReactNode } from 'react';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useKeyPress } from '@/hooks/useKeyPress';
import { X } from 'tabler-icons-react';
import styles from './styles.module.scss';

type PortalProps = {
  children: ReactNode;
};

const Portal = ({ children }: PortalProps) => {
  useEffect(() => {
    document.body.style.setProperty('overflow', 'hidden');

    return () => document.body.style.setProperty('overflow', 'auto');
  });

  return createPortal(children, document.getElementById('modal-root')!);
};

type ModalProps = {
  opened: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ opened, children, title, onClose }: ModalProps) => {
  const escapePress = useKeyPress('Escape');
  const modalContentRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalContentRef, onClose);

  useEffect(() => {
    if (escapePress) {
      onClose();
    }
  }, [escapePress, onClose]);

  return opened ? (
    <Portal>
      <div className={styles.overlay}>
        <div ref={modalContentRef} className={styles.modal}>
          <div className={styles.modal__header}>
            <h2 className={styles.modal__title}>{title}</h2>
            <button className={styles.modal__close} onClick={onClose}>
              <X size={20} />
            </button>
          </div>
          <div className={styles.modal__body}>{children}</div>
        </div>
      </div>
    </Portal>
  ) : (
    <></>
  );
};
