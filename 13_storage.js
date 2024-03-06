// Storage : Session = ปิด browser หรือ ปืดแท็บ ข้อมูลหาย / local = ข้อมูลจะไม่หาย
let note = document.getElementById('note')

note.addEventListener('input', (e) => {
    localStorage.setItem('note', e.target.value)
})

let savedText = localStorage.getItem('note')
if (savedText) {
    note.value = savedText
}