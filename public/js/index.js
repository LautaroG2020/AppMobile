let padre = document.getElementById('listadoPadre')
let Listado = document.getElementById('listado')
let Detalle = document.getElementById('detalle')
var modal = new bootstrap.Modal(document.getElementById('modalAgregarProducto'));
let noItem = document.getElementById('noItem')
let btnAdd = document.getElementById('btnAdd')
let btnCerrar = document.getElementById('btnCerrar')
const form = document.getElementById('form')

Listado.style.display = "none"

padre.addEventListener('click', function(e){
    OcultarForDetalle()
    Detalle.style.display = "block"
    document.getElementById('detalleProducto').innerHTML = e.target.getAttribute('data-producto')
    document.getElementById('detalleInfo').innerHTML = e.target.getAttribute('data-info')
    document.getElementById('detalleIcono').src = e.target.getAttribute('data-icono')
    
})

let guardar = document.getElementById('guardarProducto').addEventListener('click', function(){
    let producto = document.getElementById('addProducto').value
    let icono = document.getElementById('addIcono').value
    let info = document.getElementById('addDescripcion').value
    let modelo = `<li class="list-group-item" data-icono="${icono}" data-producto="${producto}" data-info="${info}"><img src="${icono}" alt="${producto}" class="icono">${producto}</li>`
    noItem.style.display = "none"
    Listado.style.display = "block"
    padre.innerHTML += modelo    
    modal.hide()
    form.reset()
})

btnCerrar.addEventListener('click', function(){
    Listado.style.display = "block"
    noItem.style.display = "none"
    btnAdd.style.display = "block"
    Detalle.style.display = "none"
})

function OcultarForDetalle(){
    Listado.style.display = "none"
    noItem.style.display = "none"
    btnAdd.style.display = "none"
}


