console.log('functions online');

function wait(time) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

function buildPopup() {
    $('<div>', {
        id: "popup_container",
        html: $('<button>', {
            id: "close_popup_btn",
            click: closePopup,
            text: "❌",
        })
    }).appendTo('.main_div')
}

function getUrl(urlLink) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: urlLink,
            success: function(response) {
                resolve(response);
            },
            error: function(response) {
                reject(response);
            }
        });
    })
}

function postForm(url, data) {
    return new Promise(resolve => {
        $.post(url, data, function(data) {
            resolve(data)
        });
    })
}

function closePopup(e) {
    $('#popup_container').remove();
    wait(1000)
        .then(() => {
            console.log('fade in')
        })
}

function submitForm(form) {
    return new Promise(resolve => {
        form.submit(function(event) {
            event.preventDefault();
            resolve(event)
        });
    })
}

function buildGroceries(groceriesJson) {
    groceries = groceriesJson;
    container = $('#popup_container');
    $.each(groceries, function(index, groceryObj) {
        var div = $('<div>', {
            class: 'Groceries-item',
        })
        var img = $('<img>', {
            src: groceryObj.img,
        })
        var name = $('<p>').text(groceryObj.name);
        var price = $('<p>').text(groceryObj.price + ' :מחיר');
        div.append(
            name, img, price
        );
        container.append(div);
    });
    return container;
}