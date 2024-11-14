
document.addEventListener('DOMContentLoaded', function () {
    const collapsibleHeaders = document.querySelectorAll('.collapsible');

    collapsibleHeaders.forEach(header => {
      header.addEventListener('click', function () {
        this.classList.toggle('active');
        
        const content = this.nextElementSibling;
        content.classList.toggle('show');
      });
    });
  });
