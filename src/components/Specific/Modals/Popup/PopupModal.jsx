import { createPortal } from "react-dom";
import { PopupModalContainer, PopupModalMessageError, PopupModalMessageSuccess } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showPopupAdvice } from "../../../../redux/slices/popup";

export const PopupModal = () => {
  const { popup: { show, message, title, type } } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      dispatch(showPopupAdvice({ show: false }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [show]);

  if(!show) return null;

  return createPortal(<PopupModalContainer>
    {
      type === 'success' ? <PopupModalMessageSuccess>
        {message}
      </PopupModalMessageSuccess> 
      :
      <PopupModalMessageError>
        {message}
      </PopupModalMessageError>
    }
  </PopupModalContainer>, document.getElementById('modal-root'));
};