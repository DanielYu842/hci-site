function setCurrentYear() {
  var yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function handleNavigationFromHash() {
  var hash = window.location.hash || '#home';
  var targetId = hash.replace('#', '');
  var views = document.querySelectorAll('.view');
  views.forEach(function(view) {
    view.classList.remove('is-active');
  });
  var active = document.getElementById(targetId);
  if (active) {
    active.classList.add('is-active');
  }
}

function wireCtaButton() {
  // No-op placeholder; keep for future interactions
}

window.addEventListener('DOMContentLoaded', function() {
  setCurrentYear();
  handleNavigationFromHash();
  wireCtaButton();
});

window.addEventListener('hashchange', handleNavigationFromHash);


