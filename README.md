# tecnofactory-marvel-app-backend

Este proyecto es una aplicación backend para gestionar usuarios y cómics de Marvel. La aplicación está construida utilizando Node.js, Express, y MongoDB, y sigue una arquitectura DDD (Domain Driven Design).

## Características

- Registro de usuarios
- Autenticación de usuarios
- Listado de cómics de Marvel
- Visualización de detalles de cómics
- Gestión de cómics favoritos de los usuarios

## Requisitos

- Node.js
- MongoDB
- npm (Node Package Manager)

## Uso

El api, se encuentra alojada en 'https://railway.app.' **No es necesario instalarlo en local.** Para visualizarlo, abrir este link e iniciar sesión con gitHub: 'https://railway.app/invite/N1PNhwPvNaW'

## Descripción de la Arquitectura

El proyecto sigue la arquitectura DDD (Domain Driven Design) que se enfoca en tres capas principales:

1. **Domain:** Contiene la lógica del negocio y las reglas de la aplicación.
2. **Application:** Contiene la lógica de la aplicación, la cual orquesta la lógica del dominio y la interacción con el usuario.
3. **Infrastructure:** Contiene la implementación de las interfaces del dominio y cualquier tecnología externa.


## Instalación (Solo necesario en caso de agregar nuevas funcionalidades)

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd tecnofactory-marvel-app-backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   PORT=5000
   MONGODB_URI=<TU_URI_DE_MONGODB>
   JWT_SECRET=<TU_SECRETO_JWT>
   MARVEL_PUBLIC_KEY=<TU_CLAVE_PUBLICA_MARVEL>
   MARVEL_PRIVATE_KEY=<TU_CLAVE_PRIVADA_MARVEL>
   ```
4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Endpoints de la API

### Registro de usuario
- URL: `/api/auth/register`
- Método: `POST`
- Descripción: Registra un nuevo usuario.
- Body:
  ```json
  {
    "id": "1222333232",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- Curl:
  ```bash
  curl --location --request POST 'https://tecnofactory-marvel-app-backend-production.up.railway.app/api/auth/register'   --header 'Content-Type: application/json'   --data-raw '{
    "id" : "1222333232"
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }'
  ```

### Autenticación de usuario
- URL: `/api/auth/login`
- Método: `POST`
- Descripción: Autentica un usuario.
- Body:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- Curl:
  ```bash
  curl --location --request POST 'https://tecnofactory-marvel-app-backend-production.up.railway.app/api/auth/login'   --header 'Content-Type: application/json'   --data-raw '{
    "email": "johndoe@example.com",
    "password": "password123"
  }'
  ```

### Obtener lista de cómics
- URL: `/api/comics`
- Método: `GET`
- Descripción: Obtiene una lista de cómics de Marvel.
- Headers:
  ```json
  {
    "Authorization": "Bearer <TOKEN>"
  }
  ```
- Curl:
  ```bash
  curl --location --request GET 'https://tecnofactory-marvel-app-backend-production.up.railway.app/api/comics'   --header 'Authorization: Bearer <TOKEN>'
  ```

### Obtener detalles de un cómic
- URL: `/api/comics/:id`
- Método: `GET`
- Descripción: Obtiene los detalles de un cómic específico.
- Headers:
  ```json
  {
    "Authorization": "Bearer <TOKEN>"
  }
  ```
- Curl:
  ```bash
  curl --location --request GET 'https://tecnofactory-marvel-app-backend-production.up.railway.app/api/comics/12345'   --header 'Authorization: Bearer <TOKEN>'
  ```

### Agregar cómic a favoritos
- URL: `/api/favorites`
- Método: `POST`
- Descripción: Agrega un cómic a la lista de favoritos del usuario.
- Headers:
  ```json
  {
    "Authorization": "Bearer <TOKEN>"
  }
  ```
- Body:
  ```json
  {
    "comicId": "12345",
    "title": "Spider-Man",
    "description": "A great comic.",
    "thumbnail": "http://example.com/thumbnail.jpg"
  }
  ```
- Curl:
  ```bash
  curl --location --request POST 'https://tecnofactory-marvel-app-backend-production.up.railway.app/api/favorites'   --header 'Authorization: Bearer <TOKEN>'   --header 'Content-Type: application/json'   --data-raw '{
    "comicId": "12345",
    "title": "Spider-Man",
    "description": "A great comic.",
    "thumbnail": "http://example.com/thumbnail.jpg"
  }'
  ```

### Obtener cómics favoritos
- URL: `/api/favorites`
- Método: `GET`
- Descripción: Obtiene la lista de cómics favoritos del usuario.
- Headers:
  ```json
  {
    "Authorization": "Bearer <TOKEN>"
  }
  ```
- Curl:
  ```bash
  curl --location --request GET 'https://tecnofactory-marvel-app-backend-production.up.railway.app/api/favorites'   --header 'Authorization: Bearer <TOKEN>'
  ```

### Eliminar cómic de favoritos
- URL: `/api/favorites/:id`
- Método: `DELETE`
- Descripción: Elimina un cómic de la lista de favoritos del usuario.
- Headers:
  ```json
  {
    "Authorization": "Bearer <TOKEN>"
  }
  ```
- Curl:
  ```bash
  curl --location --request DELETE 'https://tecnofactory-marvel-app-backend-production.up.railway.app/api/favorites/12345'   --header 'Authorization: Bearer <TOKEN>'
  ```
