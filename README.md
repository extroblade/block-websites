# Easy Block


### Client:
 - Next.js (Pages), TypeScript, Tailwind, Tanstack Query, Axios, Orval, FSD
```shell
    cd client
    npm install
    npm run api:download
    npm run api:generate
    npm run dev
```

---

### Extension:
- React (Vite), TypeScript, Tailwind, Tanstack Query, Orval, FSD
```shell
    cd extension
    npm install
    npm run api:download
    npm run api:generate
    npm run dev
```

---

### Server:
- Nest.js, TypeScript, Docker, Swagger, Prisma, Postgres
```shell
    cd server
    docker compose up
```

---

### /server/.env example

```shell
    POSTGRES_USER='postgres'
    
    POSTGRES_PASSWORD='postgres'
    
    DATABASE_URL='postgresql://postgres:postgres@db:5432/postgres?schema=public'
    
    JWT_SECRET='super-secret-key'
```
