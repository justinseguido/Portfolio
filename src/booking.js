(() => {
  const $ = (id) => document.getElementById(id);

  const toggleStep = (hide, show) => {
    $(hide).classList.add('hidden');
    $(show).classList.remove('hidden');
  };

  const updateCalendlyUrl = (name, email) => {
    const url = `https://calendly.com/jbseguido/30min?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&hide_gdpr_banner=1`;
    document.querySelector('.calendly-inline-widget').setAttribute('data-url', url);
  };

  const submitBooking = async (data) => {
    try {
      const res = await fetch('https://formspree.io/f/mvgbylry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error();
    } catch {
      alert('Error submitting form. Please try again.');
    }
  };

  $('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = $('userName').value.trim();
    const email = $('userEmail').value.trim();
    const phone = $('userPhone').value.trim();
    const projectType = $('projectType').value;
    const message = $('userMessage').value.trim();

    if (!name || !email.includes('@')) return alert('Please enter valid details.');

    const bookingData = { name, email, phone, projectType, message, timestamp: new Date().toISOString() };
    await submitBooking(bookingData);

    $('displayName').textContent = name;
    $('thankYouName').textContent = name;
    $('thankYouEmail').textContent = email;

    updateCalendlyUrl(name, email);
    toggleStep('step1-form', 'step2-calendar');
    document.body.scrollIntoView({ behavior: 'smooth' });
  });

  $('backButton').addEventListener('click', () => toggleStep('step2-calendar', 'step1-form'));
  $('continueButton').addEventListener('click', () => toggleStep('step2-calendar', 'thankYouPage'));
  $('bookAnotherButton').addEventListener('click', () => {
    $('bookingForm').reset();
    toggleStep('thankYouPage', 'step1-form');
  });
})();
