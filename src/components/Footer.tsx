import { Link } from "react-router-dom";
import { Globe, Mail, Share2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter bg-surface-container-lowest border-t border-surface-variant mt-stack-lg">
      <div className="col-span-1 flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTLPgWkXRG5NZsT_YlCzsJiF77FUDADHHT97CbpG2P7DkP-dfddn7JLT8KQZnfG1YVXL60h8gD4Y37QbTSxymEmOKL04lbG_M_HVQw5qFuP6AOVGSDvk_CqIOrs03UtU27vAE99igohn7cyd6s4aOUtMBLoYYEcK59EHzjlXJxEmGHZSpWeBIYXJKTLdOrnm8QO63mdnIBqdCw1nnQkh9bjqa4-hN9jU3mw1W-aApWzflA73Jx1Ndt8WmynY1aKtfAM2bY0wfMmCQ"
             alt="PreHab Logo Footer"
             className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="font-body-md text-sm text-secondary space-y-1">
          <p>© {new Date().getFullYear()} {t.footer.desc}</p>
          <p>Chịu trách nhiệm nội dung: Phạm Văn Duy</p>
          <p>Điện thoại: 0868 113 844</p>
          <p>Địa chỉ: 58 Nguyễn Thái Học, Vinh, Việt Nam</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-label-md text-on-surface font-bold">{t.footer.explore}</h4>
        <Link to="/gioi-thieu" className="font-body-md text-secondary hover:text-primary-container hover:underline transition-all opacity-90 hover:opacity-100 w-fit">{t.footer.about}</Link>
        <Link to="/chinh-sach-bao-mat" className="font-body-md text-secondary hover:text-primary-container hover:underline transition-all opacity-90 hover:opacity-100 w-fit">{t.footer.privacy}</Link>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-label-md text-on-surface font-bold">{t.footer.support}</h4>
        <Link to="/dieu-khoan-su-dung" className="font-body-md text-secondary hover:text-primary-container hover:underline transition-all opacity-90 hover:opacity-100 w-fit">{t.footer.terms}</Link>
        <Link to="/cau-hoi-thuong-gap" className="font-body-md text-secondary hover:text-primary-container hover:underline transition-all opacity-90 hover:opacity-100 w-fit">{t.footer.faq}</Link>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-label-md text-on-surface font-bold">{t.footer.connect}</h4>
        <div className="flex gap-4 mt-2">
          <a href="#" aria-label="Visit our Website" className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-fixed transition-colors">
            <Globe className="w-5 h-5" />
          </a>
          <a href="mailto:khoa47ai@gmail.com" aria-label="Email Us" className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-fixed transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Share" className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-fixed transition-colors">
            <Share2 className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
