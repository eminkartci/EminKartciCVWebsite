add_testimonial("images/testimonials/pic1.jpg","Doralp İnşaat problemlerimizi hızlı bir şekilde çözdü","Emin Kartcı","Yazılımcı");
add_testimonial("images/testimonials/pic1.jpg","Doralp Mühendislik sayersinde makinelerimizin verimi %10 arttı","Yasin Alper","Üretim Mühendisi");

function add_testimonial(imgSrc,testimonialText,clientName,clientProfession){
    
    let newTestimonial = `
    <div class="item">
        <div class="testimonial-1 testimonial-bg">
            <div class="testimonial-pic quote-left radius shadow"><img src="`+imgSrc+`" width="100" height="100" alt=""></div>
            <div class="testimonial-text">
                <p>`+testimonialText+`</p>
            </div>
            <div class="testimonial-detail"> <strong class="testimonial-name">`+clientName+`</strong> <span class="testimonial-position">`+clientProfession+`</span> </div>
        </div>
    </div>
    `

    document.getElementById("testinomials").innerHTML += newTestimonial;

}