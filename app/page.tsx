import Image from "next/image"
import Link from "next/link"
import { Shield, Car, Phone, FileCheck, Truck, FileText, Lock, Cookie } from "lucide-react"
import { LinkCard } from "@/components/link-card"

export default function HomePage() {
  const mainLinks = [
    {
      title: "احصل على عرض سعر",
      description: "احسب تكلفة تأمين سيارتك في دقائق معدودة واحصل على أفضل العروض",
      href: "app.ascze.com",
      icon: Shield,
      image: "/images/quote-bg.jpg",
      featured: true,
    },
    {
      title: "أنواع التأمين",
      description: "تأمين شامل، تأمين ضد الغير، والمزيد من خيارات الحماية",
      href: "app.ascze.com",
      icon: Car,
      image: "/images/types-bg.jpg",
    },
    {
      title: "تقديم مطالبة",
      description: "قدم مطالبتك بسهولة وتابع حالتها لحظة بلحظة",
      href: "app.ascze.com",
      icon: FileCheck,
      image: "/images/claims-bg.jpg",
    },
    {
      title: "المساعدة على الطريق",
      description: "خدمة سحب وإنقاذ على مدار الساعة في جميع أنحاء المملكة",
      href: "app.ascze.com",
      icon: Truck,
      image: "/images/roadside-bg.jpg",
    },
    {
      title: "اتصل بنا",
      description: "فريق الدعم جاهز لخدمتك على مدار الساعة طوال أيام الأسبوع",
      href: "#contact",
      icon: Phone,
      image: "/images/contact-bg.jpg",
    },
  ]

  const legalLinks = [
    { title: "الشروط والأحكام", href: "/terms", icon: FileText },
    { title: "سياسة الخصوصية", href: "/privacy", icon: Lock },
    { title: "سياسة الكوكيز", href: "/cookies", icon: Cookie },
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        <div className="relative z-10 container max-w-xl mx-auto px-5 pt-14 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md mb-5 ring-1 ring-white/20">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 text-balance leading-tight">
              تأمين السيارات
            </h1>
            <p className="text-lg text-white/75 text-pretty leading-relaxed">
              حماية شاملة لسيارتك بأفضل الأسعار والتغطيات
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-xl mx-auto px-5 -mt-8 pb-12">
        {/* Link Cards */}
        <div className="flex flex-col gap-4">
          {mainLinks.map((link) => (
            <LinkCard
              key={link.href}
              title={link.title}
              description={link.description}
              href={link.href}
              icon={link.icon}
              image={link.image}
              featured={link.featured}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground font-medium tracking-wide">المعلومات القانونية</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-3">
          {legalLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-primary/30 hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="flex-1 text-base font-medium text-foreground">{link.title}</span>
                <svg
                  className="w-5 h-5 text-muted-foreground rotate-180 group-hover:text-primary group-hover:translate-x-[-4px] transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            جميع خدماتنا وإعلاناتنا خاضعة لسياسات جوجل الإعلانية
          </p>
          <p className="text-xs text-muted-foreground">
            {"© "}{new Date().getFullYear()}{" تأمين السيارات. جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </div>
  )
}
