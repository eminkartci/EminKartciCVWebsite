function add_project(category, categoryName, projectLink, imgSrc, projectTitle , a_style,img_style) {
    let newProject = `
    <figure class="item" data-groups='["all", "` + category + `"]'>
        <a href="` + projectLink + `" style="${a_style}">
            <img src="` + imgSrc + `" alt="" style="${img_style}">
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

add_project("website"   , "", "./portfolyo/DoralpWebsite"                   , "./images/portfolio/DoralpWebsite.png", "Doralp Website")
add_project("website"   , "", "https://www.nazarmuzik.com/"                 , "./images/portfolio/NazarMuzik.png", "Nazar Müzik Website")
add_project("website"   , "", "https://www.shefly.com/"                     , "./images/portfolio/SheFly.png", "SheFly Website")
add_project("website"   , "", "https://www.mehmetkilvan.com/"               , "./images/portfolio/MehmetKilvan.png", "Mehmet Kilvan Website")
add_project("website"   , "", "https://traform-platofrmu.herokuapp.com/"    , "./images/portfolio/Traform.png", "Traform - Trafolarda Verimlilik Projesi")
add_project("project"   , "", "https://evfuture.ameandanismanlik.com"       , "./images/portfolio/EVFuture.png", "EV Future - Elektrikli Araç Analizi")
add_project("website"   , "", "temsan.herokuapp.com"                        , "./images/portfolio/temsan_logo.png", "TEMSAN","display:flex;justify-content:center;align-items:center;min-height:200px;","")
add_project("website"   , "", "https://www.alpvet.com/"                     , "./images/portfolio/alpvet-logo.png", "Alp Veteriner","display:flex;justify-content:center;align-items:center;min-height:200px;","")
add_project("education" , "", "https://ameanacademy.herokuapp.com"          , "./images/amean_logo.png", "AMEAN Academy","display:flex;justify-content:center;align-items:center;min-height:200px;","max-width:54%;height:auto")