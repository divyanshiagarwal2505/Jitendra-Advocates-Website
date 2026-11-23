'use strict';

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // 1. Mobile Navigation
  const menuToggle = $('.menu-toggle');
  const primaryNav = $('#primary-nav');

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
      primaryNav.classList.toggle('open', !isExpanded);
    });

    $$('#primary-nav a').forEach(link => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
      });
    });

    document.addEventListener('click', (e) => {
      if (primaryNav.classList.contains('open') && !primaryNav.contains(e.target) && !menuToggle.contains(e.target)) {
        primaryNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  // 2. Practice Directory Filtering & Live Search
  const practiceCards = $$('.practice-card');
  const searchInput = $('#practice-search');
  let currentCategory = 'all';

  if (practiceCards.length && searchInput) {
    const filterPracticeCards = () => {
      const query = (searchInput.value || '').trim().toLowerCase();
      let visibleCount = 0;

      practiceCards.forEach(card => {
        const categories = (card.dataset.category || '').split(' ');
        const matchesCategory = currentCategory === 'all' || categories.includes(currentCategory);
        
        const cardText = `${card.textContent} ${card.dataset.keywords || ''}`.toLowerCase();
        const matchesQuery = !query || cardText.includes(query);

        const isMatch = matchesCategory && matchesQuery;
        card.hidden = !isMatch;

        if (isMatch) {
          visibleCount++;
        }
      });

      const noResultsMsg = $('#practice-no-results');
      if (noResultsMsg) {
        noResultsMsg.hidden = visibleCount > 0;
        if (query && visibleCount === 0) {
          noResultsMsg.textContent = `No matching practice area found for “${query}”. Try searching for “partition”, “बंटवारा”, “land dispute”, “bail”, or “cheque bounce”.`;
        } else {
          noResultsMsg.textContent = 'No matching practice areas found in this category.';
        }
      }
    };

    $$('.tab[data-filter]').forEach(tab => {
      tab.addEventListener('click', () => {
        currentCategory = tab.dataset.filter;
        $$('.tab[data-filter]').forEach(t => {
          const isActive = t === tab;
          t.classList.toggle('active', isActive);
          t.setAttribute('aria-pressed', String(isActive));
        });
        filterPracticeCards();
      });
    });

    searchInput.addEventListener('input', filterPracticeCards);
  }

  // 3. Appointment Booking Interactive Logic
  const appointmentForm = $('#appointment-form');
  const timeSlotBtns = $$('.slot-btn');
  const timeSlotInput = $('#selected-time-slot');
  const modeOptions = $$('.mode-option');

  if (timeSlotBtns.length && timeSlotInput) {
    timeSlotBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        timeSlotBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        timeSlotInput.value = btn.dataset.time || btn.textContent.trim();
      });
    });
  }

  if (modeOptions.length) {
    modeOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        modeOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        const radio = opt.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });
  }

  // Set min date to today for appointment date input
  const dateInput = $('#appointment-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    if (!dateInput.value) {
      // default to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.value = tomorrow.toISOString().split('T')[0];
    }
  }

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = ($('#client-name')?.value || '').trim();
      const phone = ($('#client-phone')?.value || '').trim();
      const matter = ($('#case-type')?.value || '').trim();
      const date = ($('#appointment-date')?.value || '').trim();
      const time = timeSlotInput?.value || '11:00 AM';
      const modeRadio = $('input[name="consultationMode"]:checked');
      const mode = modeRadio ? modeRadio.value : 'In-Person Chambers Consultation';
      const description = ($('#case-description')?.value || '').trim();

      if (!name || !phone || !matter || !date) {
        alert('Please fill in your name, contact phone number, case type, and preferred date.');
        return;
      }

      // Generate Reference ID: JA-YYYY-XXXX
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const bookingId = `JA-${new Date().getFullYear()}-${randNum}`;

      // Show confirmation box
      const bookingCard = $('.booking-card');
      if (bookingCard) {
        bookingCard.innerHTML = `
          <div class="booking-confirmation-box" role="alert" aria-live="polite">
            <div class="success-icon">✓</div>
            <h3>Appointment Requested</h3>
            <p>Thank you, <strong>${escapeHtml(name)}</strong>. Your consultation request has been recorded with Advocate Jitendra Agrawal.</p>
            
            <div class="booking-details-summary">
              <div><strong>Booking Reference:</strong> <span>${bookingId}</span></div>
              <div><strong>Consultation Mode:</strong> <span>${escapeHtml(mode)}</span></div>
              <div><strong>Date &amp; Time:</strong> <span>${escapeHtml(date)} at ${escapeHtml(time)}</span></div>
              <div><strong>Case Matter:</strong> <span>${escapeHtml(matter)}</span></div>
              <div><strong>Chambers Address:</strong> <span>Bajrang Marg, Chhawani, Neem Ka Thana</span></div>
            </div>

            <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 24px;">
              Please bring all relevant notices, previous court orders, and documents as outlined in our consultation checklist.
            </p>

            <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
              <a href="index.html" class="btn btn-gold">Return to Home</a>
              <button type="button" class="btn btn-outline-light" onclick="window.print()">Print Details</button>
            </div>
          </div>
        `;
        window.scrollTo({ top: bookingCard.offsetTop - 120, behavior: 'smooth' });
      }
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // 4. Dynamic Copyright Year
  const yearEl = $('#copyright-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
