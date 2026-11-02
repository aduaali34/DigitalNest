const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <div class="brand-wrap">
        <div class="brand-mark">D</div>
        <span class="brand-name">DigitalNest</span>
      </div>

      <nav class="nav">
        <a href="#solutions">Solutions</a>
        <a href="#platform">Platform</a>
        <a href="#insights">Insights</a>
        <a href="#contact">Contact</a>
      </nav>

      <button class="nav-cta">Book a demo</button>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">Built for digital growth</span>
          <h1>Turn your digital presence into a high-converting ecosystem.</h1>
          <p>
            DigitalNest helps teams launch faster, automate customer journeys, and transform fragmented workflows into one connected experience.
          </p>

          <div class="hero-actions">
            <button class="primary">Get started</button>
            <button class="secondary">See platform</button>
          </div>

          <div class="trust-row">
            <div>
              <strong>4.9/5</strong>
              <span>Client satisfaction</span>
            </div>
            <div>
              <strong>2.3x</strong>
              <span>Faster launches</span>
            </div>
            <div>
              <strong>87%</strong>
              <span>Workflow automation</span>
            </div>
          </div>
        </div>

        <div class="hero-panel">
          <div class="panel-card main-card">
            <div class="card-header">
              <span class="dot green"></span>
              <span class="dot amber"></span>
              <span class="dot red"></span>
            </div>

            <div class="stat-grid">
              <div>
                <span>Revenue impact</span>
                <strong>$1.4M</strong>
              </div>
              <div>
                <span>New leads</span>
                <strong>12.8K</strong>
              </div>
              <div>
                <span>Conversion</span>
                <strong>+31%</strong>
              </div>
              <div>
                <span>Uptime</span>
                <strong>99.9%</strong>
              </div>
            </div>

            <div class="mini-chart">
              <span class="bar b1"></span>
              <span class="bar b2"></span>
              <span class="bar b3"></span>
              <span class="bar b4"></span>
              <span class="bar b5"></span>
              <span class="bar b6"></span>
            </div>
          </div>
        </div>
      </section>

      <section class="feature-strip" id="solutions">
        <article>
          <span class="feature-icon">⚡</span>
          <h3>Launch faster</h3>
          <p>Deploy campaigns, funnels, and experiences with less friction.</p>
        </article>
        <article>
          <span class="feature-icon">🤖</span>
          <h3>Automate smarter</h3>
          <p>Connect actions and workflows across your customer journey.</p>
        </article>
        <article>
          <span class="feature-icon">📊</span>
          <h3>Measure impact</h3>
          <p>Track performance with clear insight into conversion and growth.</p>
        </article>
      </section>

      <section class="platform" id="platform">
        <div class="section-heading">
          <span class="eyebrow dark">Platform overview</span>
          <h2>Everything your digital team needs in one nest.</h2>
        </div>

        <div class="platform-grid">
          <div class="platform-card large">
            <h3>Content + automation</h3>
            <p>Create, optimize, and route digital experiences backed by business workflows.</p>
            <ul>
              <li>Campaign orchestration</li>
              <li>Customer segmentation</li>
              <li>Smart reporting</li>
            </ul>
          </div>

          <div class="platform-card">
            <h3>Brand systems</h3>
            <p>Standardize a consistent look and feel across every touchpoint.</p>
          </div>

          <div class="platform-card">
            <h3>Marketing ops</h3>
            <p>Unify enabling processes to reduce manual effort and improve output.</p>
          </div>
        </div>
      </section>

      <section class="insights" id="insights">
        <div class="section-heading">
          <span class="eyebrow dark">Why teams choose us</span>
          <h2>Built for modern operators, teams, and brands.</h2>
        </div>

        <div class="insight-grid">
          <div class="insight-card">
            <strong>Fewer silos</strong>
            <p>Replace disconnected tools with one flexible platform.</p>
          </div>
          <div class="insight-card">
            <strong>Faster decisions</strong>
            <p>Make better choices with clear data across business functions.</p>
          </div>
          <div class="insight-card">
            <strong>Stronger customer experience</strong>
            <p>Deliver polished journeys that feel cohesive and premium.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer" id="contact">
      <div>
        <span class="brand-name">DigitalNest</span>
      </div>
      <div class="footer-links">
        <a href="#solutions">Solutions</a>
        <a href="#platform">Platform</a>
        <a href="#insights">Insights</a>
      </div>
      <button class="nav-cta">Contact sales</button>
    </footer>
  </div>
`;

const year = new Date().getFullYear();
const footer = document.querySelector('.footer');
footer.insertAdjacentHTML('beforeend', `<p class="copyright">© ${year} DigitalNest. All rights reserved.</p>`);
