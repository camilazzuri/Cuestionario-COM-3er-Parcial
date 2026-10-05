// =====================================================
//  AQUÍ CARGÁS TUS PREGUNTAS. Es el único archivo que tenés que editar.
//
//  Cada pregunta es un bloque { ... } separado por coma.
//  - id:          número único (1, 2, 3...). No repitas ni cambies ids ya usados.
//  - texto:       el enunciado de la pregunta
//  - imagen:      (opcional) ruta de la imagen, ej: "img/pregunta2.png". Borrá la línea si no hay.
//  - opciones:    lista de respuestas posibles, entre comillas y separadas por coma
//  - correctas:   posiciones de las correctas, contando desde 0 (la primera opción es 0)
//                 Una sola correcta: [1]      Varias correctas: [0, 2]
//  - explicacion: (opcional) se muestra después de verificar
// =====================================================
const PREGUNTAS = [
  {
    id: 1,
    texto: "¿Qué tipo de modulación varía la frecuencia de la portadora según la señal moduladora?",
    opciones: ["AM", "FM", "ASK", "PCM"],
    correctas: [1],
    explicacion: "En FM la frecuencia instantánea de la portadora cambia con la amplitud de la señal moduladora."
  },
  {
    id: 2,
    texto: "Seleccioná las afirmaciones correctas sobre el teorema de muestreo de Nyquist.",
    opciones: [
      "La frecuencia de muestreo debe ser al menos el doble de la frecuencia máxima de la señal",
      "Si se muestrea por debajo de ese límite aparece aliasing",
      "Permite muestrear a cualquier frecuencia sin pérdida de información",
      "Solo se aplica a señales digitales"
    ],
    correctas: [0, 1],
    explicacion: "fs ≥ 2·fmax evita el aliasing."
  },
  {
    id: 3,
    texto: "¿Qué muestra el siguiente diagrama?",
    imagen: "img/ejemplo.png",   // poné tu imagen en la carpeta img/ o borrá esta línea
    opciones: ["Una señal AM", "Una señal FM", "Una señal digital NRZ"],
    correctas: [2]
  }
];
