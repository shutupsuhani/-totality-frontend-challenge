import React from 'react';

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">{message}</h2>
        <div className="flex justify-end mt-4">
          <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded-lg mr-2">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
