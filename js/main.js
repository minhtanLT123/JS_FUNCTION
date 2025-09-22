// chọn bài tập
let type = "";
function loadExercise(type) {

    let file = "";

    switch (type) {
        case "baiTap1":
            file = "./public/exercises/baiTap1.html";
            break;
        case "baiTap2":
            file = "./public/exercises/baiTap2.html";
            break;
        case "baiTap3":
            file = "./public/exercises/baiTap3.html";
            break;
        case "baiTap4":
            file = "./public/exercises/baiTap4.html";
            break;
        default:
            alert("Không tìm thấy bài tập!");
            return;
    }
    //load trang con bằng fetch
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Không thể tải file HTML");
            return response.text();
        })
        .then(html => {
            document.getElementById("exerciseContainer").innerHTML = html;
        })
        .catch(error => {
            console.error("Lỗi:", error);
            alert("Đã xảy ra lỗi khi tải bài tập.");
        });
    console.log(type);
}

// bài tập 1 - quản lý tuyển sinh.
function tinhDiem() {
    const diemChuan = document.getElementById("diemchuan").value * 1;
    const khuVuc = document.getElementById("khuvucInput").value;
    const doiTuong = document.getElementById("doituongInput").value;
    const diemMon_1 = document.getElementById("diemmon1").value * 1;
    const diemMon_2 = document.getElementById("diemmon2").value * 1;
    const diemMon_3 = document.getElementById("diemmon3").value * 1;

    console.log(diemChuan);
    console.log(khuVuc);
    console.log(doiTuong);
    console.log(diemMon_1);
    console.log(diemMon_2);
    console.log(diemMon_3);
    if (!khuVuc || !doiTuong || !doiTuong) {
        alert("Vui lòng điền đầy đủ thông tin!")
    }
    // Điểm ưu tiên theo khu vực
    let diemUuTienKV = 0;
    if (khuVuc === "A") diemUuTienKV = 2;
    else if (khuVuc === "B") diemUuTienKV = 1;
    else if (khuVuc === "C") diemUuTienKV = 0.5;

    // hình tuyển sinh sau khi có kết quả
    const tuyensinhPic = document.getElementById("tuyensinhPic");

    // Điểm ưu tiên theo đối tượng
    let diemUuTienDT = 0;
    if (doiTuong === "1") diemUuTienDT = 2.5;
    else if (doiTuong === "2") diemUuTienDT = 1.5;
    else if (doiTuong === "3") diemUuTienDT = 1;

    const tongDiem = diemMon_1 + diemMon_2 + diemMon_3 + diemUuTienKV + diemUuTienDT;
    const resultEl = document.getElementById("result");
    if (
        diemMon_1 === 0 ||
        diemMon_2 === 0 ||
        diemMon_3 === 0
    ) {
        resultEl.innerHTML = `<span> Rớt vì có môn điểm 0</span>`;
        tuyensinhPic.src = "/images/tryagain.jpg";

    } else if (tongDiem >= diemChuan) {
        resultEl.innerHTML = `<span> Trúng tuyển! Tổng điểm: ${tongDiem}</span>`;
        tuyensinhPic.src = "/images/congratulation.jpg";
    } else {
        resultEl.innerHTML = `<span> Rớt! Tổng điểm: ${tongDiem}</span>`;
        tuyensinhPic.src = "/images/tryagain.jpg";
    }

}

// bài tập 2 - tính tiền điện
function tinhTienDien() {
    let nguoiDung = document.getElementById("name_td").value;
    const soKw = document.getElementById("sokw").value * 1;
    let tienDien = document.getElementById("result_td") * 1;
    if (!nguoiDung || !soKw) {
        alert("Vui lòng điền đầy đủ thông tin!")
    }

    if (soKw <= 50) { // 50 Kw đầu - tổng 50 Kw
        tienDien = 500 * soKw;

    }
    else if (50 < soKw && soKw <= 100) { // 50 Kw kế (tổng 100 Kw)
        tienDien = (500 * 50) + (650 * (soKw - 50));
    }
    else if (100 < soKw && soKw <= 200) {// 100 Kw kế (tổng 200 Kw)
        tienDien = (500 * 50) + (650 * 50) + (850 * (soKw - 100));

    }
    else if (200 < soKw && soKw <= 350) {// 150 Kw kế (tổng 350 Kw)
        tienDien = (500 * 50) + (650 * 50) + (850 * 150) + (1100 * (soKw - 200));

    }
    else if (350 < soKw) { //còn lại
        tienDien = (500 * 50) + (650 * 50) + (850 * 150) + (1100 * 150) + (1300 * (soKw - 350));
    }
    else {
        console.log("vui lòng nhập số điện ");
    }
    console.log(tienDien);
    console.log(nguoiDung);
    showname_td.innerHTML = `<span> Họ Tên Khách hàng:  ${nguoiDung} -  </span>`;
    result_td.innerHTML = `<span> có tổng tiền điện là:  ${tienDien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </span>`;

}

