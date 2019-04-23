export default function (context) {
  console.log('middleware CHECK-auth')
  context.store.dispatch('initAuth', context.req)
}

