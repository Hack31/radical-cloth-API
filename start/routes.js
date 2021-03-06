'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('/save', 'ProductoController.store')
  Route.get('/getAll', 'ProductoController.index')
  Route.get('/:id', 'ProductoController.show')
  Route.put('/:id', 'ProductoController.update')
  Route.delete('/:id', 'ProductoController.delete')
}).prefix('/producto')

Route.post('/register', 'Auth/UserController.register')
Route.post('/login', 'Auth/UserController.login')
Route.get('/logout', 'Auth/UserController.logout')



