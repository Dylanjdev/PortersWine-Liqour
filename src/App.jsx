import './App.css'
import portersLogo from './assets/PortersLogo.webp'
import portersStoreFront from './assets/PortersStoreFront.webp'

function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__brand-card">
          <img
            className="hero__logo"
            src={portersLogo}
            alt="Porter's Wine and Liquor logo"
          />
          <p className="hero__location">1304 E Stone Dr, Kingsport, TN</p>
        </div>

        <div className="hero__content">
          <p className="hero__kicker">Established neighborhood favorite</p>
          <h1 id="hero-title">Porter&apos;s Wine and Liquor</h1>
          <p className="hero__lead">
            A refined Kingsport bottle shop with premium bourbon, fine wines,
            and exceptional service.
          </p>

          <div className="hero__chips" aria-label="Highlights">
            <span>940+ Facebook Followers</span>
            <span>4.8 Yelp Rating</span>
            <span>Open until 11 PM</span>
          </div>

          <div className="hero__actions">
            <a className="button button--primary" href="tel:+14232479463">
              Call (423) 247-9463
            </a>
            <a
              className="button button--ghost"
              href="https://maps.google.com/?q=1304+E+Stone+Dr+Kingsport+TN+37660"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="prestige-strip" aria-label="Store prestige highlights">
        <div className="prestige-strip__track">
          <span>PREMIUM BOURBON PICKS</span>
          <span>CURATED WINE WALL</span>
          <span>KINGSPORT LOCAL FAVORITE</span>
          <span>LATE HOURS UNTIL 11 PM</span>
          <span>PREMIUM BOURBON PICKS</span>
          <span>CURATED WINE WALL</span>
        </div>
      </section>

      <section className="cards" aria-label="Store highlights">
        <article className="card">
          <h2>Store Hours</h2>
          <ul className="list">
            <li>
              <span>Monday - Saturday</span>
              <strong>9:00 AM - 11:00 PM</strong>
            </li>
            <li>
              <span>Sunday</span>
              <strong>11:00 AM - 7:00 PM</strong>
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>Visit Porter&apos;s</h2>
          <ul className="list">
            <li>
              <span>Address</span>
              <strong>1304 E Stone Dr, Kingsport, TN 37660</strong>
            </li>
            <li>
              <span>Phone</span>
              <strong>(423) 247-9463</strong>
            </li>
            <li>
              <span>Selection</span>
              <strong>Bourbon, wine, spirits, and craft beer</strong>
            </li>
          </ul>
        </article>

        <article className="card card--wide">
          <h2>Why Locals Choose Porter&apos;s</h2>
          <p className="card__copy">
            The experience feels personal: helpful recommendations, reliable
            stock on staples, and standout bottles for gifting and special
            occasions.
          </p>
          <div className="card__metrics">
            <div>
              <p>5.0</p>
              <span>Facebook Rating</span>
            </div>
            <div>
              <p>450+</p>
              <span>Instagram Followers</span>
            </div>
            <div>
              <p>178+</p>
              <span>Community Check-ins</span>
            </div>
          </div>
        </article>
      </section>

      <section className="showcase" aria-label="Signature collections">
        <div className="showcase__head">
          <p className="showcase__kicker">Signature Collections</p>
          <h2>Built for everyday pours and top-shelf nights</h2>
        </div>

        <div className="showcase__grid">
          <article className="showcase-card">
            <h3>Bourbon Reserve</h3>
            <p>
              Small-batch options, collector labels, and dependable classics
              for serious whiskey fans.
            </p>
            <span>Rich, oak-forward, and gift-ready</span>
          </article>

          <article className="showcase-card">
            <h3>Wine Cellar Picks</h3>
            <p>
              Elegant reds, crisp whites, and dinner-party favorites selected
              for quality and value.
            </p>
            <span>Everyday bottles to celebratory vintages</span>
          </article>

          <article className="showcase-card">
            <h3>Spirits and Craft</h3>
            <p>
              Vodka, tequila, rum, and rotating craft beer selections with new
              arrivals featured weekly.
            </p>
            <span>Balanced lineup of staples and discoveries</span>
          </article>
        </div>
      </section>

      <section className="facebook-fill" aria-label="Facebook highlights">
        <div className="facebook-fill__header">
          <p className="facebook-fill__kicker">From Facebook</p>
          <h2>Porter&apos;s Wine and Liquor | Kingsport TN</h2>
        </div>

        <div className="facebook-fill__grid">
          <article>
            <h3>Community Snapshot</h3>
            <ul>
              <li>947 likes</li>
              <li>940+ followers</li>
              <li>178 were here</li>
            </ul>
          </article>

          <article>
            <h3>Business Info</h3>
            <ul>
              <li>1304 E Stone Drive, Kingsport, TN 37660</li>
              <li>(423) 247-9463</li>
              <li>Liquor store with bourbon, wine, and spirits sections</li>
            </ul>
          </article>

          <article>
            <h3>Hours Shared</h3>
            <ul>
              <li>Monday-Saturday: 9:00 AM-11:00 PM</li>
              <li>Sunday: 11:00 AM-7:00 PM</li>
              <li>Open daily with late evening service</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="concierge" aria-label="Porter's service highlights">
        <div className="concierge__intro">
          <p className="concierge__kicker">Porter&apos;s Experience</p>
          <h2>More than a store visit</h2>
          <p>
            Fast recommendations, friendly help, and a reliable inventory make
            every stop easy, whether you know exactly what you want or want
            something new.
          </p>
        </div>

        <div className="concierge__steps">
          <article>
            <h3>1. Tell us the occasion</h3>
            <p>Weeknight unwind, event hosting, gifting, or trying something new.</p>
          </article>
          <article>
            <h3>2. Get curated suggestions</h3>
            <p>Staff points you to high-value options in your preferred style.</p>
          </article>
          <article>
            <h3>3. Leave with confidence</h3>
            <p>Walk out with bottles that match your taste and your budget.</p>
          </article>
        </div>
      </section>

      <section className="map-section" aria-label="Find us on map">
        <div className="map-section__header">
          <p className="map-section__kicker">Visit In Person</p>
          <h2>Find Porter&apos;s Wine and Liquor in Kingsport</h2>
          <p>
            1304 E Stone Dr, Kingsport, TN 37660. Easy stop-in location with
            quick access from the main road.
          </p>
        </div>
        <figure className="storefront-shot">
          <img
            src={portersStoreFront}
            alt="Storefront of Porter's Wine and Liquor in Kingsport"
          />
          <figcaption>Porter&apos;s storefront on E Stone Drive</figcaption>
        </figure>
        <div className="map-frame-wrap">
          <iframe
            title="Map to Porter's Wine and Liquor"
            src="https://www.google.com/maps?q=1304+E+Stone+Dr,+Kingsport,+TN+37660&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="footer-cta" aria-label="Quick actions">
        <p>Open today for classic pours and elevated picks.</p>
        <div className="footer-cta__buttons">
          <a
            className="button button--ghost"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className="button button--ghost"
            href="https://www.instagram.com/porterswineandliquor/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="button button--primary"
            href="https://maps.google.com/?q=1304+E+Stone+Dr+Kingsport+TN+37660"
            target="_blank"
            rel="noreferrer"
          >
            Visit Porter&apos;s
          </a>
        </div>
        <div className="footer-meta">
          <p className="disclaimer">
            Built By{' '}
            <a
              href="https://smithdigitals.com/"
              target="_blank"
              rel="noreferrer"
            >
              Smith Digitals
            </a>
          </p>
          <p className="copyright">
            © 2026 Porter&apos;s Wine and Liquor. All rights reserved.
          </p>
        </div>
        <div className="mobile-social-links" aria-label="Social links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a
            href="https://www.instagram.com/porterswineandliquor/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>

      <nav className="mobile-dock" aria-label="Mobile quick actions">
        <a className="mobile-dock__primary" href="tel:+14232479463">
          Call Now
        </a>
        <a
          className="mobile-dock__ghost"
          href="https://maps.google.com/?q=1304+E+Stone+Dr+Kingsport+TN+37660"
          target="_blank"
          rel="noreferrer"
        >
          Directions
        </a>
      </nav>
    </main>
  )
}

export default App
