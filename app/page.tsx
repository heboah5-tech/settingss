"use client";

import {
  Shield,
  FileText,
  Cookie,
  ClipboardList,
  Mail,
  ChevronLeft,
  Car,
  Star,
  type LucideIcon,
} from "lucide-react";
import "./globals.css";

/* ================= TYPES ================= */

type CardLink = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge?: string;
  internal?: boolean;
};

type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

/* ================= DATA ================= */

const insuranceas: CardLink[] = [
  {
    icon: Car,
    title: "تأمين السيارات الشامل",
    description: "قارن أفضل عروض التأمين الشامل على المركبات",
    href: "https://app.ascze.com/",
    badge: "الأكثر طلباً",
  },
  {
    icon: Car,
    title: "تأمين ضد الغير",
    description: "تغطية ضد الغير بأفضل الأسعار المتاحة",
    href: "https://app.ascze.com/",
    badge: "اقتصادي",
  },
  {
    icon: Star,
    title: "مقارنة الأسعار",
    description: "قارن أسعار جميع شركات التأمين في مكان واحد",
    href: "https://app.ascze.com/",
    badge: "مجاناً",
  },
];

const policyas: CardLink[] = [
  {
    icon: Shield,
    title: "سياسة الخصوصية",
    description: "كيف نجمع ونستخدم ونحمي بياناتك الشخصية",
    href: "/privacy-policy",
    internal: true,
  },
  {
    icon: Cookie,
    title: "سياسة الكوكيز",
    description: "معلومات حول الكوكيز وكيفية استخدامها",
    href: "/cookies-policy",
    internal: true,
  },
  {
    icon: ClipboardList,
    title: "الشروط والأحكام",
    description: "شروط استخدام خدماتنا",
    href: "/terms-conditions",
    internal: true,
  },
  {
    icon: FileText,
    title: "وثيقة التأمين",
    description: "تحميل نموذج الوثيقة الموحدة",
    href: "https://app.ascze.com/",
  },
];

const contactas: ContactItem[] = [
  {
    icon: Mail,
    label: "راسلنا",
    value: "info@insurance.com",
    href: "mailto:info@insurance.com",
  },
];

/* ================= COMPONENTS ================= */

type CardProps = {
  link: CardLink;
};

function Card({ link }: CardProps) {
  const Icon = link.icon;

  return (
    <div className="group relative flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-transparent" />

      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition" />
      </div>

      {/* Text */}
      <div className="flex-1 text-right">
        <div className="flex items-center justify-end gap-2 mb-1">
          {link.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              {link.badge}
            </span>
          )}
          <p className="font-semibold text-sm">{link.title}</p>
        </div>
        <p className="text-xs text-muted-foreground">{link.description}</p>
      </div>

      {/* Arrow */}
      <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition" />
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <span className="text-xs font-semibold px-2">{title}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

/* ================= PAGE ================= */

export default function BioasHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/40" dir="rtl">

      <div className="max-w-md mx-auto px-5 py-10">

        {/* HERO */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg mb-5">
            <Star className="w-10 h-10 text-white fill-white" />
          </div>

          <h1 className="text-2xl font-bold mb-2">
            مقارنة أفضل أسعار التأمين
          </h1>

          <p className="text-sm text-muted-foreground">
            وفّر وقتك وأموالك — قارن واختر الأنسب لك
          </p>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs text-emerald-600 font-medium">
              معتمد وموثوق
            </span>
          </div>
        </div>

        {/* INSURANCE */}
        <SectionTitle title="أنواع التأمين" />
        <div className="space-y-3 mb-10">
          {insuranceas.map((a) => (
            <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer">
              <Card link={a} />
            </a>
          ))}
        </div>

        {/* POLICIES */}
        <SectionTitle title="السياسات والوثائق" />
        <div className="space-y-3 mb-10">
          {policyas.map((a) => (
            <a
              key={a.title}
              href={a.href}
              target={a.internal ? "_self" : "_blank"}
              rel="noopener noreferrer"
            >
              <Card link={a} />
            </a>
          ))}
        </div>

        {/* CONTACT */}
        <SectionTitle title="تواصل معنا" />
        <div className="grid grid-cols-2 gap-3 mb-10">
          {contactas.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <p className="text-xs font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.value}</p>
              </a>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="text-center space-y-2 opacity-80">
          <p className="text-xs">
            © {new Date().getFullYear()} مقارنة التأمين
          </p>

          <div className="flex justify-center gap-3 text-xs">
            <a href="/privacy-policy" className="text-primary hover:underline">
              الخصوصية
            </a>
            <span>|</span>
            <a href="/cookies-policy" className="text-primary hover:underline">
              الكوكيز
            </a>
            <span>|</span>
            <a href="/terms-conditions" className="text-primary hover:underline">
              الشروط
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
