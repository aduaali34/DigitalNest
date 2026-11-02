:root {
  --bg: #06111d;
  --bg-alt: #0b1b2d;
  --bg-soft: #101f32;
  --panel: rgba(12, 22, 34, 0.82);
  --panel-strong: rgba(8, 15, 24, 0.95);
  --card: rgba(17, 28, 42, 0.88);
  --line: rgba(148, 163, 184, 0.18);
  --text: #edf5ff;
  --muted: #a8bad0;
  --primary: #5eead4;
  --primary-strong: #2dd4bf;
  --secondary: #8b5cf6;
  --amber: #fbbf24;
  --red: #f87171;
  --green: #4ade80;
  --shadow: 0 30px 70px rgba(2, 10, 18, 0.45);
  --radius: 22px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(94, 234, 212, 0.14), transparent 22%),
    radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.18), transparent 34%),
    var(--bg);
  color: var(--text);
}

body.dashboard-body {
  background: #07131f;
}

a,
button,
input,
textarea {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  border: none;
  cursor: pointer;
}

input,
textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(15, 25, 38, 0.8);
  color: var(--text);
  border-radius: 12px;
  padding: 0.9rem 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: rgba(94, 234, 212, 0.7);
  box-shadow: 0 0 0 3px rgba(94, 234, 212, 0.15);
}

.site-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 48px;
}

.topbar,
.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.topbar {
  position: sticky;
  top: 18px;
  z-index: 20;
  padding: 18px 22px;
  background: rgba(11, 19, 29, 0.72);
  border: 1px solid var(--line);
  border-radius: 18px;
  backdrop-filter: blur(16px);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #041a21;
  font-weight: 900;
}

.brand-name {
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-links a {
  color: var(--muted);
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.active,
.text-link:hover {
  color: var(--text);
}

.nav-highlight {
  padding: 0.7rem 1rem;
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.2);
  color: #d4c8ff;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 0.9rem 1.2rem;
  font-weight: 600;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #8ef7e3);
  color: #02151b;
  box-shadow: 0 16px 35px rgba(45, 212, 191, 0.22);
}

.btn-secondary {
  background: rgba(148, 163, 184, 0.08);
  color: var(--text);
  border: 1px solid var(--line);
}

.btn-block {
  width: 100%;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 32px;
  padding: 80px 0 56px;
}

.eyebrow {
  display: inline-block;
  padding: 0.46rem 0.82rem;
  border-radius: 999px;
  background: rgba(94, 234, 212, 0.09);
  border: 1px solid rgba(94, 234, 212, 0.18);
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  font-weight: 700;
}

.eyebrow.dark {
  color: #dfeafc;
  background: rgba(148, 163, 184, 0.08);
}

.hero-copy h1,
.page-hero h1,
.auth-message h1,
.app-header h1 {
  margin: 18px 0 18px;
  letter-spacing: -0.06em;
  line-height: 0.95;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
}

.page-hero h1,
.auth-message h1,
.app-header h1 {
  font-size: clamp(2.3rem, 4vw, 4rem);
}

.hero-copy p,
.page-hero p,
.auth-message p,
.feature-card p,
.mini-feature p,
.showcase-card p,
.step-card p,
.pricing-card p {
  color: var(--muted);
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
}

.hero-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  margin-top: 32px;
}

.hero-metrics div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero-metrics strong {
  font-size: 1.4rem;
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.8rem;
}

.dashboard-preview {
  width: min(100%, 520px);
  margin-left: auto;
  padding: 18px;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(18, 31, 49, 0.96), rgba(11, 18, 27, 0.9));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0 20px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.green { background: var(--green); }
.dot.amber { background: var(--amber); }
.dot.red { background: var(--red); }

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 16px;
}

.kpi-card {
  padding: 18px 16px;
  border-radius: 18px;
  background: rgba(148, 163, 184, 0.05);
  border: 1px solid var(--line);
}

.kpi-card p {
  margin: 0 0 10px;
  color: var(--muted);
}

.kpi-card strong {
  display: block;
  font-size: 1.7rem;
  letter-spacing: -0.04em;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 150px;
  margin-top: 22px;
  padding: 16px 8px 0;
}

.chart-bars span {
  display: block;
  width: 100%;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  min-height: 18%;
}

.logo-strip {
  display: grid;
  gap: 20px;
  margin: 0 0 24px;
  padding: 22px 0;
  text-align: center;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  color: var(--muted);
}

.logo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-block {
  padding: 36px 0;
}

