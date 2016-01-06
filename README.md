# joi-browser

joi validation bundled for the browser (babelified and bundled)

## Why?

There has been some difficulty in getting a reasonable version of Joi packaged for the browser both due to the size of bundling and now with 7.x.x the switch to ES6 modules has added additional challenges.

The community is trying to rally to get the Joi package itself setup so that we can generate bundles directly from it, but until this is done, this package will allow you to build a bundled version.

This package can be used included in other builds (browserify or webpack) or used on its own.

The default version exposed by package.json is the babelified unminified bundle. It has been transpiled to ES5. Since I expected to primarily be using this inside of another bundle. However the minified version is also built on install as dist/bundle.min.js.

## Usage

```bash
# builds dist/joi-browser.js and dist/joi-browser.min.js
npm install
```

Note: Moment has been excluded from the build, so you will want to include it into your project as `moment` to use `joi-browser`. This allows you to use your existing instance of moment rather than duplicating and allows you freedom to install locales and possibly even exclude moment with a shim if you don't use joi date validation features.

FYI: Moment's locale feature can result in a large bundle, so you can reduce the size of moment by excluding that with a webpack config containing something like:

```javascript
  plugins: [
    // english locale is included, exclude the rest
    new webpack.IgnorePlugin(/locale/, /moment$/)
  ],
```

Resulting size of joi-browser.min.js gzipped is 32KB.

## Discussion

The main discussion about these difficulties has been in this github issue.

https://github.com/hapijs/joi/issues/528#issuecomment-128532221

As for the bundling size issues that were summarized in the issue, the package size can be reduced by eliminating unnecessary code.

crypto is the first thing that can be safely eliminated since this functionaility in Joi would not be used by the browser. That is the biggest win dropping things to ~45KB gzipped without sacrificing any actual functionality.

If your use case doesn't require moment, isemail, and buffer, you can stub those packages out and get a bundle in the neighborhood of ~23KB gzipped.

I have chosen to make the default bundle only exclude crypto so that it would remain fully compatible, but you could fork this and create a smaller version by excluding things you don't need.

| Config | Joi and dependencies gzipped |
|----------|------------------------------------------|
| Full Joi | 126KB |
| w/o crypto (in Hoek) | 44KB |
| w/o crypto (in Hoek), moment | 31KB |
| w/o crypto (in Hoek), moment, isemail | 29KB |
| w/o crypto (in Hoek), moment, isemail, buffer | 23KB |
