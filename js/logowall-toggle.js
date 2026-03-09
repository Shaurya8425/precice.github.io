document.querySelectorAll('.filter-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var filter = (this.dataset.filter || '').toLowerCase();

    // Toggle active state
    document.querySelectorAll('.filter-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    this.classList.add('active');

    // Show/hide logos
    document.querySelectorAll('.logo-item').forEach(function (item) {
      if (filter === 'all' || (item.dataset.category || '').toLowerCase() === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});
