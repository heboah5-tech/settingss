import Link from "next/link";
import { Shield, ArrowRight, Lock, Eye, Database, UserCheck, Bell, Trash2, Mail } from "lucide-react";

export const metadata = {
  title: "سياسة الخصوصية | مقارنة التأمين",
  description: "اقرأ سياسة الخصوصية الخاصة بنا وكيفية حماية بياناتك الشخصية.",
};

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue:   { bg: "bg-blue-50",   icon: "text-blue-600",   border: "border-blue-200" },
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-200" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "border-violet-200" },
  green:  { bg: "bg-green-50",  icon: "text-green-600",  border: "border-green-200" },
  amber:  { bg: "bg-amber-50",  icon: "text-amber-600",  border: "border-amber-200" },
  slate:  { bg: "bg-slate-50",  icon: "text-slate-600",  border: "border-slate-200" },
  red:    { bg: "bg-red-50",    icon: "text-red-600",    border: "border-red-200" },
};

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "1. المعلومات التي نجمعها",
      color: "blue",
      content: (
        <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
          {["المعلومات الشخصية (الاسم، العنوان، رقم الهاتف)", "معلومات المركبة (النوع، الطراز، سنة الصنع)", "رخصة القيادة والهوية الوطنية", "السجل القيادي وتاريخ المطالبات", "معلومات الدفع والحساب البنكي"].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Eye,
      title: "2. كيفية استخدام معلوماتك",
      color: "indigo",
      content: (
        <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
          {["إصدار وتجديد وثائق التأمين", "معالجة المطالبات والمدفوعات", "التواصل معك بشأن وثيقتك", "تحسين خدماتنا ومنتجاتنا", "الامتثال للمتطلبات القانونية والتنظيمية"].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: UserCheck,
      title: "3. مشاركة المعلومات",
      color: "violet",
      content: (
        <p className="text-gray-600 text-sm leading-relaxed">
          لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية: شركات إعادة التأمين، الجهات التنظيمية والقانونية، مقدمي الخدمات المعتمدين (مثل ورش الإصلاح)، أو بموافقتك الصريحة.
        </p>
      ),
    },
    {
      icon: Lock,
      title: "4. أمان المعلومات",
      color: "green",
      content: (
        <p className="text-gray-600 text-sm leading-relaxed">
          نستخدم تدابير أمنية متقدمة لحماية معلوماتك، بما في ذلك التشفير SSL/TLS، جدران الحماية، المصادقة متعددة العوامل، والتخزين الآمن في مراكز بيانات معتمدة وفق معايير ISO 27001.
        </p>
      ),
    },
    {
      icon: Bell,
      title: "5. حقوقك",
      color: "amber",
      content: (
        <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
          {["الوصول إلى معلوماتك الشخصية", "تصحيح أي معلومات غير دقيقة", "حذف معلوماتك (مع مراعاة الالتزامات القانونية)", "الاعتراض على معالجة معلوماتك", "نقل معلوماتك إلى مزود خدمة آخر"].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Database,
      title: "6. الاحتفاظ بالبيانات",
      color: "slate",
      content: (
        <p className="text-gray-600 text-sm leading-relaxed">
          نحتفظ بمعلوماتك طوال مدة سريان الوثيقة وفترة إضافية حسب المتطلبات القانونية (عادة 7 سنوات بعد انتهاء الوثيقة).
        </p>
      ),
    },
    {
      icon: Trash2,
      title: "7. الامتثال لقوانين حماية البيانات",
      color: "red",
      content: (
        <p className="text-gray-600 text-sm leading-relaxed">
          نلتزم بجميع قوانين حماية البيانات المعمول بها ونتوافق مع سياسات جوجل الإعلانية ومعايير الصناعة العالمية بما فيها GDPR.
        </p>
      ),
    },
    {
      icon: Mail,
      title: "8. التواصل معنا",
      color: "blue",
      content: (
        <p className="text-gray-600 text-sm leading-relaxed">
          إذا كان لديك أي أسئلة حول سياسة الخصوصية أو ترغب في ممارسة حقوقك، يرجى التواصل معنا عبر:{" "}
          <a href="mailto:privacy@insurance.com" className="text-blue-600 hover:underline font-medium">
            privacy@insurance.com
          </a>
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">
      <div className="bg-gradient-to-l from-blue-700 to-indigo-800 text-white">
        <div className="max-w-3xl mx-auto px-5 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 text-sm">
            <ArrowRight className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold mb-1">سياسة الخصوصية</h1>
              <p className="text-blue-200 text-sm">نلتزم بحماية خصوصيتك وأمان بياناتك الشخصية</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-10 space-y-4">
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
              {s.content}
            </div>
          );
        })}

        <div className="text-center py-4">
          <p className="text-xs text-gray-400">آخر تحديث: {new Date().toLocaleDateString("ar-SA")}</p>
          <div className="flex justify-center gap-4 mt-3 text-xs">
            <Link href="/cookies" className="text-blue-500 hover:underline">سياسة الكوكيز</Link>
            <Link href="/terms" className="text-blue-500 hover:underline">الشروط والأحكام</Link>
            <Link href="/security" className="text-blue-500 hover:underline">قواعد الأمان</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
