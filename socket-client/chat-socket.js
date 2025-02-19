const socket = io('http://localhost:3000', { transport: ['websocket'] });

const message = document.querySelector('#message');
const messages = document.querySelector('#messages');

const handleSubmitMessage = () => {
  socket.emit('message', { data: message.value });
};

socket.on('message', ({ data }) => {
  handleNewMessage(data);
});

handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
};

const buildNewMessage = (message) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
};
