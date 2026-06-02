import { Link } from "react-router-dom";
import { PlayCircle, Scale, Wand2, Heart, Smile, Accessibility, ClipboardList, ShieldCheck, Dumbbell, Activity, Brain, CheckCircle } from "lucide-react";

export function Programs() {
  return (
    <div className="w-full">
      {/* Active Aging Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Seniors exercising safely with a professional young male coach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"/>
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full py-stack-lg">
          <div className="max-w-2xl">
            <span className="inline-block bg-tertiary-fixed text-primary px-4 py-1 rounded-full font-label-md mb-4">Dành riêng cho lứa tuổi 60+</span>
            <h2 className="font-display-lg-mobile md:font-display-lg text-primary mb-6">PreHab Active Aging - Sống Vui Khỏe, Vận Động Linh Hoạt</h2>
            <p className="font-body-lg text-secondary mb-8">Chương trình phục hồi và tăng cường thể chất chuyên sâu giúp người cao tuổi lấy lại sự tự tin trong từng bước đi, bảo vệ hệ xương khớp và tận hưởng cuộc sống năng động.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/lien-he" className="bg-primary text-on-primary py-4 px-8 rounded-xl font-headline-sm hover:shadow-lg transition-all transform hover:-translate-y-1 text-center inline-block">Nhận tư vấn miễn phí</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Active Aging Benefits */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-on-surface mb-4">Lợi ích của chương trình Active Aging</h2>
          <div className="w-24 h-1 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* ... existing Active Aging benefits ... */}
          <div className="md:col-span-8 bg-surface-container-low p-8 rounded-3xl shadow-sm border border-outline-variant hover:border-primary transition-all duration-300 group">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="bg-primary-fixed w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-primary mb-3">Tăng cường thăng bằng</h3>
                <p className="font-body-md text-secondary">Hệ thống bài tập phối hợp giúp ổn định trọng tâm, giảm thiểu tối đa nguy cơ té ngã và tăng sự vững chãi khi di chuyển.</p>
              </div>
              <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-2xl">
                <img className="w-full h-full object-cover" alt="An elderly person practicing balance exercises" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0TQUv5SzyncfAcByZYJHDVN3M9WeRFgi7LfDT_2nUH75BeNQ0vcmfcOSeF5Qo0dNWeDz6J3aRV_6ry5BNGbyWK4WK65-z6LNcWeIX_GvormH5LZ83P56TNGMPTKwILysJ0CkdZsAo1WMCbrzquBOcMVCcxTqTLTfL4hk9sf-stAdcSliHwctD0nlv8JrZFl4H6OC7XylhtufEGvErDZVLE4G295sqdTKgI_Dv7TtUMFolkgsJ9PWP_5j-1XRjMNcW7O5dQbCbSh8"/>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant shadow-sm hover:border-primary transition-all duration-300">
            <div className="bg-primary-fixed w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
              <Wand2 className="w-6 h-6" />
            </div>
            <h3 className="font-headline-sm text-primary mb-3">Linh hoạt xương khớp</h3>
            <p className="font-body-md text-secondary">Giải tỏa các điểm căng cơ, bôi trơn ổ khớp thông qua các chuyển động nhẹ nhàng, chuẩn khoa học.</p>
          </div>
          <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant shadow-sm hover:border-primary transition-all duration-300">
            <div className="bg-primary-fixed w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-headline-sm text-primary mb-3">Cải thiện sức khỏe tim mạch</h3>
            <p className="font-body-md text-secondary">Vận động vừa sức giúp tăng cường lưu thông máu, ổn định huyết áp và cải thiện nhịp thở tự nhiên.</p>
          </div>
          <div className="md:col-span-8 bg-surface-container-low p-8 rounded-3xl border border-outline-variant shadow-sm hover:border-primary transition-all duration-300 group">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="bg-primary-fixed w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <Smile className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-primary mb-3">Tinh thần sảng khoái</h3>
                <p className="font-body-md text-secondary">Môi trường tập luyện cộng đồng vui vẻ giúp giải tỏa căng thẳng, cải thiện giấc ngủ và tăng niềm vui sống mỗi ngày.</p>
              </div>
              <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-2xl">
                <img className="w-full h-full object-cover" alt="A group of smiling seniors engaging in a light aerobic class" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDglNc3dm8lkaV5E_T44m2drC0cM7i5CEUHBJCaFYOr9YnAFWq0-rj5wfbJ30QwTmKur8EWQoTXbnqGN1hk6MLcyGpeJekNy31TpQClE9zI2jM0wgp6hCJHKCCDMWScvEUqU7LZToEeLyP7ukupKMhlE3EudvIlt5bZhSNkpEpYAQ9uJU9Tp8v1nFg7n6AZqCJaRRuhn153Hvy5EPP1X5kp8-dPAnVvf0QRSvHitLMxLOLZDsybgh_WnvqlXuuxQwybm3EI7ApTPFQ"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kid PreHab Section */}
      <section className="relative w-full pt-stack-lg pb-stack-lg md:pt-24 md:pb-32 px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface-container-lowest border-t border-outline-variant">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative z-10">
          <div className="flex flex-col gap-stack-md">
            <span className="inline-block bg-tertiary-fixed text-primary font-label-md px-4 py-1 rounded-full w-max">
              Dành cho trẻ em
            </span>
            <h2 className="font-display-lg-mobile md:font-display-lg text-on-surface">
              Chương Trình <span className="text-primary-container">Kid PreHab</span>
            </h2>
            <p className="font-body-lg text-secondary">
              Kid PreHab là chương trình vận động được thiết kế chuyên biệt theo từng độ tuổi và nhu cầu phát triển thể chất của trẻ, giúp xây dựng nền tảng sức khỏe vững chắc ngay từ những bước đi đầu đời.
            </p>
            <div className="flex flex-wrap gap-stack-sm mt-4">
              <Link to="/lien-he" className="bg-primary text-on-primary py-4 px-8 rounded-xl font-headline-sm hover:shadow-lg transition-all transform hover:-translate-y-1 text-center inline-block">
                Đăng Ký Tư Vấn
              </Link>
            </div>
          </div>
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-outline-variant">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDQo4-Pep_ZcSMmNmVOgKrunV80wTbxAkNSlhJIe39hyMjQ6Tzf3X140aytYKNG4ARzvzwxC8kU84ALpvL4MrD0h5flA6KGK4scBqQhkyIpM7PcnmShnpkpP04xOBTfZyFpm8ccVDwit8Eqqd1e2WQ2PhwseKZp95vvfFgvHIlw0unMfig0y5y280Dz-WfLQ3moP63oFrhlG1lyaWvR4NLf2vHvtRTJVNZoCkHe0jST01XDBNxIg18yCy7TmmtWlcq4eYcW6trqhg')" }}></div>
          </div>
        </div>
      </section>

      {/* Kid PreHab Curriculum / Age Groups */}
      <section className="w-full py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low max-w-container-max mx-auto rounded-3xl my-stack-lg">
        <div className="text-center mb-stack-lg">
          <h2 className="font-headline-md text-on-surface mb-stack-sm">Chương Trình Kid PreHab Theo Độ Tuổi</h2>
          <p className="font-body-md text-secondary max-w-2xl mx-auto">Thiết kế lộ trình riêng biệt, phù hợp với từng giai đoạn phát triển thể chất của trẻ.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            { 
              age: "3 - 5 Tuổi", title: "Nền Tảng Vận Động",
              points: ["Làm quen với thăng bằng cơ bản", "Phát triển cảm nhận không gian", "Trò chơi vận động vui nhộn"],
              bg: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4wDs3024V8AsX1CwUzGPtDZHZDeUd7CDFPKDd9SL2pr8jEYytZuuC5iJOvWYFlkxt0cPyiFWceKFbFe6iKqlmFs8Yc92d1jp7Q8T3su6OW2FHQawSDalnYIsS7kQgJu4H_G3Bzsjy--5kme1ystzaolRU0UIuFI4TPwCmnXS0u7icNFMODzmQVDIkrCqIysxQnWi2K9QVit3I99X4zBhKzJwzLbY86yvIMW4LbNFLvOcexNsF5xJp-oUdn2wisYAR6u8L2Im3Pp0')"
            },
            {
              age: "6 - 9 Tuổi", title: "Phát Triển Kỹ Năng",
              points: ["Cải thiện sức mạnh cốt lõi (Core)", "Tăng cường sự linh hoạt, dẻo dai", "Chỉnh sửa tư thế học tập chuẩn"],
              bg: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3a8k7ZRJqkiREU0RL78AurcocUbvX1zX6zXWbA4pugg3WIHJ9j8KNYwZnD9G6CGrueJyqmh-EH5WR73RDERc04ewi4PKN1guHZ2EyqnmrPlMZ-GwD9jiFPvh6BSu8zJO1j8vKWPRWAppcuLsAod_bc7gf-n2Tt-VkQ-bR2R5ZsYa_o3xkJnNsIbLfIO3dTEsPH9qTph25I_fi-PRPAIFPte_JLFkfJ0TEetD7YHlE1X4Tpsk9kthPfBioo8qPgnnZ-9p0FGUC5o0')"
            },
            {
              age: "10 - 15 Tuổi", title: "Tối Ưu Thể Lực",
              points: ["Chuẩn bị thể lực cho thể thao chuyên sâu", "Phòng tránh chấn thương tuổi dậy thì", "Phát triển sức bền và phản xạ"],
              bg: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPFnQndWzNssEn1MTY_a-QXwB_C74JK1ntehvu0iC2nEVenCCsHF2uvX-gu8f3hAglOUKIZEQ7ljSZ2HGBQubpAsJjOtETHSCkZyzEmQGFI4vak-xhDuxcJh0-bZcAYkWAVOwTr8ASxoMiPDuFggCjswySFMOZMCqKi8F7z1PtXJ-pw8NaKLOIThVLE2o5koRG25shzh4ykXf7NK--3fe35ZAvfblUOJto442WjNRd7_kFRKSeWgSgEHD9uDQuTu3qq09puSDNPFg')"
            }
          ].map((group, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-container-high group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: group.bg }}></div>
              <div className="p-stack-md">
                <div className="inline-block bg-tertiary-fixed text-primary font-label-md px-3 py-1 rounded-full mb-3">{group.age}</div>
                <h3 className="font-headline-sm text-on-surface mb-2">{group.title}</h3>
                <ul className="space-y-2 mt-4">
                  {group.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="font-body-md text-secondary">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Structure */}
      <section className="bg-surface-container-high py-stack-lg">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-on-surface mb-4">Cấu trúc chương trình chuyên nghiệp</h2>
            <p className="font-body-lg text-secondary max-w-2xl mx-auto">Mọi chi tiết đều được thiết kế để đảm bảo sự an toàn và hiệu quả tối ưu cho học viên lớn tuổi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest p-10 rounded-2xl text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-primary-fixed flex items-center justify-center rounded-full mb-6">
                <Accessibility className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-headline-sm text-primary mb-4">Bài tập nhẹ nhàng</h4>
              <p className="font-body-md text-secondary">Cường độ thấp, không gây áp lực lên cột sống và các khớp nhạy cảm.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl text-center flex flex-col items-center border-2 border-primary-container shadow-xl">
              <div className="w-20 h-20 bg-primary-container flex items-center justify-center rounded-full mb-6">
                <ClipboardList className="w-10 h-10 text-on-primary" />
              </div>
              <h4 className="font-headline-sm text-primary mb-4">Giám sát chuyên gia</h4>
              <p className="font-body-md text-secondary">Mỗi buổi tập đều có chuyên gia PreHab theo sát, điều chỉnh tư thế chính xác từng mm.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-primary-fixed flex items-center justify-center rounded-full mb-6">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-headline-sm text-primary mb-4">Môi trường an toàn</h4>
              <p className="font-body-md text-secondary">Không gian tập luyện chuyên dụng với sàn chống trượt và các thiết bị hỗ trợ chuyên nghiệp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="bg-primary p-12 md:p-20 rounded-[48px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
          <h2 className="font-display-lg text-white mb-6 relative z-10">Bắt đầu hành trình sống khỏe ngay hôm nay</h2>
          <p className="font-body-lg text-white/80 max-w-2xl mx-auto mb-10 relative z-10">Đừng để tuổi tác cản trở niềm vui vận động. Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng đồng hành cùng bạn.</p>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <Link to="/lien-he" className="bg-white text-primary py-5 px-12 rounded-full font-headline-sm hover:scale-105 active:scale-95 transition-all shadow-xl inline-block text-center">Nhận tư vấn miễn phí</Link>
            <p className="mt-2 text-white/60 font-label-md">Hoặc gọi Hotline: 0868113844</p>
          </div>
        </div>
      </section>
    </div>
  );
}
