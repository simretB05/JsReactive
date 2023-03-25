let get_title = document.getElementById( `mug_title` )
let get_header = document.getElementById( `header` )
let get_btn = document.getElementById(`btn`)


function changeColor( details )
{
    get_title[`style`][`backgroundColor`] = `orange`
    get_header[`innerHTML`]= `<div><h2>hello Header you are replaced</h2></div>`
    get_btn.insertAdjacentHTML(`afterend`,`<p>hey</p><p>hey<p/><p>hey</p>`)
}
get_title.addEventListener( `click`, changeColor )
get_header.addEventListener( `dblclick`, changeColor )
get_btn.addEventListener(`mouseover`,changeColor)