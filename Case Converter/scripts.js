const textarea = document.getElementById("text");
const buttonUpper = document.getElementById("upper-case");
const buttonLower = document.getElementById("lower-case");
const buttonProper = document.getElementById("proper-case");
const buttonSentence = document.getElementById("sentence-case");
const buttonSave = document.getElementById("save-text-file");

buttonUpper.addEventListener("click", () => {
    textarea.value = textarea.value.toUpperCase();
});

buttonLower.addEventListener("click", () => {
    textarea.value = textarea.value.toLowerCase();
});

buttonProper.addEventListener("click", () => {
    //First letter of every word is upper case.
    let text = textarea.value;
    let splitArr = text.toLowerCase().split(" ");

    textarea.value = splitArr
        .map((item) => {
            return item[0].toUpperCase() + item.substring(1);
        })
        .join(" ");
});

buttonSentence.addEventListener("click", () => {
    //First letter of a sentence is upper case.
    let text = textarea.value;
    let splitArr = text.toLowerCase().split(".");

    textarea.value = splitArr
        .map((item) => {
            if (item.length === 0) {
                return "";
            } else {
                item = item.trim();
                return item[0].toUpperCase() + item.substring(1);
            }
        })
        .join(". ")
        .trim();
});

buttonSave.addEventListener("click", () => {
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

// Start file download.
    download("text.txt",textarea.value);
});