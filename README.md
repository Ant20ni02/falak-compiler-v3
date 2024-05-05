# Analizador léxico y sintáctico para el lenguaje Falak (Falak Compiler V3)

<div align = "center">
    <div>
        Marco Antonio Gardida Cortés - A01423221
    </div>
    <div>
        Miguel Jiménez Padilla - A01423189
    </div>
</div>
<br/>


## Requisitos previos:

Para utilizar este analizador, debes tener instalado [Bun.js](https://bun.sh/docs/installation). Asegúrate de que Bun.js esté correctamente instalado en tu sistema antes de continuar.

## Instalación y/o actualización de dependencias:

Antes de ejecutar el analizador, puede que necesites instalar ciertas dependencias. Abre tu terminal y navega hasta el directorio donde se encuentra el proyecto. Una vez allí, ejecuta el siguiente comando:

```bash
bun install
```

Posteriormente, escribe el siguiente comando para ejecutar el programa:

```bash
bun run index.ts
```


## Uso del analizador:

Una vez ejecutado el programa, aparecerá la siguiente leyenda en la terminal: "Please drag and drop the file into this window and press Enter:" en dónde se deberá arrastrar o escribir la ruta del archivo .falak para ser leído

* * Nota: se recomienda utilizar la terminal de VSCode para escribir o arrastrar el archivo y proceder con el programa. Esto se debe a que la librería utilizada para lectura de archivos, readFileSync, en ocasiones no funciona correctamente en terminales nativas de SO como Windows o Mac.

## Estructura de visualización:

Finalmente, cuando se tenga el archivo o su ruta en la terminal, presiona ENTER. El analizador desplegará una lista de tokens obtenida del analizador léxico, y posteriormente se mostrará tanto el parseo utilizando SLR, como el árbol sintáctico resultante.

* * El programa arrojará un error si el proceso de parseo SLR falla, y se terminará el programa. Esto indica que la sintáxis del archivo seleccionado es incorrecta.






This project was created using `bun init` in bun v1.1.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
