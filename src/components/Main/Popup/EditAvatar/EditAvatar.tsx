function EditAvatar() {
  return (
    <form className="popup__form" id="edit-avatar-form">
      <input
        className="popup__input popup__input_type_avatar"
        name="avatar"
        placeholder="Enlace a la imagen"
        type="url"
        id="avatar-input"
        required
      />
      <span className="avatar-input-error popup__input-error"></span>
      <button
        className="button popup__button popup__button__edit-avatar"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;
