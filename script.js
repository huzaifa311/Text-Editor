function formatText(command, value = null) {
    if (command === 'foreColor' || command === 'hiliteColor') {
      document.execCommand(command, false, value);
    } else if (command === 'heading') {
      var headingLevel = prompt('Enter a heading level (1-6):');
      if (headingLevel >= 1 && headingLevel <= 6) {
        document.execCommand('formatBlock', false, 'h' + headingLevel);
      } else {
        alert('Invalid heading level. Please enter a number between 1 and 6.');
      }
    } else if (command === 'paragraph') {
      document.execCommand('formatBlock', false, 'p');
    } else {
      document.execCommand(command, false, null);
    }
  }

  var buttons = [
    { command: 'bold', text: 'B' },
    { command: 'italic', text: 'I' },
    { command: 'underline', text: 'U' },
    { command: 'justifyLeft', text: '\u2190' },
    { command: 'justifyCenter', text: '\u21C6' },
    { command: 'justifyRight', text: '\u2192' },
    { command: 'insertUnorderedList', text: '\u25CF' },
    { command: 'insertOrderedList', text: '\u25CF' },
    { command: 'foreColor', text: 'Text Color' },
    { command: 'hiliteColor', text: 'Background Color' },
    { command: 'heading', text: 'Heading' },
    { command: 'paragraph', text: 'Paragraph' }
  ];

  var editor = document.querySelector('.editor');

  buttons.forEach(function(button) {
    var buttonElement = document.createElement('button');
    buttonElement.textContent = button.text;
    buttonElement.addEventListener('click', function() {
      if (button.command === 'foreColor' || button.command === 'hiliteColor') {
        var color = prompt('Enter a color:');
        formatText(button.command, color);
      } else {
        formatText(button.command);
      }
    });
    editor.parentNode.insertBefore(buttonElement, editor);
  });