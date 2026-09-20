import avaleaLogo from "@/imports/a6d23eff-d231-4741-b5a7-6182e8becdd2.jpeg";

const PHONE = "0958775926";
const BRAND_SUB = "Va&Cy";

interface Perfume {
  id: number;
  name: string;
  brand: string;
  family: string;
  description: string;
  notes: string;
  dulce: number;
  floral: number;
  frutal: number;
  amaderado: number;
  cremoso: number;
  citrico: number;
  img: string;
  accent: string;
}

const PERFUMES: Perfume[] = [
  {
    id: 1,
    name: "Good Girl Blush",
    brand: "Carolina Herrera",
    family: "Floral Ámbar Frutal",
    description: "Dulce, floral, romántico y femenino",
    notes: "Bergamota, ylang-ylang, peonía, vainilla",
    dulce: 4, floral: 5, frutal: 3, amaderado: 1, cremoso: 4, citrico: 2,
    img: "https://images.unsplash.com/photo-1613521140785-e85e427f8002?w=320&h=480&fit=crop&auto=format",
    accent: "#C4547A",
  },
  {
    id: 2,
    name: "Devotion",
    brand: "Dolce & Gabbana",
    family: "Gourmand Avainillado",
    description: "Dulce, cítrico, cremoso y gourmand",
    notes: "Limón confitado, azahar, vainilla",
    dulce: 5, floral: 3, frutal: 1, amaderado: 1, cremoso: 5, citrico: 4,
    img: "https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?w=320&h=480&fit=crop&auto=format",
    accent: "#9C6030",
  },
  {
    id: 3,
    name: "Donna Born in Roma Intense",
    brand: "Valentino",
    family: "Floral Ámbar",
    description: "Muy dulce, floral, intenso y sensual",
    notes: "Vainilla bourbon, jazmín, benjuí",
    dulce: 5, floral: 4, frutal: 1, amaderado: 1, cremoso: 5, citrico: 1,
    img: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=320&h=480&fit=crop&auto=format",
    accent: "#8B3A5A",
  },
  {
    id: 4,
    name: "Scandal",
    brand: "Jean Paul Gaultier",
    family: "Floral Chipre Gourmand",
    description: "Dulce, floral, intenso y con efecto miel",
    notes: "Miel, gardenia, pachulí",
    dulce: 5, floral: 4, frutal: 2, amaderado: 2, cremoso: 4, citrico: 2,
    img: "https://images.unsplash.com/photo-1595425959632-34f2822322ce?w=320&h=480&fit=crop&auto=format",
    accent: "#B8762A",
  },
  {
    id: 5,
    name: "Poison Girl",
    brand: "Christian Dior",
    family: "Oriental Avainillado",
    description: "Dulce, almendrado, avainillado y sensual",
    notes: "Naranja amarga, rosa, almendra, vainilla, haba tonka, sándalo",
    dulce: 5, floral: 3, frutal: 2, amaderado: 3, cremoso: 5, citrico: 3,
    img: "https://images.unsplash.com/photo-1608721279136-cd41b752fa41?w=320&h=480&fit=crop&auto=format",
    accent: "#6B2040",
  },
  {
    id: 6,
    name: "Yara",
    brand: "Lattafa",
    family: "Ámbar Vainilla",
    description: "Cremoso, tropical, dulce y juvenil",
    notes: "Mandarina, orquídea, heliotropo, frutas tropicales, vainilla, almizcle, sándalo",
    dulce: 5, floral: 3, frutal: 4, amaderado: 3, cremoso: 5, citrico: 2,
    img: "https://images.unsplash.com/photo-1614869894052-2ece3870a294?w=320&h=480&fit=crop&auto=format",
    accent: "#9C4020",
  },
  {
    id: 7,
    name: "212 VIP Rosé",
    brand: "Carolina Herrera",
    family: "Floral Frutal Amaderado",
    description: "Fresco, frutal, femenino y elegante",
    notes: "Champán rosado, pimienta rosa, flor de melocotón, rosa, almizcle blanco, madera",
    dulce: 3, floral: 4, frutal: 4, amaderado: 3, cremoso: 1, citrico: 1,
    img: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?w=320&h=480&fit=crop&auto=format",
    accent: "#B05070",
  },
  {
    id: 8,
    name: "Amor Amor",
    brand: "Cacharel",
    family: "Floral Frutal",
    description: "Frutal, cítrico, dulce y juvenil",
    notes: "Grosella negra, naranja, mandarina, toronja, bergamota, rosa, albaricoque, vainilla, tonka",
    dulce: 4, floral: 4, frutal: 5, amaderado: 3, cremoso: 3, citrico: 5,
    img: "https://images.unsplash.com/photo-1615108395437-df128ad79e80?w=320&h=480&fit=crop&auto=format",
    accent: "#C4304A",
  },
  {
    id: 9,
    name: "CH Sublime",
    brand: "Carolina Herrera",
    family: "Floral Chipre",
    description: "Elegante, verde, terroso y sofisticado",
    notes: "Bergamota, flor de pasionaria, orquídea, rosa, pachulí, cuero, ámbar, musgo",
    dulce: 2, floral: 4, frutal: 1, amaderado: 4, cremoso: 1, citrico: 3,
    img: "https://images.unsplash.com/photo-1619352703846-e74bc721363d?w=320&h=480&fit=crop&auto=format",
    accent: "#3A5A40",
  },
  {
    id: 10,
    name: "1 Million Elixir",
    brand: "Rabanne",
    family: "Oriental Amaderado Frutal",
    description: "Dulce, frutal, avainillado, cálido y amaderado",
    notes: "Manzana, davana, rosa turca, osmanthus, haba tonka, pachulí, cedro, vainilla",
    dulce: 5, floral: 3, frutal: 4, amaderado: 4, cremoso: 5, citrico: 1,
    img: "https://images.unsplash.com/photo-1656746678868-579bf6d7868d?w=320&h=480&fit=crop&auto=format",
    accent: "#8B6010",
  },
  {
    id: 11,
    name: "Le Male Elixir",
    brand: "Jean Paul Gaultier",
    family: "Ámbar Aromático Amaderado",
    description: "Muy dulce, cálido, especiado y sensual",
    notes: "Menta, lavanda, haba tonka, benjuí, vainilla, miel, tabaco",
    dulce: 5, floral: 2, frutal: 1, amaderado: 3, cremoso: 5, citrico: 1,
    img: "https://images.unsplash.com/photo-1598634222670-87c5f558119c?w=320&h=480&fit=crop&auto=format",
    accent: "#1A3A6B",
  },
  {
    id: 12,
    name: "Gucci Guilty Black",
    brand: "Gucci",
    family: "Aromático Fougère",
    description: "Verde, aromático, fresco, especiado y amaderado",
    notes: "Lavanda, cilantro verde, notas verdes, neroli, azahar, cedro, pachulí",
    dulce: 2, floral: 2, frutal: 1, amaderado: 4, cremoso: 1, citrico: 3,
    img: "https://images.unsplash.com/photo-1615160460366-2c9a41771b51?w=320&h=480&fit=crop&auto=format",
    accent: "#2A2A2A",
  },
];

