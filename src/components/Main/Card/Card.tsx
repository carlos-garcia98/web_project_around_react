import type { PopupConfig,CardData } from "../../../types/types.ts";
import ImagePopup from "../Popup/ImagePopup/ImagePopup.tsx";

type CardProps = {
  card: CardData;
  handleOpenPopup: (popup: PopupConfig) => void;
}

function Card(props: CardProps) {
  const { name, link } = props.card;
  const { handleOpenPopup } = props;

  const imageComponent: PopupConfig = {
    children: <ImagePopup card={props.card}/>
  }

  return (
    <li className="card">
      <img src={link} alt={name} className="card__image" onClick={() => handleOpenPopup(imageComponent)}/>
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
}

export default Card;
