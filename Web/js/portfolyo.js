function add_project(category, categoryName, projectLink, imgSrc, projectTitle) {
    let newProject = `
    <figure class="item" data-groups='["all", "` + category + `"]'>
        <a href="` + projectLink + `">
            <img src="` + imgSrc + `" alt="" style="height:206.44px">
            <div>
                <h5 class="name">` + projectTitle + `</h5>
                <small>` + categoryName + `</small>
                <i class="fa fa-file-text-o"></i>
            </div>
        </a>
    </figure>
    `;

    document.getElementById("portfolio_grid").innerHTML += newProject;
}

add_project("website", "Medya", "./portfolyo/DoralpWebsite", "./images/portfolio/DoralpWebsite.png", "Doralp Website")
add_project("education", "Medya", "./portfolyo/MathCountingExercise", "./images/portfolio/MathProblem.png", "Math Counting Exercise")
add_project("website", "Medya", "https://www.nazarmuzik.com/", "./images/portfolio/NazarMuzik.png", "Nazar Müzik Website")
add_project("website", "Medya", "https://www.shefly.com/", "./images/portfolio/SheFly.png", "SheFly Website")
add_project("website", "Medya", "https://www.mehmetkilvan.com/", "./images/portfolio/MehmetKilvan.png", "Mehmet Kilvan Website")
add_project("website", "Medya", "https://traform-platofrmu.herokuapp.com/", "./images/portfolio/Traform.png", "Traform - Trafolarda Verimlilik Projesi")
add_project("project", "Medya", "https://evfuture.ameandanismanlik.com", "./images/portfolio/EVFuture.png", "EV Future - Elektrikli Araç Analizi")