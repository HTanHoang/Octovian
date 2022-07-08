const $ = document.querySelector.bind(document);

const menuClose = $(".modal-closed");
const menuList = $(".header__menu-modal");
const menuBtn = $(".header__menu");

menuBtn.addEventListener("click", function () {
	menuList.classList.add("active");
});

menuClose.addEventListener("click", function () {
	$(".header__menu-modal.active").classList.remove("active");
});
