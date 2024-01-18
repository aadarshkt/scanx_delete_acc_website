// const baseURL = "https://scanx.onrender.com/students/delete";
const baseURL = "http://localhost:8080/students/delete";

const fetch_promise = fetch(baseURL);

const delete_account = async (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user_data = {
    email: email,
    password: password,
  };
  try {
    alert("Deleting account, do not referesh until confirmation comes");
    const response = await fetch(baseURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data),
    });
    if (response.ok) {
      alert("Account deleted!, sad to see you leave");
    } else {
      alert("Account not deleted, contact aadarshkt1729@gmail.com");
    }
  } catch (err) {
    alert("Cannot delete account, contact aadarshkt1729@gmail.com");
    throw new Error("Cannot delete account");
  }
};
