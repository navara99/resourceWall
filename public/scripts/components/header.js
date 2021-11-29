const updateHeader = (userInfo) => {
  const $userButtons = $("#user-buttons");
  const $noUserButtons = $("#no-user-buttons");
  const $floatingCreateResourceButton = $("#floating-create-resource-button");

  const { id, image_url } = userInfo;

  if (!id) {
    $userButtons.hide();
    $floatingCreateResourceButton.hide();
    return $noUserButtons.show();
  }

  $profilePicture = $("#profile-picture");

  $profilePicture.attr("src", image_url);

  $noUserButtons.hide();
  $userButtons.show();
  $floatingCreateResourceButton.show();
};

const headerButtonsEventListener = () => {
  const $homeButton = $("#home-button");
  const $updateProfileButton = $("#update-profile-button");
  const $loginButton = $("#login-button");
  const $registerButton = $("#register-button");
  const $likedResourcesButton = $("#liked-resources-button");
  const $createResourceButton = $("#create-resource-button");
  const $floatingCreateResourceButton = $("#floating-create-resource-button");
  const $logoutButton = $("#logout-button");
  const $myResourcesButton = $("#my-resources-button");

  $myResourcesButton.on("click", () => {
    updateView("resources");
  });

  $logoutButton.on("click", () => {
    logout();
    updateView("resources", {});
  });

  $floatingCreateResourceButton.on("click", () => {
    updateView("newResource");
  });

  $createResourceButton.on("click", () => {
    updateView("newResource");
  });

  $likedResourcesButton.on("click", () => {
    updateView("resources");
  });

  $homeButton.on("click", () => {
    updateView("resources");
  });

  $updateProfileButton.on("click", () => {
    updateView("updateProfile");
  });

  $loginButton.on("click", () => {
    updateView("login");
  });

  $registerButton.on("click", () => {
    updateView("register");
  });
};
