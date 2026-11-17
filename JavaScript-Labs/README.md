# JavaScript Labs – Phát triển ứng dụng TMĐT

Tổng hợp ba bài thực hành JavaScript (Chương 4) của môn Phát triển ứng dụng thương mại điện tử.

## 1. Thông tin sinh viên

| Mục | Nội dung |
|---|---|
| Họ và tên | Vũ Ngọc Minh Thư |
| Mã số sinh viên | 31241026051 |
| Lớp học phần | EE0002 |
| Giảng viên | TS. Nguyễn Mạnh Tuấn |
| GitHub | https://github.com/thuvu1105 |
| Repository | https://github.com/thuvu1105/ecommerce_ui_improvement |

## 2. Mục tiêu thực hiện

- Lab 08: nắm nền tảng ngôn ngữ JavaScript (biến, hàm, mảng, đối tượng) và gỡ lỗi bằng Console.
- Lab 09: dùng DOM và sự kiện để thay đổi trang web theo thao tác của người dùng, kiểm tra dữ liệu biểu mẫu.
- Lab 10: dùng jQuery để chọn phần tử, tạo hiệu ứng và lấy dữ liệu bằng GET request.
- Vận dụng các kỹ thuật trên cho chức năng của website thương mại điện tử như giỏ hàng, biểu mẫu đăng ký, xem nhanh sản phẩm.

## 3. Cấu trúc thư mục

```
JavaScript-Labs/
├── index.html          Trang chủ portfolio (thông tin cá nhân, liên kết 3 Lab)
├── README.md
├── css/style.css       Giao diện trang chủ
├── js/main.js          Tương tác trang chủ
├── images/avatar.jpg   Ảnh đại diện
├── Lab08/              JavaScript 1: Language Foundations
│   ├── lab08-walkthrough02.html … 11.html, exercise.html
│   ├── js/  css/  images/  flags/
├── Lab09/              JavaScript 2: DOM and Events
│   ├── lab09-walkthrough01.html … 08.html
│   ├── js/  css/  images/  flags/
└── Lab10/              JavaScript 3: jQuery
    ├── lab10-walkthrough01.html … 10.html
    ├── js/ (gồm jquery-3.1.1.min.js)  css/  images/
```

## 4. Nội dung từng Lab

| Lab | Nội dung | Exercise | Trang chạy |
|---|---|---|---|
| 08 | Nhúng JS vào HTML, Console, String/Date/Math, Array, Function, Object, mảng đối tượng | 8.1 – 8.11 và bài tập tổng hợp | `Lab08/` |
| 09 | Chọn và sửa phần tử DOM, tạo/xóa phần tử, sự kiện click/mouseover/mouseout/load, focus/blur, kiểm tra biểu mẫu, Debugger | 9.1 – 9.8 | `Lab09/` |
| 10 | Cài jQuery, Selectors, sự kiện, chèn phần tử, hiệu ứng fade/slide/animate, `$.get()`, jqXHR | 10.1 – 10.10 | `Lab10/` |

Bảng đối chiếu Exercise với file:

| Exercise | File |
|---|---|
| 8.2 – 8.5 | `Lab08/lab08-walkthrough02.html` |
| 8.6 / 8.7 / 8.8 / 8.9 / 8.10 / 8.11 | `lab08-walkthrough06 / 07 / 08 / 09 / 10 / 11.html` |
| Bài tập tổng hợp | `Lab08/exercise.html` |
| 9.1 / 9.2 / 9.3 / 9.4 | `lab09-walkthrough01 / 02 / 03 / 04.html` |
| 9.5 – 9.6 | `Lab09/lab09-walkthrough05.html` |
| 9.7 / 9.8 | `lab09-walkthrough07 / 08.html` |
| 10.1 – 10.2 | `Lab10/lab10-walkthrough01.html` |
| 10.3 – 10.10 | `lab10-walkthrough03 … 10.html` |

Exercise 8.1 (bật/tắt JavaScript trên trình duyệt) không có trang riêng, minh chứng nằm trong file Word nộp kèm.

## 5. GitHub Pages

- Trang chủ: https://thuvu1105.github.io/ecommerce_ui_improvement/JavaScript-Labs/
- Lab 08: https://thuvu1105.github.io/ecommerce_ui_improvement/JavaScript-Labs/Lab08/
- Lab 09: https://thuvu1105.github.io/ecommerce_ui_improvement/JavaScript-Labs/Lab09/
- Lab 10: https://thuvu1105.github.io/ecommerce_ui_improvement/JavaScript-Labs/Lab10/

## 6. Hướng dẫn truy cập

1. Mở trang chủ ở đường dẫn GitHub Pages phía trên.
2. Ở mục **Các bài Lab**, bấm **Vào Lab 08 / 09 / 10** để mở danh sách Exercise.
3. Bấm vào từng Exercise để chạy trang tương ứng. Với những bài dùng Console hoặc Debugger (8.5, 9.6), mở DevTools bằng phím F12.
4. Bấm **Mã nguồn** trên mỗi thẻ Lab để xem thư mục tương ứng trên GitHub.
5. Chạy trên máy: tải repository về và mở `JavaScript-Labs/index.html` bằng trình duyệt.