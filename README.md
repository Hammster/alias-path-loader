# alias-replacer

## Usage

``` js
{
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'alias-replacer',
                options: {
                    alias: {
                        '@img': '/absolute/path/tp/project/src/assets/img',
                    }
                }
            }
        ]
    }
}
```