// bài tập 3: tính thuế thu nhập cá Nhân

function tinhThueTNCN() {
    const nguoiTinhThue = document.getElementById("name_tncn").value;
    const thuNhap = document.getElementById("thunhap").value * 1;
    const nguoiPT = document.getElementById("nguoiphuthuoc").value * 1;
    let thueTNCN = 0;
    if (!nguoiTinhThue || !thuNhap || !nguoiPT) {
        alert("vui lòng nhập đầy đủ thông tin!")
    }

    if (thuNhap <= 60) { // đến 60 triệu - 5(%)
        thueTNCN = (thuNhap * 0.05) - nguoiPT * 1.6;

    }
    else if (60 < thuNhap && thuNhap <= 120) { //Trên 60 đến 120 - 10(%)
        thueTNCN = (thuNhap * 0.1) - nguoiPT * 1.6;
    }
    else if (120 < thuNhap && thuNhap <= 210) { //Trên 120 đến 210 - 15(%)
        thueTNCN = (thuNhap * 0.15) - nguoiPT * 1.6;
    }
    else if (210 < thuNhap && thuNhap <= 384) { //Trên 210 đến 384 -20(%)
        thueTNCN = (thuNhap * 0.2) - nguoiPT * 1.6;
    }
    else if (384 < thuNhap && thuNhap <= 624) { //Trên 384 đến 624 - 25(%)
        thueTNCN = (thuNhap * 0.25) - nguoiPT * 1.6;
    }
    else if (624 < thuNhap && thuNhap <= 960) { //Trên 624 đến 960 - 30(%)
        thueTNCN = (thuNhap * 0.3) - nguoiPT * 1.6;
    }
    else if (960 < thuNhap) {//Trên 960 - 35(%)
        thueTNCN = (thuNhap * 0.35) - nguoiPT * 1.6;


    }
    showname_tncd.innerHTML = `<span> Họ Tên Khách hàng:  ${nguoiTinhThue} -  </span>`;
    result_ttncn.innerHTML = `<span> có thuế thu nhập cá nhân là:  ${thueTNCN.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </span>`;

}

// bài tập 4: tính tiền cáp
function tinhTienCap() {
    const loaiKhach = document.getElementById("khachHangSelect").value;
    const maKH = document.getElementById("makh").value;
    const sokenhCC = document.getElementById("sokenhcc").value * 1;


    let tongTien = 0;

    if (loaiKhach === "Nhà Dân") {
        tongTien = 4.5 + 20.5 + (7.5 * sokenhCC);

    }
    else if (loaiKhach === "Doanh nghiệp") {
        let socongketnoi = document.getElementById("soketnoi").value * 1;
        let tienthem = (socongketnoi - 10) * 5;
        tongTien = 15 + 75 + (50 * sokenhCC) + tienthem;

    }
    else {
        alert("Vui lòng chọn loại khách hàng");
    }
    document.getElementById("showmakh").innerHTML = `Mã khách hàng: ${maKH} ; `;
    document.getElementById("tongtiencap").innerHTML = `Tổng tiền cáp là: ${tongTien.toLocaleString('vi-VN', { style: 'currency', currency: 'USD' })}`;


}


// xử lý phần giao diện thẻ input số kết nối ở bài tập 4 tính tiền cap
function toggleConnectionInput() {
    const customerType = document.getElementById("khachHangSelect").value;
    const connectionInput = document.getElementById("soketnoi");

    if (customerType === "Doanh nghiệp") {
        connectionInput.classList.remove("hidden");
    } else {
        connectionInput.classList.add("hidden");
    }
}

// xử lý xem đề bài, khi click vào dấu mở rộng
function xemdebai() {
    const xemdebaiSelect = document.getElementById("xemdebaiSelect").value;
    const debai = document.getElementById("debai");
    if (xemdebaiSelect === "open") {
        debai.classList.remove("hidden");
    } else {
        debai.classList.add("hidden");
    }

}


