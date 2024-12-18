/* Nuevos cambios 2 */
const foodData = [
    {
        name: "Choripán Fueguino",
        description: "Choripán con chorizo artesanal y chimichurri patagónico.",
        image: "img/Comida/choripan.jpg",
        details: "El <b><i>Choripán Fueguino</i></b> es un símbolo de la gastronomía argentina y en especial de la región sur. Este platillo destaca por su chorizo artesanal preparado con ingredientes locales y especias que le otorgan un sabor único. Servido con chimichurri patagónico, su combinación de texturas y sabores lo convierten en una experiencia culinaria memorable."
    },
    { 
        name: "Trucha del Canal Beagle", 
        description: "Pescado fresco de las aguas cristalinas, con sabor delicado y auténtico.", 
        image: "img/Comida/trucha.jpg",
        details: "La <b><i>Trucha del Canal Beagle</i></b> es un tesoro gastronómico de la Patagonia. Este pescado es capturado en las aguas frías y cristalinas del sur, lo que garantiza su frescura y calidad. Suele prepararse a la parrilla o al horno, acompañado de <b>hierbas autóctonas</b> y guarniciones que realzan su sabor natural."
    },
    { 
        name: "Chocolates artesanales", 
        description: "Chocolate de producción local, con un sabor único y suave.", 
        image: "img/Comida/chocolates.jpg",
        details: "Los <b>chocolates artesanales</b> de la Patagonia son conocidos por su sabor suave y delicado. Elaborados con <b>ingredientes naturales</b> y cacao de calidad, estos chocolates presentan una textura cremosa que se derrite en la boca. Son ideales para disfrutar en cualquier momento del día o como un <b>regalo especial</b>."
    },
    { 
        name: "Empanadas de carne", 
        description: "Empanadas rellenas con carne de cordero y especias regionales.", 
        image: "img/Comida/empanadas.jpg",
        details: "Estas empanadas rellenas con <b>carne de cordero</b> son una delicia típica de la región. La carne se mezcla con <b>especias locales</b> y cebolla, creando un sabor robusto que se complementa perfectamente con la masa crujiente. Son ideales para compartir en reuniones familiares o como parte de una comida tradicional."
    },
    { 
        name: "Repostería regional", 
        description: "Postres deliciosos que capturan los sabores únicos de la región.", 
        image: "img/Comida/reposteria.jpg",
        details: "La <b>repostería regional</b> de la Patagonia ofrece una variedad de postres que van desde tortas hasta dulces, todos hechos con frutas locales y mieles autóctonas. Los sabores de los frutos rojos, como la <b>frutilla</b> y el <b>calafate</b>, son muy comunes, combinados con una base de masa casera o cremosos rellenos."
    },
    { 
        name: "Almejas patagónicas", 
        description: "Almejas frescas recogidas del océano, cocinadas con manteca y ajo.", 
        image: "img/Comida/almejas.jpg",
        details: "Las <b>almejas patagónicas</b> son muy apreciadas por su sabor suave y su textura tierna. Son recolectadas de las aguas del océano Atlántico, donde se crían en ambientes naturales. Cocinadas con manteca y ajo, este plato es ideal para los amantes de los mariscos y una excelente entrada en una comida."
    },
    { 
        name: "Calafate con crema", 
        description: "Frutos de calafate servidos con crema casera, un postre típico.", 
        image: "img/Comida/calafate.jpg",
        details: "El <b>calafate</b> es un fruto que crece en la región sur de Argentina, conocido por su sabor único y ligeramente ácido. Se sirve comúnmente con <b>crema casera</b>, lo que suaviza su sabor y lo convierte en un delicioso postre. Este platillo es emblemático de la Patagonia y se disfruta especialmente durante el invierno."
    },
    { 
        name: "Merluza negra", 
        description: "Un pescado local que se sirve con salsa de mariscos y puré de papas.", 
        image: "img/Comida/merluza.jpg",
        details: "La <b>Merluza negra</b> es un pescado de gran calidad que se captura en las frías aguas del Atlántico. Se caracteriza por su carne blanca y firme, que se complementa perfectamente con una salsa de mariscos cremosa. A menudo se sirve con un suave <b>puré de papas</b>, lo que lo convierte en una opción ideal para una comida completa."
    },
    { 
        name: "Chupe de mariscos", 
        description: "Plato tradicional con mariscos frescos y un toque cremoso.", 
        image: "img/Comida/chupe.jpg",
        details: "El <b>chupe de mariscos</b> es un plato tradicional de la gastronomía patagónica. Este guiso se elabora con <b>mariscos frescos</b>, como camarones y mejillones, en una base cremosa de leche y queso, que le da una textura rica y sabrosa. Es perfecto para disfrutar en los fríos días de invierno."
    },
    { 
        name: "Tarta de frutos rojos", 
        description: "Deliciosa tarta con frutos rojos, muy popular en la región.", 
        image: "img/Comida/tarta.jpg",
        details: "La tarta de <b>frutos rojos</b> es uno de los postres más populares en la Patagonia. Hecha con una masa quebrada y rellena con una mezcla de frutos rojos como frambuesas, moras y arándanos, es perfecta para aquellos que buscan un postre dulce con un toque ácido. Ideal para acompañar con una crema chantilly o helado."
    },
    { 
        name: "Pechuga de pato con salsa de ciruelas", 
        description: "Exquisita pechuga de pato acompañada con una salsa dulce de ciruelas.", 
        image: "img/Comida/pato.jpg",
        details: "La pechuga de pato se cocina a la perfección y se acompaña con una salsa hecha de <b>ciruelas</b>, lo que le da un toque dulce y ligeramente ácido. Este plato es una opción elegante para una cena especial, con un sabor sofisticado que refleja la gastronomía de la región sur de Argentina."
    },
    { 
        name: "Asado Fueguino", 
        description: "Carne asada al estilo Fueguino, un platillo que resalta los sabores locales.", 
        image: "img/Comida/asado.jpg",
        details: "El <b>Asado Fueguino</b> es una de las preparaciones más emblemáticas de la región. Consiste en carne asada lentamente a la parrilla, con un toque de sal y hierbas autóctonas. El resultado es una carne jugosa y tierna, que resalta los sabores de la región. A menudo se sirve con ensaladas frescas y papas."
    },
    { 
        name: "Sopa de camarones", 
        description: "Sopa de camarones frescos, ideal para los amantes del marisco.", 
        image: "img/Comida/sopa_camarones.jpg",
        details: "La sopa de <b>camarones frescos</b> es un plato reconfortante que destaca por la frescura de los camarones locales. Cocinados con hierbas aromáticas y especias, la sopa es rica y sabrosa, ideal para iniciar una comida o disfrutar como plato principal en los días fríos de la Patagonia."
    },
    { 
        name: "Tamal de cerdo", 
        description: "Tamal relleno de cerdo, una combinación deliciosa de sabores.", 
        image: "img/Comida/tamal.jpg",
        details: "El tamal de cerdo es un platillo tradicional que se cocina con carne de cerdo picada y especias, envuelto en hojas de maíz. Se sirve con salsa picante o con una salsa suave de tomate, y es un platillo popular durante celebraciones y festividades."
    },
    { 
        name: "Galletas de avena y miel", 
        description: "Galletas caseras con avena y miel de producción local.", 
        image: "img/Comida/galletas.jpg", 
        details: "Estas galletas caseras son una verdadera delicia. Hechas con avena y miel de producción local, tienen una textura suave y un sabor dulce que las hace perfectas para acompañar un café o té. Son una opción saludable y deliciosa para disfrutar a cualquier hora del día."
    },
    { 
        name: "Torta de manzana", 
        description: "Torta casera con manzanas frescas, un toque suave de canela.", 
        image: "img/Comida/torta_manzana.jpg", 
        details: "La torta de manzana es un postre tradicional en la Patagonia, con manzanas frescas y un toque delicado de canela. Su textura suave y su aroma cálido la convierten en el postre perfecto para acompañar una tarde de invierno. Ideal para disfrutar con un poco de crema o helado."
    },
    { 
        name: "Papas a la crema", 
        description: "Papas cocidas con una salsa cremosa de queso y cebollas.", 
        image: "img/Comida/papas_crema.jpg", 
        details: "Las papas a la crema son un acompañante perfecto para cualquier plato principal. Las papas se cocinan en una salsa cremosa hecha con queso y cebollas, lo que les da un sabor suave y delicioso. Es una receta reconfortante y rica, muy popular en la gastronomía de la región."
    },
    { 
        name: "Lenguado a la parrilla", 
        description: "Pescado fresco del Canal Beagle, cocinado a la parrilla con un toque de hierbas locales.", 
        image: "img/Comida/lenguado_parrilla.jpg", 
        details: "El lenguado a la parrilla es uno de los platos más frescos y deliciosos de la región. El pescado, proveniente del Canal Beagle, se cocina a la parrilla con un toque de hierbas autóctonas que resaltan su sabor delicado y natural. Un plato ligero y sabroso ideal para los amantes de los mariscos."
    },
    { 
        name: "Matambre a la pizza", 
        description: "Carne de matambre de res cubierta con salsa de tomate, queso y jamón, cocida a la parrilla.", 
        image: "img/Comida/matambre_pizza.jpg", 
        details: "El matambre a la pizza es una deliciosa variación del tradicional asado argentino. Se trata de una pieza de carne de res (matambre) cubierta con salsa de tomate, queso y jamón, y cocida a la parrilla. Es un plato sabroso y jugoso que combina lo mejor de la parrilla con el sabor de una pizza."
    },
    { 
        name: "Empanadas de cordero", 
        description: "Empanadas rellenas con carne de cordero, especias regionales y un toque de cebolla.", 
        image: "img/Comida/empanadas_cordero.jpg", 
        details: "Las empanadas de cordero son una especialidad de la Patagonia. Están rellenas con carne de cordero de la región, que se combina con especias locales y cebolla para crear un sabor único. Estas empanadas son perfectas para disfrutar como aperitivo o acompañadas de una ensalada fresca."
    },
    {
        name: "Centolla Fueguina",
        description: "Un plato emblemático hecho con centolla fresca capturada en las aguas del Canal Beagle.",
        image: "img/Comida/centolla.jpg",
        details: "La Centolla Fueguina es uno de los mariscos más destacados de la región. Capturada en las frías aguas del Canal Beagle, su carne es deliciosa, dulce y firme. Este plato se sirve tradicionalmente con un toque de manteca derretida o en una ensalada fresca, y es considerado una verdadera joya gastronómica en la Patagonia."
    },
    {
        name: "Locro Patagónico",
        description: "Un guiso tradicional con maíz, carne y especias típicas de la región.",
        image: "img/Comida/locro.jpeg",
        details: "El Locro Patagónico es un guiso espeso y reconfortante, ideal para los días fríos. Se elabora con maíz, carne de res, cerdo y especias autóctonas. Es un plato muy popular en las festividades de la región, conocido por su sabor intenso y su capacidad para llenar y calentar a quienes lo disfrutan."
    },
    {
        name: "Rabas",
        description: "Anillos de calamar rebozados y fritos, una delicia marina muy consumida en la región.",
        image: "img/Comida/rabas.jpg",
        details: "Las rabas son uno de los bocados más populares de la gastronomía costera. Se preparan con anillos de calamar frescos, que se rebozan y se fríen hasta obtener una textura crujiente por fuera y tierna por dentro. Se sirven con limón o salsa tártara, y son perfectas como aperitivo o plato principal."
    },
    {
        name: "Pastel de Papa y Cordero",
        description: "Un pastel casero relleno con cordero patagónico, cubierto con puré de papas cremoso.",
        image: "img/Comida/pastel_papa_cordero.jpg",
        details: "El Pastel de Papa y Cordero es un plato tradicional que combina carne de cordero de la región con un suave puré de papas. La carne de cordero es guisada con especias regionales, y luego se cubre con una capa cremosa de puré de papas. Es un platillo reconfortante y sabroso, perfecto para disfrutar en una comida familiar."
    }
];