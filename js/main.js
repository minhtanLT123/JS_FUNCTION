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
