async function loadComponents() {
    const navbar = await fetch("../components/navbar.html");
    const footer = await fetch("../components/footer.html");

    document.getElementById("navbar").innerHTML =
        await navbar.text();

    document.getElementById("footer").innerHTML =
        await footer.text();
}

loadComponents();