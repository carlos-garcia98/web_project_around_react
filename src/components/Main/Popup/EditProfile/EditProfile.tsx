function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form">
          <input
            type="text"
            name="name"
            className="popup__input popup__input_type_name"
            placeholder="Nombre"
            id="name-input"
            minLength={2}
            maxLength={40}
            required
          />
          <span className="name-input-error popup__input-error"></span>
          <input
            className="popup__input popup__input_type_description"
            name="description"
            placeholder="Acerca de mí"
            type="text"
            id="description-input"
            minLength={2}
            maxLength={200}
            required
          />
          <span className="description-input-error popup__input-error"></span>
          <button className="button popup__button" type="submit">Guardar</button>
        </form>
  )
}

export default EditProfile;