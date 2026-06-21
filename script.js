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

// Load mosquito article content
function loadMosquitoArticle() {
  const contentEl = document.getElementById('articleContent');
  contentEl.innerHTML = `
    <h2>The Deadliest Animal on Earth</h2>
    <p>When we think of dangerous animals, our minds often jump to sharks, crocodiles, or venomous snakes. Yet the deadliest animal on our planet is far smaller—the mosquito. These tiny insects are responsible for more human deaths than any other creature, causing an estimated 700,000 to 1 million deaths annually.</p>
    
    <h2>Why Mosquitoes?</h2>
    <p>Mosquitoes transmit diseases that affect billions of people worldwide. The primary culprits include:</p>
    <ul>
      <li><strong>Malaria:</strong> Transmitted by Anopheles mosquitoes, malaria kills around 400,000 people annually, mostly children in Africa.</li>
      <li><strong>Dengue Fever:</strong> Affects 390 million people per year, with 25,000 fatal cases.</li>
      <li><strong>Zika Virus:</strong> Causes severe birth defects and neurological complications.</li>
      <li><strong>Yellow Fever:</strong> Has a mortality rate of 15-50% in severe cases.</li>
      <li><strong>West Nile Virus:</strong> Spreads across North America and beyond.</li>
    </ul>
    
    <h2>The Science Behind Their Success</h2>
    <p>Mosquitoes are remarkably efficient vectors for disease transmission. Female mosquitoes require blood to reproduce, and they can detect their hosts from considerable distances using CO2 sensors and thermal receptors. This hunting behavior makes them excellent disease vectors.</p>
    
    <h2>Global Impact and Disparities</h2>
    <p>The burden of mosquito-borne diseases falls disproportionately on developing nations, particularly in tropical and subtropical regions. Sub-Saharan Africa bears the brunt of malaria cases, while Southeast Asia and Latin America battle dengue fever.</p>
    
    <h2>Prevention and Control</h2>
    <p>Current efforts to reduce mosquito-borne diseases include:</p>
    <ul>
      <li>Insecticide-treated bed nets</li>
      <li>Indoor residual spraying</li>
      <li>Vaccination programs (when available)</li>
      <li>Wetland management and drainage</li>
      <li>Genetic mosquito control research</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>The mosquito's tiny frame belies its enormous impact on human health and mortality. While we continue to research new prevention methods and treatments, the mosquito remains a formidable public health challenge that demands our attention and resources.</p>
  `;
}

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
