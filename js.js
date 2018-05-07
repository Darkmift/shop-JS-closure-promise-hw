$.each($('img'), function(index, value) {
    console.log(index, value.src);
});

var imgArray = [];
var container = $('#ctl00_PlaceHolderMain_ucMain_ctlProductsView_grdPromo_ctl00__0 img');
$.each(container, function(index, value) {
    //console.log(value.src.currentSrc);
    var pic = value.currentSrc;
    if (pic.includes('http://www.shufersal.co.il/Pages/~/_layouts/images/Shufersal/Images/Products_medium/')) {
        imgArray.push(
            pic
        );
    }
});
//console.log(JSON.stringify(imgArray, null, 2));

var priceArray = [];
var container = $('#ctl00_PlaceHolderMain_ucMain_ctlProductsView_grdPromo_ctl00__0 span');
$.each(container, function(index, value) {
    if (
        value.innerText.includes('₪')
    ) {
        priceArray.push(value.innerText.replace('₪', ''));
    }
});
priceArray = JSON.stringify(priceArray);
priceArray = priceArray.replace(/\\n/g, '');
priceArray = JSON.parse(priceArray);
//priceArray = JSON.stringify(priceArray, null, 2);
console.log(priceArray.length, imgArray.length);
var JSONArr = [];
for (let index = 0; index < priceArray.length; index++) {
    JSONArr.push({
        img: imgArray[index],
        price: priceArray[index]
    });
}

console.log(JSONArr);