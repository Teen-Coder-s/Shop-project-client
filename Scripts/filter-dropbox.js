let dropdownsHeader = document.querySelectorAll('.filter_header')
let dropdownsBody = document.querySelectorAll('.filter_body')
let dropdownsIcon = document.querySelectorAll('.filter_dropdown_icon')
dropdownsHeader.forEach((el, ind) => {
	el.addEventListener('click', () => {
		dropdownsBody[ind].classList.toggle('filter_hidden')
		dropdownsHeader[ind].classList.toggle('filter_header-border')
		dropdownsIcon[ind].classList.toggle('filter_dropdown_icon_transform')
	})
})