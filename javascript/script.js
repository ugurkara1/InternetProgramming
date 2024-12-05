//öğrenci bilgilerini tutacak bir dizi
let students = [];

//form gönderildiğinde yeni öğrenci ekle
document.getElementById("studentForm").addEventListener("submit", function(event) {
    // Buraya formun submit işlemleri için yapılacak işlemleri ekleyebilirsiniz.
    event.preventDefault(); // Formun sayfayı yenilemesini engellemek için
    // Örneğin, formdan gelen verileri alabilir ve işleyebilirsiniz.
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let grade = document.getElementById("grade").value;
    
    if (!isNaN(grade)) {
        let student = { firstname, lastname, grade };
        students.push(student);
        displayStudents();
    } else {
        alert("Geçersiz not girdisi.");
    }
});

// Öğrenci listesini oluşturacak fonksiyon
function displayStudents() {
    let studentsListDiv = document.getElementById("studentlist");
    studentsListDiv.innerHTML = "";
    students.forEach(function(student) {
        let studentDiv = document.createElement("div");
        studentDiv.textContent = `${student.firstname} ${student.lastname} - Not: ${student.grade}`;
        studentsListDiv.appendChild(studentDiv);
    });
}

