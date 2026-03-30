import Link from "next/link";
import { Lock, ArrowRight, Shield, Key, Eye, Server, AlertTriangle, CheckCircle, Wifi, Bug } from "lucide-react";

export const metadata = {
  title: "قواعد الأمان | مقارنة التأمين",
  description: "تعرف على معايير الأمان والحماية المستخدمة في منصة مقارنة التأمين.",
};

const colorMap: Record<string, { bg: string; icon: string; border: string; dot: string }> = {
  blue:   { bg: "bg-blue-50",   icon: "text-blue-600",   border: "border-blue-200",   dot: "bg-blue-500"   },
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-200", dot: "bg-indigo-500" },
  green:  { bg: "bg-green-50",  icon: "text-green-600",  border: "border-green-200",  dot: "bg-green-500"  },
  amber:  { bg: "bg-amber-50",  icon: "text-amber-600",  border: "border-amber-200",  dot: "bg-amber-500"  },
  red:    { bg: "bg-red-50",    icon: "text-red-600",    border: "border-red-200",    dot: "bg-red-500"    },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "border-violet-200", dot: "bg-violet-500" },
  slate:  { bg: "bg-slate-50",  icon: "text-slate-600",  border: "border-slate-200",  dot: "bg-slate-500"  },
  teal:   { bg: "bg-teal-50",   icon: "text-teal-600",   border: "border-teal-200",   dot: "bg-teal-500"   },
};

export default function SecurityPage() {
  const sections = [
    {
      icon: Lock,
      title: "1. التشفير وأمان البيانات",
      color: "blue",
      items: [
        "تشفير SSL/TLS 256-bit لجميع الاتصالات",
        "تشفير قواعد البيانات باستخدام AES-256",
        "شهادات HTTPS معتمدة من جهات موثوقة",
        "حماية بروتوكول HSTS لمنع هجمات التخفيض",
      ],
    },
    {
      icon: Key,
      title: "2. المصادقة والتحكم بالوصول",
      color: "indigo",
      items: [
        "المصادقة الثنائية (2FA) لجميع الحسابات الإدارية",
        "إدارة كلمات المرور بمعايير NIST",
        "تسجيل الخروج التلقائي بعد فترة عدم نشاط",
        "سياسة الحد الأدنى من الصلاحيات (Principle of Least Privilege)",
      ],
    },
    {
      icon: Server,
      title: "3. أمان البنية التحتية",
      color: "green",
      items: [
        "خوادم معتمدة وفق معايير ISO 27001",
        "جدران الحماية متعددة الطبقات (WAF)",
        "الحماية من هجمات DDoS",
        "فصل بيئات الإنتاج والاختبار",
        "نسخ احتياطية يومية مشفرة",
      ],
    },
    {
      icon: Eye,
      title: "4. المراقبة والرصد",
      color: "violet",
      items: [
        "مراقبة مستمرة 24/7 للأنظمة",
        "نظام كشف التسلل (IDS/IPS)",
        "سجلات أمنية شاملة وموقوتة",
        "تنبيهات فورية عند اكتشاف أي نشاط مشبوه",
      ],
    },
    {
      icon: AlertTriangle,
      title: "5. الاستجابة للحوادث",
      color: "amber",
      items: [
        "خطة استجابة للحوادث الأمنية معتمدة",
        "فريق أمني متخصص متاح على مدار الساعة",
        "إخطار المستخدمين خلال 72 ساعة من أي اختراق",
        "تقييم دوري للمخاطر واختبارات الاختراق",
      ],
    },
    {
      icon: Wifi,
      title: "6. أمان التطبيق",
      color: "teal",
      items: [
        "الحماية من هجمات OWASP Top 10",
        "التحقق من صحة المدخلات ومنع حقن SQL",
        "الحماية من هجمات XSS وCSRF",
        "مراجعات أمنية دورية للكود المصدري",
        "سياسة أمان المحتوى (CSP) مفعّلة",
      ],
    },
    {
      icon: Bug,
      title: "7. الإفصاح عن الثغرات",
      color: "red",
      content: (
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>إذا اكتشفت ثغرة أمنية في موقعنا، نرجو منك الإفصاح المسؤول من خلال:</p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-medium text-red-700 mb-1">بريد الأمان</p>
            <a href="mailto:security@insurance.com" className="text-blue-600 hover:underline">security@insurance.com</a>
          </div>
          <p className="text-xs text-gray-500">سنقوم بالرد خلال 48 ساعة وإخطارك بخطوات المعالجة.</p>
        </div>
      ),
    },
    {
      icon: CheckCircle,
      title: "8. الامتثال والشهادات",
      color: "green",
      items: [
        "ISO/IEC 27001 — أمن المعلومات",
        "PCI DSS — أمان بيانات بطاقات الدفع",
        "GDPR — اللائحة الأوروبية لحماية البيانات",
        "سياسات جوجل الإعلانية وGoogle Safe Browsing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-50" dir="rtl">

      {/* Header */}
      <div className="bg-gradient-to-l from-slate-700 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-5 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8 text-sm">
            <ArrowRight className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold mb-1">قواعد الأمان</h1>
              <p className="text-slate-300 text-sm">معايير الحماية والأمان المعتمدة في منصتنا</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security score banner */}
      <div className="max-w-3xl mx-auto px-5 -mt-4 mb-6 relative z-10">
        <div className="bg-gradient-to-l from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg shadow-green-500/20 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="font-extrabold text-lg">الأمان: ممتاز ✓</p>
            <p className="text-green-100 text-xs">جميع معايير الأمان مفعّلة ومحدّثة</p>
          </div>
          <div className="mr-auto text-left">
            <p className="text-3xl font-black">A+</p>
            <p className="text-green-100 text-xs">تصنيف SSL Labs</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 pb-10 space-y-4">
        {sections.map((s) => {
          const c = colorMap[s.color] ?? colorMap.blue;
          const Icon = s.icon;
          return (
            <div key={s.title} className={`bg-white rounded-2xl border ${c.border} shadow-sm p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${c.icon}`} />
                </div>
                <h2 className="text-base font-bold text-gray-900">{s.title}</h2>
              </div>
              {s.items && (
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.content}
            </div>
          );
        })}

        <div className="text-center py-4">
          <p className="text-xs text-gray-400">آخر تحديث: {new Date().toLocaleDateString("ar-SA")}</p>
          <div className="flex justify-center gap-4 mt-3 text-xs">
            <Link href="/privacy" className="text-blue-500 hover:underline">سياسة الخصوصية</Link>
            <Link href="/cookies" className="text-blue-500 hover:underline">سياسة الكوكيز</Link>
            <Link href="/terms" className="text-blue-500 hover:underline">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
