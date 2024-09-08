<script>
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add event listener to each link
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        // Prevent default link behavior
        e.preventDefault();

        // Get the href attribute of the link
        const href = link.getAttribute('href');

        // Navigate to the corresponding page
        window.location.href = href;
      });
    });
  });
</script>