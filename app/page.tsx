"use client";

import Link from "next/link";
import {
  Shield,
  FileText,
  Cookie,
  ClipboardList,
  Mail,
  ChevronLeft,
  Car,
  Star,
  Lock,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="relative max-w-md mx-auto px-5 py-10">

        {/* ── HERO ── */}
        <div className="text-center mb-10">
          <div className="relative inline-flex">
            <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-500/40 mb-6">
              <Star className="w-12 h-12 text-white fill-white drop-shadow" />
            </div>
            <span className="absolute -top-1 -left-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-5 w-5 bg-amber-400 items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </span>
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
            مقارنة أفضل أسعار التأمين
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            وفّر وقتك وأموالك — قارن واختر الأنسب لك
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-700 font-semibold">موثوق ومعتمد</span>
          </div>
        </div>

        {/* ── INSURANCE SECTION ── */}
        <SectionTitle title="أنواع التأمين" />
        <div className="space-y-3 mb-10">
          {insuranceLinks.map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">
              <ServiceCard {...item} />
            </a>
          ))}
        </div>

        {/* ── POLICIES SECTION ── */}
        <SectionTitle title="السياسات والوثائق" />
        <div className="space-y-3 mb-10">
          {policyLinks.map((item, i) => (
            item.internal
              ? <Link key={i} href={item.href}><ServiceCard {...item} /></Link>
              : <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"><ServiceCard {...item} /></a>
          ))}
        </div>

        {/* ── CONTACT SECTION ── */}
        <SectionTitle title="تواصل معنا" />
        <div className="mb-10">
          <a
            href="mailto:info@insurance.com"
            className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-l from-blue-600 to-indigo-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-right">
              <p className="font-bold text-white text-sm mb-0.5">راسلنا</p>
              <p className="text-blue-100 text-xs">info@insurance.com</p>
            </div>
            <ArrowLeft className="w-5 h-5 text-white/70 group-hover:text-white group-hover:-translate-x-1 transition-all" />
          </a>
        </div>

        {/* ── FOOTER ── */}
        <div className="text-center space-y-3 pb-6">
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map(n => (
              <Star key={n} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} مقارنة التأمين — جميع الحقوق محفوظة
          </p>
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-xs">
            <Link href="/privacy" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">الخصوصية</Link>
            <span className="text-gray-300">|</span>
            <Link href="/cookies" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">الكوكيز</Link>
            <span className="text-gray-300">|</span>
            <Link href="/terms" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">الشروط</Link>
            <span className="text-gray-300">|</span>
            <Link href="/security" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">الأمان</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── DATA ── */

const insuranceLinks = [
  {
    icon: Car,
    title: "تأمين السيارات الشامل",
    description: "قارن أفضل عروض التأمين الشامل على المركبات",
    href: "https://app.tnhsi.com/",
    badge: "الأكثر طلباً",
    color: "blue",
  },
  {
    icon: Car,
    title: "تأمين ضد الغير",
    description: "تغطية ضد الغير بأفضل الأسعار",
    href: "https://app.tnhsi.com/",
    badge: "اقتصادي",
    color: "indigo",
  },
  {
    icon: Star,
    title: "مقارنة الأسعار",
    description: "قارن جميع الشركات في مكان واحد",
    href: "https://app.tnhsi.com/",
    badge: "مجاناً",
    color: "violet",
  },
];

const policyLinks = [
  { icon: Shield, title: "سياسة الخصوصية", description: "حماية بياناتك الشخصية", href: "/privacy", internal: true, color: "blue" },
  { icon: Cookie, title: "سياسة الكوكيز", description: "كيفية استخدام ملفات تعريف الارتباط", href: "/cookies", internal: true, color: "amber" },
  { icon: ClipboardList, title: "الشروط والأحكام", description: "شروط استخدام الخدمة", href: "/terms", internal: true, color: "green" },
  { icon: Lock, title: "قواعد الأمان", description: "معايير الحماية والتشفير", href: "/security", internal: true, color: "red" },
  { icon: FileText, title: "وثيقة التأمين", description: "تحميل الوثيقة النموذجية", href: "https://app.tnhsi.com/", internal: false, color: "slate" },
];

/* ── COMPONENTS ── */

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  blue:   { bg: "bg-blue-50",   icon: "text-blue-600",   badge: "bg-blue-100 text-blue-700" },
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
  amber:  { bg: "bg-amber-50",  icon: "text-amber-600",  badge: "bg-amber-100 text-amber-700" },
  green:  { bg: "bg-green-50",  icon: "text-green-600",  badge: "bg-green-100 text-green-700" },
  red:    { bg: "bg-red-50",    icon: "text-red-600",    badge: "bg-red-100 text-red-700" },
  slate:  { bg: "bg-slate-50",  icon: "text-slate-600",  badge: "bg-slate-100 text-slate-700" },
};

function ServiceCard({
  icon: Icon,
  title,
  description,
  badge,
  color = "blue",
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
  color?: string;
  href: string;
  internal?: boolean;
}) {
  const c = colorMap[color] ?? colorMap.blue;
  return (
    <div className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${c.bg} flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${c.icon} group-hover:scale-110 transition-transform duration-200`} />
      </div>
      <div className="flex-1 text-right">
        <div className="flex items-center justify-end gap-2 mb-0.5">
          {badge && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
              {badge}
            </span>
          )}
          <p className="font-bold text-sm text-gray-900">{title}</p>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>
      <ChevronLeft className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:-translate-x-1 transition-all duration-200 flex-shrink-0" />
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">{title}</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
    </div>
  );
}
