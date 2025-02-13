const skillsByField = {
  "Báo chí - Marketing - Quảng cáo - PR": [
    "Khả năng diễn đạt tốt", "Khả năng giao tiếp tốt", "Khả năng phân tích tốt",
    "Sáng tạo", "Tư duy logic"
  ],
  "Bác sĩ thú y": [
    "Tỉ mỉ, cẩn thận", "Khả năng quan sát tốt", "Khả năng phân tích tốt", "Có trách nhiệm"
  ],
  "Công an - Quân đội": [
    "Sáng tạo", "Khả năng quan sát tốt", "Khả năng phân tích tốt", "Thể lực tốt",
    "Kỷ luật", "Có trách nhiệm"
  ],
  "Công nghệ chế biến thực phẩm": [
    "Tỉ mỉ, cẩn thận", "Nấu ăn ngon", "Sáng tạo"
  ],
  "Công nghệ In - Giấy": [
    "Khả năng phân tích tốt", "Tỉ mỉ, cẩn thận"
  ],
  "Công nghệ sinh - Hóa": [
    "Khả năng quan sát tốt", "Khả năng phân tích tốt", "Tỉ mỉ, cẩn thận",
    "Tư duy logic", "Sáng tạo"
  ],
  "Công nghệ thông tin - Tin học": [
    "Tư duy logic", "Sáng tạo", "Tỉ mỉ, cẩn thận", "Khả năng phân tích tốt"
  ],

"Công nghệ vật liệu": [
    "Khả năng phân tích tốt", "Khả năng quan sát tốt", "Sáng tạo", "Tỉ mỉ, cẩn thận"   
  ],

  "Điện lạnh - Điện tử - Điện - Tự động hóa": [
    "Tư duy logic", "Sáng tạo", "Tỉ mỉ, cẩn thận", "Khả năng phân tích tốt", "Khả năng quan sát tốt"
  ],

  "Du lịch - Khách sạn": [
    "Khả năng diễn đạt tốt", "Khả năng giao tiếp tốt", "Thể lực tốt", "Khả năng quản lý tốt"
  ],

  "Hàng hải - Thủy lợi - Thời tiết": [
    "Khả năng phân tích tốt", "Khả năng quan sát tốt", "Thể lực tốt", "Tỉ mỉ, cẩn thận"
  ],

  "Hàng không - Vũ trụ - Hạt nhân": [ 
    "Tư duy logic", "Khả năng phân tích tốt", "Khả năng quan sát tốt", "Sáng tạo", "Tỉ mỉ, cẩn thận"
  ],

  "Kế toán - Kiểm toán": [
    "Khả năng phân tích tốt", "Khả năng quan sát tốt", "Tư duy logic", "Tỉ mỉ, cẩn thận", "Có trách nhiệm"
  ],

  "Kinh tế - Quản trị kinh doanh - Thương mại": [
    "Tư duy logic", "Khả năng giao tiếp tốt", "Khả năng phân tích tốt", "Khả năng quan sát tốt", "Khả năng diễn đạt tốt"
  ],

  "Luật - Tòa án": [
    "Tư duy logic", "Khả năng giao tiếp tốt", "Khả năng diễn đạt tốt", "Khả năng phân tích tốt", "Khả năng ghi nhớ tốt"
  ],

  "Mỏ - Địa chất": [
    "Thể lực tốt", "Khả năng quan sát tốt", "Khả năng phân tích tốt", "Tư duy logic"
  ],

  "Mỹ thuật - Âm nhạc - Nghệ thuật": [
    "Năng khiếu sáng tác", "Hội họa", "Sáng tạo", "Khả năng cảm thụ nghệ thuật tốt", "Tỉ mỉ, cẩn thận", "Khả năng quan sát tốt"
  ],

  "Ngoại giao - Ngoại ngữ": [
    "Khả năng giao tiếp tốt", "Khả năng diễn đạt tốt", "Khả năng ghi nhớ tốt", "Hiểu biết về văn hóa"
  ],

  "Ngoại thương - Xuất nhập khẩu - Kinh tế quốc tế": [
    "Khả năng quản lý tốt", "Khả năng giao tiếp tốt", "Tư duy logic"
  ],

  "Ô tô - Cơ khí - Chế tạo": [
    "Sáng tạo", "Tỉ mỉ, cẩn thận", "Khả năng quan sát tốt", "Thể lực tốt"
  ],

  "Sư phạm - Giáo dục": [
    "Khả năng diễn đạt tốt", "Khả năng giao tiếp tốt", "Khả năng phân tích tốt", "Khả năng quản lý tốt", "Sáng tạo", "Tỉ mỉ, cẩn thận"
  ],

  "Tài chính - Ngân hàng - Bảo hiểm": [
    "Khả năng diễn đạt tốt", "Khả năng giao tiếp tốt", "Khả năng phân tích tốt", "Khả năng quản lý tốt", "Sáng tạo", "Tỉ mỉ, cẩn thận"
  ],

  "Tài nguyên - Môi trường": [
    "Khả năng phân tích tốt", "Khả năng quan sát tốt", "Tư duy logic", "Kỷ luật", "Có trách nhiệm"
  ],

  "Tâm lý": [
    "Khả năng giao tiếp tốt", "Khả năng phân tích tốt", "Khả năng diễn đạt tốt", "Tư duy logic"
  ],

  "Thể dục - Thể thao": [
    "Thể lực tốt", "Kỷ luật", "Có trách nhiệm"
  ],

  "Thiết kế đồ họa - Game - Đa phương tiện": [
    "Sáng tạo", "Hội họa", "Tư duy logic", "Khả năng quan sát tốt",
    "Khả năng phân tích tốt", "Tỉ mỉ cẩn thận"
  ],

  "Thời trang - May mặc": [
    "Sáng tạo", "Hội họa", "Tỉ mỉ cẩn thận", "Khả năng quan sát tốt"  
  ],

  "Thủy sản - Lâm nghiệp - Nông nghiệp": [
    "Khả năng quan sát tốt", "Khả năng phân tích tốt", "Có trách nhiệm", "Tỉ mỉ, cẩn thận"
  ],

  "Toán học và thống kê": [
    "Khả năng phân tích tốt", "Tư duy logic", "Khả năng quan sát tốt", "Sáng tạo", "Có trách nhiệm"
  ],

  "Văn hóa - Chính trị - Khoa học xã hội": [
    "Hiểu biết về văn hóa", "Khả năng giao tiếp tốt", "Khả năng diễn đạt tốt", "Khả năng quản lý tốt"
  ],

  "Xây dựng - Kiến trúc - Giao thông": [
    "Thể lực tốt", "Hội họa", "Sáng tạo", "Tỉ mỉ, cẩn thận", "Khả năng phân tích tốt", "Khả năng quan sát tốt"
  ],

  "Y - Dược": [
    "Khả năng phân tích tốt", "Có trách nhiệm", "Kỷ luật",
    "Khả năng quan sát tốt", "Sáng tạo", "Tỉ mỉ, cẩn thận"
  ],
};

export default skillsByField;
