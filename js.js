console.log('js online');



getUrl('shopDB.json')
    //returns data
    .then(
        wait(3000),
        buildPopup()
    )
    //does not wait ;'(
    .then(data => {
        buildGroceries(data);
        console.log(data);
    }) //show data w/o wait(3000)