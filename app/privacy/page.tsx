import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة للرئيسية
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-6">سياسة الخصوصية</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-right">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. المعلومات التي نجمعها</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">نحن نجمع المعلومات التالية لتقديم خدماتنا:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
              <li>المعلومات الشخصية (الاسم، العنوان، رقم الهاتف)</li>
              <li>معلومات المركبة (النوع، الطراز، سنة الصنع)</li>
              <li>رخصة القيادة والهوية الوطنية</li>
              <li>السجل القيادي وتاريخ المطالبات</li>
              <li>معلومات الدفع والحساب البنكي</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. كيفية استخدام معلوماتك</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">نستخدم معلوماتك للأغراض التالية:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
              <li>إصدار وتجديد وثائق التأمين</li>
              <li>معالجة المطالبات والمدفوعات</li>
              <li>التواصل معك بشأن وثيقتك</li>
              <li>تحسين خدماتنا ومنتجاتنا</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. مشاركة المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed">
              لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية: شركات إعادة التأمين، الجهات التنظيمية
              والقانونية، مقدمي الخدمات المعتمدين (مثل ورش الإصلاح)، أو بموافقتك الصريحة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. أمان المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم تدابير أمنية متقدمة لحماية معلوماتك، بما في ذلك التشفير SSL، جدران الحماية، المصادقة متعددة
              العوامل، والتخزين الآمن في مراكز بيانات معتمدة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. حقوقك</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>تصحيح أي معلومات غير دقيقة</li>
              <li>حذف معلوماتك (مع مراعاة الالتزامات القانونية)</li>
              <li>الاعتراض على معالجة معلوماتك</li>
              <li>نقل معلوماتك إلى مزود خدمة آخر</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. الاحتفاظ بالبيانات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحتفظ بمعلوماتك طوال مدة سريان الوثيقة وفترة إضافية حسب المتطلبات القانونية (عادة 7 سنوات بعد انتهاء
              الوثيقة).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. ملفات تعريف الارتباط (الكوكيز)</h2>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك. راجع{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                سياسة الكوكيز
              </Link>{" "}
              للمزيد من المعلومات.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. الامتثال لقوانين حماية البيانات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نلتزم بجميع قوانين حماية البيانات المعمول بها ونتوافق مع سياسات جوجل الإعلانية ومعايير الصناعة العالمية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. التواصل معنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية أو ترغب في ممارسة حقوقك، يرجى التواصل معنا عبر البريد الإلكتروني:
              privacy@carinsurance.com
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
