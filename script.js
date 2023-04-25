function allowDrop(ev) 
{
    ev.preventDefault();
}

function drag(ev) 
{
    console.log('id: ' + ev.target.id)
    let id = ev.target.id.replace('drag-', '')
    ev.dataTransfer.setData("id", id);
}

function dragEnd(ev)
{
    // console.log('dragEnd')
    // const element = ev.currentTarget;
    // element.style.borderRadius = '0px';
}

function drop(ev) 
{
    ev.preventDefault();
    let newValue = $(ev.target).attr('data-number')
    var id = '#note-control-select-' + ev.dataTransfer.getData("id");
    console.log('oldID: ' + id)
    // console.log(selectedItem.find(":selected").text())
    $(id).val(newValue)
}

function hover(ev)
{
    let id = ev.currentTarget.id.replace('drag-', '#note-control-select-')
    console.log('Enter: ' + $(id).val())
    let noteDisplay = '#note-display-' + $(id).val()
    $(noteDisplay).css('background-color', 'purple')
}

function leave(ev)
{
    let id = ev.currentTarget.id.replace('drag-', '#note-control-select-')
    console.log('Leave: ' + $(id).val())
    let noteDisplay = '#note-display-' + $(id).val()
    $(noteDisplay).css('background-color', 'white')
}

function reset(ev)
{
    let targetId = ev.currentTarget.id
    console.log(targetId)

    let newId = targetId.replace('btn-reset-', '#note-control-select-')
    $(newId).val($(newId).attr('data-defaultValue'))
}

