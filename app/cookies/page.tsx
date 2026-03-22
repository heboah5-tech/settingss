import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة للرئيسية
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-6">سياسة ملفات تعريف الارتباط (الكوكيز)</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-right">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. ما هي ملفات تعريف الارتباط؟</h2>
            <p className="text-muted-foreground leading-relaxed">
              ملفات تعريف الارتباط (الكوكيز) هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا. تساعدنا هذه
              الملفات على تحسين تجربتك وتقديم خدمات أفضل.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. أنواع الكوكيز التي نستخدمها</h2>

            <div className="space-y-4">
              <div className="border-r-4 border-primary pr-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">أ. كوكيز ضرورية</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ضرورية لتشغيل الموقع بشكل صحيح. تشمل: إدارة الجلسات، المصادقة الأمنية، وتذكر تفضيلاتك اللغوية.
                </p>
              </div>

              <div className="border-r-4 border-muted pr-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">ب. كوكيز الأداء</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تساعدنا على فهم كيفية استخدام الزوار للموقع من خلال: تحليلات الاستخدام (Google Analytics)، تتبع
                  الأخطاء، وقياس سرعة التحميل.
                </p>
              </div>

              <div className="border-r-4 border-muted pr-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">ج. كوكيز الوظائف</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تحسن تجربتك من خلال: تذكر تفضيلات العرض، حفظ معلومات النماذج، وتخصيص المحتوى.
                </p>
              </div>

              <div className="border-r-4 border-muted pr-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">د. كوكيز التسويق</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تستخدم لعرض إعلانات مناسبة وفقاً لسياسات جوجل الإعلانية من خلال: Google Ads، Facebook Pixel، وإعادة
                  الاستهداف.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. الكوكيز المستخدمة</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-3 text-right border-b border-border font-semibold">الاسم</th>
                    <th className="p-3 text-right border-b border-border font-semibold">النوع</th>
                    <th className="p-3 text-right border-b border-border font-semibold">المدة</th>
                    <th className="p-3 text-right border-b border-border font-semibold">الغرض</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="p-3 border-b border-border">session_id</td>
                    <td className="p-3 border-b border-border">ضروري</td>
                    <td className="p-3 border-b border-border">جلسة</td>
                    <td className="p-3 border-b border-border">إدارة جلسة المستخدم</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">_ga</td>
                    <td className="p-3 border-b border-border">أداء</td>
                    <td className="p-3 border-b border-border">سنتان</td>
                    <td className="p-3 border-b border-border">Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">lang_pref</td>
                    <td className="p-3 border-b border-border">وظيفي</td>
                    <td className="p-3 border-b border-border">سنة</td>
                    <td className="p-3 border-b border-border">تذكر تفضيلات اللغة</td>
                  </tr>
                  <tr>
                    <td className="p-3">ads_id</td>
                    <td className="p-3">تسويق</td>
                    <td className="p-3">90 يوماً</td>
                    <td className="p-3">إعلانات Google</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. موافقتك</h2>
            <p className="text-muted-foreground leading-relaxed">
              عند زيارتك للموقع لأول مرة، سنطلب موافقتك على استخدام الكوكيز غير الضرورية. يمكنك قبول أو رفض أنواع معينة
              من الكوكيز. الكوكيز الضرورية لا يمكن تعطيلها لأنها مطلوبة لتشغيل الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. إدارة الكوكيز</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">يمكنك إدارة أو حذف الكوكيز من خلال:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
              <li>إعدادات المتصفح الخاص بك</li>
              <li>لوحة إدارة الموافقة على موقعنا</li>
              <li>أدوات إلغاء الاشتراك في الإعلانات (Google Ads Settings)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              ملاحظة: تعطيل بعض الكوكيز قد يؤثر على وظائف الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. كوكيز الطرف الثالث</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              نستخدم خدمات من أطراف ثالثة قد تضع كوكيز على جهازك:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
              <li>
                Google Analytics - لتحليل حركة الزوار (
                <a
                  href="https://policies.google.com/privacy"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  سياسة خصوصية جوجل
                </a>
                )
              </li>
              <li>Google Ads - للإعلانات المخصصة (متوافق مع سياسات جوجل الإعلانية)</li>
              <li>Facebook Pixel - لتتبع الإعلانات على فيسبوك</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. تحديثات السياسة</h2>
            <p className="text-muted-foreground leading-relaxed">
              قد نقوم بتحديث سياسة الكوكيز من وقت لآخر لتعكس التغييرات في التكنولوجيا أو التشريعات. ستجد تاريخ آخر تحديث
              أسفل هذه الصفحة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. الامتثال والمعايير</h2>
            <p className="text-muted-foreground leading-relaxed">
              سياسة الكوكيز الخاصة بنا متوافقة تماماً مع سياسات جوجل الإعلانية ومعايير حماية البيانات العالمية لضمان
              خصوصيتك وأمان بياناتك.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. اتصل بنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              لأي أسئلة حول استخدامنا للكوكيز، يرجى التواصل معنا: cookies@carinsurance.com
            </p>
          </section>

          <section className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">آخر تحديث: {new Date().toLocaleDateString("ar-SA")}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
