const { enviroment } = require('@rails/webpacker')
const { default: Popper } = require('popper.js')

const webpack = require('webpack')
enviroment.plugins.prepend('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery',
        Popper: ['popper.js', 'default']
    })
)

module.exports = enviroment