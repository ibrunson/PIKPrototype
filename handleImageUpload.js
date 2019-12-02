var form = document.getElementById('file-form');
    var fileSelect = document.getElementById('file-select');
    var submitButton = document.getElementById('submit');

    form.onsubmit = function(event) {
    event.preventDefault();

    // Update button text.
    uploadButton.innerHTML = 'Uploading...';
    // Get the selected files from the input.
    var files = fileSelect.files;
    // Create a new FormData object.
    var formData = new FormData();
    // Add the file to the request.
    formData.append('photos[]', fileSelect, fileSelect.name);
    // Set up the request.
    var xhr = new XMLHttpRequest();
    // Open the connection.
    xhr.open('POST', 'process.php', true);
    // Set up a handler for when the request finishes.
    xhr.onload = function () {
    if (xhr.status === 200) {
    // File(s) uploaded.
    uploadButton.innerHTML = 'Upload';
    } else {
      alert('An error occurred!');
      }
    };
    xhr.send(formData);
  }