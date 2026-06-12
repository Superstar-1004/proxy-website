document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initNavDropdowns();
  initMobileMenu();
  initFeatureTabs();
  initCodeTabs();
  initCopyButton();
  initTestimonialSlider();
});

function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function initNavDropdowns() {
  const navItems = document.querySelectorAll('.nav-item.has-dropdown');

  navItems.forEach(item => {
    const btn = item.querySelector('.nav-link');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains('open');

      navItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', () => {
    navItems.forEach(item => {
      item.classList.remove('open');
      item.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
    });
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('nav');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });
}

function initFeatureTabs() {
  const tabs = document.querySelectorAll('.features-tabs .tab');
  const panels = document.querySelectorAll('.features-tabs .tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(`panel-${target}`).classList.add('active');
    });
  });
}

const codeExamples = {
  curl: `curl -X GET https://api.proxyvault.com/v1/me \\
  -H "Authorization: Bearer <your_api_token>"`,
  python: `import requests

api_token = '<your_api_token>'
url = 'https://api.proxyvault.com/v1/me'
headers = {'Authorization': f'Bearer {api_token}'}
response = requests.get(url, headers=headers)
print(response.text)`,
  javascript: `const https = require('https');

const apiToken = '<your_api_token>';
const options = {
  hostname: 'api.proxyvault.com',
  path: '/v1/me',
  method: 'GET',
  headers: { 'Authorization': \`Bearer \${apiToken}\` }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});
req.end();`,
  php: `<?php
$api_token = '<your_api_token>';
$url = 'https://api.proxyvault.com/v1/me';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $api_token"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
echo $response;
curl_close($ch);
?>`
};

function initCodeTabs() {
  const codeTabs = document.querySelectorAll('.code-tab');
  const codeDisplay = document.getElementById('code-display');

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      codeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      codeDisplay.textContent = codeExamples[tab.dataset.lang];
    });
  });
}

function initCopyButton() {
  const copyBtn = document.getElementById('copy-btn');
  const codeDisplay = document.getElementById('code-display');

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeDisplay.textContent);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    } catch {
      copyBtn.textContent = 'Failed';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    }
  });
}

function initTestimonialSlider() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.getElementById('testimonial-dots');
  let current = 0;
  let interval;

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('button');

  function goTo(index) {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
    resetInterval();
  }

  function next() {
    goTo((current + 1) % cards.length);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(next, 6000);
  }

  resetInterval();
}
