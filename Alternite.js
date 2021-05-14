
        const links = Array.from(document.querySelectorAll('.link'))
        const sections = Array.from(document.querySelectorAll('.section'))

        links.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                item.classList.add('active');

                links.forEach((link, i) => {
                    if(i != index) link.classList.remove('active')
                })

                sections[index].classList.add('active')

                sections.forEach((s, i) => {
                    if(i != index) s.classList.remove('active')
                })
            })
        })

