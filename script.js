const propiedadesEnVenta = [
    {
        nombre: 'Casa Moderna',
        src: 'https://d2kflbb1pmooh4.cloudfront.net/eyJidWNrZXQiOiAiYWx0ZXJlc3RhdGUiLCAia2V5IjogInN0YXRpYy9wcm9wZXJ0aWVzL1RCQ1pZT1lSWEUvQTYwUExRTlVZVi9YUjY4NG5QZDdwL1doYXRzQXBwX0ltYWdlXzIwMjMtMDEtMDNfYXRfMjAuMzIuNDMuanBlZyIsICJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDEyODAsICJoZWlnaHQiOiA5NjAsICJmaXQiOiAiaW5zaWRlIn19fQ==',
        descripcion: 'Casa con amplio jardin.',
        ubicacion: 'Concepción',
        habitaciones: 4,
        costo: 2000000,
        smoke: true,
        pets: false,
    },
    {
        nombre: 'Casa Antigua',
        src: 'https://www.latercera.com/resizer/3W0Xv9zdKB9TUKDWb0A6Ev_qabU=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/BJBDTFWNBND7BDMZ7W7GEPRMXM.jpg',
        descripcion: 'Casa antigua.',
        ubicacion: 'Santiago',
        habitaciones: 5,
        costo: 1800000,
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Casa contemporanea',
        src: 'https://admin.inmobiliariafg.cl/public/img/proyectos/galeria/1591916552.3477-fachadac-122.jpg',
        descripcion: 'Casa con todo lo necesario para su familia.',
        ubicacion: 'Concepción',
        habitaciones: 3,
        costo: 2100000,
        smoke: false,
        pets: false,
    },

];

const propiedadesEnArriendo = [
    {
        nombre: 'Departamento centrico',
        src: 'https://homekeypropiedades.cl/wp-content/uploads/2023/09/10-2-1-scaled.jpg',
        descripcion: 'Departamento en pleno centro de la ciudad.',
        ubicacion: 'Concepción',
        habitaciones: 2,
        costo: 410000,
        smoke: true,
        pets: false,
    },
    {
        nombre: 'Acogedora casa',
        src: 'https://images.adsttc.com/media/images/59c3/46ac/b22e/38e8/ae00/00e7/medium_jpg/OANY_RowHouse1_524.jpg?1505969825',
        descripcion: 'pequeña casa con todo en regla.',
        ubicacion: 'Viña del mar',
        habitaciones: 3,
        costo: 350000,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Amplio departamento',
        src: 'https://http2.mlstatic.com/D_NQ_NP_780638-MLC77088381063_062024-O.webp',
        descripcion: 'departamento amoblado.',
        ubicacion: 'Valdivia',
        habitaciones: 2,
        costo: 450000,
        smoke: false,
        pets: false,
    }
];

function renderizarElementos (container, propiedades) {
    container.innerHTML = '';

    for (let i = 0; i < 3 && i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        

        const fumarTexto = propiedad.smoke 
            ? '<p class="text-success">Fumar: Permitido</p>'  
            : '<p class="text-danger">Fumar: No permitido</p>'; 

        const mascotasTexto = propiedad.pets 
            ? '<p class="text-success">Mascotas: Permitidas</p>'  
            : '<p class="text-danger">Mascotas: No permitidas</p>'; 

            container.innerHTML +=

        `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                    <p><i class="fas fa-dollar-sign"></i> Precio: <strong>$${propiedad.costo}</strong></p>
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                        <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
                        ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> 
                        ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
        `
    }
}

const contenedorVenta = document.querySelector('#venta .row');
const contenedorAlquiler = document.querySelector('#alquiler .row');

if (contenedorVenta) {
    renderizarElementos(contenedorVenta, propiedadesEnVenta);
}

if (contenedorAlquiler) {
    renderizarElementos(contenedorAlquiler, propiedadesEnArriendo);
}