# Migration `20201203013153-init`

This migration has been generated at 12/3/2020, 10:31:53 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201203004724-init..20201203013153-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,33 +1,33 @@
-// This is your Prisma schema file,
-// learn more about it in the docs: https://pris.ly/d/prisma-schema
+generator client {
+  provider = "prisma-client-js"
+}
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
-generator client {
-  provider = "prisma-client-js"
-}
 model Post {
-  id        Int      @default(autoincrement()) @id
+  id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
   title     String
   content   String?
   published Boolean  @default(false)
-  User      User     @relation(fields: [authorId], references: [id])
   authorId  Int
+  author    User     @relation(fields: [authorId], references: [id])
 }
+
 model Profile {
-  id     Int     @default(autoincrement()) @id
+  id     Int     @id @default(autoincrement())
   bio    String?
+  userId Int     @unique
   User   User    @relation(fields: [userId], references: [id])
-  userId Int     @unique
 }
+
 model User {
-  id      Int      @default(autoincrement()) @id
+  id      Int      @id @default(autoincrement())
   email   String   @unique
   name    String?
-  Post    Post[]
-  Profile Profile?
-}
+  posts   Post[]
+  profile Profile?
+}
```


