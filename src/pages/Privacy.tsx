import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Clock, Lock } from "lucide-react";

export function Privacy() {
  return (
    <div className="w-full flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="max-w-3xl mx-auto">
        <div className="mb-stack-md flex items-center justify-between">
          <Link to="/" className="text-secondary hover:text-primary transition-colors flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-label-md">Quay lại</span>
          </Link>
        </div>
        
        <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-stack-md text-center">
          Chính sách bảo mật
        </h1>
        <p className="font-body-lg text-on-surface-variant mb-stack-lg text-center">
          Cập nhật lần cuối: Tháng 10 năm 2024. Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn.
        </p>

        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-surface-variant flex flex-col gap-stack-md">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary-container w-8 h-8" />
              <h2 className="font-headline-sm text-on-background">Mục đích thu thập thông tin</h2>
            </div>
            <div className="font-body-md text-on-surface-variant space-y-4">
              <p>PreHab thu thập thông tin cá nhân của khách hàng nhằm các mục đích chính sau đây:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cung cấp và tư vấn các chương trình luyện tập, phục hồi chức năng phù hợp nhất với tình trạng thể chất của từng cá nhân.</li>
                <li>Xử lý các yêu cầu đăng ký dịch vụ, đặt lịch hẹn và thanh toán.</li>
                <li>Gửi thông báo về lịch tập, thay đổi dịch vụ hoặc các thông tin y tế quan trọng liên quan đến quá trình tập luyện.</li>
                <li>Nâng cao chất lượng dịch vụ khách hàng thông qua việc ghi nhận phản hồi và đánh giá.</li>
              </ul>
            </div>
          </section>

          <hr className="border-surface-variant" />

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-primary-container w-8 h-8" />
              <h2 className="font-headline-sm text-on-background">Phạm vi sử dụng thông tin</h2>
            </div>
            <div className="font-body-md text-on-surface-variant space-y-4">
              <p>Thông tin của bạn được sử dụng nội bộ tại PreHab cho các hoạt động chăm sóc sức khỏe. Chúng tôi cam kết KHÔNG bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào vì mục đích thương mại.</p>
              <p>Thông tin chỉ có thể được chia sẻ trong các trường hợp:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Có sự đồng ý rõ ràng từ phía khách hàng.</li>
                <li>Khi có yêu cầu từ các cơ quan pháp luật có thẩm quyền theo quy định của pháp luật Việt Nam.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
