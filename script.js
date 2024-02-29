window.onscroll = function () {
	scrollFunction()
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.querySelector('.scroll-to-top').style.display = 'block'
	} else {
		document.querySelector('.scroll-to-top').style.display = 'none'
	}
}

// Po kliknięciu, przewiń stronę do góry
document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
	e.preventDefault()
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const sectionId = this.getAttribute('href').substring(1)
		const targetSection = document.getElementById(sectionId)

		// Ustaw przesunięcie na 40px dla ekranów szerszych niż 767px, a na mniejsze przesunięcie dla węższych ekranów
		const offset = window.matchMedia('(max-width: 767px)').matches ? 60 : 100 // Przykładowo, 20px dla węższych ekranów

		window.scrollTo({
			top: targetSection.offsetTop - offset, // Użyj zmiennej offset
			behavior: 'smooth',
		})
	})
})
