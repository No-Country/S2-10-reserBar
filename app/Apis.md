USUARIOS

http://localhost:3005/api/users/ [GET] (Trae todos los usuarios)

http://localhost:3005/api/users/register [POST] (Crea un usuario)

http://localhost:3005/api/users/login [POST] (Loguearse como usuario)

http://localhost:3005/api/users/:id [GET] (Acceder al perfil del usuario)

http://localhost:3005/api/users/:id [PUT] (Editar el perfil del usuario)

http://localhost:3005/api/users/:id [DELETE] (Eliminar un usuario)

http://localhost:3005/api/users/:id/reservas [GET] (Acceder a las reservas del usuario)

*******************************************

BARES

http://localhost:3005/api/bares/ [GET] (Trae todos los bares)

http://localhost:3005/api/bares/register [POST] (Crea un bar)

http://localhost:3005/api/bares/login [POST] (Loguearse como bar)

http://localhost:3005/api/bares/:id [GET] (Acceder al perfil del bar)

http://localhost:3005/api/bares/:id [PUT] (Editar el perfil del bar)

http://localhost:3005/api/bares/:id/reserve [PUT] (Realiza las reservaciones en el bar y en el usuario)

http://localhost:3005/api/bares/:id/unreserve [PUT] (Elimina reservaciones del bar y del usuario)

http://localhost:3005/api/bares/:id/reserve [GET] (Acceder a las reservaciones del bar)

