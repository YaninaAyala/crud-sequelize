<h1 align="center"> API REST - CRUD </h1>
<h4 align="center"> Profundizando Sequelize </h4>

Para este ejercicio van a tener que desarrollar una API REST que permita crear, actualizar, buscar con distintos tipos de filtrado y eliminar produtos de la tabla **Products**:

-   **GET |** _'/products'_ para obtener todos los registros de la tabla **Products**.
-   **GET |** _'/products?maxCost=123'_ para obtener todos registros de la tabla **Products** cuyo costo como máximo 123 o cualquier valor que reciba el endpoint por QUERY PARAMS.
-   **GET |** _'/products?minCost=123'_ para obtener todos registros de la tabla **Products** cuyo costo como mínimo 123 o cualquier valor que reciba el endpoint por QUERY PARAMS.
-   **GET |** _'/products/:id'_ para obtener el registro de la tabla **Products** según su ID.

-   **POST |** _'/products'_ para crear un nuevo registro en la tabla **Products**. El producto ingresado NO puede estar repetido, y este chequeo debe de hacerse en el modelo usando métodos nativos de Sequelize.
-   **PATCH |** _'/products/:id'_ para actualizar un registro de la tabla **Products**.
-   **DELETE |** _'/products/:id'_ para eliminar un registro de la tabla **Products**.

Desarrollar la API según el patrón MVC, ayudandose de ejercicios anteriores y leyendo la documentación.

La entidad **Product** tiene **id**, **name**, **cost** y **creation_date**.

**YAPA -->** Validar los datos entrantes con Zod.
