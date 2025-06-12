const showcoupons = () => {
    setTimeout(function () {
        document.getElementById("coupons").style.display = "block"
        document.getElementsByTagName("section")[0].style.opacity = ".3"
    }, 5000)
}
const closecoupons = () => {
    document.getElementById("coupons").style.display = "none"
//     document.getElementsByTagName("section")[0].style.opacity = "1"
}
