
AUTH
| METHOD | PATH                     | DESCRIPTION                                    | PROTECTED|
|--------|--------------------------|------------------------------------------------|-----------
| GET    |`/login/`                 | Página para inicio sesión                      |          |
| POST   |`/login/`                 | Inicio                                         |          |
| GET    |`/signup/`                | Post del registro a la DB                      |          |
| POST   |`/signup/`                | Post del inicio de sesión a la DB              |   X      |
| GET    |`/profile/`               | Ver pefil                                      |   X      |
| POST   |`/profile/edit`           | Editar perfil                                  |   X      |


CLIENT
| METHOD | PATH                     | DESCRIPTION                                    |PROTECTED |
|--------|--------------------------|------------------------------------------------|----------|
| GET    |`/`                       | Página principal                               |          |
| GET    |`/search`                 | Buscador de recetas                            |          |
| GET    |`/search/results`         | Resultados del buscador                        |          |
| GET    |`/search/results/:id`     | Detalles de la receta                          |          |
| GET    |`/menu`                   | Todos los menus del user                       |     X    |
| GET    |`/menu/create`            | Crear menu (form)                              |     X    |
| POST   |`/menu/create`            | Crear menu (send)                              |     X    |
| GET    |`/menu/:id`               | Detalles menú                                  |     X    |
| GET    |`/menu/:id/edit`          | Editar menú (form)                             |     X    |
| POST   |`/menu/:id/edit`          | Editar menú y mandar (send)                    |     X    |                  
| POST   |`/menu/:id/delete`        | Eliminar menú                                  |     X    |



 

