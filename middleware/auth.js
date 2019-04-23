export default function (context) {
  console.log('middleware AUTH')
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
