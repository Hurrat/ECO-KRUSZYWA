document.addEventListener('DOMContentLoaded', function () {
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

	// Przewijanie do góry
	document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
		e.preventDefault()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})

	// Płynne przewijanie do sekcji
	document.querySelectorAll('.smooth-scroll').forEach(function (anchor) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const sectionId = this.getAttribute('href').substring(1)
			const targetSection = document.getElementById(sectionId)

			const offset = window.innerWidth > 767 ? 100 : 60

			window.scrollTo({
				top: targetSection.offsetTop - offset,
				behavior: 'smooth',
			})
		})
	})

	// Obsługa modalnego okna z badaniem
	var modal = document.getElementById('myModal')
	var btn = document.getElementById('openModalBtn')
	var span = document.getElementsByClassName('close')[0]
	var modalImg = document.getElementById('img01')

	btn.onclick = function () {
		modal.style.display = 'block'
		modalImg.src = 'media/graphics/analiza.jpg'
	}

	function closeModal() {
		modal.style.display = 'none'
	}

	span.onclick = function () {
		closeModal()
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			closeModal()
		}
	}
})
