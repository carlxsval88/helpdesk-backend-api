# Helpdesk Backend API

Este proyecto corresponde al desarrollo del backend para un sistema de gestión de tickets. La API permite crear, consultar, actualizar y eliminar tickets mediante endpoints RESTful, utilizando Node.js, Express y MongoDB como base de datos.

## Tecnologías utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* Postman

## Instalación y uso

Para ejecutar el proyecto de forma local, primero se debe clonar el repositorio o descargar el código fuente.

Luego, dentro de la carpeta del proyecto, se instalan las dependencias con el siguiente comando:

```bash
npm install
```

Después se debe crear un archivo `.env` con la configuración necesaria para la conexión a la base de datos. Por seguridad, este archivo no se sube al repositorio, ya que contiene datos sensibles como la cadena de conexión de MongoDB.

Ejemplo del archivo `.env`:

```env
PORT=3000
MONGO_URI=tu_cadena_de_conexion
```

Para iniciar el servidor, se utiliza el comando:

```bash
npm start
```

Si todo está configurado correctamente, el servidor quedará funcionando y se podrá probar la API desde Postman o mediante cURL.

## Endpoints principales

La API cuenta con las operaciones CRUD para la gestión de tickets:

* `GET /tickets`: obtiene la lista de tickets registrados.
* `POST /tickets`: crea un nuevo ticket.
* `PUT /tickets/:id`: actualiza un ticket existente.
* `DELETE /tickets/:id`: elimina un ticket por su identificador.

## Pruebas

Las rutas fueron probadas utilizando Postman, verificando que el servidor responda correctamente a las solicitudes GET, POST, PUT y DELETE.

## Nota

El archivo `.env` no se incluye en el repositorio por motivos de seguridad. Cada persona que ejecute el proyecto debe configurar su propia conexión a MongoDB.
