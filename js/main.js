/* ==========================================================================
   Litt Heating and Air - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile Menu Toggle ---------- */
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isOpen);
      mainNav.classList.toggle('nav-open');
      document.body.classList.toggle('nav-active');
    });

    // Close menu when clicking the overlay
    document.addEventListener('click', function (e) {
      if (document.body.classList.contains('nav-active') &&
          !mainNav.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('nav-open');
        document.body.classList.remove('nav-active');
      }
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mainNav.classList.contains('nav-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('nav-open');
        document.body.classList.remove('nav-active');
        menuToggle.focus();
      }
    });
  }

  /* ---------- Mobile Dropdown Toggles ---------- */
  const dropdownTriggers = document.querySelectorAll('.has-dropdown > .dropdown-trigger');

  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      // Only handle as accordion on mobile
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const parent = trigger.parentElement;
        const isOpen = parent.classList.contains('dropdown-open');

        // Close all other dropdowns
        document.querySelectorAll('.has-dropdown.dropdown-open').forEach(function (item) {
          if (item !== parent) {
            item.classList.remove('dropdown-open');
          }
        });

        parent.classList.toggle('dropdown-open', !isOpen);
      }
    });
  });

  /* ---------- Form Validation & Mailto Submission ---------- */
  const form = document.getElementById('quote-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous errors
      clearErrors();

      // Validate
      var isValid = true;

      // Name
      var nameField = document.getElementById('name');
      if (!nameField.value.trim()) {
        showError(nameField, 'Name is required.');
        isValid = false;
      } else {
        markValid(nameField);
      }

      // Email
      var emailField = document.getElementById('email');
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailField.value.trim()) {
        showError(emailField, 'Email is required.');
        isValid = false;
      } else if (!emailPattern.test(emailField.value.trim())) {
        showError(emailField, 'Please enter a valid email address.');
        isValid = false;
      } else {
        markValid(emailField);
      }

      // Phone
      var phoneField = document.getElementById('phone');
      var phonePattern = /^[\d\s\-\(\)\+\.]{7,20}$/;
      if (!phoneField.value.trim()) {
        showError(phoneField, 'Phone number is required.');
        isValid = false;
      } else if (!phonePattern.test(phoneField.value.trim())) {
        showError(phoneField, 'Please enter a valid phone number.');
        isValid = false;
      } else {
        markValid(phoneField);
      }

      // Message
      var messageField = document.getElementById('message');
      if (!messageField.value.trim()) {
        showError(messageField, 'Please tell us how we can help.');
        isValid = false;
      } else {
        markValid(messageField);
      }

      // Service checkboxes
      var serviceChecks = document.querySelectorAll('input[name="service"]');
      var serviceChecked = Array.from(serviceChecks).some(function (cb) { return cb.checked; });
      var checkboxFieldset = document.querySelector('.form-checkboxes');
      if (!serviceChecked) {
        var checkboxError = checkboxFieldset.querySelector('.error-message');
        if (checkboxError) {
          checkboxError.textContent = 'Please select at least one service.';
        }
        isValid = false;
      }

      // Email consent
      var consentField = document.getElementById('email-consent');
      if (!consentField.value) {
        showError(consentField, 'Please select an option.');
        isValid = false;
      } else {
        markValid(consentField);
      }

      // If valid, build mailto link
      if (isValid) {
        var services = Array.from(serviceChecks)
          .filter(function (cb) { return cb.checked; })
          .map(function (cb) { return cb.value; })
          .join(', ');

        var subject = 'Quote Request from ' + nameField.value.trim();
        var body = [
          'Name: ' + nameField.value.trim(),
          'Email: ' + emailField.value.trim(),
          'Phone: ' + phoneField.value.trim(),
          '',
          'Services Interested In: ' + services,
          '',
          'Message:',
          messageField.value.trim(),
          '',
          'May we email about this: ' + consentField.value
        ].join('\n');

        var mailtoLink = 'mailto:?subject=' +
          encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(body);

        window.location.href = mailtoLink;
      } else {
        // Scroll to first error
        var firstError = form.querySelector('.invalid, .error-message:not(:empty)');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  function showError(field, message) {
    field.classList.add('invalid');
    field.classList.remove('valid');
    var errorSpan = field.parentElement.querySelector('.error-message');
    if (errorSpan) {
      errorSpan.textContent = message;
    }
  }

  function markValid(field) {
    field.classList.add('valid');
    field.classList.remove('invalid');
  }

  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(function (el) {
      el.textContent = '';
    });
    document.querySelectorAll('.invalid').forEach(function (el) {
      el.classList.remove('invalid');
    });
    document.querySelectorAll('.valid').forEach(function (el) {
      el.classList.remove('valid');
    });
  }

  // Clear field errors on input
  var formFields = document.querySelectorAll('#quote-form input, #quote-form textarea, #quote-form select');
  formFields.forEach(function (field) {
    field.addEventListener('input', function () {
      field.classList.remove('invalid');
      var errorSpan = field.closest('.form-group, .form-checkboxes');
      if (errorSpan) {
        var errMsg = errorSpan.querySelector('.error-message');
        if (errMsg) errMsg.textContent = '';
      }
    });
  });

  /* ---------- Chat Widget Placeholder ---------- */
  var chatWidget = document.querySelector('.chat-widget');
  if (chatWidget) {
    chatWidget.addEventListener('click', function () {
      alert('Chat is coming soon! In the meantime, call us at (209) 380-3032.');
    });
  }

});
