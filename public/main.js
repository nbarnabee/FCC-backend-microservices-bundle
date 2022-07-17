document.getElementById("exercise-btn").addEventListener("click", updateAction);

function updateAction() {
  let id = document.getElementById("user-id").value;
  document.getElementById(
    "exercise-form"
  ).action = `/api/users/${id}/exercises`;
  document.getElementById("exercise-form").submit();
}
