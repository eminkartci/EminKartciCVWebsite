// MAIN
add_project("images/our-services/project/pic3.jpg",
    "BİNA", "This is a mock up project", "Experienced", "Emin Kartci");

add_project("images/our-services/project/pic3.jpg",
    "FABRİKA", "This is a mock up project", "Experienced", "Durmusabout Kartci");

function add_project(imgSource, buttonName, explanation, header, client) {

    let newProject = `<div class="col-lg-4 col-md-6 col-sm-6 m-b30">
    <div class="fea-project">
        <div class="project-img">
            <img src="` + imgSource + `" alt="">
            <div class="project-content text-white">
                <a href="#" class="site-button radius-no text-secondry m-b30 button-sm">` + buttonName + `</a>
                <p>` + explanation + `</p>
                <div class="project-link">
                    <span class="pull-left"><a href="#" class="site-button-link">Detaylar</a></span>
                    <ul class="list-inline m-a0 pull-right text-primary">
                        <li><a><i class="ti-world"></i></a></li>
                        <li><a><i class="ti-link"></i></a></li>
                        <li><a><i class="ti-target"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="clearfix">
            <h2 class="m-t20 dez-title m-b10"><a href="#">` + header + `</a></h2>
            <p class="m-a0">Client: ` + client + `</p>
        </div>
    </div>
</div>`;

    document.getElementById("projects").innerHTML += newProject;

}