const branches = document.getElementsByClassName(`branch`);

for (let i = 0; i < branches.length; i++) {
    branches[i].addEventListener('click', open_close_it);
}

function open_close_it(event) {
    event.preventDefault();

    let thisBranch = event.target.closest(`.branch`);
    let thisData = thisBranch.children[1];
    let thisVectorImage = thisBranch.children[0].children[0];

    thisBranch.classList.toggle(`active`);

    if (thisBranch.classList.contains(`active`)) {
        thisVectorImage.style.transform = `rotate(180deg)`;
        thisData.style.maxHeight = thisData.scrollHeight + `px`;
    } else {
        thisVectorImage.style.transform = `rotate(0deg)`;
        thisData.style.maxHeight = `0`;
    }


}