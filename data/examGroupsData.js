const examGroupsData = [
  { id: 1, group: "A00", subjects: "Toán, Vật lí, Hóa học" },
  { id: 2, group: "A01", subjects: "Toán, Vật lí, Tiếng Anh" },
  { id: 3, group: "A02", subjects: "Toán, Vật lí, Sinh học" },
  { id: 4, group: "A03", subjects: "Toán, Vật lí, Lịch sử" },
  { id: 5, group: "A04", subjects: "Toán, Vật lí, Địa lí" },
  { id: 6, group: "A05", subjects: "Toán, Hóa học, Lịch sử" },
  { id: 7, group: "A06", subjects: "Toán, Hóa học, Địa lí" },
  { id: 8, group: "A07", subjects: "Toán, Lịch sử, Địa lí" },
  { id: 9, group: "A08", subjects: "Toán, Lịch sử, GDKTPL" },
  { id: 10, group: "A09", subjects: "Toán, Địa lý, GDKTPL" },
  { id: 11, group: "A10", subjects: "Toán, Vật lí, GDKTPL" },
  { id: 12, group: "A11", subjects: "Toán, Hóa học, GDKTPL" },
  { id: 13, group: "B00", subjects: "Toán, Hóa học, Sinh học" },
  { id: 14, group: "B02", subjects: "Toán, Sinh học, Địa lí" },
  { id: 15, group: "B03", subjects: "Toán, Sinh học, Ngữ văn" },
  { id: 16, group: "B04", subjects: "Toán, Sinh học, GDKTPL" },
  { id: 17, group: "B08", subjects: "Toán, Sinh học, Tiếng Anh" },
  { id: 18, group: "C00", subjects: "Ngữ văn, Lịch sử, Địa lí" },
  { id: 19, group: "C01", subjects: "Ngữ văn, Toán, Vật lí" },
  { id: 20, group: "C02", subjects: "Ngữ văn, Toán, Hóa học" },
  { id: 21, group: "C03", subjects: "Ngữ văn, Toán, Lịch sử" },
  { id: 22, group: "C04", subjects: "Ngữ văn, Toán, Địa lí" },
  { id: 23, group: "C05", subjects: "Ngữ văn, Vật lí, Hóa học" },
  { id: 24, group: "C08", subjects: "Ngữ văn, Hóa học, Sinh học" },
  { id: 25, group: "C12", subjects: "Ngữ văn, Lịch sử, Sinh học" },
  { id: 26, group: "C13", subjects: "Ngữ văn, Sinh học, Địa lí" },
  { id: 27, group: "C14", subjects: "Ngữ văn, Toán, GDKTPL" },
  { id: 28, group: "C17", subjects: "Ngữ văn, Hóa học, GDKTPL" },
  { id: 29, group: "C19", subjects: "Ngữ văn, Lịch sử, GDKTPL" },
  { id: 30, group: "C20", subjects: "Ngữ văn, Địa lí, GDKTPL" },
  { id: 31, group: "D01", subjects: "Ngữ văn, Toán, Tiếng Anh" },
  { id: 32, group: "D02", subjects: "Ngữ văn, Toán, Tiếng Nga" },
  { id: 33, group: "D03", subjects: "Ngữ văn, Toán, Tiếng Pháp" },
  { id: 34, group: "D04", subjects: "Ngữ văn, Toán, Tiếng Trung" },
  { id: 35, group: "D05", subjects: "Ngữ văn, Toán, Tiếng Đức" },
  { id: 36, group: "D06", subjects: "Ngữ văn, Toán, Tiếng Nhật" },
  { id: 37, group: "D07", subjects: "Toán, Hóa học, Tiếng Anh" },
  { id: 38, group: "D08", subjects: "Toán, Sinh học, Tiếng Anh" },
  { id: 39, group: "D09", subjects: "Toán, Lịch sử, Tiếng Anh" },
  { id: 40, group: "D10", subjects: "Toán, Địa lí, Tiếng Anh" },
  { id: 41, group: "H00 (Môn năng khiếu)", subjects: "Ngữ văn, Năng khiếu vẽ Nghệ thuật 1, Năng khiếu vẽ Nghệ thuật 2" },
  { id: 42, group: "H01 (Môn năng khiếu)", subjects: "Toán, Ngữ văn, Vẽ Mỹ thuật" },
  { id: 43, group: "M00 (Môn năng khiếu)", subjects: "Ngữ văn, Toán, Đọc diễn cảm, Hát" },
  { id: 44, group: "M01 (Môn năng khiếu)", subjects: "Ngữ văn, Lịch sử, Năng khiếu" },
  { id: 45, group: "N00 (Môn năng khiếu)", subjects: "Ngữ văn, Năng khiếu Âm nhạc 1, Năng khiếu Âm nhạc 2" },
  { id: 46, group: "N01 (Môn năng khiếu)", subjects: "Ngữ văn, xướng âm, biểu diễn nghệ thuật" },
  { id: 47, group: "T00 (Môn năng khiếu)", subjects: "Toán, Sinh học, Năng khiếu Thể dục thể thao" },
  { id: 48, group: "T01 (Môn năng khiếu)", subjects: "Toán, Ngữ văn, Năng khiếu Thể dục thể thao" },
  { id: 49, group: "V00 (Môn năng khiếu)", subjects: "Toán, Vật lí, Vẽ Hình họa mỹ thuật" },
  { id: 50, group: "V01 (Môn năng khiếu)", subjects: "Toán, Ngữ văn, Vẽ Hình họa mỹ thuật" },
  { id: 51, group: "Toán, Anh, Tin (Tổ hợp môn mới 2025)", subjects: "Toán, Anh, Tin" },
  { id: 52, group: "Toán, Văn, Tin (Tổ hợp môn mới 2025)", subjects: "Toán, Văn, Tin" },
  { id: 53, group: "Toán, Lí, Tin (Tổ hợp môn mới 2025)", subjects: "Toán, Lí, Tin" },
  { id: 54, group: "Toán, Lí, Công nghệ (Tổ hợp môn mới 2025)", subjects: "Toán, Lí, Công nghệ" },
  { id: 55, group: "Toán, Hóa, Công nghệ (Tổ hợp môn mới 2025)", subjects: "Toán, Hóa, Công nghệ" },
  { id: 56, group: "Toán, Anh, Công nghệ (Tổ hợp môn mới 2025)", subjects: "Toán, Anh, Công nghệ" }
];

export default examGroupsData;
