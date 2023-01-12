{
    const welcome = () => {
        console.log("Witam!")
    }

    welcome();
}

{
    const onRemovePictureClick = () => {
        const pictureFiord = document.querySelector(".js-pictureFiord");
        
        pictureFiord.remove();
    }

    const removePicture = () => {
        const buttonRemovePicture = document.querySelector(".js-buttonRemovePicture ");

        buttonRemovePicture.addEventListener("click", onRemovePictureClick);
    }
    removePicture();
}

{
    const onRemoveArticlePictureClick = () => {
        const pictureArticlePadding = document.querySelector(".js-pictureRemove");

        pictureArticlePadding.remove();
    }

    const removeArticlePicture = () => {
        const buttonArticle = document.querySelector(".js-buttonRemove");

        buttonArticle.addEventListener("click", onRemoveArticlePictureClick);
    }
    removeArticlePicture();
}

{
    const onRemoveParagraphClick = () => {
        const paragraphLast = document.querySelector(".js-paragraphLast");

        paragraphLast.remove();
    }

    const removeParagraph = () => {
        const buttonParagraphRemove = document.querySelector(".js-buttonParagraphRemove");

        buttonParagraphRemove.addEventListener("click", onRemoveParagraphClick);
    }
    removeParagraph();
}


{
    const onChangeParagraphClick = () => {
        const colorName = document.querySelector(".js-colorName");
        const paragraphLast = document.querySelector(".js-paragraphLast");

        paragraphLast.classList.toggle("acapitColor");
        colorName.innerText = paragraphLast.classList.contains("acapitColor") ? "czarny" : "zielony"
    };

    const colorChange = () => {
        const buttonColor = document.querySelector(".js-buttonColor");

        buttonColor.addEventListener("click", onChangeParagraphClick);
    };
    colorChange();
}

{
    const onChangeBackgroundClick = () => {
        const bodyElement = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        bodyElement.classList.toggle("dark");
        themeName.innerText = bodyElement.classList.contains("dark") ? "jasny" : "ciemny"
    };

    const init = () => {
        const buttonBackgroundChange = document.querySelector(".js-buttonBackgroundChange");

        buttonBackgroundChange.addEventListener("click", onChangeBackgroundClick);
    };
    init();
}
