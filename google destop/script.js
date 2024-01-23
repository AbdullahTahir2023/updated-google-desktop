const editableText = document.getElementById('editable-text');

// Check if there's any saved text in localStorage
if (localStorage.getItem('savedText')) {
  editableText.textContent = localStorage.getItem('savedText');
  console.log('Retrieved text from localStorage:', localStorage.getItem('savedText'));
}

// Event listener for input changes in the 'editable-text' element
editableText.addEventListener('input', function() {
  localStorage.setItem('savedText', this.textContent);
  console.log('Saved text to localStorage:', this.textContent);
});
