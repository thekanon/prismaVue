# Migration `20201203004724-init`

This migration has been generated at 12/3/2020, 9:47:24 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Post" (
"id" SERIAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "Profile" (
"id" SERIAL,
    "bio" TEXT,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "User" (
"id" SERIAL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Profile.userId_unique" ON "Profile"("userId")

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")

ALTER TABLE "Post" ADD FOREIGN KEY("authorId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "Profile" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201203004724-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,33 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+model Post {
+  id        Int      @default(autoincrement()) @id
+  createdAt DateTime @default(now())
+  title     String
+  content   String?
+  published Boolean  @default(false)
+  User      User     @relation(fields: [authorId], references: [id])
+  authorId  Int
+}
+model Profile {
+  id     Int     @default(autoincrement()) @id
+  bio    String?
+  User   User    @relation(fields: [userId], references: [id])
+  userId Int     @unique
+}
+model User {
+  id      Int      @default(autoincrement()) @id
+  email   String   @unique
+  name    String?
+  Post    Post[]
+  Profile Profile?
+}
```


