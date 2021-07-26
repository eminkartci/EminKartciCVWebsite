
add_category("Kesim","Demir Kesim - Lazer Kesim hizmetlerimiz")
add_category("Delik Delme","Delik delme hakkında ayrıntılı bilgi için")
add_category("Kaynak","Özel kaynak hizmetlerimiz")
add_category("Mekanik Temizlik","Mekanik cihazlarınızın verimini arttırın")

function add_category(categoryName,categoryDescription){
    
    let newCategory = `
    <div class="col-md-6 col-lg-6 col-sm-6">
        <div class="icon-bx-wraper left m-b30">
            <div class="icon-bx-sm bg-secondry "> <span class="icon-cell"><i class="fa fa-building-o text-primary"></i></span> </div>
            <div class="icon-content">
                <h3 class="dez-tilte text-uppercase">`+categoryName+`</h3>
                <p>`+categoryDescription+`[...]</p>
            </div>
        </div>
    </div>
    `

    document.getElementById("categories").innerHTML += newCategory;

}