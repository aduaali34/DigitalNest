<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="DigitalNest application dashboard UI preview." />
    <title>Dashboard | DigitalNest</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/src/styles.css" />
    <script type="module" src="/src/main.js" defer></script>
  </head>
  <body class="dashboard-body">
    <div class="app-shell">
      <aside class="app-sidebar">
        <div class="brand-wrap sidebar-brand">
          <div class="brand-mark">D</div>
          <span class="brand-name">DigitalNest</span>
        </div>

        <nav class="sidebar-nav">
          <a href="#" class="active">Overview</a>
          <a href="#">Campaigns</a>
          <a href="#">Audience</a>
          <a href="#">Automation</a>
          <a href="#">Analytics</a>
          <a href="#">Reports</a>
        </nav>

        <div class="sidebar-card">
          <p>Monthly target</p>
          <strong>82%</strong>
          <span>+12% vs last month</span>
        </div>
      </aside>

      <main class="app-main">
        <header class="app-header">
          <div>
            <span class="eyebrow dark">Performance overview</span>
            <h1>Welcome back, Maya.</h1>
          </div>
          <div class="header-actions">
            <button class="btn btn-secondary">Export</button>
            <button class="btn btn-primary">Create report</button>
          </div>
        </header>

        <section class="app-grid top-kpis">
          <div class="stat-card accent">
            <p>Net revenue</p>
            <strong>$134.2K</strong>
            <span>+18.4% this month</span>
          </div>
          <div class="stat-card">
            <p>Qualified leads</p>
            <strong>2,480</strong>
            <span>+11.1% this month</span>
          </div>
          <div class="stat-card">
            <p>Conversion rate</p>
            <strong>6.8%</strong>
            <span>+1.2 pts</span>
          </div>
          <div class="stat-card">
            <p>Customer retention</p>
            <strong>91.4%</strong>
            <span>+3.8 pts</span>
          </div>
        </section>

        <section class="app-grid content-grid">
          <div class="panel large-panel">
            <div class="panel-head">
              <h3>Growth performance</h3>
              <span class="pill success">+24.7%</span>
            </div>

            <div class="line-chart">
              <span style="--h: 38%"></span>
              <span style="--h: 46%"></span>
              <span style="--h: 40%"></span>
              <span style="--h: 58%"></span>
              <span style="--h: 66%"></span>
              <span style="--h: 72%"></span>
              <span style="--h: 78%"></span>
              <span style="--h: 94%"></span>
              <span style="--h: 88%"></span>
              <span style="--h: 100%"></span>
            </div>
          </div>

          <div class="panel">
            <div class="panel-head">
              <h3>Channel mix</h3>
            </div>
            <div class="donut-wrap">
              <div class="donut-chart">
                <div class="donut-center">61%</div>
              </div>
            </div>
            <ul class="legend-list">
              <li><span class="legend teal"></span> Organic</li>
              <li><span class="legend purple"></span> Paid</li>
              <li><span class="legend amber"></span> Referral</li>
            </ul>
          </div>
        </section>

        <section class="app-grid lower-grid">
          <div class="panel">
            <div class="panel-head">
              <h3>Top campaigns</h3>
            </div>
            <div class="campaign-list">
              <div class="campaign-item">
                <div>
                  <strong>Spring Launch</strong>
                  <small>Paid social</small>
                </div>
                <span class="pill success">94.2%</span>
              </div>
              <div class="campaign-item">
                <div>
                  <strong>Lifecycle Nurture</strong>
                  <small>Email workflow</small>
                </div>
                <span class="pill neutral">71.3%</span>
              </div>
              <div class="campaign-item">
                <div>
                  <strong>Partner Expansion</strong>
                  <small>Referral</small>
                </div>
                <span class="pill success">82.9%</span>
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="panel-head">
              <h3>Recent activity</h3>
            </div>
            <ul class="activity-list">
              <li><span class="activity-dot teal"></span> Campaign metrics refreshed</li>
              <li><span class="activity-dot purple"></span> New lead source connected</li>
              <li><span class="activity-dot amber"></span> Automation workflow approved</li>
              <li><span class="activity-dot red"></span> Alert: CPA exceeds threshold</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </body>
</html>
