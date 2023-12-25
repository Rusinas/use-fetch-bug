Steps of reproduction

```
npm run build
```

```
npm start
```

Open `localhost:3000`, useFetch will return `null`. 

If you go to `WithGlobalState2.vue` and comment out line number 13 `const { global } = useGlobal()`, everything will work fine.
