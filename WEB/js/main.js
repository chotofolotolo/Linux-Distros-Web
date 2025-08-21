function distroClick(element) {

    const NAME = element.querySelector(".tittle")?.textContent.trim();

    switch (NAME) {
        case "Debian":
            window.location.href = "/WEB/Subpages/Debian.html";
            break;
        case "Ubuntu":
            window.location.href = "/WEB/Subpages/Ubuntu.html";
            break;
        case "Mint":
            window.location.href = "/WEB/Subpages/Mint.html";
            break;
        case "Fedora":
            window.location.href = "/WEB/Subpages/Fedora.html";
            break;
        case "Arch":
            window.location.href = "/WEB/Subpages/Arch.html";
            break;
        case "Manjaro":
            window.location.href = "/WEB/Subpages/Manjaro.html";
            break;
        case "Kali":
            window.location.href = "/WEB/Subpages/Kali.html";
            break;
        case "Zorin Os":
            window.location.href = "/WEB/Subpages/Zorin.html";
            break;
    }

    console.log("Distro->",NAME);//solo para debug

}


