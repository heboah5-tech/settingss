import Link from "next/link";
import { ClipboardList, ArrowRight, CheckCircle, XCircle, CreditCard, AlertTriangle, FileText, Scale, RefreshCw, Phone } from "lucide-react";

export const metadata = {
  title: "الشروط والأحكام | مقارنة التأمين",
  description: "اقرأ الشروط والأحكام الكاملة لاستخدام خدمات مقارنة التأمين.",
};

export default function TermsPage() {
  const sections = [
    {
      icon: CheckCircle,
      title: "1. قبول الشروط",
      color: "green",
      content: "باستخدامك لخدمات تأمين السيارات، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.",
    },
    {
      icon: FileText,
      title: "2. الخدمات المقدمة",
      color: "blue",
      list: ["التأمين الشامل ضد جميع المخاطر", "التأمين ضد الغير (الإلزامي)", "تأمين السرقة والحريق", "المساعدة على الطريق على مدار الساعة"],
      listColor: "blue",
    },
    {
      icon: CreditCard,
      title: "3. الالتزامات المالية",
      color: "indigo",
      content: "يلتزم العميل بدفع أقساط التأمين في المواعيد المحددة. في حالة التأخر عن الدفع، قد يتم تعليق الوثيقة حتى سداد المستحقات.",
    },
    {
      icon: XCircle,
      title: "4. الاستثناءات",
      color: "red",
      list: ["القيادة تحت تأثير الكحول أو المخدرات", "القيادة بدون رخصة سارية المفعول", "استخدام السيارة في أنشطة غير قانونية", "التلف المتعمد للمركبة"],
      listColor: "red",
    },
    {
      icon: RefreshCw,
      title: "5. الإلغاء والاسترجاع",
      color: "amber",
      content: "يمكن للعميل إلغاء وثيقة التأمين خلال 30 يوماً من تاريخ الإصدار واسترداد كامل المبلغ. بعد هذه المدة، يتم احتساب رسوم إلغاء حسب المدة المستفادة من التغطية.",
    },
    {
      icon: AlertTriangle,
      title: "6. إجراءات المطالبة",
      color: "orange",
      content: "في حالة وقوع حادث، يجب إبلاغنا خلال 24 ساعة وتقديم جميع المستندات المطلوبة. سيتم معالجة المطالبة خلال 7-10 أيام عمل.",
    },
    {
      icon: CheckCircle,
      title: "7. الامتثال لسياسات جوجل الإعلانية",
      color: "green",
      content: "جميع خدماتنا وإعلاناتنا خاضعة لسياسات جوجل الإعلانية ومعايير الصناعة. نلتزم بالشفافية الكاملة في جميع تعاملاتنا.",
    },
    {
      icon: RefreshCw,
      title: "8. تعديل الشروط",
      color: "slate",
      content: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار العملاء بأي تغييرات جوهرية عبر البريد الإلكتروني.",
    },
    {
      icon: Scale,
      title: "9. القانون الحاكم",
      color: "violet",
      content: "تخضع هذه الشروط للقوانين المحلية المعمول بها في منطقة تقديم الخدمة.",
    },
    {
      icon: Phone,
      title: "10. التواصل معنا",
      color: "blue",
      content: null,
      custom: (
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <p>للاستفسارات المتعلقة بالشروط والأحكام، تواصل معنا:</p>
          <a href="mailto:legal@insurance.com" className="text-blue-600 hover:underline font-medium">legal@insurance.com</a>
        </div>
      ),
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string; dot: string }> = {
    blue:   { bg: "bg-blue-50",   icon: "text-blue-600",   border: "border-blue-200",   dot: "bg-blue-500"   },
    indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-200", dot: "bg-indigo-500" },
    green:  { bg: "bg-green-50",  icon: "text-green-600",  border: "border-green-200",  dot: "bg-green-500"  },
    amber:  { bg: "bg-amber-50",  icon: "text-amber-600",  border: "border-amber-200",  dot: "bg-amber-500"  },
    orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200", dot: "bg-orange-500" },
    red:    { bg: "bg-red-50",    icon: "text-red-600",    border: "border-red-200",    dot: "bg-red-500"    },
    violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "border-violet-200", dot: "bg-violet-500" },
    slate:  { bg: "bg-slate-50",  icon: "text-slate-600",  border: "border-slate-200",  dot: "bg-slate-500"  },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50" dir="rtl">

      {/* Header */}
      <div className="bg-gradient-to-l from-green-600 to-emerald-700 text-white">
        <div className="max-w-3xl mx-auto px-5 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-green-100 hover:text-white transition-colors mb-8 text-sm">
            <ArrowRight className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <ClipboardList className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold mb-1">الشروط والأحكام</h1>
              <p className="text-green-100 text-sm">شروط الاستخدام الكاملة لخدماتنا</p>
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
              {s.content && <p className="text-gray-600 text-sm leading-relaxed">{s.content}</p>}
              {s.list && (
                <ul className="space-y-2">
                  {s.list.map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.custom}
            </div>
          );
        })}

        <div className="text-center py-4">
          <p className="text-xs text-gray-400">آخر تحديث: {new Date().toLocaleDateString("ar-SA")}</p>
          <div className="flex justify-center gap-4 mt-3 text-xs">
            <Link href="/privacy" className="text-blue-500 hover:underline">سياسة الخصوصية</Link>
            <Link href="/cookies" className="text-blue-500 hover:underline">سياسة الكوكيز</Link>
            <Link href="/security" className="text-blue-500 hover:underline">قواعد الأمان</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
