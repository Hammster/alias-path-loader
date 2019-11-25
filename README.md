# alias-path-loader

A very simple alias replacement plugin to add alias support to `pug-plain-loader` and similar loaders that don't resolve.

## Hint

This loader does a simple string replace, so be very careful with your alias names

## Usage

``` js
{
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: [
                    {
                        loader: 'pug-plain-loader'
                    },
                    {
                        loader: 'alias-replacer',
                        options: {
                            alias: {
                                '@img': '/absolute/path/tp/project/src/assets/img',
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```
