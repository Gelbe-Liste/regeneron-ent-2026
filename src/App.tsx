import { useEffect, useState } from "react";

type Screen = {
  label: string;
  title: string;
  body: string;
  cards?: string[];
  metrics?: [string, string][];
  timeline?: [string, string][];
  areas?: string[];
  preview?: {
    src: string;
    alt: string;
  };
  download?: {
    label: string;
    href: string;
  };
};

type Module = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  theme: "veloci" | "rgc" | "company" | "asco" | "publications";
  screens: Screen[];
};

const pdfs = {
  velocisuite: "/downloads/velocisuite-flyer-2026.pdf",
  rgc: "/downloads/rgc-factsheet-2025.pdf",
  company: "/downloads/Regeneron_Company-Update.pdf",
  publications: "/downloads/regeneron-publications-asco-2026.pdf",
  esmo: "/downloads/regeneron-publications-esmo-2026.pdf"
};

function trackEvent(eventName: string, data?: Record<string, string | number>) {
  console.log("[Tracking]", eventName, data);

  // Später z. B. Google Analytics:
  // window.gtag?.("event", eventName, data);

  // Später z. B. Matomo:
  // window._paq?.push(["trackEvent", "NFC Microsite", eventName, JSON.stringify(data)]);
}

const modules: Module[] = [
  {
    id: "regeneron-company-update",
    eyebrow: "REGENERON FACTS",
    title: "Company Brochure",
    subtitle:
      "Discover Regeneron: company insights, innovations and approved medicines",
    theme: "company",
    screens: [
      {
        label: "Download",
        title: "Original materials",
        body:
          "Download the source PDF or return to the main menu to explore additional Regeneron materials",
        preview: {
          src: "/downloads/company-update-preview.png",
          alt: "Regeneron Company Update preview"
        },
        download: {
          label: "Download Company Brochure",
          href: pdfs.company
        }
      }
    ]
  },
  {
    id: "velocisuite",
    eyebrow: "Technology Leader",
    title: "VelociSuite® Technologies",
    subtitle:
      "Proprietary technology platforms designed to address drug development bottlenecks",
    theme: "veloci",
    screens: [
      {
        label: "Download",
        title: "Original material",
        body:
          "Download the source PDF or return to the main menu to explore additional Regeneron materials",
        preview: {
          src: "/downloads/velocisuite-preview.png",
          alt: "VelociSuite® technologies preview"
        },
        download: {
          label: "Download VelociSuite® Flyer",
          href: pdfs.velocisuite
        }
      }
    ]
  },
  {
    id: "rgc",
    eyebrow: "Human Genetics",
    title: "Regeneron Genetics Center®",
    subtitle:
      "Early gene discovery and functional genomics to advance genetics-informed therapeutics",
    theme: "rgc",
    screens: [
      {
        label: "Download",
        title: "Original material",
        body:
          "Download the source PDF or return to the main menu to explore additional Regeneron materials",
        preview: {
          src: "/downloads/rgc-preview.png",
          alt: "Regeneron Genetics Center® preview"
        },
        download: {
          label: "Download RGC Factsheet",
          href: pdfs.rgc
        }
      }
    ]
  },
  {
    id: "publications",
    eyebrow: "Regeneron Publications",
    title: "ASCO 2026",
    subtitle: "Overview and collated Regeneron Publications from ASCO 2026",
    theme: "asco",
    screens: [
      {
        label: "Download",
        title: "Original material",
        body:
          "Download the source PDF or return to the main menu to explore additional Regeneron materials",
        preview: {
          src: "/downloads/regeneron-publications-preview.png",
          alt: "Regeneron Publications at ASCO 2026 preview"
        },
        download: {
          label: "Download Regeneron Publications",
          href: pdfs.publications
        }
      }
    ]
  },
  {
    // ESMO has its own ID and PDF path to avoid opening the ASCO file.
    id: "esmo-2026",
    eyebrow: "Regeneron Publications",
    title: "ESMO 2026",
    subtitle: "Overview and collated Regeneron Publications from ESMO 2026",
    theme: "publications",
    screens: [
      {
        label: "Download",
        title: "Original material",
        body:
          "Download the source PDF or return to the main menu to explore additional Regeneron materials",
        preview: {
          // Clearly labelled ESMO placeholder preview; replace after approval.
          src: "/downloads/regeneron-publications-esmo-2026-preview.png",
          alt: "ESMO 2026 placeholder preview - coming soon"
        },
        download: {
          label: "Open ESMO 2026 placeholder PDF",
          href: pdfs.esmo
        }
      }
    ]
  }
];

