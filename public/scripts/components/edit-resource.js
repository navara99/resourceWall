const placeInput = (elem, value) => {
  elem.focus();
  elem.val(value);
};

const updateEditForm = (title, description, url, is_private, category) => {
  placeInput($("#title-edit"), title);
  placeInput($("#description-edit"), description);
  placeInput($("#url-edit"), url);
  placeInput($("#category-edit"), category);
  $("#category-edit").formSelect();
  if (is_private) $("#edit-private").attr("checked", true);
};

const clearEditModalForm = () => {
  $("#title-edit").val("");
  $("#description-edit").val("");
  $("#url-edit").val("");
  $("#edit-private").removeAttr("checked");
  $("#edit-Resource-form").hide();
};

const registerSubmitResourceEdit = () => {

  $("#edit-resource-btn").on("click", (e) => {
    e.preventDefault();
  });

};

const showEditResourceModal = async (resourceId) => {
  clearEditModalForm();
  const [resourceDetails] = await getDetailsOfResources(resourceId);
  const { title, url, description, is_private, category_id, catergory } = resourceDetails;
  const $editResourceForm = $("#edit-resource-form");
  const $editModalContent = $(`#${resourceId}-edit-form-modal`);
  $editModalContent.append($editResourceForm);
  updateEditForm(title, description, url, is_private, catergory);
  $editResourceForm.show();
};







