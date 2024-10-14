import './Modal.css';
import SpiralModal from "../../assets/img/spiral_modal.svg";
import {useTranslation} from "react-i18next";

const Modal = ({showModal}) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={`modal-dialog ${showModal && "active"}`}>
            <div className="modal-content">
                <p className="modal-title">{t('Thank you.')}</p>
                <p className="modal-descr">{t('We shall contact you shortly! ITDRS team')}</p>
            </div>
            <img className="modal-spiral" src={SpiralModal} alt={""}/>
        </div>
    )
}

export default Modal;
