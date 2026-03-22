import {
  Shield,
  FileText,
  Cookie,
  ClipboardList,
  Phone,
  Mail,
  ChevronLeft,
  Car,
  Star,
} from "lucide-react";

const insuranceas = [
  {
    icon: Car,
    title: "تأمين السيارات الشامل",
    description: "قارن أفضل عروض التأمين الشامل على المركبات",
    href: "https://app.ascze.com/",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    badge: "الأكثر طلباً",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: Car,
    title: "تأمين ضد الغير",
    description: "تغطية ضد الغير بأفضل الأسعار المتاحة",
    href: "https://app.ascze.com/",
    bgLight: "bg-sky-50",
    textColor: "text-sky-600",
    badge: "اقتصادي",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    icon: Star,
    title: "مقارنة الأسعار",
    description: "قارن أسعار جميع شركات التأمين في مكان واحد",
    href: "https://app.ascze.com/",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    badge: "مجاناً",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
];

const policyas = [
  {
    icon: Shield,
    title: "سياسة الخصوصية",
    description: "كيف نجمع ونستخدم ونحمي بياناتك الشخصية",
    href: "/privacy-policy",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    internal: true,
  },
  {
    icon: Cookie,
    title: "سياسة ملفات تعريف الارتباط",
    description: "معلومات حول الكوكيز وكيفية استخدامها في موقعنا",
    href: "/cookies-policy",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    internal: true,
  },
  {
    icon: ClipboardList,
    title: "الشروط والأحكام",
    description: "شروط استخدام خدماتنا التأمينية وأحكامها",
    href: "/terms-conditions",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
    internal: true,
  },
  {
    icon: FileText,
    title: "وثيقة التأمين النموذجية",
    description: "تحميل نموذج وثيقة التأمين الموحدة",
    href: "https://app.ascze.com/",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    internal: false,
  },
];

const contactas = [

  {
    icon: Mail,
    label: "راسلنا",
    value: "info@insurance.com",
    href: "mailto:info@insurance.com",
  },
];

function Card({
  a,
}: {
  a: (typeof policyas)[0] & { badge?: string | null; badgeColor?: string };
}) {
  const Icon = a.icon;
  return (
    <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/30 group cursor-pointer">
      <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${a.bgLight} flex items-center justify-center`}>
        <Icon className={`w-5 h-5 ${a.textColor}`} />
      </div>
      <div className="flex-1 text-right">
        <div className="flex items-center justify-end gap-2 mb-0.5">
          {"badge" in a && a.badge && (
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${a.badgeColor}`}>
              {a.badge}
            </span>
          )}
          <p className="font-semibold text-foreground text-sm">{a.title}</p>
        </div>
        <p className="text-muted-foreground text-xs">{a.description}</p>
      </div>
      <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
    </div>
  );
}

export default function BioasHome() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-md mx-auto px-6 py-10">

        {/* Header / Profile */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg mb-4">
            <Star className="w-10 h-10 text-white fill-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            مقارنة أفضل أسعار وعروض التأمين
          </h1>
          <p className="text-muted-foreground text-sm">
            وفّر وقتك وأموالك — قارن واختر الأنسب لك
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs text-emerald-600 font-medium">معتمد من هيئة التأمين</span>
          </div>
        </div>

        {/* Insurance as Section */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-xs font-semibold text-foreground bg-background px-2">أنواع التأمين</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <div className="space-y-3 mb-8">
          {insuranceas.map((a) => (
            <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer">
              <Card a={a} />
            </a>
          ))}
        </div>

        {/* Policy as Section */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-xs font-semibold text-foreground bg-background px-2">السياسات والوثائق</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <div className="space-y-3 mb-8">
          {policyas.map((a) => {
            const card = <Card key={a.title} a={a} />;
            if (a.internal) {
              return <a key={a.title} href={a.href}>{card}</a>;
            }
            return (
              <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-xs font-semibold text-foreground bg-background px-2">تواصل معنا</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Contact as */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {contactas.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs">{item.label}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{item.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} مقارنة التأمين — جميع الحقوق محفوظة
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <a href="/privacy-policy" className="text-xs text-primary hover:underline">
              سياسة الخصوصية
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="/cookies-policy" className="text-xs text-primary hover:underline">
              الكوكيز
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="/terms-conditions" className="text-xs text-primary hover:underline">
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
