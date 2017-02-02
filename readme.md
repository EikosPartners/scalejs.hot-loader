# scalejs.hot-loader

A loader for scalejs modules to make them hot reloadable.
The loader will add code for a notification to be sent via the [scalejs messagebus](https://github.com/EikosPartners/scalejs.messagebus) when a module is hot reloaded. You can then react to the hot reload and perform any necessary disposals or updates.

You must also have the hotRender file in your project's src folder along with an alias for it in your webpack config.

## Steps

1. `npm i --save-dev scalejs.hot-loader`
2. Update your webpack config by adding a preloader to your module property
    ```
      {
      	test: [
      		/Module\.js$/
      	],
      	loader: "hot-loader"
      }
    ```
3. In a file where you want to react to a hot reload place the following code:
    ```
    receive('hot-render', () => {
        // Custom handler here.
    });
    ```