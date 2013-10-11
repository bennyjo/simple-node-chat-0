window.onload = function() {
	var socket = io.connect('http://localhost:80');
	var field = document.querySelector('.field');
	var name = document.querySelector('.name');
	var sendButton = document.querySelector('.send');
	var content = document.querySelector('#content');

	// Show message in the content section
	socket.on('message', function(data) {
		var fragment = document.createDocumentFragment();

		if (data.name) {
			var pName = document.createElement('p');
			pName.textContent = data.name;
			pName.style.marginBottom = '0px';
			fragment.appendChild(pName);
		}

		if (data.message) {
			var pMessage = document.createElement('p');
			pMessage.textContent = data.message;
			pMessage.style.marginTop = '0px';
			fragment.appendChild(pMessage);
		}

		content.appendChild(fragment);
	});

	// Send message when send button is clicked
	sendButton.onclick = function() {
		if(name.value) {
			socket.emit('send', { name: name.value, message: field.value });
			field.value = '';
		} else {
			alert('please fill in a name');
		}
	};
};