
add_project("devam","images/blog/projeler_image_3.jpeg","resim taslagi","Projelerimiz","Her yaptığımız projelerde yeni deneyimler kazanarak daha kaliteli işler çıkarıyoruz.","portfolyo.html","Detaylar")
add_project("sanayi","images/blog/projeler_image_1.jpeg","resim taslagi","Sanayi","Sanayideki son gelişmeleri takip ederek üretkenliği arttırıyoruz.","portfolyo.html","Detaylar")

function add_project(category,imgSrc,imgDescription,projectTitle,projectDescription,linkHTMLName,buttonName){
    
    if (!isCategryValid(category))
        console.log("Projenin Kategorisi Doğru Girilmemiş !!")

    let newProject = `
    <li class="`+category+` card-container col-lg-6 col-md-6 col-sm-6 m-b30">
        <div class="dez-gallery-bx">
            <div class="dez-thum-bx dez-img-overlay1 dez-img-effect zoom-slow">
                <a href="javascript:void(0);"> 
                        <div class="dez-box fly-box">
                            <div class="dez-media">
                                <a href="#"><img src="`+imgSrc+`" alt="`+imgDescription+`"></a>
                            </div>
                            <div class="dez-info p-a30 bg-white">
                                <h2 class="dez-title m-t0"><a href="#">`+projectTitle+`</a></h2>
                                <div class="dez-separator bg-primary"></div>
                                <p>`+projectDescription+`</p>
                                <a href="./`+linkHTMLName+`" class="site-button text-secondry">`+buttonName+`</a>
                            </div>
                        </div>
                </a>
                <div class="overlay-bx">
                    <div class="overlay-icon">
                        <a href="javascript:void(0);"> <i class="fa fa-link icon-bx-xs"></i> </a>
                        <a href="images/gallery/pic3.jpg" class="mfp-link"> <i class="fa fa-picture-o icon-bx-xs"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `

    // this id was given by template
    document.getElementById("masonry").innerHTML += newProject; 

}


function isCategryValid(category){

    let categories = ["devam", "sanayi", "lojistik", "spor", "enerji", "market"];

    if (category in categories)
        return true;


    return false;

}