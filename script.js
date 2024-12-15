const readMore = document.getElementById("readMore");
    const extraContent = document.getElementById("extraContent");

    readMore.onclick = () => {
      if (extraContent.style.display === "none") {
        extraContent.style.display = "inline"; // Show the extra content
        readMore.textContent = "Read Less"; // Change link text
      } else {
        extraContent.style.display = "none"; // Hide the extra content
        readMore.textContent = "Read More"; // Reset link text
      }
    };

const extraContent1= document.getElementById("extraContent1");
const readMore1 = document.getElementById("readMore1");
readMore1.onclick = () => {
    if(extraContent1.style.display === "none")
 {
    extraContent1.style.display="inline";
    readMore1.textContent="ReadLess"
    }
    else{
     extraContent1.style.display="none"
     readMore1.textContent="ReadMore"
    }
}


const extraContent2= document.getElementById("extraContent2");
const readMore2 = document.getElementById("readMore2");
readMore2.onclick = () => {
    if(extraContent2.style.display === "none")
 {
    extraContent2.style.display="inline";
    readMore2.textContent="ReadLess"
    }
    else{
     extraContent2.style.display="none"
     readMore2.textContent="ReadMore"
    }
}

const extraContent3= document.getElementById("extraContent3");
const readMore3 = document.getElementById("readMore3");
readMore3.onclick = () => {
    if(extraContent3.style.display === "none")
 {
    extraContent3.style.display="inline";
    readMore3.textContent="ReadLess"
    }
    else{
     extraContent3.style.display="none"
     readMore3.textContent="ReadMore"
    }
}