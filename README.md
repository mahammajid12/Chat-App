# HTMX-based CRUD Chat Rooms (PoC Project 2)

## Objective
Create a simple chat room manager where users can Create, Edit, and Delete their own chat rooms using HTMX without full page reloads. Backend is simulated via mock JavaScript functions.

## How to Run
1. Clone the repository or download the files.
2. Open `index.html` in your browser.
3. Start creating chat rooms!

No server setup is needed.

## Features
- **Create** chat rooms with a unique name.
- **Edit** the names of chat rooms you created.
- **Delete** your own chat rooms.
- **HTMX** integration simulates async requests.
- No backend is needed — everything is handled in the frontend.

## HTMX Usage
- The `create-room-form` uses `hx-post` and `hx-target` to simulate sending data to the server and updating the room list asynchronously.
- Actual CRUD operations are simulated through `mock_service.js` by dynamically manipulating the DOM.

## Notes
- Each room shows the creator's username.
- Simple username checking is simulated (hardcoded `user1` in this case).
- In a real application, HTMX requests would be sent to a real backend API.

## Credits
HTMX: [https://htmx.org/](https://htmx.org/)
