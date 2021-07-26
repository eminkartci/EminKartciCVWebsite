"use strict";

add_project("devam", "images/blog/projeler_image_3.jpeg", "resim taslagi", "Projelerimiz", "Her yaptığımız projelerde yeni deneyimler kazanarak daha kaliteli işler çıkarıyoruz.", "portfolyo.html", "Detaylar");
add_project("sanayi", "images/blog/projeler_image_1.jpeg", "resim taslagi", "Sanayi", "Sanayideki son gelişmeleri takip ederek üretkenliği arttırıyoruz.", "portfolyo.html", "Detaylar");

function add_project(category, imgSrc, imgDescription, projectTitle, projectDescription, linkHTMLName, buttonName) {
  if (!isCategryValid(category)) console.log("Projenin Kategorisi Doğru Girilmemiş !!");
  var newProject = "\n    <li class=\"" + category + " card-container col-lg-6 col-md-6 col-sm-6 m-b30\">\n        <div class=\"dez-gallery-bx\">\n            <div class=\"dez-thum-bx dez-img-overlay1 dez-img-effect zoom-slow\">\n                <a href=\"javascript:void(0);\"> \n                        <div class=\"dez-box fly-box\">\n                            <div class=\"dez-media\">\n                                <a href=\"#\"><img src=\"" + imgSrc + "\" alt=\"" + imgDescription + "\"></a>\n                            </div>\n                            <div class=\"dez-info p-a30 bg-white\">\n                                <h2 class=\"dez-title m-t0\"><a href=\"#\">" + projectTitle + "</a></h2>\n                                <div class=\"dez-separator bg-primary\"></div>\n                                <p>" + projectDescription + "</p>\n                                <a href=\"./" + linkHTMLName + "\" class=\"site-button text-secondry\">" + buttonName + "</a>\n                            </div>\n                        </div>\n                </a>\n                <div class=\"overlay-bx\">\n                    <div class=\"overlay-icon\">\n                        <a href=\"javascript:void(0);\"> <i class=\"fa fa-link icon-bx-xs\"></i> </a>\n                        <a href=\"images/gallery/pic3.jpg\" class=\"mfp-link\"> <i class=\"fa fa-picture-o icon-bx-xs\"></i> </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </li>\n    "; // this id was given by template

  document.getElementById("masonry").innerHTML += newProject;
}

function isCategryValid(category) {
  var categories = ["devam", "sanayi", "lojistik", "spor", "enerji", "market"];
  if (category in categories) return true;
  return false;
}