function Header({ onContact }: { onContact: () => void }) {
  return (
    <header className="app-header">
      <button
        className="icon-button"
        style={{
          width: "auto",
          minWidth: "108px",
          height: "45px",
          borderRadius: "18px",
          padding: "0 22px",
          fontWeight: 700
        }}
        onClick={onContact}
      >
        Contact
      </button>

      <div className="regeneron-logo">
        <div className="regeneron-main">REGENERON</div>
        <div className="regeneron-sub">SCIENCE TO MEDICINE®</div>
      </div>
    </header>
  );
}

function HomeScreen({
  openModule,
  onContact
}: {
  openModule: (id: string) => void;
  onContact: () => void;
}) {
  return (
    <div className="page-shell">
      <div className="phone">
        <Header onContact={onContact} />

        <main className="home-screen">
          <div className="badge">59th ENT Congress Mannheim</div>

          <h1>WHO WE ARE</h1>

          <p className="intro">
            Regeneron is a global biotechnology company that invents
            life-transforming medicines for people with serious diseases
          </p>

          <section className="module-list">
            {modules.map((mod) => (
              <button
                key={mod.id}
                className={`module-card ${mod.theme}`}
                style={{
                  minHeight: "128px",
                  padding: "22px 22px",
                  ...(mod.theme === "company"
                    ? {
                        background:
                          "linear-gradient(135deg, #65cbe8 0%, #0073b8 42%, #004a93 72%, #003b7a 100%)",
                        color: "#ffffff"
                      }
                    : mod.theme === "asco"
                    ? {
                        background:
                          "linear-gradient(135deg, #173b8f 0%, #7c2bea 52%, #d4008c 100%)"
                      }
                    : mod.theme === "publications"
                    ? {
                        // Same blue color scheme as Company Brochure.
                        background:
                          "linear-gradient(135deg, #65cbe8 0%, #0073b8 42%, #004a93 72%, #003b7a 100%)"
                      }
                    : {})
                }}
                onClick={() => {
                  trackEvent("module_open", {
                    module_id: mod.id,
                    module_title: mod.title
                  });
                  openModule(mod.id);
                }}
              >
                <div className="eyebrow" style={{ marginBottom: 0 }}>
                  {mod.eyebrow}
                </div>

                <div
                  className="module-title-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginTop: "6px"
                  }}
                >
                  <h2 style={{ margin: 0, lineHeight: 1.08 }}>{mod.title}</h2>
                  <div className="arrow">›</div>
                </div>

                <p
                  style={{
                    marginTop: "10px",
                    marginBottom: 0,
                    lineHeight: 1.35
                  }}
                >
                  {mod.subtitle}
                </p>
              </button>
            ))}
          </section>

          <div className="hint-box">
            Tip: You can return to the home screen at any time using the
            navigation bar at the bottom.
          </div>

          <footer className="legal-footer">
            <a href="/impressum.html">Legal Notice</a>
            <span>·</span>
            <a href="/datenschutz.html">Privacy Policy</a>
          </footer>
        </main>
      </div>
    </div>
  );
}

function PdfDownload({ label, href }: { label: string; href: string }) {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    fetch(href, { method: "HEAD" })
      .then((response) => {
        const contentType = response.headers.get("content-type") || "";
        if (active) setAvailable(response.ok && contentType.toLowerCase().includes("pdf"));
      })
      .catch(() => { if (active) setAvailable(false); });
    return () => { active = false; };
  }, [href]);

  if (available === null) {
    return <div className="download-unavailable">Checking PDF availability…</div>;
  }
  if (!available) {
    return (
      <div className="download-unavailable" role="status">
        Original PDF not included yet. Add the approved file to <code>public/downloads</code>.
      </div>
    );
  }
  return (
    <a className="download-button" href={href} target="_blank" rel="noopener noreferrer"
      onClick={() => trackEvent("pdf_download", { label, href })}>
      ↓ {label}
    </a>
  );
}

function ScreenContent({ screen }: { screen: Screen }) {
  return (
    <>
      {screen.cards && (
        <div className="content-grid one">
          {screen.cards.map((card) => (
            <div className="content-card large" key={card}>
              {card}
            </div>
          ))}
        </div>
      )}

      {screen.metrics && (
        <div className="content-grid two">
          {screen.metrics.map(([number, label]) => (
            <div className="metric-card" key={label}>
              <div className="metric-number">{number}</div>
              <div className="metric-label">{label}</div>
            </div>
          ))}
        </div>
      )}

      {screen.timeline && (
        <div className="timeline">
          {screen.timeline.map(([year, text]) => (
            <div className="timeline-item" key={year}>
              <div className="timeline-year">{year}</div>
              <div className="timeline-text">{text}</div>
            </div>
          ))}
        </div>
      )}

      {screen.areas && (
        <div className="content-grid two">
          {screen.areas.map((area) => (
            <div className="area-card" key={area}>
              <div className="area-icon">✦</div>
              <div>{area}</div>
            </div>
          ))}
        </div>
      )}

      {screen.preview && (
        <div
          className="content-card large"
          style={{
            marginTop: "22px",
            marginBottom: "18px",
            padding: "12px",
            width: "100%",
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.92)"
          }}
        >
          <img
            src={screen.preview.src}
            alt={screen.preview.alt}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: "12px"
            }}
          />
        </div>
      )}

      {screen.download && <PdfDownload label={screen.download.label} href={screen.download.href} />}
    </>
  );
}

