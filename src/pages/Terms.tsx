import { Link } from "react-router-dom";
import { ArrowLeft, Scale, UserCheck, Copyright, AlertTriangle } from "lucide-react";

export function Terms() {
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
          Điều khoản sử dụng
        </h1>
        <p className="font-body-lg text-on-surface-variant mb-stack-lg text-center">
          Cập nhật lần cuối: Tháng 10 năm 2024
        </p>

        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-surface-variant flex flex-col gap-stack-md">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-primary-container w-8 h-8" />
              <h2 className="font-headline-sm text-on-background">Chấp nhận điều khoản</h2>
            </div>
            <div className="font-body-md text-on-surface-variant space-y-4">
              <p>Bằng việc truy cập và sử dụng các dịch vụ của PreHab, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu trong tài liệu này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng dịch vụ của chúng tôi.</p>
            </div>
          </section>

          <hr className="border-surface-variant" />

          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-primary-container w-8 h-8" />
              <h2 className="font-headline-sm text-on-background">Quyền và trách nhiệm của người dùng</h2>
            </div>
            <div className="font-body-md text-on-surface-variant space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Bạn chịu trách nhiệm bảo mật thông tin tài khoản của mình.</li>
                <li>Bạn cam kết cung cấp thông tin chính xác và cập nhật khi sử dụng dịch vụ.</li>
                <li>Bạn không được sử dụng dịch vụ cho bất kỳ mục đích bất hợp pháp hoặc trái phép nào.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
