'use client';

import { useEffect, useMemo, useState } from 'react';

type Destination = {
  name: string;
  location: string;
  image: string;
  eyebrow: string;
  text: string;
};

const destinations: Destination[] = [
  {
    name: 'Bentota',
    location: 'Southern Coast, Sri Lanka',
    eyebrow: 'RIVER · SEA · GARDEN',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=88',
    text: 'A tranquil coastal sanctuary where palm-lined gardens meet warm Indian Ocean light.',
  },
  {
    name: 'Kandy',
    location: 'Central Highlands, Sri Lanka',
    eyebrow: 'HERITAGE · HILLS · CULTURE',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=88',
    text: 'A restorative hill-country retreat shaped by mist, craft, old gardens and slow mornings.',
  },
  {
    name: 'Colombo',
    location: 'City by the Sea, Sri Lanka',
    eyebrow: 'DESIGN · FLAVOUR · CITY',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=88',
    text: 'An urban residence for guests who want culture, conversation and the city at their door.',
  },
  {
    name: 'Yala',
    location: 'Deep South, Sri Lanka',
    eyebrow: 'WILD · STILL · UNTAMED',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=88',
    text: 'A remote lodge with quiet architecture, open skies and nature setting the daily rhythm.',
  },
];

const spaces = [
  {
    title: 'The Ocean House',
    meta: '2 guests · private terrace · ocean view',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=88',
  },
  {
    title: 'Garden Pavilion',
    meta: '2 guests · courtyard garden · soaking bath',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=88',
  },
  {
    title: 'Two-Bedroom Residence',
    meta: '4 guests · private pool · personal host',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=88',
  },
];

const culture = [
  {
    n: '01',
    title: 'Unseen craft',
    text: 'Architecture, objects and service are considered quietly — so the experience feels effortless rather than staged.',
  },
  {
    n: '02',
    title: 'Local discovery',
    text: 'We shape encounters around people, food, landscape and tradition instead of sending every guest through the same itinerary.',
  },
  {
    n: '03',
    title: 'Human connection',
    text: 'Thoughtful hosting begins with listening. Preferences become part of the stay without turning hospitality into a checklist.',
  },
];

const awards = [
  ['Travel & Leisure', 'Readers’ Choice · Boutique Collection', '2026'],
  ['Design Hospitality Awards', 'Best Island Retreat Concept', '2026'],
  ['Conscious Travel Index', 'Responsible Luxury Recognition', '2025'],
  ['Culinary Journeys', 'Destination Dining Selection', '2025'],
];

