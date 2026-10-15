import type { CardData } from "../../../../types/types";

type imageProps = {
  card: CardData;
}

function ImagePopup(props: imageProps) {
  const { name, link } = props.card;

  return (
    <>
      <img alt={name} className="popup__image" src={link} />
      <p className="popup__caption">{name}</p>
    </>
  );
}

export default ImagePopup;