// 2 perfumes per page
const pages: Perfume[][] = [];
for (let i = 0; i < PERFUMES.length; i += 2) {
  pages.push(PERFUMES.slice(i, i + 2));
}

// ── SVG Icons ──────────────────────────────────────────
function IconDulce() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C9 2 6 5 6 9c0 2.5 1.5 4.5 3 5.5V20h6v-5.5c1.5-1 3-3 3-5.5 0-4-3-7-6-7z" fill="#D4A017" opacity="0.85" />
      <ellipse cx="12" cy="20.5" rx="3" ry="1" fill="#B8860B" opacity="0.5" />
    </svg>
  );
}

function IconFloral() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.5" fill="#E87FAA" />
      <ellipse cx="12" cy="6" rx="2" ry="3.5" fill="#F4A7C0" />
      <ellipse cx="12" cy="18" rx="2" ry="3.5" fill="#F4A7C0" />
      <ellipse cx="6" cy="12" rx="3.5" ry="2" fill="#F4A7C0" />
      <ellipse cx="18" cy="12" rx="3.5" ry="2" fill="#F4A7C0" />
      <ellipse cx="7.8" cy="7.8" rx="2" ry="3" transform="rotate(-45 7.8 7.8)" fill="#FBCFE8" />
      <ellipse cx="16.2" cy="7.8" rx="2" ry="3" transform="rotate(45 16.2 7.8)" fill="#FBCFE8" />
      <ellipse cx="7.8" cy="16.2" rx="2" ry="3" transform="rotate(45 7.8 16.2)" fill="#FBCFE8" />
      <ellipse cx="16.2" cy="16.2" rx="2" ry="3" transform="rotate(-45 16.2 16.2)" fill="#FBCFE8" />
    </svg>
  );
}