export function HotelHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [solidNav, setSolidNav] = useState(false);
  const [destination, setDestination] = useState(0);
  const [rooms, setRooms] = useState('1');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');

  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 56);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || bookingOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, bookingOpen]);

  const activeDestination = useMemo(() => destinations[destination], [destination]);

  return (
    <main>
      <header className={`siteHeader ${solidNav ? 'solid' : ''}`}>
        <a className="brand" href="#top" aria-label="Aurelia Collection home">
          <span className="brandMark">✦</span>
          <span>AURELIA</span>
        </a>
        <nav className="desktopNav" aria-label="Primary navigation">
          <a href="#destinations">Destinations</a>
          <a href="#experiences">Experiences</a>
          <a href="#story">Our Story</a>
        </nav>
        <div className="headerActions">
          <button className="textButton" onClick={() => setBookingOpen(true)}>Book your stay</button>
          <button className="menuButton" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /> <span />
          </button>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="heroBackdrop" />
        <div className="heroShade" />
        <div className="heroContent" data-reveal>
          <p className="eyebrow light">AURELIA COLLECTION · SRI LANKA</p>
          <h1>Stay close to<br /><em>what moves you.</em></h1>
          <p className="heroCopy">Private stays shaped by place, culture and the quiet art of being looked after.</p>
          <div className="heroLinks">
            <button className="outlineLight" onClick={() => setBookingOpen(true)}>Plan your stay</button>
            <a className="arrowLink light" href="#destinations">Explore destinations <span>↗</span></a>
          </div>
        </div>
        <a className="heroScroll" href="#recognition" aria-label="Scroll to content">↓</a>
      </section>

      <section id="recognition" className="recognition sectionPad">
        <div className="sectionIndex">01</div>
        <div className="recognitionGrid" data-reveal>
          <div>
            <p className="eyebrow">A NEW KIND OF ISLAND HOSPITALITY</p>
            <h2>Made memorable by<br /><em>the details you don’t see.</em></h2>
          </div>
          <div className="recognitionCopy">
            <p>Our collection brings together intimate stays across Sri Lanka — each rooted in its setting and designed for guests who want to feel a place rather than simply pass through it.</p>
            <a className="arrowLink" href="#story">Discover our philosophy <span>↗</span></a>
          </div>
        </div>
        <div className="awardStrip" data-reveal>
          <span>Independent collection</span>
          <strong>Thoughtful stays · considered design · genuine local connection</strong>
          <span>Sri Lanka</span>
        </div>
      </section>

      <section id="stays" className="featureStory">
        <div className="featureImage featureImageOne" data-reveal />
        <div className="featureText sectionPad" data-reveal>
          <div>
            <p className="eyebrow">SIGNATURE SPACES</p>
            <h2>Exceptional spaces.<br /><em>Remarkably personal stays.</em></h2>
          </div>
          <div>
            <p>From private garden pavilions to residences overlooking the sea, every stay is designed around privacy, texture, natural light and an unhurried sense of arrival.</p>
            <a className="arrowLink" href="#spaces">Discover the collection <span>↗</span></a>
          </div>
        </div>
      </section>

      <section id="spaces" className="spaces sectionPad">
        <div className="sectionHeading" data-reveal>
          <div>
            <p className="eyebrow">STAY YOUR WAY</p>
            <h2>Room to retreat,<br /><em>reconnect and remain.</em></h2>
          </div>
          <p>Three distinct ways to experience Aurelia, each connected by quiet service and a strong sense of place.</p>
        </div>
        <div className="spaceGrid">
          {spaces.map((space, index) => (
            <article className="spaceCard" key={space.title} data-reveal>
              <div className="spaceImageWrap">
                <img src={space.image} alt="" />
                <span className="spaceNo">0{index + 1}</span>
              </div>
              <div className="spaceCardFooter">
                <div><h3>{space.title}</h3><p>{space.meta}</p></div>
                <button aria-label={`View ${space.title}`}>↗</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experiences" className="seasonal">
        <div className="seasonalImage" data-reveal />
        <div className="seasonalContent sectionPad" data-reveal>
          <p className="eyebrow light">A SEASON TO REMEMBER</p>
          <h2>Gather slowly.<br /><em>Stay a little longer.</em></h2>
          <p>Long lunches, salt-air evenings, market mornings and restorative rituals — our seasonal programme follows the landscape rather than the calendar.</p>
          <a className="outlineLight" href="#culture">Explore experiences</a>
        </div>
      </section>

      <section id="story" className="story sectionPad">
        <div className="sectionIndex">02</div>
        <div className="storyTop" data-reveal>
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2>Hospitality with<br /><em>a sense of place.</em></h2>
          </div>
          <div className="storyBody">
            <p>Aurelia began with a simple belief: the most meaningful stays are not defined by excess, but by attention — to landscape, culture, craft and the person arriving at the door.</p>
            <p>Every property is intentionally different. What connects them is an approach to hosting that is calm, intuitive and grounded in local knowledge.</p>
          </div>
        </div>
        <div className="storyGallery" data-reveal>
          <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=88" alt="Warm hotel interior" />
          <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=88" alt="Restaurant setting" />
        </div>
      </section>

      <section id="culture" className="culture sectionPad">
        <div className="cultureHeader" data-reveal>
          <p className="eyebrow light">THE AURELIA WAY</p>
          <h2>Curiosity shapes<br /><em>every journey.</em></h2>
        </div>
        <div className="cultureList">
          {culture.map((item) => (
            <article key={item.n} data-reveal>
              <span>{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#destinations">Explore ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section id="destinations" className="destinations sectionPad">
        <div className="sectionIndex">03</div>
        <div className="destinationHeading" data-reveal>
          <div>
            <p className="eyebrow">OUR DESTINATIONS</p>
            <h2>Different landscapes.<br /><em>One considered approach.</em></h2>
          </div>
          <p>Choose a coast, a city, the hills or the wild. Each destination is its own story, never a repeated formula.</p>
        </div>

        <div className="destinationStage" data-reveal>
          <img src={activeDestination.image} alt={`${activeDestination.name} destination`} />
          <div className="destinationOverlay">
            <p>{activeDestination.eyebrow}</p>
            <h3>{activeDestination.name}</h3>
            <span>{activeDestination.location}</span>
            <p className="destinationText">{activeDestination.text}</p>
            <a href="#booking">Discover this stay ↗</a>
          </div>
        </div>
        <div className="destinationTabs" role="tablist" aria-label="Destinations">
          {destinations.map((item, index) => (
            <button key={item.name} className={index === destination ? 'active' : ''} onClick={() => setDestination(index)}>
              <span>0{index + 1}</span>{item.name}
            </button>
          ))}
        </div>
      </section>

      <section className="quoteSection sectionPad" data-reveal>
        <p className="eyebrow">OUR POINT OF VIEW</p>
        <blockquote>“Luxury is not how much is added.<br />It is how naturally everything <em>belongs.</em>”</blockquote>
      </section>

      <section className="awards sectionPad">
        <div className="awardsHeading" data-reveal>
          <p className="eyebrow light">RECOGNITION</p>
          <h2>Quietly noticed.<br /><em>Gratefully received.</em></h2>
        </div>
        <div className="awardList">
          {awards.map(([brand, title, year]) => (
            <div className="awardRow" key={title} data-reveal>
              <span>{brand}</span><strong>{title}</strong><span>{year}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="finalCta">
        <div className="finalCtaImage" />
        <div className="finalCtaShade" />
        <div className="finalCtaContent" data-reveal>
          <p className="eyebrow light">BEGIN YOUR JOURNEY</p>
          <h2>Where would you<br /><em>like to wake up?</em></h2>
          <button className="outlineLight" onClick={() => setBookingOpen(true)}>Book your stay</button>
        </div>
      </section>

      <footer className="footer sectionPad">
        <div className="footerTop">
          <div className="footerBrand"><span className="brandMark">✦</span><strong>AURELIA</strong><p>Private journeys across Sri Lanka.</p></div>
          <div><span>Explore</span><a href="#destinations">Destinations</a><a href="#experiences">Experiences</a><a href="#story">Our Story</a></div>
          <div><span>Guest services</span><a href="#booking">Reservations</a><a href="mailto:stay@aurelia.example">stay@aurelia.example</a><a href="tel:+94112345678">+94 11 234 5678</a></div>
          <div><span>Information</span><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a></div>
        </div>
        <div className="footerBottom">
          <span>© 2026 Aurelia Collection</span>
          <span>Website & Digital Solutions by <strong>Orean Software Solutions</strong> · Sri Lanka</span>
        </div>
      </footer>

      <div className={`overlayMenu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <button className="closeButton" onClick={() => setMenuOpen(false)}>Close ×</button>
        <div className="overlayMenuInner">
          <p className="eyebrow light">EXPLORE AURELIA</p>
          <a onClick={() => setMenuOpen(false)} href="#destinations">Destinations <span>01</span></a>
          <a onClick={() => setMenuOpen(false)} href="#stays">Stays <span>02</span></a>
          <a onClick={() => setMenuOpen(false)} href="#experiences">Experiences <span>03</span></a>
          <a onClick={() => setMenuOpen(false)} href="#story">Our Story <span>04</span></a>
          <button onClick={() => { setMenuOpen(false); setBookingOpen(true); }}>Book your stay ↗</button>
        </div>
      </div>

      <div className={`bookingPanel ${bookingOpen ? 'open' : ''}`} aria-hidden={!bookingOpen}>
        <button className="bookingBackdrop" onClick={() => setBookingOpen(false)} aria-label="Close booking panel" />
        <div className="bookingSheet">
          <button className="sheetClose" onClick={() => setBookingOpen(false)}>×</button>
          <p className="eyebrow">RESERVATIONS</p>
          <h2>Choose your<br /><em>next stay.</em></h2>
          <div className="formField">
            <label>Destination</label>
            <select defaultValue="Bentota"><option>Bentota</option><option>Kandy</option><option>Colombo</option><option>Yala</option></select>
          </div>
          <div className="dateGrid">
            <div className="formField"><label>Arrival</label><input type="date" /></div>
            <div className="formField"><label>Departure</label><input type="date" /></div>
          </div>
          <div className="guestGrid">
            <div className="formField"><label>Rooms</label><select value={rooms} onChange={(e) => setRooms(e.target.value)}><option>1</option><option>2</option><option>3</option></select></div>
            <div className="formField"><label>Adults</label><select value={adults} onChange={(e) => setAdults(e.target.value)}><option>1</option><option>2</option><option>3</option><option>4</option></select></div>
            <div className="formField"><label>Children</label><select value={children} onChange={(e) => setChildren(e.target.value)}><option>0</option><option>1</option><option>2</option><option>3</option></select></div>
          </div>
          <div className="formField"><label>Promotional code</label><input type="text" placeholder="Optional" /></div>
          <button className="primaryButton">Check availability ↗</button>
          <p className="bookingNote">Prototype booking interface. Connect this form to OreanPlus Booking/PMS for live availability.</p>
        </div>
      </div>
    </main>
  );
}
