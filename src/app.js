export class App {

  configureRouter(config, router) {
    this.router = router;

    config.map([
      {
        route: ['', 'login'],
        moduleId: 'login/components/login',
        name: 'Login',
        title: 'Login',
        nav: true },
      {
        route: 'registro',
        moduleId: 'login/components/registro',
        name: 'Registro',
        title: 'Registro',
        nav: true },
    ]);
  }
}
