const loggingPlugin = ({ store }) => {
  store.$subscribe((mutation) => {
    console.log(`The todos store was mutated using method ${mutation.type}`)
  })

  store.$onAction(({ name, args, after, onError }) => {
    const startTime = Date.now()
    console.log(`Start "${name}" with params [${args.join(',  ')}].`)

    after((result) => {
      console.log(`Finished "${name}" after ${Date.now() - startTime}ms.\nResult: ${result}.`)
    })

    // this will trigger if the action throws or returns a promise that rejects
    onError((error) => {
      console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`)
    })
  })
}

export default loggingPlugin
