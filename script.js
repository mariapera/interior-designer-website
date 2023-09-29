const menuIconBtn = document.querySelector('.menu-icon')
const navigation = document.querySelector('.navigation')
const navigationXBtn = document.querySelector('.x-btn')
const year = document.getElementById('year')

let start = false

year.textContent = new Date().getFullYear()

menuIconBtn.addEventListener('click', () => {
	navigation.classList.add('navigate')
})

navigationXBtn.addEventListener('click', () => {
	navigation.classList.remove('navigate')
})

window.addEventListener('scroll', () => {
	const about = document.querySelector('.about')
	const services = document.querySelector('.services')
	const portfolio = document.querySelector('.portfolio')
	const data = document.querySelector('.data')
	const nums = document.querySelectorAll('.num')

	if (window.scrollY >= 200) {
		about.classList.add('change')
	} else {
		about.classList.remove('change')
	}

	if (window.scrollY >= about.offsetTop + 200) {
		services.classList.add('change')
	} else {
		services.classList.remove('change')
	}

	if (window.scrollY >= services.offsetTop) {
		portfolio.classList.add('change')
	} else {
		portfolio.classList.remove('change')
	}

	if (window.scrollY >= data.offsetTop - 300) {
		if (!start) {
			nums.forEach(num => startCount(num))
		}
		start = true
	}
})

const startCount = el => {
	const max = Number(el.dataset.num)
	let counter = 0
	const countIndex = setInterval(() => {
		counter++
		el.textContent = counter
		if (counter === max) {
			clearInterval(countIndex)
		}
	}, 5)
}
