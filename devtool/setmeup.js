module.exports = function(config) {
    this.entry = {
        index: config.Path.join(__dirname, "./", "src/", "assets/", "js/", "Controller", "IndexController.js"),
        vendor: config.Path.join(__dirname, "./", "src/", "assets/", "js/", "Controller", "VendorController.js")
    };

    this.alias = {
        SassPath: config.Path.resolve(__dirname, './src/assets/scss/'),
        ViewPath: config.Path.resolve(__dirname, './src/assets/js/View/'),
        LibrariesPath: config.Path.resolve(__dirname, './src/assets/js/Libraries/'),
        ControllerPath: config.Path.resolve(__dirname, './src/assets/js/Controller/')
    };

    this.copyFiles = [
        {
            to: config.Path.join(__dirname, "./", "../", "assets/", "images/"),
            from: config.Path.join(__dirname, "./", "src/", "assets/", "images/")
        },
        {
            to: config.Path.join(__dirname, "./", "../", "assets/"),
            from: config.Path.join(__dirname, "./", "src/", "assets/", "robots.txt")
        }
    ];

    this.createHtml = function() {
        return [
            new config.HtmlWebpackPlugin({
                title: 'Crosstab',
                inject: false,
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                },
                template: config.Path.join(
                    __dirname,
                    "src/",
                    "assets/",
                    "js/",
                    "View/",
                    "Templates/",
                    "Html/",
                    "index.html"
                ),
                filename: config.Path.join(
                    __dirname,
                    "../",
                    "index.html"
                ),
                assets: {
                    css: [
                        './assets/css/vendor.css',
                        './assets/css/index.css'
                    ],
                    js: [
                        './assets/js/index.js'
                    ]
                }
            }),
        ];
    };
}
