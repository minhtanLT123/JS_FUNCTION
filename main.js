
let type = "";
let html = "";
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
