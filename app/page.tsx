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
    href: "https://app.tmnbio.com/",
    badge: "الأكثر طلباً",
  },
  {
    icon: Car,
    title: "تأمين ضد الغير",
    description: "تغطية ضد الغير بأفضل الأسعار",
    href: "https://app.tmnbio.com/",
    badge: "اقتصادي",
  },
  {
    icon: Star,
    title: "مقارنة الأسعار",
    description: "قارن جميع الشركات في مكان واحد",
    href: "https://app.tmnbio.com/",
    badge: "مجاناً",
  },
];

const policyas: CardLink[] = [
  {
    icon: Shield,
    title: "سياسة الخصوصية",
    description: "حماية بياناتك الشخصية",
    href: "/privacy-policy",
    internal: true,
  },
  {
    icon: Cookie,
    title: "سياسة الكوكيز",
    description: "كيفية استخدام الكوكيز",
    href: "/cookies-policy",
    internal: true,
  },
  {
    icon: ClipboardList,
    title: "الشروط والأحكام",
    description: "شروط استخدام الخدمة",
    href: "/terms-conditions",
    internal: true,
  },
  {
    icon: FileText,
    title: "وثيقة التأمين",
    description: "تحميل الوثيقة النموذجية",
    href: "https://app.tmnbio.com/",
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

function Card({ link }: { link: CardLink }) {
  const Icon = link.icon;

  return (
    <div className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50">
        <Icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition" />
      </div>

      {/* Text */}
      <div className="flex-1 text-right">
        <div className="flex items-center justify-end gap-2 mb-1">
          {link.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
              {link.badge}
            </span>
          )}
          <p className="font-semibold text-sm text-gray-900">{link.title}</p>
        </div>
        <p className="text-xs text-gray-500">{link.description}</p>
      </div>

      {/* Arrow */}
      <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition" />
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-xs font-semibold text-gray-600">{title}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

/* ================= PAGE ================= */

export default function BioasHome() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">

      <div className="max-w-md mx-auto px-5 py-10">

        {/* HERO */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-blue-600 shadow-lg mb-5">
            <Star className="w-10 h-10 text-white fill-white" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            مقارنة أفضل أسعار التأمين
          </h1>

          <p className="text-sm text-gray-500">
            وفّر وقتك وأموالك — قارن واختر الأنسب لك
          </p>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-green-600 font-medium">
              موثوق ومعتمد
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
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>

                <p className="text-xs font-semibold text-gray-800">{item.label}</p>
                <p className="text-xs text-gray-500">{item.value}</p>
              </a>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} مقارنة التأمين
          </p>

          <div className="flex justify-center gap-3 text-xs">
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              الخصوصية
            </a>
            <span>|</span>
            <a href="/cookies-policy" className="text-blue-600 hover:underline">
              الكوكيز
            </a>
            <span>|</span>
            <a href="/terms-conditions" className="text-blue-600 hover:underline">
              الشروط
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
