import "./Button.css";
import { useTranslation } from 'react-i18next';

const Button = ({onClick, inverseColors = false}) => {
    const { t } = useTranslation();
    return (
        <button onClick={onClick} className={
            `button ${inverseColors ? "black-background" : ""}`
        }>
            {t('Book a call')}
        </button>
    )
}

export default Button;
