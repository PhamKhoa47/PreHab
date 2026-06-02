import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, Globe, X, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu automatically when clicking a navigation link or on orientation change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const NAV_LINKS = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/gioi-thieu" },
    { label: t.nav.services, href: "/dich-vu" },
    { label: t.nav.programs, href: "/chuong-trinh" },
    { label: t.nav.knowledge, href: "/kien-thuc" },
    { label: t.nav.contact, href: "/lien-he" },
  ];

  // Motion animation variants for mobile staggering
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-surface/85 backdrop-blur-md shadow-sm border-b border-surface-variant transition-all duration-300">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20 w-full">
          {/* Logo Brand area */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTLPgWkXRG5NZsT_YlCzsJiF77FUDADHHT97CbpG2P7DkP-dfddn7JLT8KQZnfG1YVXL60h8gD4Y37QbTSxymEmOKL04lbG_M_HVQw5qFuP6AOVGSDvk_CqIOrs03UtU27vAE99igohn7cyd6s4aOUtMBLoYYEcK59EHzjlXJxEmGHZSpWeBIYXJKTLdOrnm8QO63mdnIBqdCw1nnQkh9bjqa4-hN9jU3mw1W-aApWzflA73Jx1Ndt8WmynY1aKtfAM2bY0wfMmCQ"
              alt="PreHab Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Link items */}
          <nav className="hidden md:flex gap-8 items-center h-full relative">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative font-body-md text-body-md h-full flex items-center px-1 transition-all duration-300 hover:text-primary",
                    isActive ? "text-primary font-bold" : "text-secondary"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicatorDesktop"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop action items */}
          <div className="hidden md:flex items-center gap-5">
            {/* Elegant slider language toggle button */}
            <div className="flex bg-surface-container/60 rounded-full p-1 border border-surface-variant relative">
              <button
                onClick={() => setLanguage("vi")}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full min-h-[28px] transition-all relative z-10 cursor-pointer",
                  language === "vi" ? "text-on-primary font-bold" : "text-secondary hover:text-on-surface"
                )}
              >
                VN
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full min-h-[28px] transition-all relative z-10 cursor-pointer",
                  language === "en" ? "text-on-primary font-bold" : "text-secondary hover:text-on-surface"
                )}
              >
                EN
              </button>
              <motion.div
                className="absolute top-1 bottom-1 bg-primary rounded-full"
                layout
                initial={false}
                animate={{
                  left: language === "vi" ? "4px" : "44px",
                  right: language === "vi" ? "calc(100% - 40px)" : "4px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </div>

            {/* Glowing upgrade CTA link */}
            <Link
              to="/lien-he"
              className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 group"
            >
              <span>{t.nav.consult}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Right layout buttons (Language switcher, Hamburger menu) */}
          <div className="md:hidden flex items-center gap-2">
            {/* Quick mobile simple language pill */}
            <button
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg border border-surface-variant font-label-md text-label-md text-secondary hover:text-primary hover:bg-surface-container active:scale-95 transition-all text-sm gap-1"
              aria-label={language === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === "vi" ? "EN" : "VI"}</span>
            </button>

            {/* Upgraded micro-animated menu triggers */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center min-h-[44px] min-w-[44px] text-primary hover:bg-surface-container rounded-lg active:scale-95 transition-all relative"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Upgraded framer-motion full screen overlay menu for mobile device support */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between overflow-y-auto"
          >
            {/* Content list with staggered animations */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="px-margin-mobile py-8 flex flex-col gap-6"
            >
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold border-b border-surface-variant pb-2">
                Danh mục điều hướng
              </p>

              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      to={link.href}
                      className={cn(
                        "block font-display-lg-mobile text-2xl py-2 relative transition-all duration-300",
                        isActive
                          ? "text-primary font-bold"
                          : "text-secondary hover:text-primary active:translate-x-1"
                      )}
                    >
                      <span className="relative flex items-center justify-between">
                        {link.label}
                        {isActive && (
                          <Sparkles className="w-5 h-5 text-primary-container animate-pulse" />
                        )}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom section showing CTA and Lang switch information */}
            <motion.div
              initial={ { opacity: 0, y: 30 } }
              animate={ { opacity: 1, y: 0, transition: { delay: 0.4, type: "spring" } } }
              className="px-margin-mobile pb-12 pt-6 border-t border-surface-variant bg-surface-container-lowest/80 flex flex-col gap-5"
            >
              {/* Language state pill */}
              <div className="flex items-center justify-between py-1 px-2">
                <span className="font-body-md text-sm text-secondary flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-primary" />
                  Ngôn ngữ hiện tại
                </span>
                <div className="flex bg-surface-container rounded-full p-0.5 border border-surface-variant relative w-32 justify-between">
                  <button
                    onClick={() => setLanguage("vi")}
                    className={cn(
                      "flex-1 py-1.5 text-xs font-semibold rounded-full min-h-[32px] transition-all relative z-10",
                      language === "vi" ? "text-on-primary font-bold" : "text-secondary"
                    )}
                  >
                    Tiếng Việt
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "flex-1 py-1.5 text-xs font-semibold rounded-full min-h-[32px] transition-all relative z-10",
                      language === "en" ? "text-on-primary font-bold" : "text-secondary"
                    )}
                  >
                    English
                  </button>
                  <motion.div
                    className="absolute top-0.5 bottom-0.5 bg-primary rounded-full"
                    layout
                    initial={false}
                    animate={{
                      left: language === "vi" ? "2px" : "64px",
                      right: language === "vi" ? "calc(100% - 62px)" : "2px",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>

              {/* Big primary CTA */}
              <Link
                to="/lien-he"
                className="w-full bg-primary hover:bg-primary-container text-on-primary text-center font-label-md text-label-md py-4 rounded-xl shadow-md flex items-center justify-center gap-2 mt-2"
              >
                <span>{t.nav.consult}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
