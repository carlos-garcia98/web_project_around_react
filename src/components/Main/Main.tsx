import { useState } from "react";
import avatar from "../../images/avatar.jpg";
import editIcon from "../../images/edit-icon.svg";
import type { PopupConfig, CardData } from "../../types/types.ts";

// Compnents imports
import Popup from "./Popup/Popup.tsx";
import NewCard from "./Popup/NewCard/NewCard.tsx";
import EditProfile from "./Popup/EditProfile/EditProfile.tsx";
import EditAvatar from "./Popup/EditAvatar/EditAvatar.tsx";
import Card from "./Card/Card.tsx";

function Main() {
  const [popup, setPopup] = useState<PopupConfig | null>(null);

  const newCardPopup: PopupConfig = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const editProfilePopup: PopupConfig = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup: PopupConfig = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup: PopupConfig) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const cards: CardData[] = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  console.log(cards);

  return (
    <>
      <main className="content">
        <section className="profile page__section">
          <div
            className="image_container"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img className="profile__image" src={avatar} alt="Avatar" />
            <div className="edit-icon__container">
              <img className="edit-icon" src={editIcon} alt="Edit icon" />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                handleOpenPopup={handleOpenPopup}
              />
            ))}
          </ul>
        </section>

        {popup && (
          <Popup
            title={popup.title ?? ""}
            isOpen={popup !== null}
            onClose={handleClosePopup}
          >
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}

export default Main;
