function showPwd(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {

        x.type = "text";
        el.className = 'fa fa-eye-slash ShowPwd mt-4';
    } else {

        x.type = "password";
        el.className = 'fa fa-eye ShowPwd mt-4';
    }
}


