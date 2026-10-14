import { useState } from "react";
import avatar from "../../images/avatar.jpg";
import editIcon from "../../images/edit-icon.svg";
import type { PopupConfig } from "../../types/types.ts";

// Compnents imports
import Popup from "./Popup/Popup.tsx";
import NewCard from "./Popup/NewCard/NewCard.tsx";
import EditProfile from "./Popup/EditProfile/EditProfile.tsx";
import EditAvatar from "./Popup/EditAvatar/EditAvatar.tsx";

function Main() {
  const [popup, setPopup] = useState<PopupConfig | null>(null);

  const newCardPopup: PopupConfig = {
    title: "Nuevo lugar",
    children: <NewCard />
  }

  const editProfilePopup: PopupConfig = {
    title: "Editar perfil",
    children: <EditProfile />
  }

  const editAvatarPopup: PopupConfig = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />
  }

  function handleOpenPopup(popup: PopupConfig) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <main className="content">
        <section className="profile page__section">
          <div className="image_container" onClick={() => handleOpenPopup(editAvatarPopup)}>
            <img className="profile__image" src={avatar} alt="Avatar" />
            <div className="edit-icon__container">
              <img
                className="edit-icon"
                src={editIcon}
                alt="Edit icon"
              />
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
            <template id="card__template">
              <li className="card">
                <img src="" alt="" className="card__image" />
                <button
                  aria-label="Eliminar tarjeta"
                  className="card__delete-button"
                  type="button"
                ></button>
                <div className="card__description">
                  <h2 className="card__title"></h2>
                  <button
                    aria-label="Botón Me gusta"
                    className="card__like-button"
                    type="button"
                  ></button>
                </div>
              </li>
            </template>
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
