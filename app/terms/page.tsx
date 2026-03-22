import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة للرئيسية
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-6">الشروط والأحكام</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-right">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. قبول الشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              باستخدامك لخدمات تأمين السيارات، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءة هذه الشروط
              بعناية قبل استخدام خدماتنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. الخدمات المقدمة</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">نقدم خدمات تأمين السيارات الشاملة بما في ذلك:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
              <li>التأمين الشامل ضد جميع المخاطر</li>
              <li>التأمين ضد الغير (الإلزامي)</li>
              <li>تأمين السرقة والحريق</li>
              <li>المساعدة على الطريق على مدار الساعة</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. الالتزامات المالية</h2>
            <p className="text-muted-foreground leading-relaxed">
              يلتزم العميل بدفع أقساط التأمين في المواعيد المحددة. في حالة التأخر عن الدفع، قد يتم تعليق الوثيقة حتى
              سداد المستحقات.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. الاستثناءات</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">لا يشمل التأمين الحالات التالية:</p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
              <li>القيادة تحت تأثير الكحول أو المخدرات</li>
              <li>القيادة بدون رخصة سارية المفعول</li>
              <li>استخدام السيارة في أنشطة غير قانونية</li>
              <li>التلف المتعمد للمركبة</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. الإلغاء والإسترجاع</h2>
            <p className="text-muted-foreground leading-relaxed">
              يمكن للعميل إلغاء وثيقة التأمين خلال 30 يوماً من تاريخ الإصدار واسترداد كامل المبلغ. بعد هذه المدة، يتم
              احتساب رسوم إلغاء حسب المدة المستفادة من التغطية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. إجراءات المطالبة</h2>
            <p className="text-muted-foreground leading-relaxed">
              في حالة وقوع حادث، يجب إبلاغنا خلال 24 ساعة وتقديم جميع المستندات المطلوبة. سيتم معالجة المطالبة خلال 7-10
              أيام عمل.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. الامتثال لسياسات جوجل الإعلانية</h2>
            <p className="text-muted-foreground leading-relaxed">
              جميع خدماتنا وإعلاناتنا خاضعة لسياسات جوجل الإعلانية ومعايير الصناعة. نلتزم بالشفافية الكاملة في جميع
              تعاملاتنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. تعديل الشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار العملاء بأي تغييرات جوهرية عبر البريد الإلكتروني.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. القانون الحاكم</h2>
            <p className="text-muted-foreground leading-relaxed">
              تخضع هذه الشروط للقوانين المحلية المعمول بها في منطقة تقديم الخدمة.
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
