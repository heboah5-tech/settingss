import Link from "next/link";
import { Cookie, ArrowRight, Settings, BarChart2, Megaphone, CheckCircle } from "lucide-react";

export const metadata = {
  title: "سياسة الكوكيز | مقارنة التأمين",
  description: "تعرف على كيفية استخدامنا لملفات تعريف الارتباط وكيف تحمي خصوصيتك.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50" dir="rtl">

      {/* Header */}
      <div className="bg-gradient-to-l from-amber-500 to-orange-600 text-white">
        <div className="max-w-3xl mx-auto px-5 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-100 hover:text-white transition-colors mb-8 text-sm">
            <ArrowRight className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold mb-1">سياسة ملفات تعريف الارتباط</h1>
              <p className="text-amber-100 text-sm">كيف نستخدم الكوكيز لتحسين تجربتك</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-10 space-y-5">

        {/* What are cookies */}
        <div className="bg-white rounded-2xl border border-amber-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-base font-bold text-gray-900">1. ما هي ملفات تعريف الارتباط؟</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            ملفات تعريف الارتباط (الكوكيز) هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا. تساعدنا هذه الملفات على تحسين تجربتك وتقديم خدمات أفضل.
          </p>
        </div>

        {/* Types */}
        <div className="bg-white rounded-2xl border border-orange-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
              <Settings className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-base font-bold text-gray-900">2. أنواع الكوكيز التي نستخدمها</h2>
          </div>
          <div className="space-y-4">
            {[
              { color: "blue", label: "كوكيز ضرورية", desc: "ضرورية لتشغيل الموقع بشكل صحيح. تشمل: إدارة الجلسات، المصادقة الأمنية، وتذكر تفضيلاتك اللغوية." },
              { color: "green", label: "كوكيز الأداء", desc: "تساعدنا على فهم كيفية استخدام الزوار للموقع من خلال تحليلات الاستخدام (Google Analytics)، تتبع الأخطاء، وقياس سرعة التحميل." },
              { color: "violet", label: "كوكيز الوظائف", desc: "تحسن تجربتك من خلال تذكر تفضيلات العرض، حفظ معلومات النماذج، وتخصيص المحتوى." },
              { color: "red", label: "كوكيز التسويق", desc: "تستخدم لعرض إعلانات مناسبة وفقاً لسياسات جوجل الإعلانية من خلال: Google Ads، Facebook Pixel، وإعادة الاستهداف." },
            ].map(item => {
              const borders: Record<string, string> = { blue: "border-blue-300", green: "border-green-300", violet: "border-violet-300", red: "border-red-300" };
              const texts: Record<string, string> = { blue: "text-blue-700", green: "text-green-700", violet: "text-violet-700", red: "text-red-700" };
              return (
                <div key={item.label} className={`border-r-4 ${borders[item.color]} pr-4 py-1`}>
                  <p className={`font-bold text-sm ${texts[item.color]} mb-1`}>{item.label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
              <BarChart2 className="w-5 h-5 text-slate-600" />
            </div>
            <h2 className="text-base font-bold text-gray-900">3. الكوكيز المستخدمة</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {["الاسم", "النوع", "المدة", "الغرض"].map(h => (
                    <th key={h} className="p-3 text-right font-bold text-gray-700 border-b border-slate-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y divide-slate-100">
                {[
                  ["session_id", "ضروري", "جلسة", "إدارة الجلسة"],
                  ["_ga", "أداء", "سنتان", "Google Analytics"],
                  ["_gid", "أداء", "24 ساعة", "Google Analytics"],
                  ["AW-*", "تسويق", "90 يوم", "Google Ads"],
                  ["lang_pref", "وظيفي", "سنة", "تفضيلات اللغة"],
                ].map(row => (
                  <tr key={row[0]} className="hover:bg-slate-50 transition-colors">
                    {row.map((cell, i) => (
                      <td key={i} className="p-3 font-mono text-xs">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Control */}
        <div className="bg-white rounded-2xl border border-green-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-base font-bold text-gray-900">4. التحكم في الكوكيز</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            يمكنك التحكم في الكوكيز من خلال إعدادات متصفحك. يُرجى ملاحظة أن تعطيل بعض الكوكيز قد يؤثر على وظائف الموقع.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[
              { name: "Chrome", href: "https://support.google.com/chrome/answer/95647" },
              { name: "Firefox", href: "https://support.mozilla.org/ar/kb/enhanced-tracking-protection-firefox-desktop" },
              { name: "Safari", href: "https://support.apple.com/ar-sa/guide/safari/sfri11471/mac" },
              { name: "Edge", href: "https://support.microsoft.com/ar-sa/microsoft-edge" },
            ].map(browser => (
              <a
                key={browser.name}
                href={browser.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all text-sm font-medium text-gray-700 hover:text-blue-700"
              >
                <Megaphone className="w-4 h-4 text-slate-400" />
                إعدادات {browser.name}
              </a>
            ))}
          </div>
        </div>

        {/* Google consent */}
        <div className="bg-gradient-to-l from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
          <h2 className="font-bold text-base mb-2">5. الامتثال لسياسات جوجل</h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            نلتزم بمتطلبات موافقة مستخدمي جوجل (Google Consent Mode v2) وسياسة التحقق من هوية المعلن. استخدامنا للكوكيز يتوافق مع سياسات المحتوى والإعلانات الخاصة بجوجل.
          </p>
        </div>

        <div className="text-center py-4">
          <p className="text-xs text-gray-400">آخر تحديث: {new Date().toLocaleDateString("ar-SA")}</p>
          <div className="flex justify-center gap-4 mt-3 text-xs">
            <Link href="/privacy" className="text-blue-500 hover:underline">سياسة الخصوصية</Link>
            <Link href="/terms" className="text-blue-500 hover:underline">الشروط والأحكام</Link>
            <Link href="/security" className="text-blue-500 hover:underline">قواعد الأمان</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
