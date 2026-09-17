import avaleaLogo from "@/imports/a6d23eff-d231-4741-b5a7-6182e8becdd2.jpeg";

const BRAND = {
  name: "AVALÉA Parfum",
  sub: "Va&Cy",
  tagline: "Déjate envolver por una elegancia irresistible.",
  tagline2: "Una fragancia que seduce, cautiva y permanece en la memoria.",
  phone: "0958775926",
  ig: "@cynthiasorayita",
};

interface Perfume {
  id: number;
  name: string;
  brand: string;
  family: string;
  notes: string;
  price30: string;
  price60: string;
  img: string;
  accent: string;
}

const PERFUMES: Perfume[] = [
  {
    id: 1,
    name: "Scandal",
    brand: "Jean Paul Gaultier",
    family: "Floral Afrutado",
    notes: "Melocotón · Gardenia · Jengibre · Vainilla",
    price30: "$18",
    price60: "$28",
    img: "https://images.unsplash.com/photo-1595425959632-34f2822322ce?w=400&h=500&fit=crop&auto=format",
    accent: "#C4547A",
  },
  {
    id: 2,
    name: "Poison Girl",
    brand: "Christian Dior",
    family: "Floral Oriental",
    notes: "Naranja Amarga · Rosa · Vainilla · Sándalo",
    price30: "$20",
    price60: "$32",
    img: "https://images.unsplash.com/photo-1608721279136-cd41b752fa41?w=400&h=500&fit=crop&auto=format",
    accent: "#8B2252",
  },
  {
    id: 3,
    name: "Good Girl Blush",
    brand: "Carolina Herrera",
    family: "Floral Frutal",
    notes: "Lichi · Peonía · Rosa Blush · Almizcle",
    price30: "$18",
    price60: "$28",
    img: "https://images.unsplash.com/photo-1615108395437-df128ad79e80?w=400&h=500&fit=crop&auto=format",
    accent: "#D4618A",
  },
  {
    id: 4,
    name: "Devotion",
    brand: "Dolce & Gabbana",
    family: "Floral Aldehídico",
    notes: "Cedro · Jazmín · Tuberose · Sándalo",
    price30: "$18",
    price60: "$28",
    img: "https://images.unsplash.com/photo-1619352703846-e74bc721363d?w=400&h=500&fit=crop&auto=format",
    accent: "#9C3560",
  },
  {
    id: 5,
    name: "One Million Elixir",
    brand: "Paco Rabanne",
    family: "Oriental Especiado",
    notes: "Pimiento Negro · Canela · Ámbar · Cuero",
    price30: "$20",
    price60: "$32",
    img: "https://images.unsplash.com/photo-1614869894052-2ece3870a294?w=400&h=500&fit=crop&auto=format",
    accent: "#7A2040",
  },
  {
    id: 6,
    name: "Donna Born in Roma Intense",
    brand: "Valentino",
    family: "Floral Amaderado",
    notes: "Rosa · Jazmín · Bergamota · Sándalo",
    price30: "$22",
    price60: "$35",
    img: "https://images.unsplash.com/photo-1676950933747-5f886cadf014?w=400&h=500&fit=crop&auto=format",
    accent: "#B03870",
  },
  {
    id: 7,
    name: "Le Male Elixir",
    brand: "Jean Paul Gaultier",
    family: "Oriental Amaderado",
    notes: "Lavanda · Vainilla · Tonka · Incienso",
    price30: "$20",
    price60: "$32",
    img: "https://images.unsplash.com/photo-1598634222670-87c5f558119c?w=400&h=500&fit=crop&auto=format",
    accent: "#6B3065",
  },
  {
    id: 8,
    name: "212 VIP Rosé",
    brand: "Carolina Herrera",
    family: "Floral Frutal",
    notes: "Peonía · Rosa · Lichi · Almendra",
    price30: "$18",
    price60: "$28",
    img: "https://images.unsplash.com/photo-1643797517714-a273548abc3c?w=400&h=500&fit=crop&auto=format",
    accent: "#D05080",
  },
  {
    id: 9,
    name: "Yara",
    brand: "Lattafa",
    family: "Floral Oriental",
    notes: "Bergamota · Jazmín · Ámbar Blanco · Pachulí",
    price30: "$15",
    price60: "$24",
    img: "https://images.unsplash.com/photo-1592914658737-efc0f615b296?w=400&h=500&fit=crop&auto=format",
    accent: "#A03060",
  },
  {
    id: 10,
    name: "Amor Amor",
    brand: "Cacharel",
    family: "Floral Frutal",
    notes: "Grosella · Pomelo · Lichi · Vainilla",
    price30: "$16",
    price60: "$25",
    img: "https://images.unsplash.com/photo-1656746678868-579bf6d7868d?w=400&h=500&fit=crop&auto=format",
    accent: "#C04575",
  },
  {
    id: 11,
    name: "Invictus Victory Elixir",
    brand: "Paco Rabanne",
    family: "Amaderado Especiado",
    notes: "Menta · Salvia · Cedro · Vetiver",
    price30: "$20",
    price60: "$32",
    img: "https://images.unsplash.com/photo-1627823569857-4d8581dc62b2?w=400&h=500&fit=crop&auto=format",
    accent: "#5A3070",
  },
  {
    id: 12,
    name: "CH Sublime",
    brand: "Carolina Herrera",
    family: "Floral Aldehídico",
    notes: "Bergamota · Lirio · Nardo · Sándalo",
    price30: "$18",
    price60: "$28",
    img: "https://images.unsplash.com/photo-1595425966766-1d53fc14a86e?w=400&h=500&fit=crop&auto=format",
    accent: "#9C2855",
  },
];

