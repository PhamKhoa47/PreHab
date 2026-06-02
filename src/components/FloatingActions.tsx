import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function FloatingActions() {
  return (
    <aside className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50 md:right-6 md:bottom-24">
      <a
        aria-label="Zalo"
        href="https://zalo.me/0868113844"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-surface text-primary rounded-full p-4 shadow-md hover:scale-110 transition-transform flex items-center justify-center w-14 h-14 group relative"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-inverse-surface text-inverse-on-surface px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Zalo
        </span>
      </a>

      <a
        aria-label="Messenger"
        href="https://www.facebook.com/pham.duy.cpr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-surface text-primary rounded-full p-4 shadow-md hover:scale-110 transition-transform flex items-center justify-center w-14 h-14 group relative"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-inverse-surface text-inverse-on-surface px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Messenger
        </span>
      </a>
      
      <a
        aria-label="Phone"
        href="tel:0868113844"
        className="bg-surface text-primary rounded-full p-4 shadow-md hover:scale-110 transition-transform flex items-center justify-center w-14 h-14 group relative"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-inverse-surface text-inverse-on-surface px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Phone
        </span>
      </a>
      
      <div className="relative group">
        <Link
          to="/lien-he"
          className="bg-primary text-on-primary rounded-full p-4 shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-14 h-14 group-active:scale-95"
          aria-label="Consult"
        >
          <CalendarDays className="w-6 h-6" />
        </Link>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-surface-container-lowest text-on-surface p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-64 border border-surface-variant hidden md:block">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <div className="font-label-md text-label-md">Hỗ trợ trực tuyến</div>
              <div className="font-body-md text-xs text-secondary">Chúng tôi luôn sẵn sàng</div>
            </div>
          </div>
          <button className="w-full bg-primary-fixed text-on-primary-fixed-variant font-label-md py-2 rounded-lg mt-2 pointer-events-auto">
            Chat với AI
          </button>
        </div>
      </div>
    </aside>
  );
}
