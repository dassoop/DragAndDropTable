function allowDrop(ev) 
{
    ev.preventDefault();
}

function drag(ev) 
{
    ev.dataTransfer.setData("id", '#' + ev.currentTarget.id);
}

function dragEnd(ev)
{

}

function drop(ev) 
{
    ev.preventDefault();
    $('.note-display').each(function(){
        $(this).css('background-color', 'white')
    })
    let newValue = $(ev.currentTarget).attr('data-number')
    $(ev.dataTransfer.getData('id')).find('select').val(newValue)
}

function hover(ev)
{
    let noteDisplay = '#note-display-' + $('#' + ev.currentTarget.id).find('select').val()
    $(noteDisplay).css({
        'background-color': '#d0acd0',
        'border-radius': '5px',
        'padding': '3px'
    })
}

function leave(ev)
{
    let noteDisplay = '#note-display-' + $('#' + ev.currentTarget.id).find('select').val()
    $(noteDisplay).css('background-color', 'white')
}

function reset(ev)
{
    let select = $('#' + ev.currentTarget.id).closest('div').find('div').find('select')
    select.val(select.attr('data-defaultValue'))
}

function changeNote(ev)
{
    $('.note-display').css('background-color', 'white')
    let id = ev.currentTarget.id
    let noteDisplay = '#note-display-' + $(id).val()
    $(noteDisplay).css({
        'background-color': '#d0acd0',
        'border-radius': '5px',
        'padding': '3px'
    })
}
function highlightBackground()
{
    //function to unify highlight and de-highlight backgrounds
}

function resetAllNotes(ev)
{
    $('.note-control-select').each(function(){
        $(this).val($(this).attr('data-defaultValue'))
    })
}