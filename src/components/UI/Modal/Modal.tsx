import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";
import { CategoryFormModalProps } from "../../../utils/types";

export const Modal: React.FC<CategoryFormModalProps> = React.memo(
  ({ onClose, children }) => {
    const modalContainer = useMemo(() => {
      return document.getElementById("root-modal");
    }, []);

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    if (modalContainer) {
      return ReactDOM.createPortal(
        <div className="modal" onClick={onClick}>
          <div className="modal-content text-black">
            <h1>Модальное окно</h1>
            <button onClick={onClose}>Закрыть</button>
            {children}
          </div>
        </div>,
        modalContainer
      );
    } else {
      console.log("Контейнер модального окна не найден");
      return <ErrorComponent />;
    }
  }
);
