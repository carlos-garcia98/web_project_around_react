function NewCard() {
  return (
    <form className="popup__form" id="new-card-form">
      <input
        type="text"
        name="place-name"
        id="place-name-input"
        className="popup__input popup__input_type_card-name"
        placeholder="Título"
        minLength={2}
        maxLength={30}
        required
      />
      <span className="place-name-input-error popup__input-error"></span>
      <input
        type="url"
        name="link"
        id="link-input"
        className="popup__input popup__input_type_url"
        placeholder="Enlace a la imagen"
        required
      />
      <span className="link-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}

export default NewCard;
