let list = $('#list');
list.append('<li>item</li>');
let li = $('<li></li>');
list.append(li);


list.on('click', function(){
    li.addClass('strike');
})