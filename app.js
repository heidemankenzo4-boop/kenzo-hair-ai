/**
 * Kenzo Hair AI — Main Application Logic
 * Handles user interaction, AI-style response generation, and text analysis.
 */

let selectedType = null;

/**
 * Selects a hair type from the button grid and generates the response.
 */
function selectType(type) {
  // Highlight the selected button
  document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('selected'));
  const btn = document.querySelector(`[data-type="${type}"]`);
  if (btn) btn.classList.add('selected');

  selectedType = type;
  showResults(type);
}

/**
 * Analyzes a free-text hair description to determine the best matching hair type.
 */
function analyzeDescription() {
  const textarea = document.getElementById('hair-description');
  const text = textarea.value.trim().toLowerCase();

  if (!text) {
    textarea.style.borderColor = '#ff4444';
    textarea.setAttribute('placeholder', 'Please describe your hair first...');
    setTimeout(() => {
      textarea.style.borderColor = '';
      textarea.setAttribute('placeholder', 'e.g. My hair is wavy, gets frizzy in humidity, and I want to grow it longer...');
    }, 2000);
    return;
  }

  // Check for direct hair type mentions (e.g., "1a", "2b", "4c")
  const directMatch = text.match(/\b([1-4][a-c])\b/);
  if (directMatch) {
    selectType(directMatch[1]);
    return;
  }

  // Score each hair type based on keyword matches
  const scores = {};
  Object.keys(HAIR_DATA).forEach(type => { scores[type] = 0; });

  // Sort keywords by length (longest first) for better matching
  const sortedKeywords = Object.keys(KEYWORD_MAP).sort((a, b) => b.length - a.length);

  for (const keyword of sortedKeywords) {
    if (text.includes(keyword)) {
      const types = KEYWORD_MAP[keyword];
      types.forEach(type => {
        scores[type] += keyword.length; // Weight by keyword length for specificity
      });
    }
  }

  // Find the highest scoring type
  let bestType = '2a'; // Default fallback
  let bestScore = 0;

  for (const [type, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score;
      bestType = type;
    }
  }

  selectType(bestType);
}

/**
 * Transitions to the results view and generates the AI response with a typing effect.
 */
function showResults(type) {
  const data = HAIR_DATA[type];
  if (!data) return;

  // Switch views
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('results').classList.add('fade-in');

  // Set badge
  document.getElementById('result-badge').textContent = type.toUpperCase();

  // Reset response area
  const responseEl = document.getElementById('ai-response');
  responseEl.innerHTML = '<div class="typing-indicator" id="typing"><span></span><span></span><span></span></div>';

  // Hide sponsor CTA initially
  document.getElementById('sponsor-cta').style.display = 'none';

  // Build the full HTML response
  const fullHTML = buildResponse(data);

  // Simulate AI typing effect
  setTimeout(() => {
    typeResponse(responseEl, fullHTML, data);
  }, 1200);
}

/**
 * Builds the complete HTML response for a given hair type data object.
 */
function buildResponse(data) {
  let html = '';

  // Greeting / Description
  html += `<h3>✦ About Your Hair</h3>`;
  html += `<p>${data.description}</p>`;

  // Growth Plan
  html += `<h3>✦ ${data.growthPlan.title}</h3>`;
  html += `<p>${data.growthPlan.intro}</p>`;
  html += '<ul>';
  data.growthPlan.steps.forEach(step => {
    html += `<li>${step}</li>`;
  });
  html += '</ul>';

  // Hairstyles
  html += `<h3>✦ ${data.hairstyles.title}</h3>`;
  html += `<p>${data.hairstyles.intro}</p>`;
  html += '<ul>';
  data.hairstyles.styles.forEach(style => {
    html += `<li><span class="highlight">${style.name}:</span> ${style.desc}</li>`;
  });
  html += '</ul>';

  // Sponsor Recommendation
  html += `<div class="sponsor-mention">`;
  html += `<strong>✦ Based Bodyworks Recommendation:</strong><br>`;
  html += `${data.sponsorRec}`;
  html += `</div>`;

  // Closing
  html += `<p style="margin-top: 20px; color: var(--accent-light); font-style: italic;">Remember — your ${data.name.split(' — ')[1] || 'hair'} is unique and beautiful. Consistency is the key to growth. Stick with this plan, trust the process, and your hair will thrive. 💛</p>`;

  return html;
}

/**
 * Creates a typing / streaming effect to reveal the response gradually,
 * simulating an AI generating a response in real-time.
 */
function typeResponse(container, fullHTML, data) {
  // Remove typing indicator
  const typing = document.getElementById('typing');
  if (typing) typing.remove();

  // We'll reveal the response in chunks to simulate AI streaming
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = fullHTML;
  const nodes = Array.from(tempDiv.childNodes);

  container.innerHTML = '';
  let index = 0;

  function revealNext() {
    if (index >= nodes.length) {
      // All content revealed — show sponsor CTA
      showSponsorCTA(data);
      return;
    }

    const node = nodes[index].cloneNode(true);
    node.style = 'opacity: 0; transform: translateY(8px); transition: all 0.3s ease;';
    container.appendChild(node);

    // Trigger animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
      });
    });

    index++;

    // Vary the delay for a natural feel
    const delay = node.tagName === 'H3' ? 300 : node.tagName === 'UL' ? 400 : 200;
    setTimeout(revealNext, delay);
  }

  revealNext();
}

/**
 * Shows the sponsor CTA section with a personalized product recommendation.
 */
function showSponsorCTA(data) {
  const cta = document.getElementById('sponsor-cta');
  const rec = document.getElementById('sponsor-product-rec');

  rec.textContent = data.sponsorRec;
  cta.style.display = 'block';
  cta.classList.add('fade-in');
}

/**
 * Returns to the landing page to select a different hair type.
 */
function goBack() {
  document.getElementById('results').classList.add('hidden');
  document.getElementById('results').classList.remove('fade-in');
  document.getElementById('landing').classList.remove('hidden');

  // Clear selection
  document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('selected'));
  selectedType = null;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
