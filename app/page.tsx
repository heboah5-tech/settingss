"use client"

import Link from "next/link"
import { Shield, Car, Phone, FileCheck, Truck, FileText, Lock, Cookie } from "lucide-react"
import { motion } from "framer-motion"
import { LinkCard } from "@/components/link-card"

export default function HomePage() {
  const mainLinks = [
    {
      title: "احصل على عرض سعر",
      description: "احسب تكلفة تأمين سيارتك في دقائق معدودة واحصل على أفضل العروض",
      href: "https://app.ascze.com",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
      featured: true,
    },
    {
      title: "أنواع التأمين",
      description: "تأمين شامل، تأمين ضد الغير، والمزيد من خيارات الحماية",
      href: "https://app.ascze.com",
      icon: Car,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    },
    {
      title: "تقديم مطالبة",
      description: "قدم مطالبتك بسهولة وتابع حالتها لحظة بلحظة",
      href: "https://app.ascze.com",
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1597002973211-3f3c7b1d8e4f",
    },
    {
      title: "المساعدة على الطريق",
      description: "خدمة سحب وإنقاذ على مدار الساعة في جميع أنحاء المملكة",
      href: "https://app.ascze.com",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1600320254374-ce2d293c324e",
    },
    {
      title: "اتصل بنا",
      description: "فريق الدعم جاهز لخدمتك على مدار الساعة طوال أيام الأسبوع",
      href: "#contact",
      icon: Phone,
      image: "https://images.unsplash.com/photo-1581090700227-1e8a5b1a5b8e",
    },
  ]

  const legalLinks = [
    { title: "الشروط والأحكام", href: "/terms", icon: FileText },
    { title: "سياسة الخصوصية", href: "/privacy", icon: Lock },
    { title: "سياسة الكوكيز", href: "/cookies", icon: Cookie },
  ]

  return (
    <div className="relative min-h-screen bg-background overflow-hidden" dir="rtl">

      {/* Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-black text-white">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />

        <div className="relative z-10 container max-w-xl mx-auto px-5 pt-16 pb-24 text-center">

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl mb-6 ring-1 ring-white/20 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl font-extrabold mb-3">
            تأمين السيارات
          </h1>

          <p className="text-lg text-white/80 mb-6">
            حماية ذكية لسيارتك بأسعار تنافسية وخدمات فورية
          </p>

          <Link
            href="https://app.ascze.com"
            className="inline-block px-6 py-3 rounded-xl bg-white text-primary font-medium shadow-lg hover:scale-105 transition"
          >
            احصل على عرض سعر الآن
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-xl mx-auto px-5 -mt-10 pb-12">

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {mainLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <LinkCard {...link} />
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-xs text-muted-foreground font-semibold">
            المعلومات القانونية
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-3">
          {legalLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <Link
                key={i}
                href={link.href}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:shadow-md transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </div>
                <span className="flex-1">{link.title}</span>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-14 text-center space-y-2 opacity-80">
          <p className="text-xs">
            جميع خدماتنا خاضعة لسياسات Google الإعلانية
          </p>
          <p className="text-xs font-medium">
            © {new Date().getFullYear()} تأمين السيارات
          </p>
        </div>
      </div>
    </div>
  )
}
