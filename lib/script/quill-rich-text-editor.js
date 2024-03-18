let richText = new Quill("#editor", {
  theme: "snow",
  placeholder: "Enter any text",
  modules: {
    history: {
      delay: 2500,
      userOnly: true,
    },
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  },
});

let savedTextKey = 'savedText'
let savedText = localStorage.getItem(savedTextKey);
if (savedText) {
  let savedDelta = JSON.parse(savedText); // text to JSON
  richText.setContents(savedDelta);
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let delta = richText.getContents();
  localStorage.setItem(savedTextKey, JSON.stringify(delta)); // JSON.stringify = รับเป็น obj แต่เก็บ str เพราะ localStorage
  // console.log(richText.getContents());
  // console.log(richText.root.innerHTML);
});

document.querySelector('#clear').addEventListener('click', () => {
  localStorage.removeItem(savedTextKey)
  richText.setContents()
})