// Split perfumes into pages of 3
const pages: Perfume[][] = [];
for (let i = 0; i < PERFUMES.length; i += 3) {
  pages.push(PERFUMES.slice(i, i + 3));
}

function ButterflyDecor({ className }: { className?: string }) {
  return (
    <svg className={`butterfly ${className}`} width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M30 30 C20 15, 5 10, 2 20 C-1 30, 15 35, 30 30Z" fill="#C4547A" />
      <path d="M30 30 C40 15, 55 10, 58 20 C61 30, 45 35, 30 30Z" fill="#C4547A" />
      <path d="M30 30 C18 40, 5 45, 4 38 C3 31, 18 28, 30 30Z" fill="#A0305A" />
      <path d="M30 30 C42 40, 55 45, 56 38 C57 31, 42 28, 30 30Z" fill="#A0305A" />
      <circle cx="30" cy="30" r="2" fill="#6B1A3A" />
    </svg>
  );
}

function PerfumeCard({ perfume }: { perfume: Perfume }) {
  return (
    <div
      className="flex rounded-2xl overflow-hidden"
      style={{
        background: "white",
        border: `1px solid #F0D0DC`,
        boxShadow: "0 4px 20px rgba(180,60,100,0.08)",
        height: "220px",
      }}
    >
      {/* Image */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ width: "150px", background: "#FDF0F5" }}>
        <img
          src={perfume.img}
          alt={`${perfume.name} - ${perfume.brand}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${perfume.accent}22 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{ background: "linear-gradient(to top, rgba(255,240,248,0.6), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5 flex-1">
        <div>
          {/* Family badge */}
          <div
            className="inline-block text-white font-body mb-2 px-3 py-1 rounded-full"
            style={{ background: perfume.accent, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            {perfume.family}
          </div>

          {/* Name */}
          <h3
            className="font-display leading-tight mb-1"
            style={{ fontSize: "22px", color: "#3A0E20", fontWeight: 600 }}
          >
            {perfume.name}
          </h3>

          {/* Brand */}
          <p className="font-body" style={{ fontSize: "11px", color: "#9B6070", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
            Inspirado en {perfume.brand}
          </p>

          {/* Notes */}
          <p className="font-body" style={{ fontSize: "11.5px", color: "#6B4050", lineHeight: 1.5 }}>
            <span style={{ color: "#C4547A", fontWeight: 500 }}>Notas: </span>
            {perfume.notes}
          </p>
        </div>

        {/* Prices */}
        <div className="flex items-end justify-between">
          <div className="flex gap-4">
            <div className="text-center">
              <div className="font-body" style={{ fontSize: "9px", color: "#B08090", textTransform: "uppercase", letterSpacing: "0.1em" }}>30 ml</div>
              <div className="font-display" style={{ fontSize: "20px", color: "#8B1A4A", fontWeight: 700 }}>{perfume.price30}</div>
            </div>
            <div style={{ width: "1px", background: "#F0D0DC", margin: "2px 0" }} />
            <div className="text-center">
              <div className="font-body" style={{ fontSize: "9px", color: "#B08090", textTransform: "uppercase", letterSpacing: "0.1em" }}>60 ml</div>
              <div className="font-display" style={{ fontSize: "20px", color: "#8B1A4A", fontWeight: 700 }}>{perfume.price60}</div>
            </div>
          </div>
          <div
            className="font-body"
            style={{
              background: "#8B1A4A",
              color: "white",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 16px",
              borderRadius: "20px",
            }}
          >
            Pedir
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverPage() {
  return (
    <div
      className="catalog-page relative flex flex-col overflow-hidden"
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "linear-gradient(160deg, #FFF0F6 0%, #FFD6E8 40%, #F5A8C8 75%, #E07099 100%)",
      }}
    >
      {/* Butterfly decorations */}
      <ButterflyDecor className="absolute" style={{ top: "40px", left: "60px", transform: "rotate(-20deg) scale(1.4)", opacity: 0.12 } as React.CSSProperties} />
      <ButterflyDecor className="absolute" style={{ top: "80px", right: "80px", transform: "rotate(15deg) scale(1.8)", opacity: 0.1 } as React.CSSProperties} />
      <ButterflyDecor className="absolute" style={{ top: "200px", left: "30px", transform: "rotate(10deg) scale(0.9)", opacity: 0.08 } as React.CSSProperties} />
      <ButterflyDecor className="absolute" style={{ bottom: "200px", right: "40px", transform: "rotate(-30deg) scale(1.2)", opacity: 0.1 } as React.CSSProperties} />
      <ButterflyDecor className="absolute" style={{ bottom: "100px", left: "100px", transform: "rotate(20deg) scale(0.8)", opacity: 0.08 } as React.CSSProperties} />

      {/* Top brand */}
      <div className="text-center pt-12 pb-6">
        <p
          className="font-body"
          style={{ fontSize: "13px", letterSpacing: "0.3em", color: "#8B1A4A", textTransform: "uppercase" }}
        >
          {BRAND.sub}
        </p>
      </div>

      {/* Main hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-16">
        <h1
          className="font-display text-center mb-6"
          style={{ fontSize: "80px", color: "#3A0E20", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.01em" }}
        >
          {BRAND.name}
        </h1>

        <div
          className="font-body text-center mb-10"
          style={{ fontSize: "15px", color: "#6B1A3A", lineHeight: 1.7, maxWidth: "440px", fontWeight: 300 }}
        >
          {BRAND.tagline}<br />{BRAND.tagline2}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10" style={{ width: "300px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C4547A)" }} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0 L10 6 L16 6 L11 10 L13 16 L8 12 L3 16 L5 10 L0 6 L6 6 Z" fill="#C4547A" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #C4547A)" }} />
        </div>

        {/* Logo image */}
        <div className="relative" style={{ width: "340px", height: "380px" }}>
          <img
            src={avaleaLogo}
            alt="AVALÉA Parfum — frasco de perfume con rosas"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Bottom contact strip */}
      <div
        className="flex items-center justify-between px-12 py-6"
        style={{ background: "rgba(58,14,32,0.85)", marginTop: "auto" }}
      >
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" stroke="white" strokeWidth="2" />
          </svg>
          <span className="font-body" style={{ color: "white", fontSize: "13px", letterSpacing: "0.05em" }}>{BRAND.phone}</span>
        </div>

        <div
          className="font-body text-white text-center"
          style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          Catálogo 2026
        </div>

        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="white" />
          </svg>
          <span className="font-body" style={{ color: "white", fontSize: "13px", letterSpacing: "0.05em" }}>{BRAND.ig}</span>
        </div>
      </div>
    </div>
  );
}

function ProductPage({ perfumes, pageNum, total }: { perfumes: Perfume[]; pageNum: number; total: number }) {
  return (
    <div
      className="catalog-page relative flex flex-col"
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "linear-gradient(180deg, #FFF8FB 0%, #FFF4F8 100%)",
        padding: "0",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-10 py-5"
        style={{ borderBottom: "1px solid #F0D0DC" }}
      >
        <div className="flex items-center gap-3">
          <div style={{ width: "28px", height: "28px" }}>
            <svg viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#8B1A4A" />
              <text x="14" y="19" textAnchor="middle" fill="white" fontSize="13" fontFamily="Cormorant Infant, serif" fontStyle="italic">A</text>
            </svg>
          </div>
          <span className="font-display" style={{ fontSize: "18px", color: "#8B1A4A", letterSpacing: "0.04em" }}>AVALÉA Parfum</span>
        </div>
        <div className="font-body" style={{ fontSize: "10px", color: "#C4547A", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Colección Femenina · 2026
        </div>
        <div className="font-body" style={{ fontSize: "10px", color: "#B08090" }}>
          {pageNum} / {total}
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-col gap-5 px-10 py-8 flex-1">
        {perfumes.map((p) => (
          <PerfumeCard key={p.id} perfume={p} />
        ))}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-center gap-6 py-4 px-10"
        style={{ borderTop: "1px solid #F0D0DC" }}
      >
        <div className="flex items-center gap-1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C4547A" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
          </svg>
          <span className="font-body" style={{ fontSize: "10px", color: "#B08090" }}>{BRAND.phone}</span>
        </div>
        <span style={{ color: "#E0B0C0", fontSize: "10px" }}>·</span>
        <div className="flex items-center gap-1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C4547A" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <span className="font-body" style={{ fontSize: "10px", color: "#B08090" }}>{BRAND.ig}</span>
        </div>
      </div>
    </div>
  );
}

function BackPage() {
  return (
    <div
      className="catalog-page relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "linear-gradient(160deg, #3A0E20 0%, #6B1A3A 50%, #8B2252 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute"
        style={{
          width: "500px", height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(255,180,210,0.15)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute"
        style={{
          width: "380px", height: "380px",
          borderRadius: "50%",
          border: "1px solid rgba(255,180,210,0.1)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <ButterflyDecor className="absolute" style={{ top: "80px", right: "100px", transform: "rotate(15deg) scale(2)", opacity: 0.08 } as React.CSSProperties} />
      <ButterflyDecor className="absolute" style={{ bottom: "120px", left: "80px", transform: "rotate(-20deg) scale(1.5)", opacity: 0.08 } as React.CSSProperties} />

      {/* Content */}
      <div className="text-center z-10 px-16">
        <p
          className="font-body mb-4"
          style={{ fontSize: "12px", letterSpacing: "0.4em", color: "#F5A8C8", textTransform: "uppercase" }}
        >
          {BRAND.sub}
        </p>

        <h2
          className="font-display mb-6"
          style={{ fontSize: "64px", color: "white", fontWeight: 300, lineHeight: 1 }}
        >
          {BRAND.name}
        </h2>

        <div
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(to right, transparent, rgba(244,168,192,0.6))" }} />
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M8 0 L10 6 L16 6 L11 10 L13 16 L8 12 L3 16 L5 10 L0 6 L6 6 Z" fill="#F5A8C8" />
          </svg>
          <div style={{ flex: 1, maxWidth: "120px", height: "1px", background: "linear-gradient(to left, transparent, rgba(244,168,192,0.6))" }} />
        </div>

        <p
          className="font-body mb-12"
          style={{ fontSize: "15px", color: "rgba(255,210,228,0.9)", lineHeight: 1.8, fontWeight: 300, letterSpacing: "0.02em" }}
        >
          {BRAND.tagline}<br />{BRAND.tagline2}
        </p>

        {/* Contact section */}
        <div
          className="inline-flex flex-col items-center gap-5 px-12 py-8 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,180,210,0.2)" }}
        >
          <p
            className="font-body"
            style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#F5A8C8", textTransform: "uppercase" }}
          >
            Contáctanos
          </p>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A8C8" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              <span className="font-body" style={{ color: "white", fontSize: "16px", letterSpacing: "0.05em" }}>{BRAND.phone}</span>
            </div>

            <div style={{ width: "1px", height: "40px", background: "rgba(255,180,210,0.3)" }} />

            <div className="flex flex-col items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A8C8" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="#F5A8C8" />
              </svg>
              <span className="font-body" style={{ color: "white", fontSize: "16px", letterSpacing: "0.05em" }}>{BRAND.ig}</span>
            </div>
          </div>
        </div>

        <p
          className="font-body mt-12"
          style={{ fontSize: "11px", color: "rgba(255,180,210,0.5)", letterSpacing: "0.1em" }}
        >
          Catálogo 2026 · Todos los derechos reservados
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const handlePrint = () => window.print();

  return (
    <div className="font-body catalog-scroll" style={{ background: "#E8D0D8", minHeight: "100vh", paddingBottom: "40px" }}>
      {/* Print button — hidden in print */}
      <div
        className="no-print sticky top-0 z-50 flex items-center justify-between px-8 py-3"
        style={{ background: "rgba(58,14,32,0.95)", backdropFilter: "blur(8px)" }}
      >
        <div className="flex items-center gap-3">
          <div className="font-display" style={{ fontSize: "22px", color: "white", letterSpacing: "0.04em" }}>
            AVALÉA Parfum
          </div>
          <span className="font-body" style={{ fontSize: "11px", color: "#F5A8C8", letterSpacing: "0.2em" }}>— Vista Previa del Catálogo</span>
        </div>
        <button
          onClick={handlePrint}
          className="font-body flex items-center gap-2 transition-all"
          style={{
            background: "#C4547A",
            color: "white",
            border: "none",
            padding: "10px 24px",
            borderRadius: "24px",
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: "pointer",
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
      <div className="flex flex-col items-center gap-8 pt-8">
        {/* Cover */}
        <div style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.25)" }}>
          <CoverPage />
        </div>

        {/* Product pages */}
        {pages.map((group, i) => (
          <div key={i} style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
            <ProductPage perfumes={group} pageNum={i + 1} total={pages.length} />
          </div>
        ))}

        {/* Back cover */}
        <div style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.25)" }}>
          <BackPage />
        </div>
      </div>
    </div>
  );
}
