// INDEX
function ArticuloJugos({ clase, imagen, alt, titulo, contenido, ingredientes, pasos }) {
    return `
        <article class="seccion ${clase}">
            <img src="${imagen}" alt="${alt}">
            <h3>${titulo}</h3>
            <p>${contenido}</p>

            <h3>Ingredientes</h3>
            <ul class="lista">
                ${ingredientes.map(i => `<li>${i}</li>`).join("")}
            </ul>

            <h4>Pasos:</h4>
            <ol class="lista">
                ${pasos.map(p => `<li>${p}</li>`).join("")}
            </ol>
        </article>
    `.trim();
}

// RENDER

const contenedorArticulos = document.querySelector("#lista-jugos");

const articulos = [
    {
        clase: "limon",
        imagen: "images/jugo de limon.webp",
        alt: "Jugo de limón con limones enteros alredeor",
        titulo: "Jugo de limón",
        contenido: "El jugo de limón es una bebida natural que se obtiene al exprimir el fruto del limón, un cítrico conocido por su sabor intensamente ácido y refrescante. Se distingue por su color amarillo pálido, su aroma fuerte y su versatilidad en la cocina. Es rico en vitamina C, antioxidantes y compuestos naturales que contribuyen al fortalecimiento del sistema inmunológico y a la protección del organismo. El jugo de limón se consume tanto solo como diluido en agua, y se utiliza ampliamente para preparar bebidas, aderezos, postres y platillos salados, aportando frescura y realzando el sabor de los alimentos.",
        ingredientes: [
            "Un recipiente con la medida deseada para preparar tu limonada. (En este caso tomaremos un vaso de 50 ml).",
            "50 ml de agua. (Puede ser menos cantidad si lo desea).",
            "Dos cucharadas pequeñas de azucar.",
            "Dos limones. (Tamaño del limon al gusto)."
        ],
        pasos: [
            "Vierte el agua en el vaso.",
            "Corta los limones con un cuchillo, preferiblemente que tenga buen filo.",
            "Extrae las semillas del limón y luego usa el exprimidor para extraer el jugo.",
            "Asegurate de ubicar bien el exprimidor para que el jugo se deposite dentro del vaso.",
            "Vierte 2 cucharadas de azucar llenas en el vaso.",
            "Con la misma cuchara, revuelve o agita el jugo hasta que se disuelva el azucar.",
            "Disfruta del jugo."
        ]
    },
    {
        clase: "naranja",
        imagen: "images/jugo de naranja.jpg",
        alt: "Vaso y jarra de vidrio con jugo de naranja.",
        titulo: "Jugo de naranja",
        contenido: "El jugo de naranja es una bebida natural que se obtiene al exprimir el fruto de la naranja, un cítrico muy consumido en todo el mundo por su sabor refrescante y ligeramente ácido. Se caracteriza por su color anaranjado, su aroma fresco y su alto valor nutricional. Es una fuente importante de vitamina C, agua, minerales y compuestos antioxidantes, lo que lo convierte en una bebida asociada a hábitos de alimentación saludables. El jugo de naranja se consume principalmente en el desayuno, aunque también se utiliza en recetas, postres y como ingrediente en otras bebidas, y puede tomarse solo o combinado con otras frutas y verduras.",
        ingredientes: [
            "4 naranjas maduras.",
            "1/2 vaso de agua (opcional).",
            "Azucar o miel al gusto (opcional).",
            "Hielo (opcional)."
        ],
        pasos: [
            "Lava bien las naranjas.",
            "Córtalas por la mitad.",
            "Exprimelas con un exprmidor manual o eléctrico.",,
            "Cuela el jugo si prefieres eliminar la pulpa.",
            "Agrega agua si prefieres una textura mas lijera.",
            "Endulza al gusto y mezcla bien.",
            "Sirve con hielo si lo deseas.",
        ]
    },
    {
        clase: "pomelo",
        imagen: "images/jugo de pomelo.jpg",
        alt: "Tres vasos de vidrio con jugo de pomelo",
        titulo: "Jugo de pomelo",
        contenido: "El jugo de pomelo es una bebida natural que se obtiene al exprimir el pomelo, una fruta cítrica de sabor entre dulce y amargo, conocida también como toronja. Se caracteriza por su color que puede variar entre amarillo claro y rosado, dependiendo de la variedad del fruto. Es rico en vitamina C, antioxidantes y agua, lo que lo convierte en una opción refrescante y nutritiva. El jugo de pomelo se consume principalmente en el desayuno o como bebida refrescante, y también se utiliza en la preparación de cócteles, ensaladas y postres, aportando un sabor distintivo y ligeramente ácido que estimula el paladar.",
        ingredientes: [
            "2 pomelos grandes.",
            "1/2 vaso de agua (opcional).",
            "Azucar o miel al gusto.",
            "Hielo (opcional)."
        ],
        pasos: [
            "Lava los pomelos.",
            "Córtalos por la mitad.",
            "Exprimelas cuidadosamnete.",
            "Cuela el jugo para reducir el amargor si lo prefieres.",
            "Añade agua si deseas suavizar el sabor.",
            "Endulza al gusto y mezcla.",
            "Sirve frío."
        ]
    },
    {
        clase: "mandarina",
        imagen: "images/jugo de mandarina.jpg",
        alt: "Jugo de mandarina en jarra de vidrio acompañado de mandarinas enteras.",
        titulo: "Jugo de mandarina",
        contenido: "El jugo de mandarina es una bebida natural que se obtiene al exprimir la mandarina, un cítrico pequeño y fácil de pelar, conocido por su sabor dulce y ligeramente ácido. Se caracteriza por su color anaranjado brillante, su aroma agradable y su textura suave. Es una fuente importante de vitamina C, antioxidantes y agua, lo que ayuda a mantener el organismo hidratado y a fortalecer el sistema inmunológico. El jugo de mandarina se consume principalmente fresco, ya que su sabor es más dulce que el de otros cítricos, y también puede utilizarse en la preparación de postres, bebidas y recetas que buscan un toque frutal y refrescante.",
        ingredientes: [
            "6 mandarinas.",
            "1/4 vaso de agua (opcional).",
            "Azucar o miel al gusto.",
            "Hielo (opcional).",
        ],
        pasos: [
            "Lava y pela las mandarinas.",
            "Retira las semillas si las tienen.",
            "Licúa los gajos o exprimelos manualamente.",
            "Cuela si deseas una textura mas suave.",
            "Agrega un poco de agua si lo quieres menos espeso.",
            "Endulza al gusto y mezcla bien.",
            "Sirve inmediantamente para conservar el sabor."
        ]
    }

];