function IconFrutal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="14" r="5" fill="#E84040" />
      <circle cx="15" cy="14" r="5" fill="#FF6B35" />
      <path d="M12 6 Q13 3 15 3" stroke="#4A7C40" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M12 6 Q11 4 9 4" stroke="#4A7C40" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconAmaderado() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="10" y="4" width="4" height="14" rx="1" fill="#8B5E3C" />
      <ellipse cx="12" cy="4" rx="5" ry="3" fill="#4A7C40" />
      <path d="M7 12 Q5 10 4 12" stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M17 10 Q19 8 20 10" stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round" fill="none" />
      <rect x="8" y="18" width="8" height="3" rx="1" fill="#6B4423" />
    </svg>
  );
}

function IconCremoso() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="13" width="6" height="8" rx="2" fill="#E8C49A" />
      <path d="M9 13 Q7 10 9 7 Q12 4 15 7 Q17 10 15 13 Z" fill="#FAF0E6" />
      <path d="M11 7 Q12 5 13 7" stroke="#F5DEB3" strokeWidth="1" fill="none" />
    </svg>
  );
}

function IconCitrico() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="13" r="7" fill="#FFD700" />
      <path d="M12 6 L12 20 M5 13 L19 13" stroke="#FFA500" strokeWidth="1.5" />
      <path d="M7 8 L17 18 M17 8 L7 18" stroke="#FFA500" strokeWidth="1" />
      <circle cx="12" cy="13" r="7" fill="none" stroke="#FFA500" strokeWidth="1" />
    </svg>
  );
}

const SCALE_ITEMS = [
  { key: "dulce" as const, label: "Dulce", Icon: IconDulce, color: "#D4A017" },
  { key: "floral" as const, label: "Floral", Icon: IconFloral, color: "#E87FAA" },
  { key: "frutal" as const, label: "Frutal", Icon: IconFrutal, color: "#E84040" },
  { key: "amaderado" as const, label: "Amaderado", Icon: IconAmaderado, color: "#8B5E3C" },
  { key: "cremoso" as const, label: "Cremoso", Icon: IconCremoso, color: "#C49A6C" },
  { key: "citrico" as const, label: "Cítrico", Icon: IconCitrico, color: "#D4AC00" },
];

