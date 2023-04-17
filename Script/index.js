window.onload = function () {
    const tagsDetails = document.querySelectorAll("details");
    for (let i = 0; i < tagsDetails.length; i++) {
      const tagDetail = tagsDetails[i];
      tagDetail.addEventListener("toggle", (event) => {
        console.log("Passou aqui");
        const lista = tagDetail.querySelector("ul");
        if (tagDetail.open) {
          lista.classList.add("fade-in");
        } else lista.classList.remove("fade-in");
      });
    }
  };