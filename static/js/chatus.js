const $chatMessages = document.querySelector(".messages");

const setRoomActive = (room_id) => {
  document
  .querySelectorAll(".list-rooms li")
  .forEach((el) => el.classList.remove("active"));

  document.querySelector(`#room-${room_id}`).classList.add("active");
};


const getMessages = async (room_id) => {
    const response = await fetch(`/${room_id}`);
    const html = await response.text();
    $chatMessages.innerHTML = html
    setRoomActive(room_id);
  };

 