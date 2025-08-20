let text = "I am a long STRING of TEXT. This is sentence number TWO.";
let splitArr = text.toLowerCase().split(".");

      splitArr = splitArr.map((item) => {
        if (item.length === 0) {
            return ""
        }  else {
            item = item.trim();
            return item[0].toUpperCase() + item.substring(1);
        }

      }).join(". ").trim();

console.log(splitArr);
