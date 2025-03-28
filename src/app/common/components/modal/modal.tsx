import React, { useState } from "react";

import { IModalProps } from "../../types/modal.types";

import './modal.styles.scss';


export const Modal: React.FC<IModalProps> = ({ isOpen, modalType, onConfirm, onClose }) => {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>

        {modalType === "add" && (
          <>
            <h3>Добавить узел</h3>
            <div className="modal-form">
              <input
                type="text"
                placeholder="Введите имя"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={() => onConfirm(inputValue)}>Добавить</button>
            </div>
          </>
        )}

        {modalType === "rename" && (
          <>
            <h3>Переименовать узел</h3>
            <div className="modal-form">
              <input
                type="text"
                placeholder="Введите новое имя"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={() => onConfirm(inputValue)}>Сохранить</button>
            </div>
          </>
        )}

        {modalType === "delete" && (
          <>
            <h3>Удалить узел?</h3>
            <div className="modal-form-delete">
              <button onClick={() => onConfirm()}>Да</button>
              <button onClick={onClose}>Нет</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
