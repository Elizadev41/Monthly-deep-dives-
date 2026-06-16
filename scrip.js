// Mobile nav toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Subscribe form (stores emails locally)
function handleSubscribe(e) {
  e.preventDefault();
  const email = document.getElementById('subEmail').value;
  
  // Store email in localStorage
  let subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
  }
  
  document.getElementById('subscribeForm').style.display = 'none';
  document.getElementById('subSuccess').style.display = 'block';
  console.log('Subscribed:', email, 'Total subscribers:', subscribers.length);
}

// Category badge color helper
function getBadgeClass(category) {
  const map = {
    Science: 'badge-blue',
    Neuroscience: 'badge-blue',
    Sports: 'badge-green',
    Ecology: 'badge-green',
    People: 'badge-purple',
    Education: 'badge-purple',
    Spirituality: 'badge-yellow',
    World: 'badge-orange',
  };
  return map[category] || 'badge-default';
}

// Sample deep dive data (replace with your real content)
const deepDives = [
  {
    slug: "mosquitoes",
    title: "The Small but Mighty Killer",
    category: "Science",
    date: "2026-06",
    abstract: "Mosquitoes are widely considered the deadliest animals in the world, causing hundreds of thousands to nearly one million deaths each year. Through research and personal reflection, this deep dive explores why something so small has such a large global impact on human health."
  }
];

// Render latest dive on home page
const latestEl = document.getElementById('latestDive');
if (latestEl) {
  const dive = deepDives[0];
  if (dive) {
    latestEl.href = `deep-dive.html?slug=${dive.slug}`;
    latestEl.innerHTML = `
      <div class="card-meta">
        <span class="badge ${getBadgeClass(dive.category)}">${dive.category}</span>
        <span class="card-date">${dive.date}</span>
      </div>
      <h3>${dive.title}</h3>
      <p>${dive.abstract}</p>
      <span class="card-arrow">Read it →</span>
    `;
    latestEl.style.cursor = 'pointer';
  } else {
    latestEl.innerHTML = '<p class="muted">The first deep dive is coming soon.</p>';
  }
}