function ContactScreen({
  onBack,
  onMenu,
  onContact
}: {
  onBack: () => void;
  onMenu: () => void;
  onContact: () => void;
}) {
  return (
    <div className="page-shell">
      <div className="phone">
        <Header onContact={onContact} />

        <main className="module-screen rgc">
          <section className="screen-card" style={{ marginTop: "28px" }}>
            <div className="screen-label">Contact</div>
            <h1>Medical Information Regeneron</h1>

            <p>
              Please contact us for medical-scientific questions, reports of
              adverse events, and product complaints
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginTop: "24px",
                width: "100%"
              }}
            >
              <div
                className="content-card large"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                  lineHeight: 1.4
                }}
              >
                <strong>Tel:</strong> +49 (0) 800 330 4267
              </div>

              <div
                className="content-card large"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                  lineHeight: 1.4
                }}
              >
                <strong>Mail:</strong> medical.information
                <br />
                _global@regeneron.com
              </div>
            </div>

            <p style={{ marginTop: "24px" }}>
              January 2026
              <br />
              DE-UNB-DECK-24-01-0001
            </p>

            <p style={{ marginTop: "16px", fontSize: "12px", opacity: 0.75 }}>
              © 2024 Regeneron Pharma GmbH, Germany. All Rights Reserved.
            </p>
          </section>

          <nav className="bottom-nav">
            <button onClick={onBack}>Back</button>
            <button onClick={onMenu}>Menu</button>
            <button className="primary" onClick={onMenu}>
              Done
            </button>
          </nav>
        </main>
      </div>
    </div>
  );
}

function ModuleScreen({
  module,
  onContact,
  onMenu
}: {
  module: Module;
  onContact: () => void;
  onMenu: () => void;
}) {
  const index = 0;
  const screen = module.screens[index];
  const progress = ((index + 1) / module.screens.length) * 100;

  return (
    <div className="page-shell">
      <div className="phone">
        <Header onContact={onContact} />

        <main
          className={`module-screen ${module.theme}`}
          style={
            module.theme === "company"
              ? {
                  background:
                    "linear-gradient(135deg, #e8f7fb 0%, #42bfe6 24%, #005aa4 56%, #003b7a 100%)"
                }
              : module.theme === "asco"
              ? {
                  background:
                    "linear-gradient(135deg, #173b8f 0%, #7c2bea 52%, #d4008c 100%)"
                }
              : module.theme === "publications"
              ? {
                  // Same blue background as Company Brochure subpage.
                  background:
                    "linear-gradient(135deg, #e8f7fb 0%, #42bfe6 24%, #005aa4 56%, #003b7a 100%)"
                }
              : undefined
          }
        >
          <div className="module-progress-row">
            <span>{module.eyebrow}</span>
            <span>
              {index + 1}/{module.screens.length}
            </span>
          </div>

          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <section className="screen-card" style={{ marginTop: "28px" }}>
            <div className="screen-label">{screen.label}</div>
            <h1>{screen.title}</h1>
            <p>{screen.body}</p>

            <ScreenContent screen={screen} />
          </section>

          <nav className="bottom-nav">
            <button onClick={onMenu}>Back</button>
            <button onClick={onMenu}>Menu</button>
            <button className="primary" onClick={onMenu}>
              Done
            </button>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [showContact, setShowContact] = useState(false);
  const activeModule = modules.find((m) => m.id === activeModuleId);

  if (showContact) {
    return (
      <ContactScreen
        onBack={() => setShowContact(false)}
        onMenu={() => {
          setShowContact(false);
          setActiveModuleId(null);
        }}
        onContact={() => setShowContact(true)}
      />
    );
  }

  if (activeModule) {
    return (
      <ModuleScreen
        module={activeModule}
        onContact={() => setShowContact(true)}
        onMenu={() => {
          setShowContact(false);
          setActiveModuleId(null);
        }}
      />
    );
  }

  return (
    <HomeScreen
      openModule={(id) => {
        setShowContact(false);
        setActiveModuleId(id);
      }}
      onContact={() => setShowContact(true)}
    />
  );
}