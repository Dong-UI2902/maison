import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
const Modal = ({ openModal, closeModal, gift }) =>
  openModal
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button
                  onClick={() => {
                    closeModal();
                  }}
                >
                  X
                </button>
              </div>
              {gift.option !== 'Mất lượt' && (
                <div className="title">
                  <h1>Xin Chúc Mừng</h1>
                </div>
              )}
              <div className="body">
                <img />
                <div>{gift.option !== 'Mất lượt' && 'Bạn đã nhận được'}</div>
                <div>
                  <div className="modal_item-image">
                    <img src={gift.image.uri} />
                  </div>
                  <div className="modal_item-desc">{gift.option}</div>
                </div>
              </div>
              <div className="footer">
                <button
                  onClick={() => {
                    closeModal();
                  }}
                  id="cancelBtn"
                >
                  Đóng
                </button>
                {/* <button>Continue</button> */}
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
