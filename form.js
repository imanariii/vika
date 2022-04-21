function mes_go() {
    let form = document.forms.mess; //возьмет все теги из тега с именем mess
    let noMail = form.m_to.value.indexOf("@") == -1; //если в названии почты не было @ то покажет ошибку в alert
    if (noMail) {
        alert("Введите корректный адрес электронной почты");
        return false;
    }
    // берем у form имя (nsmp,tel,strana,let) если их значение(value)  равно ничему,то показывает ошибку в alert
    let noNameSurnamePatronymic = form.nmsp.value == "";
    if (noNameSurnamePatronymic) {
        alert("Напишите корректное ФИО");
        return false;
    }
    let tel = form.tel.value == "";
    if (tel) {
        alert("Введите номер")
        return false;
    }
    let strana1 = form.strana.value;
    if (strana1 == "") {
        alert("Напишите страну");
        return false;
    }
    let textarea = form.let.value;
    if (textarea == "") {
        alert("Напишите комментарий");
        return false;
    }
}