let dropdownsHeaders = document.querySelectorAll('.filter_header')
let dropdownsBodys = document.querySelectorAll('.filter_body')
let dropdownsIcons = document.querySelectorAll('.filter_dropdown_icon')
let toggleButtons = document.querySelectorAll('.toggle-button')
let toggleCheckboxes = document.querySelectorAll('.toggle-checkbox')
dropdownsHeaders.forEach((el, ind) => {
	el.addEventListener('click', () => {
		dropdownsBodys[ind].classList.toggle('filter_hidden')
		dropdownsHeaders[ind].classList.toggle('filter_header-border')
		dropdownsIcons[ind].classList.toggle('filter_dropdown_icon_transform')
	})
})

toggleButtons.forEach((el, ind) => {
	el.addEventListener('click', () => {
		toggleCheckboxes[ind].checked = !toggleCheckboxes[ind].checked
	})
})