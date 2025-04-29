let currentUser = null;
let roomIdCounter = 1;

// Handle login
function mockLogin() {
  const input = document.getElementById('username-input');
  const username = input.value.trim();
  if (!username) {
    alert("Please enter a username");
    return;
  }

  currentUser = username;
  document.getElementById('welcome-message').textContent = `Welcome, ${username}`;
  document.getElementById('create-room-form').style.display = 'block';
  input.disabled = true;
  document.querySelector('#login-section button').style.display = 'none';
 // document.querySelector('#login-section button').disabled = true;
}

// Create a new room
function mockCreateRoom(event) {
  event.preventDefault();
  const form = event.target;
  const roomName = form.room_name.value;

  const roomId = roomIdCounter++;

  const roomHTML = `
    <li id="room-${roomId}">
      <span class="room-name">${roomName}</span>
      <small>(Created by ${currentUser})</small>
      ${getRoomActions(roomId, currentUser)}
    </li>
  `;

  document.getElementById('rooms-list').insertAdjacentHTML('beforeend', roomHTML);
  form.reset();
}

// Conditionally show Edit/Delete if current user is creator
function getRoomActions(roomId, owner) {
  if (owner !== currentUser) return '';
  return `
    <button onclick="mockEditRoom(${roomId}, '${owner}')">Edit</button>
    <button onclick="mockDeleteRoom(${roomId}, '${owner}')">Delete</button>
  `;
}

// Edit a room name (if allowed)
function mockEditRoom(roomId, owner) {
  if (currentUser !== owner) {
    alert("You can only edit your own rooms.");
    return;
  }

  const roomEl = document.getElementById(`room-${roomId}`);
  const currentName = roomEl.querySelector('.room-name').textContent;

  const newName = prompt("Edit room name:", currentName);
  if (newName && newName.trim() !== "") {
    roomEl.querySelector('.room-name').textContent = newName;
  }
}

// Delete a room (if allowed)
function mockDeleteRoom(roomId, owner) {
  if (currentUser !== owner) {
    alert("You can only delete your own rooms.");
    return;
  }

  if (confirm("Are you sure you want to delete this room?")) {
    document.getElementById(`room-${roomId}`).remove();
  }
}
