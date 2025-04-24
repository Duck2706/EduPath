const interestsByField = {
  "Báo chí - Marketing - Quảng cáo - PR": [
    "Sáng tạo nội dung", "Viết lách", "Đọc sách", "Mạng xã hội",
    "Chụp ảnh, quay video", "Trò chuyện, giao tiếp", "Phân tích dữ liệu",
    "Tổ chức sự kiện", "Theo dõi tin tức"
  ],
  "Bác sĩ thú y": [
    "Yêu thích động vật", "Tìm hiểu về sinh học", "Tìm hiểu về giải phẫu",
    "Tìm hiểu về hệ sinh thái", "Chăm sóc thú cưng"
  ],
  "Công an - Quân đội": [
    "Thể dục, thể thao", "Võ thuật", "Tìm hiểu về an ninh", "Tìm hiểu về chính trị",
    "Lập trình", "Tìm hiểu về công nghệ", "Tìm hiểu về mật mã", "Tìm hiểu về hóa học",
    "Tham gia hoạt động tình nguyện"
  ],
  "Công nghệ chế biến thực phẩm": [
    "Nấu ăn", "Ăn uống", "Tìm hiểu về sinh học", "Tìm hiểu về hóa học", "Tìm hiểu về dinh dưỡng"
  ],
  "Công nghệ In - Giấy": [
    "Tìm hiểu về hóa học", "Tìm hiểu về kỹ thuật in ấn", "Kỹ thuật"
  ],
  "Công nghệ sinh - Hóa": [
    "Đọc sách", "Nghiên cứu", "Tìm hiểu về hóa học", "Tìm hiểu về sinh học", "Tìm hiểu về công nghệ"
  ],
  "Công nghệ thông tin - Tin học": [
    "Đọc sách", "Lập trình", "Tìm hiểu về vật lý học", "Tìm hiểu về công nghệ", "Tìm hiểu về mật mã",
    "Phân tích dữ liệu", "Thiết kế", "Tìm hiểu về AI", "Tìm hiểu về tin học", "Nghiên cứu", "Chơi game", "Kỹ thuật"
  ],

  "Công nghệ vật liệu": [
    "Nghiên cứu", "Tìm hiểu về vật liệu", "Tìm hiểu về công nghệ", "Tìm hiểu về hóa học", 
    "Tìm hiểu về vật lý học", "Chế tạo","Thiết kế", "Kỹ thuật" 
  ],

  "Điện lạnh - Điện tử - Điện - Tự động hóa": [
    "Thiết kế", "Lập trình", "Nghiên cứu", "Phân tích dữ liệu", "Chế tạo", "Sửa chữa",
    "Tìm hiểu về vật lý học", "Tìm hiểu về công nghệ", "Tìm hiểu về AI", "Kỹ thuật"
  ],

  "Du lịch - Khách sạn": [
    "Du lịch", "Khám phá", "Tổ chức sự kiện", "Trải nghiệm", "Chụp ảnh, quay video", "Tìm hiểu về địa lý học", 
    "Tìm hiểu về ngôn ngữ học", "Tìm hiểu về văn hóa", "Tham gia hoạt động tình nguyện"
  ],

  "Hàng hải - Thủy lợi - Thời tiết": [
    "Nghiên cứu", "Thiết kế", "Sửa chữa", "Phân tích dữ liệu", "Tìm hiểu về thủy văn học", "Tìm hiểu về hải dương học",
    "Tìm hiểu về vận tải"
  ],

  "Hàng không - Vũ trụ - Hạt nhân": [ 
    "Tìm hiểu về vật lý học", "Tìm hiểu về hóa học", "Tìm hiểu về công nghệ", "Tìm hiểu về hạt nhân",
    "Tìm hiểu về hàng không, vũ trụ", "Nghiên cứu", "Phân tích dữ liệu", "Thiết kế", "Chế tạo", "Kỹ thuật"
  ],

  "Kế toán - Kiểm toán": [
    "Kinh doanh", "Đọc sách", "Phân tích dữ liệu", "Tìm hiểu về tài chính", "Đầu tư"    
  ],

  "Kinh tế - Quản trị kinh doanh - Thương mại": [
    "Kinh doanh", "Đầu tư", "Phân tích dữ liệu", "Tìm hiểu về tài chính", "Nghiên cứu", "Sáng tạo nội dung",
    "Mua sắm", "Đọc sách", "Tổ chức sự kiện"
  ],

  "Luật - Tòa án": [
    "Tìm hiểu luật pháp", "Đọc sách", "Nghiên cứu", "Theo dõi tin tức", "Mạng xã hội", "Tìm hiểu về an ninh",
    "Tìm hiểu về chính trị", "Tranh luận"
  ],

  "Mỏ - Địa chất": [
    "Tìm hiểu về địa lý học", "Tìm hiểu về địa chất học", "Tìm hiểu về khoáng sản", "Nghiên cứu", "Phân tích dữ liệu",
    "Đọc sách", "Tìm hiểu về công nghệ", "Tìm hiểu về hóa học"
  ],

  "Mỹ thuật - Âm nhạc - Nghệ thuật": [
    "Vẽ tranh", "Ca hát", "Thiết kế", "Chụp ảnh, quay video", "Sáng tác", "Nhảy múa", "Chơi nhạc cụ", "Sưu tầm", "Chế tạo", "Tìm hiểu về nghệ thuật"
  ],

  "Ngoại giao - Ngoại ngữ": [
    "Đọc sách", "Tìm hiểu về văn hóa", "Tìm hiểu về ngôn ngữ học", "Tìm hiểu về ngoại giao", "Viết lách"
  ],

  "Ngoại thương - Xuất nhập khẩu - Kinh tế quốc tế": [
    "Kinh doanh", "Tìm hiểu về tài chính", "Tìm hiểu về ngoại giao", "Đọc sách", "Theo dõi tin tức", "Nhân sự - Hành chính",
    "Tổ chức sự kiện", "Đọc sách", "Tranh luận", "Tìm hiểu về chính trị", "Tìm hiểu về quản lý nhân sự"
  ],

  "Ô tô - Cơ khí - Chế tạo": [
    "Kỹ thuật", "Thiết kế", "Chế tạo", "Nghiên cứu", "Tìm hiểu về vật lý học", "Tìm hiểu về công nghệ", "Sửa chữa"
  ],

  "Sư phạm - Giáo dục": [
    "Đọc sách", "Viết lách", "Nghiên cứu", "Truyền tải kiến thức", "Trò chuyện, giao tiếp"
  ],

  "Tài chính - Ngân hàng - Bảo hiểm": [
    "Kinh doanh", "Tìm hiểu về tài chính", "Đọc sách", "Đầu tư", "Mua sắm", "Phân tích dữ liệu"
  ],

  "Tài nguyên - Môi trường": [
    "Tìm hiểu về sinh học", "Tham gia hoạt động tình nguyện", "Nghiên cứu"
  ],

  "Tâm lý": [
    "Đọc sách", "Nghiên cứu", "Tìm hiểu về tâm lý học"
  ],

  "Thể dục - Thể thao": [
    "Thể dục, thể thao", "Tìm hiểu về dinh dưỡng"
  ],

  "Thiết kế đồ họa - Game - Đa phương tiện": [
    "Thiết kế", "Lập trình", "Chơi game", "Nghiên cứu", "Phân tích dữ liệu",
    "Tìm hiểu về tin học", "Tìm hiểu về nghệ thuật", "Tìm hiểu về công nghệ",
    "Tìm hiểu về AI", "Vẽ tranh"
  ],

  "Thời trang - May mặc": [
    "Thiết kế", "Vẽ tranh", "Tìm hiểu về thời trang", "Tìm hiểu về công nghệ", "Chế tạo"
  ],

  "Thủy sản - Lâm nghiệp - Nông nghiệp": [
    "Tìm hiểu về nông học", "Tìm hiểu về lâm học", "Trồng cây", "Nghiên cứu", "Tham gia hoạt động tình nguyện", "Tìm hiểu về thủy văn học"
  ],

  "Toán học và thống kê": [
    "Đọc sách", "Phân tích dữ liệu", "Nghiên cứu"
  ],

  "Văn hóa - Chính trị - Khoa học xã hội": [
    "Đọc sách", "Tìm hiểu về chính trị", "Tìm hiểu về văn hóa", "Tìm hiểu về ngôn ngữ học", "Viết lách", "Theo dõi tin tức"
  ],

  "Xây dựng - Kiến trúc - Giao thông": [
    "Thiết kế", "Tìm hiểu về vật lý học", "Tìm hiểu về kiến trúc", "Tìm hiểu về vận tải", "Kỹ thuật"
  ],

  "Y - Dược": [
    "Nghiên cứu", "Phân tích dữ liệu", "Đọc sách", "Tìm hiểu về sinh học",
    "Tìm hiểu về hóa học", "Tìm hiểu về giải phẫu"
  ],
  
  "Khoa học tự nhiên khác": [
    "Tìm hiểu về địa lý học", "Tìm hiểu về vật lý học"
  ]
};

export default interestsByField;