function ScaleBar({ value, color }: { value: number; color: string }) {
  return (
    <div className="flex gap-1 items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            width: "14px",
            height: "8px",
            borderRadius: "3px",
            background: i <= value ? color : "#E8D0DC",
            opacity: i <= value ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
}

function ButterflyDecor({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={{ position: "absolute", opacity: 0.12, pointerEvents: "none", ...style }} width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path d="M28 28 C18 14, 4 9, 2 19 C0 29, 14 33, 28 28Z" fill="#C4547A" />
      <path d="M28 28 C38 14, 52 9, 54 19 C56 29, 42 33, 28 28Z" fill="#C4547A" />
      <path d="M28 28 C16 38, 4 43, 4 36 C4 29, 16 26, 28 28Z" fill="#9C3060" />
      <path d="M28 28 C40 38, 52 43, 52 36 C52 29, 40 26, 28 28Z" fill="#9C3060" />
      <circle cx="28" cy="28" r="2" fill="#6B1A3A" />
    </svg>
  );
}

function PerfumeCard({ perfume }: { perfume: Perfume }) {
  return (
    <div
      style={{
        display: "flex",
        background: "white",
        border: "1px solid #F0D0DC",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 3px 16px rgba(140,40,80,0.07)",
        height: "460px",
        flex: 1,
      }}
    >
      {/* Image column */}
      <div
        style={{
          width: "170px",
          flexShrink: 0,
          position: "relative",
          background: `linear-gradient(160deg, #FDF0F5 0%, #F8E0EC 100%)`,
          overflow: "hidden",
        }}
      >
        <img
          src={perfume.img}
          alt={`${perfume.name} — ${perfume.brand}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, transparent 55%, ${perfume.accent}44 100%)`,
          }}
        />
        {/* 50ml badge */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.92)",
            border: `1px solid ${perfume.accent}`,
            borderRadius: "20px",
            padding: "4px 12px",
            whiteSpace: "nowrap",
            fontFamily: "Jost, sans-serif",
            fontSize: "11px",
            color: perfume.accent,
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          50 ml
        </div>
      </div>

      {/* Content column */}
      <div
        style={{
          flex: 1,
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          overflow: "hidden",
        }}
      >
        {/* Family tag */}
        <div
          style={{
            display: "inline-block",
            alignSelf: "flex-start",
            background: `${perfume.accent}18`,
            border: `1px solid ${perfume.accent}40`,
            borderRadius: "20px",
            padding: "3px 12px",
            fontFamily: "Jost, sans-serif",
            fontSize: "9px",
            color: perfume.accent,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {perfume.family}
        </div>

        {/* Name */}
        <h3
          style={{
            fontFamily: "Cormorant Infant, serif",
            fontSize: "26px",
            fontWeight: 600,
            color: "#2A0A14",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {perfume.name}
        </h3>

        {/* Brand */}
        <p
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "11px",
            color: "#9B6070",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Inspirado en {perfume.brand}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "12.5px",
            color: "#4A2030",
            lineHeight: 1.55,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          {perfume.description}
        </p>

        {/* Notes */}
        <div
          style={{
            background: "#FDF6F9",
            borderLeft: `3px solid ${perfume.accent}`,
            borderRadius: "0 8px 8px 0",
            padding: "8px 12px",
          }}
        >
          <span
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "9px",
              color: perfume.accent,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 600,
              display: "block",
              marginBottom: "3px",
            }}
          >
            Notas principales
          </span>
          <span
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "11.5px",
              color: "#5A2A38",
              lineHeight: 1.4,
            }}
          >
            {perfume.notes}
          </span>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #F0D0DC" }} />

        {/* Scale title */}
        <p
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "9px",
            color: "#9B6070",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            margin: 0,
            fontWeight: 600,
          }}
        >
          Perfil Aromático
        </p>

        {/* Rating scales */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6px 16px",
          }}
        >
          {SCALE_ITEMS.map(({ key, label, Icon, color }) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Icon />
              <span
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "10px",
                  color: "#6B3848",
                  width: "64px",
                  flexShrink: 0,
                }}
              >
                {label}
              </span>
              <ScaleBar value={perfume[key]} color={color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoverPage() {
  return (
    <div
      className="catalog-page"
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "linear-gradient(155deg, #FFF0F6 0%, #FFD6E8 40%, #F5A8C8 75%, #E07099 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ButterflyDecor style={{ top: "45px", left: "55px", transform: "rotate(-20deg) scale(1.4)" }} />
      <ButterflyDecor style={{ top: "80px", right: "75px", transform: "rotate(12deg) scale(1.9)" }} />
      <ButterflyDecor style={{ top: "220px", left: "25px", transform: "rotate(8deg) scale(0.9)" }} />
      <ButterflyDecor style={{ bottom: "220px", right: "35px", transform: "rotate(-28deg) scale(1.2)" }} />
      <ButterflyDecor style={{ bottom: "120px", left: "90px", transform: "rotate(18deg) scale(0.8)" }} />

      {/* Top brand */}
      <div style={{ textAlign: "center", paddingTop: "48px", paddingBottom: "16px" }}>
        <p style={{ fontFamily: "Jost, sans-serif", fontSize: "13px", letterSpacing: "0.35em", color: "#8B1A4A", textTransform: "uppercase" }}>
          {BRAND_SUB}
        </p>
      </div>

      {/* Hero */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 64px" }}>
        <h1
          style={{
            fontFamily: "Cormorant Infant, serif",
            fontSize: "76px",
            color: "#3A0E20",
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          AVALÉA Parfum
        </h1>

        <p
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "15px",
            color: "#6B1A3A",
            lineHeight: 1.75,
            textAlign: "center",
            maxWidth: "420px",
            fontWeight: 300,
            marginBottom: "40px",
          }}
        >
          Déjate envolver por una elegancia irresistible.<br />
          Una fragancia que seduce, cautiva y permanece en la memoria.
        </p>

        {/* Ornament */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "280px", marginBottom: "40px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C4547A)" }} />
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 0 L10 6 L16 6 L11 10 L13 16 L8 12 L3 16 L5 10 L0 6 L6 6 Z" fill="#C4547A" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #C4547A)" }} />
        </div>

        {/* Brand image */}
        <div style={{ width: "320px", height: "360px" }}>
          <img
            src={avaleaLogo}
            alt="AVALÉA Parfum — frasco con rosas"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Footer contact */}
      <div
        style={{
          background: "rgba(58,14,32,0.87)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
          </svg>
          <span style={{ fontFamily: "Jost, sans-serif", color: "white", fontSize: "14px", letterSpacing: "0.05em" }}>{PHONE}</span>
        </div>
        <span style={{ fontFamily: "Jost, sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Catálogo 2026
        </span>
        <span style={{ fontFamily: "Cormorant Infant, serif", color: "#F4A8C0", fontSize: "18px", fontStyle: "italic" }}>
          AVALÉA
        </span>
      </div>
    </div>
  );
}

function ProductPage({ perfumes, pageNum, total }: { perfumes: Perfume[]; pageNum: number; total: number }) {
  return (
    <div
      className="catalog-page"
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "linear-gradient(180deg, #FFF8FB 0%, #FFF3F7 100%)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 36px",
          borderBottom: "1px solid #F0D0DC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="13" fill="#8B1A4A" />
            <text x="13" y="18" textAnchor="middle" fill="white" fontSize="14" fontFamily="Cormorant Infant, serif" fontStyle="italic">A</text>
          </svg>
          <span style={{ fontFamily: "Cormorant Infant, serif", fontSize: "18px", color: "#8B1A4A", letterSpacing: "0.04em" }}>
            AVALÉA Parfum
          </span>
        </div>
        <span style={{ fontFamily: "Jost, sans-serif", fontSize: "10px", color: "#C4547A", letterSpacing: "0.22em", textTransform: "uppercase" }}>
          Colección de Fragancias 2026
        </span>
        <span style={{ fontFamily: "Jost, sans-serif", fontSize: "10px", color: "#B08090" }}>
          {pageNum} / {total}
        </span>
      </div>

      {/* Perfume cards */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          padding: "22px 36px",
        }}
      >
        {perfumes.map((p) => (
          <PerfumeCard key={p.id} perfume={p} />
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #F0D0DC",
          padding: "12px 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C4547A" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
        <span style={{ fontFamily: "Jost, sans-serif", fontSize: "11px", color: "#9B6070", letterSpacing: "0.06em" }}>
          Contacto: {PHONE}
        </span>
      </div>
    </div>
  );
}

function BackPage() {
  return (
    <div
      className="catalog-page"
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "linear-gradient(155deg, #3A0E20 0%, #6B1A3A 50%, #8B2252 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Decorative rings */}
      {[480, 360, 240].map((size) => (
        <div
          key={size}
          style={{
            position: "absolute",
            width: size, height: size,
            borderRadius: "50%",
            border: "1px solid rgba(255,180,210,0.13)",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <ButterflyDecor style={{ top: "80px", right: "90px", transform: "rotate(15deg) scale(2)" }} />
      <ButterflyDecor style={{ bottom: "100px", left: "70px", transform: "rotate(-20deg) scale(1.5)" }} />

      <div style={{ textAlign: "center", zIndex: 1, padding: "0 64px" }}>
        <p style={{ fontFamily: "Jost, sans-serif", fontSize: "11px", letterSpacing: "0.4em", color: "#F5A8C8", textTransform: "uppercase", marginBottom: "16px" }}>
          {BRAND_SUB}
        </p>
        <h2 style={{ fontFamily: "Cormorant Infant, serif", fontSize: "60px", color: "white", fontWeight: 300, lineHeight: 1, marginBottom: "32px" }}>
          AVALÉA Parfum
        </h2>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "36px" }}>
          <div style={{ flex: 1, maxWidth: "110px", height: "1px", background: "linear-gradient(to right, transparent, rgba(244,168,192,0.6))" }} />
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M8 0 L10 6 L16 6 L11 10 L13 16 L8 12 L3 16 L5 10 L0 6 L6 6 Z" fill="#F5A8C8" />
          </svg>
          <div style={{ flex: 1, maxWidth: "110px", height: "1px", background: "linear-gradient(to left, transparent, rgba(244,168,192,0.6))" }} />
        </div>

        <p style={{ fontFamily: "Jost, sans-serif", fontSize: "15px", color: "rgba(255,210,228,0.9)", lineHeight: 1.85, fontWeight: 300, marginBottom: "48px" }}>
          Déjate envolver por una elegancia irresistible.<br />
          Una fragancia que seduce, cautiva y permanece en la memoria.
        </p>

        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "32px 48px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,180,210,0.2)",
          }}
        >
          <p style={{ fontFamily: "Jost, sans-serif", fontSize: "9px", letterSpacing: "0.35em", color: "#F5A8C8", textTransform: "uppercase", margin: 0 }}>
            Contáctanos
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A8C8" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
            <span style={{ fontFamily: "Jost, sans-serif", color: "white", fontSize: "18px", letterSpacing: "0.06em" }}>{PHONE}</span>
          </div>
        </div>

        <p style={{ fontFamily: "Jost, sans-serif", marginTop: "48px", fontSize: "10px", color: "rgba(255,180,210,0.45)", letterSpacing: "0.1em" }}>
          Catálogo 2026 · Todos los derechos reservados
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ background: "#D8C0CC", minHeight: "100vh", paddingBottom: "40px" }}>
      {/* Toolbar — hidden on print */}
      <div
        className="no-print"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(58,14,32,0.96)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontFamily: "Cormorant Infant, serif", fontSize: "22px", color: "white", letterSpacing: "0.04em" }}>
            AVALÉA Parfum
          </span>
          <span style={{ fontFamily: "Jost, sans-serif", fontSize: "11px", color: "#F5A8C8", letterSpacing: "0.18em" }}>
            — Catálogo de Fragancias 2026
          </span>
        </div>
        <button
          onClick={() => window.print()}
          style={{
            background: "#C4547A",
            color: "white",
            border: "none",
            padding: "10px 24px",
            borderRadius: "24px",
            fontFamily: "Jost, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#A03060")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#C4547A")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          Exportar PDF
        </button>
      </div>

      {/* Pages */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", paddingTop: "32px" }}>
        <div style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.22)" }}>
          <CoverPage />
        </div>

        {pages.map((group, i) => (
          <div key={i} style={{ boxShadow: "0 6px 32px rgba(0,0,0,0.18)" }}>
            <ProductPage perfumes={group} pageNum={i + 1} total={pages.length} />
          </div>
        ))}

        <div style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.22)" }}>
          <BackPage />
        </div>
      </div>
    </div>
  );
}
