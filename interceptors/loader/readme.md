# How to use:

Add this:
```ts
providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
]
```

to `NgModule` in `app.module.ts`.
