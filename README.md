# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Errors while using sqlite3

When using sqlite3, this is the following error thrown while building...

- The error happens only while building the app and not when you start the development server
- ```npm run dev``` works. 
- ```npm run build``` fails--stack trace below.

```
FATAL ERROR: Error::Error napi_define_properties
 1: 0xb6d470 node::Abort() [node]
 2: 0xa7dfb4 node::FatalError(char const*, char const*) [node]
 3: 0xa7dfbd node::OOMErrorHandler(char const*, bool) [node]
 4: 0xb34403 napi_fatal_error [node]
 5: 0x7fc140e2a42e  [/home/hema/learnspaces/frontend/sveltekit-examples/scratch/vite-sqlite3-issue/node_modules/sqlite3/lib/binding/napi-v6-linux-glibc-x64/node_sqlite3.node]
 6: 0x7fc140e2a7cc Napi::Error::New(napi_env__*) [/home/hema/learnspaces/frontend/sveltekit-examples/scratch/vite-sqlite3-issue/node_modules/sqlite3/lib/binding/napi-v6-linux-glibc-x64/node_sqlite3.node]
 7: 0x7fc140e2b057 Napi::Function::Call(napi_value__*, unsigned long, napi_value__* const*) const [/home/hema/learnspaces/frontend/sveltekit-examples/scratch/vite-sqlite3-issue/node_modules/sqlite3/lib/binding/napi-v6-linux-glibc-x64/node_sqlite3.node]
 8: 0x7fc140e36b92 node_sqlite3::Database::Work_AfterOpen(napi_env__*, napi_status, void*) [/home/hema/learnspaces/frontend/sveltekit-examples/scratch/vite-sqlite3-issue/node_modules/sqlite3/lib/binding/napi-v6-linux-glibc-x64/node_sqlite3.node]
 9: 0xb349b9 node::ThreadPoolWork::ScheduleWork()::{lambda(uv_work_s*, int)#2}::_FUN(uv_work_s*, int) [node]
10: 0x164726d  [node]
11: 0x164ba46  [node]
12: 0x165e184  [node]
13: 0x164c398 uv_run [node]
14: 0xaad9e5 node::SpinEventLoop(node::Environment*) [node]
15: 0xc3454f node::worker::Worker::Run() [node]
16: 0xc34b08  [node]
17: 0x7fc14a58cea7  [/lib/x86_64-linux-gnu/libpthread.so.0]
18: 0x7fc14a4aca2f clone [/lib/x86_64-linux-gnu/libc.so.6]
```