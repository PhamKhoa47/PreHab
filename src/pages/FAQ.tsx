import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Chương trình phù hợp với độ tuổi nào?",
    a: "Chương trình của PreHab được thiết kế linh hoạt để phù hợp với mọi độ tuổi trong gia đình, từ trẻ em (trên 6 tuổi) đang trong giai đoạn phát triển thể chất, đến người trưởng thành cần phục hồi chức năng và người cao tuổi cần duy trì sự dẻo dai. Chúng tôi có các bài tập được cá nhân hóa cho từng nhóm tuổi."
  },
  {
    q: "Trẻ cần tham gia bao lâu?",
    a: "Thời gian tham gia phụ thuộc vào mục tiêu và tình trạng ban đầu của trẻ. Thông thường, một liệu trình cơ bản kéo dài từ 8 đến 12 tuần để thấy được sự cải thiện rõ rệt về tư thế và thể lực. Tuy nhiên, chúng tôi khuyến khích duy trì thói quen vận động như một phần của lối sống lâu dài."
  },
  {
    q: "Có đánh giá ban đầu không?",
    a: "Chắc chắn rồi. Mọi học viên đều trải qua quá trình đánh giá chuyên sâu ban đầu bởi các chuyên gia vật lý trị liệu của chúng tôi. Đánh giá này bao gồm phân tích tư thế, kiểm tra sự linh hoạt, sức mạnh cơ bắp và xác định các vấn đề tiềm ẩn để thiết kế chương trình phù hợp nhất."
  },
  {
    q: "Phụ huynh có được tư vấn không?",
    a: "Sự đồng hành của phụ huynh là yếu tố then chốt. Chúng tôi cung cấp các buổi tư vấn định kỳ cho phụ huynh để cập nhật tiến độ của trẻ, hướng dẫn cách hỗ trợ trẻ tập luyện tại nhà và cung cấp kiến thức về dinh dưỡng, lối sống lành mạnh cho cả gia đình."
  },
  {
    q: "Có thể đăng ký trải nghiệm không?",
    a: "Có, PreHab cung cấp buổi tập trải nghiệm kết hợp đánh giá ban đầu với mức phí ưu đãi. Đây là cơ hội tuyệt vời để bạn và gia đình làm quen với cơ sở vật chất, gặp gỡ đội ngũ chuyên gia và trực tiếp cảm nhận phương pháp huấn luyện của chúng tôi trước khi quyết định đăng ký khóa học dài hạn."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full flex-grow">
      {/* Hero */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-lg md:py-20 text-center">
        <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface mb-stack-sm">Câu Hỏi Thường Gặp</h1>
        <p className="font-body-lg text-secondary max-w-2xl mx-auto">Tìm hiểu thêm về các chương trình phục hồi và chăm sóc sức khỏe của PreHab dành cho gia đình bạn.</p>
      </section>

      {/* Accordion */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto pb-stack-lg md:pb-24">
        <div className="space-y-stack-sm">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-surface-bright transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-headline-sm text-on-surface">{faq.q}</span>
                <ChevronDown className={`text-primary w-6 h-6 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 px-6'}`}
              >
                <div className="text-secondary font-body-md bg-surface-container-lowest">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-container-low py-stack-lg md:py-20 px-margin-mobile md:px-margin-desktop mt-stack-lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-surface-container-lowest p-stack-md md:p-12 rounded-xl shadow-sm border border-surface-variant relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-fixed rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-outline-variant rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
            <h2 className="font-headline-md text-on-surface mb-stack-sm relative z-10">Bạn vẫn còn thắc mắc?</h2>
            <p className="font-body-md text-secondary mb-stack-md max-w-lg mx-auto relative z-10">Đội ngũ chuyên gia của PreHab luôn sẵn sàng lắng nghe và giải đáp mọi câu hỏi của bạn về sức khỏe thể chất của gia đình.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-stack-sm relative z-10">
              <Link to="/lien-he" className="bg-primary text-on-primary font-label-md px-8 py-3 rounded-lg hover:bg-primary-container hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Liên hệ tư vấn ngay
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
