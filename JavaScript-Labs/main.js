/* Tương tác cho trang portfolio — JavaScript thuần (Lab 08 + 09) */
(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* Menu di động */
  var menuBtn = $(".menu-btn");
  var nav = $("#nav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  $$("#nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  /* Đánh dấu mục menu đang xem */
  var links = $$("#nav a");
  var sections = links.map(function (a) { return $(a.getAttribute("href")); });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { if (s) spy.observe(s); });

    /* Hiện dần nội dung khi cuộn */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* Đếm số trong thống kê */
  $$("[data-count]").forEach(function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var n = 0;
    var timer = setInterval(function () {
      n += Math.max(1, Math.round(target / 20));
      if (n >= target) { n = target; clearInterval(timer); }
      el.textContent = n;
    }, 45);
  });

  /* Tab kiến thức theo Lab */
  var tabs = $$(".tab");
  var panels = $$(".panel");
  function showTab(tab) {
    tabs.forEach(function (t) { t.setAttribute("aria-selected", t === tab); });
    panels.forEach(function (p) { p.classList.toggle("show", p.id === tab.getAttribute("aria-controls")); });
  }
  tabs.forEach(function (t) { t.addEventListener("click", function () { showTab(t); }); });

  /* Mở nhanh danh sách Exercise khi bấm nút trên thẻ Lab */
  $$("[data-open]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var d = document.getElementById(btn.getAttribute("data-open"));
      d.open = true;
      d.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  /* Mô phỏng giỏ hàng: cập nhật số lượng và tổng tiền (ý tưởng từ Exercise 8.9, 9.3) */
  var money = function (n) { return n.toLocaleString("vi-VN") + "đ"; };
  var qtyEls = $$(".item");
  function updateCart() {
    var sum = 0;
    qtyEls.forEach(function (row) {
      var price = Number(row.getAttribute("data-price"));
      var q = Number($("output", row).textContent);
      sum += price * q;
    });
    $("#cart-total").textContent = money(sum);
    $("#cart-note").textContent = sum >= 699000 ? "Đủ điều kiện miễn phí vận chuyển." : "Thêm " + money(699000 - sum) + " để được miễn phí vận chuyển.";
  }
  qtyEls.forEach(function (row) {
    var out = $("output", row);
    $$("button", row).forEach(function (b) {
      b.addEventListener("click", function () {
        var q = Number(out.textContent) + (b.getAttribute("data-d") === "+" ? 1 : -1);
        out.textContent = Math.max(0, Math.min(9, q));
        updateCart();
      });
    });
  });
  updateCart();

  /* Mô phỏng kiểm tra biểu mẫu đăng ký (ý tưởng từ Exercise 9.7, 9.8) */
  var form = $("#demo-form");
  var rules = {
    email: { re: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, bad: "Email chưa đúng định dạng, ví dụ: ten@email.com." },
    phone: { re: /^(0|\+84)\d{9}$/, bad: "Số điện thoại gồm 10 số, bắt đầu bằng 0 hoặc +84." },
    pass: { re: /^.{6,}$/, bad: "Mật khẩu cần ít nhất 6 ký tự." }
  };
  function check(input) {
    var r = rules[input.name];
    var msg = $("#msg-" + input.name);
    var empty = input.value.trim() === "";
    var good = !empty && r.re.test(input.value.trim());
    input.classList.toggle("ok", good);
    input.classList.toggle("bad", !good);
    msg.className = "msg " + (good ? "ok" : "bad");
    msg.textContent = good ? "Hợp lệ." : (empty ? "Trường này đang để trống." : r.bad);
    return good;
  }
  $$("input", form).forEach(function (input) {
    input.addEventListener("blur", function () { check(input); });
    input.addEventListener("input", function () { if (input.classList.contains("bad") || input.classList.contains("ok")) check(input); });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var all = $$("input", form).map(check).every(Boolean);
    var result = $("#form-result");
    result.className = "msg " + (all ? "ok" : "bad");
    result.textContent = all ? "Đăng ký thành công (mô phỏng, không gửi dữ liệu đi đâu)." : "Vui lòng sửa các trường báo lỗi trước khi gửi.";
  });

  /* Năm ở chân trang */
  $("#year").textContent = new Date().getFullYear();
})();
