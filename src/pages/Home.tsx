import { Accessibility, Dumbbell, Brain, ShieldPlus, LineChart, Route, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <img alt="PreHab Performance Training" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" />
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 via-on-background/40 to-transparent"></div>
        <div className="relative max-w-container-max mx-auto h-full px-margin-mobile md:px-margin-desktop flex flex-col justify-center items-start text-on-primary">
          <div className="max-w-2xl space-y-stack-md">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary text-primary font-label-md backdrop-blur-md">
              {t.home.heroTag}
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg leading-tight">
              {t.home.heroTitle}
            </h1>
            <p className="font-body-lg text-surface-variant max-w-lg">
              {t.home.heroDesc}
            </p>
            <div className="pt-stack-md flex flex-col sm:flex-row gap-4">
              <Link to="/lien-he" className="bg-primary-container text-on-primary-container font-label-md px-8 py-4 rounded-lg shadow-xl hover:scale-105 active:scale-95 transition-all text-center">
                {t.home.registerAction}
              </Link>
              <Link to="/chuong-trinh" className="border border-surface-variant text-on-primary font-label-md px-8 py-4 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm text-center">
                {t.home.learnMoreAction}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section (Bento Grid) */}
      <section className="py-stack-lg bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-stack-lg space-y-base">
            <h2 className="font-headline-md text-primary">{t.home.benefitsTitle}</h2>
            <p className="font-body-md text-secondary">{t.home.benefitsDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Large Feature */}
            <div className="md:col-span-8 bg-surface-container-lowest p-stack-md rounded-xl ambient-shadow flex flex-col md:flex-row gap-stack-md">
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-64">
                <img alt="Improve posture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8ZjGfG6G3atl63leyvXH9eXMwJGY4d38_oevh1fSjiU_7bFuduuepetNl9r16NjuYcRG9etXpVtdn2tVh1O7-Twvmkw2C4dpfKgkxD9P9OBSUpP94QxT_rMp4OHPFFLMQ2IdI5MLUb44LUrxtMB6NndMQ8nbbHTcCRPjDW7-Q_qsMwEyeSpJbyfHflNfyhGtIN3aP_SPOzWzW7SsH805N3EpsH3fd9fEUbQ0MFXFPgcGs3jCv3ur_3NctXFJZqHYadvO81ZUSKc" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <Accessibility className="text-primary w-10 h-10 mb-4" />
                <h3 className="font-headline-sm text-on-surface mb-2">{t.home.benefit1Title}</h3>
                <p className="font-body-md text-secondary">{t.home.benefit1Desc}</p>
              </div>
            </div>

            {/* Small Feature 1 */}
            <div className="md:col-span-4 bg-primary text-on-primary p-stack-md rounded-xl shadow-lg flex flex-col items-start justify-between min-h-[250px]">
              <Dumbbell className="w-10 h-10 mb-4" />
              <div>
                <h3 className="font-headline-sm mb-2">{t.home.benefit2Title}</h3>
                <p className="font-body-md opacity-90">{t.home.benefit2Desc}</p>
              </div>
            </div>

            {/* Small Feature 2 */}
            <div className="md:col-span-4 bg-tertiary-fixed text-on-tertiary-fixed p-stack-md rounded-xl ambient-shadow flex flex-col items-start justify-between min-h-[250px]">
              <Brain className="text-primary w-10 h-10 mb-4" />
              <div>
                <h3 className="font-headline-sm mb-2 text-on-surface">{t.home.benefit3Title}</h3>
                <p className="font-body-md text-secondary">{t.home.benefit3Desc}</p>
              </div>
            </div>

            {/* Small Feature 3 */}
            <div className="md:col-span-8 bg-surface-container-lowest p-stack-md rounded-xl ambient-shadow flex flex-col-reverse md:flex-row gap-stack-md">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <ShieldPlus className="text-primary w-10 h-10 mb-4" />
                <h3 className="font-headline-sm text-on-surface mb-2">{t.home.benefit4Title}</h3>
                <p className="font-body-md text-secondary">{t.home.benefit4Desc}</p>
              </div>
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-64">
                <img alt="Prevent injuries" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUOykeuwT9n6b3MGqKsXKD4E_o7rsKWa-JEsz1-Rxa-5xD6UYBeqtS0Ba24D_VL1-bdhhri8MqX7ywherZgoLYMMoq7zJ283Kyaf0wpBRZXniIWaGvulkvWTkF23J8Vrsm4svgGCiGNcnyb-eA82IASKO9zsKZDbwaL-06cVupCRcnJYVpOcWjIFrXq8akQ4Ah1Z03vfy89Dlt90O-wqRCEdEuhR9NgJkCy0_Nd_eBDsy0oIy_RA0vwfu0tmgwJDzlj3t40dYgdWg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-stack-lg gap-stack-md">
            <div className="max-w-xl">
              <h2 className="font-headline-md text-on-surface mb-4">{t.home.structureTitle}</h2>
              <p className="font-body-lg text-secondary">{t.home.structureDesc}</p>
            </div>
            <div className="hidden md:block">
              <span className="text-primary font-bold text-6xl opacity-10">STRUCTURE</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Step 1 */}
            <div className="relative group p-stack-md border border-outline-variant rounded-xl hover:border-primary transition-colors">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold text-xl shadow-lg">1</div>
              <div className="mt-4 space-y-4">
                <div className="w-16 h-16 bg-tertiary-fixed rounded-lg flex items-center justify-center">
                  <LineChart className="text-primary w-8 h-8" />
                </div>
                <h3 className="font-headline-sm text-on-surface">{t.home.step1Title}</h3>
                <p className="font-body-md text-secondary">{t.home.step1Desc}</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative group p-stack-md border border-outline-variant rounded-xl hover:border-primary transition-colors">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold text-xl shadow-lg">2</div>
              <div className="mt-4 space-y-4">
                <div className="w-16 h-16 bg-tertiary-fixed rounded-lg flex items-center justify-center">
                  <Route className="text-primary w-8 h-8" />
                </div>
                <h3 className="font-headline-sm text-on-surface">{t.home.step2Title}</h3>
                <p className="font-body-md text-secondary">{t.home.step2Desc}</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative group p-stack-md border border-outline-variant rounded-xl hover:border-primary transition-colors">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold text-xl shadow-lg">3</div>
              <div className="mt-4 space-y-4">
                <div className="w-16 h-16 bg-tertiary-fixed rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-primary w-8 h-8" />
                </div>
                <h3 className="font-headline-sm text-on-surface">{t.home.step3Title}</h3>
                <p className="font-body-md text-secondary">{t.home.step3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5"></path>
            </svg>
          </div>
          <div className="relative p-12 md:p-20 text-center flex flex-col items-center gap-stack-md">
            <h2 className="font-display-lg-mobile md:font-display-lg text-on-primary max-w-3xl">{t.home.ctaTitle}</h2>
            <p className="font-body-lg text-on-primary opacity-80 max-w-xl">
              {t.home.ctaDesc}
            </p>
            <div className="pt-stack-md">
              <Link to="/lien-he" className="bg-surface-container-lowest text-primary px-12 py-5 rounded-lg font-label-md hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 w-max mx-auto">
                <span>{t.home.registerAction}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-4 text-on-primary/60 font-label-md">{t.home.ctaSubText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