.alt-bg {
  background: rgba(13, 22, 35, 0.5);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 28px 18px;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading h2 {
  margin: 12px 0 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.feature-grid {
  display: grid;
  gap: 22px;
}

.three-up {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.four-up {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.feature-card,
.mini-feature,
.showcase-card,
.step-card,
.pricing-card,
.detail-box,
.architecture-box,
.stat-card,
.panel,
.contact-form,
.auth-panel {
  background: rgba(14, 23, 36, 0.86);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.feature-card,
.mini-feature,
.showcase-card,
.step-card,
.pricing-card,
.detail-box,
.architecture-box,
.panel,
.contact-form,
.auth-panel {
  padding: 24px;
}

.feature-icon {
  display: inline-flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(94, 234, 212, 0.08);
  font-size: 1.5rem;
}

.feature-card h3,
.mini-feature h3,
.showcase-card h3,
.step-card h3,
.architecture-box h3,
.detail-box h3,
.pricing-card h3 {
  margin: 16px 0 10px;
  font-size: 1.3rem;
}

.steps-grid,
.showcase-grid,
.architecture-panel,
.pricing-grid {
  display: grid;
  gap: 20px;
}

.steps-grid,
.showcase-grid,
.pricing-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(139, 92, 246, 0.13);
  color: #d8ccff;
  font-weight: 700;
}

.testimonial-card {
  padding: 30px;
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(94, 234, 212, 0.08), rgba(139, 92, 246, 0.08));
  border: 1px solid var(--line);
}

.testimonial-card p {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.7rem);
  line-height: 1.7;
}

.testimonial-author {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.testimonial-author span {
  color: var(--muted);
}

.cta-panel {
  padding: 22px;
  background: linear-gradient(135deg, rgba(94, 234, 212, 0.08), rgba(139, 92, 246, 0.08));
  border-radius: 26px;
  border: 1px solid var(--line);
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.site-footer {
  margin-top: 32px;
  padding-top: 26px;
  border-top: 1px solid var(--line);
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--muted);
}

.page-hero {
  padding: 60px 0 32px;
}

.page-hero p {
  max-width: 720px;
}

.architecture-panel {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.architecture-box ul,
.pricing-card ul,
.legend-list,
.activity-list {
  margin: 16px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 2;
}

.pricing-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.pricing-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pricing-card h3 {
  font-size: 2.2rem;
  margin: 10px 0 8px;
}

.pricing-card h3 span {
  font-size: 1rem;
  color: var(--muted);
}

.plan-label {
  display: inline-block;
  padding: 0.5rem 0.7rem;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.08);
  color: #dfeafc;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.featured-plan {
  background: linear-gradient(180deg, rgba(94, 234, 212, 0.08), rgba(139, 92, 246, 0.08));
  border-color: rgba(94, 234, 212, 0.2);
}

.comparison-table-wrap {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(9, 17, 25, 0.5);
  border-radius: 16px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
  text-align: left;
}

.comparison-table th {
  background: rgba(148, 163, 184, 0.04);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 28px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.contact-form {
  display: grid;
  gap: 18px;
}

.contact-form label {
  display: grid;
  gap: 8px;
  color: var(--muted);
}

.text-link {
  color: var(--primary);
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.checkbox-wrap {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.checkbox-wrap input {
  width: auto;
}

.contact-details {
  display: grid;
  gap: 18px;
}

.auth-body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 24px;
}

.auth-shell {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  width: min(1120px, 100%);
  min-height: 720px;
  background: rgba(11, 21, 31, 0.95);
  border: 1px solid var(--line);
  border-radius: 28px;
  overflow: hidden;
}

.auth-panel {
  padding: 32px;
}

.auth-visual {
  background:
    radial-gradient(circle at top left, rgba(94, 234, 212, 0.14), transparent 28%),
    linear-gradient(160deg, rgba(10, 23, 35, 0.95), rgba(7, 16, 26, 0.88));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.auth-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.auth-form-panel h2 {
  margin: 18px 0 24px;
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.05em;
}

.auth-form {
  display: grid;
  gap: 18px;
}

.auth-form label {
  display: grid;
  gap: 8px;
  color: var(--muted);
}

.divider {
  position: relative;
  margin: 28px 0 18px;
  color: var(--muted);
  text-align: center;
}

.divider::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: var(--line);
}

.divider span {
  position: relative;
  background: rgba(11, 21, 31, 0.95);
  padding: 0 12px;
}

.social-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.social-btn {
  padding: 0.8rem 1rem;
  border-radius: 12px;
  background: rgba(148, 163, 184, 0.05);
  border: 1px solid var(--line);
  color: var(--text);
}

.signup-copy {
  margin-top: 20px;
  text-align: center;
  color: var(--muted);
}

.mini-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.mini-metrics div {
  padding: 16px 14px;
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid var(--line);
  border-radius: 16px;
}

.mini-metrics strong {
  display: block;
  margin-bottom: 6px;
  font-size: 1.4rem;
}

.mini-metrics span {
  color: var(--muted);
  font-size: 0.78rem;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: calc(100vh - 48px);
  margin: 24px auto;
  width: min(1360px, calc(100% - 32px));
  background: rgba(9, 17, 25, 0.96);
  border: 1px solid var(--line);
  border-radius: 26px;
  overflow: hidden;
}

.app-sidebar {
  background: rgba(12, 20, 31, 0.95);
  border-right: 1px solid var(--line);
  padding: 24px 18px;
}

.sidebar-brand {
  margin-bottom: 32px;
}

.sidebar-nav {
  display: grid;
  gap: 8px;
}

.sidebar-nav a {
  color: var(--muted);
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  transition: background 0.2s ease, color 0.2s ease;
}

.sidebar-nav a.active,
.sidebar-nav a:hover {
  background: rgba(94, 234, 212, 0.09);
  color: var(--text);
}

.sidebar-card {
  margin-top: 32px;
  padding: 18px 16px;
  background: linear-gradient(180deg, rgba(94, 234, 212, 0.12), rgba(139, 92, 246, 0.08));
  border: 1px solid var(--line);
  border-radius: 18px;
}

.sidebar-card p,
.sidebar-card span {
  color: var(--muted);
}

.sidebar-card strong {
  display: block;
  margin: 12px 0 8px;
  font-size: 2rem;
}

.app-main {
  padding: 26px;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.app-grid {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

.top-kpis {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stat-card {
  padding: 20px 18px;
}

.stat-card.accent {
  background: linear-gradient(135deg, rgba(94, 234, 212, 0.12), rgba(139, 92, 246, 0.08));
}

.stat-card p,
.stat-card span {
  color: var(--muted);
}

.stat-card strong {
  display: block;
  margin: 10px 0 8px;
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.content-grid {
  grid-template-columns: 1.4fr 0.8fr;
}

.large-panel {
  min-height: 320px;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}

.pill {
  display: inline-flex;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.pill.success {
  background: rgba(74, 222, 128, 0.12);
  color: #8ef0ac;
}

.pill.neutral {
  background: rgba(148, 163, 184, 0.08);
  color: #d7e4f7;
}

.line-chart {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 240px;
  padding-top: 12px;
}

.line-chart span {
  display: block;
  width: 100%;
  height: var(--h);
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, rgba(94, 234, 212, 0.9), rgba(139, 92, 246, 0.8));
}

.donut-wrap {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.donut-chart {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: conic-gradient(var(--primary) 0 44%, var(--secondary) 44% 70%, var(--amber) 70% 100%);
}

.donut-center {
  position: absolute;
  inset: 24px;
  display: grid;
  place-items: center;
  background: rgba(8, 15, 24, 0.95);
  border: 1px solid var(--line);
  border-radius: 50%;
  font-size: 1.6rem;
  font-weight: 700;
}

.legend-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.legend-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
}

.legend {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
}

.legend.teal { background: var(--primary); }
.legend.purple { background: var(--secondary); }
.legend.amber { background: var(--amber); }

.lower-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.campaign-list,
.activity-list {
  display: grid;
  gap: 14px;
}

.campaign-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}

.campaign-item strong,
.campaign-item small {
  display: block;
}

.campaign-item small,
.activity-list {
  color: var(--muted);
}

.activity-list {
  list-style: none;
  padding-left: 0;
}

.activity-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}

.activity-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.activity-dot.teal { background: var(--primary); }
.activity-dot.purple { background: var(--secondary); }
.activity-dot.amber { background: var(--amber); }
.activity-dot.red { background: var(--red); }

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(148, 163, 184, 0.06);
  border: 1px solid var(--line);
  padding: 0 10px;
}

.menu-toggle span {
  display: block;
  height: 2px;
  border-radius: 20px;
  background: var(--text);
  margin: 5px 0;
}

@media (max-width: 980px) {
  .nav-links {
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(10, 17, 26, 0.98);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 18px 16px;
  }

  .nav-links.open {
    display: flex;
  }

  .menu-toggle {
    display: inline-block;
  }

  .topbar {
    position: sticky;
    flex-wrap: wrap;
  }

  .hero,
  .feature-grid,
  .steps-grid,
  .showcase-grid,
  .pricing-grid,
  .four-up,
  .architecture-panel,
  .auth-shell,
  .contact-layout,
  .content-grid,
  .lower-grid,
  .top-kpis {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 56px;
  }

  .architecture-panel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .site-footer,
  .cta-content,
  .app-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .site-shell,
  .app-main {
    padding-inline: 14px;
  }

  .hero-actions,
  .header-actions,
  .field-grid,
  .social-row,
  .mini-metrics {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: stretch;
  }

  .topbar {
    padding: 16px 14px;
  }

  .auth-shell {
    min-height: auto;
  }

  .auth-panel {
    padding: 22px 18px;
  }

  .app-shell {
    grid-template-columns: 1fr;
  }

  .nav-cta {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
