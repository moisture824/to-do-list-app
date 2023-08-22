function newItem () {
// Adding a new item to the list
    let li = $('<li></li>');
    let inputvalue = $('#input').val();
    li.append(inputvalue);

    if (inputvalue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }
// Set "stike" as the crossout function, then crossout on "dblclick"
    function crossOut () {
        li.toggleClass("strike");
    }
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });
// Defines crossOutButton as the element, creates the text node with an 'X', creates the deleteListItem function when clicked, and then deletes the element.
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem () {
        li.addClass("delete")
    }
    $('#list').sortable();
}