document.title = "Irnanda";
const body = document.body;

body.append('Hello World')

const h1 = document.createElement('h1')
h1.textContent = '<marquee>Ini Adalah Element H1</marquee>'

const namaSaya = document.createElement('h2')
namaSaya.innerHTML = '<marquee>Irnanda Nanda</marquee>'

const Hobi = document.createElement('h3')
Hobi.innerText = '<marquee>Baca Buku</marquee>'

body.append(h1)
body.append(namaSaya)
body.append(Hobi)