if (contenedorArticulos) {
    contenedorArticulos.innerHTML = articulos
        .map(ArticuloJugos)
        .join("");
}

// PAGINA DE MUESTRA
function SeccionSedes({ sede, titulo, imagen, alt, descripcion } ) {
    return `
        <div class="seccion ${sede}">
            <h2>${titulo}</h2>
            <img src="${imagen}" alt="${alt}">
            <p>${descripcion}</p>
        </div>
    `.trim();
}

// Render
const tarjetaSedes = document.querySelector(".tarjetas-sedes");
const sedes = [
    {
        sede: "sede-colombia",
        titulo: "Sede en Colombia",
        imagen: "images/imagen_colombia.jpg",
        alt: "bandera de colombia",
        descripcion: "Nuestra sede en Barranquilla es el punto principal desde donde promovemos el consumo de jugos naturales y hábitos saludables. Inspirados en la riqueza de frutas tropicales del país, este espacio representa nuestro compromiso con el bienestar, ofreciendo recetas prácticas y nutritivas para el día a día."
    },
    {
        sede: "sede-venezuela",
        titulo: "Sede en Venezuela",
        imagen: "images/imagen_venezuela.jpg",
        alt: "bandera de venezuela",
        descripcion: "La sede en Caracas refleja nuestra conexión con la tradición y la diversidad de sabores naturales de la región. Desde aquí compartimos recetas accesibles y refrescantes, pensadas para fomentar un estilo de vida saludable a través de ingredientes locales y fáciles de encontrar."
    }
];

if (tarjetaSedes) {
    tarjetaSedes.innerHTML = sedes
        .map(SeccionSedes)
        .join("");
}