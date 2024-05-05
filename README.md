# Analizador léxico y sintáctico del lenguaje Falak

<div align = "center">
    <div>
        Marco Antonio Gardida Cortés - A01423221
    </div>
    <div>
        Miguel Jiménez Padilla - A01423189
    </div>
</div>
<br/>

## Requisitos Previos

Antes de ejecutar el analizador, asegúrate de tener instalado [Bun](https://bun.sh) en tu sistema. Bun es un runtime y package manager que se necesita para ejecutar el analizador.

## Instalación

Antes de ejecutar el analizador, puede que necesites instalar ciertas dependencias. Abre tu terminal y navega hasta el directorio donde se encuentra el proyecto. Una vez allí, ejecuta el siguiente comando:

```bash
bun install
```

## Uso

1. Abre tu terminal y navega hasta el directorio del proyecto.
2. Dentro del directorio del proyecto, ejecuta el siguiente comando:

```bash
bun run index.ts
```

3. Arrastra el archivo .falak a la terminal.

```bash
Please drag and drop the file into this window and press Enter:
```

4. Después de arrastrar el archivo, presiona Enter para comenzar el análisis.

## Resultados

El analizador determinará si ha podido procesar correctamente el archivo .falak. De ser exitoso, desplegará en la terminal los pasos seguidos, finalizando con el mensaje:

![Success Message](SuccessMessage.png)

El sistema generará un archivo `output.txt` que contiene el árbol sintáctico resultante.

Si el análisis falla, el analizador mostrará un mensaje de error en la terminal, explicando el problema, como por ejemplo, esperar un tipo de dato y recibir otro.

![Error Message](ErrorMessage.png)
