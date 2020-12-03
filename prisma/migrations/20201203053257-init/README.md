# Migration `20201203053257-init`

This migration has been generated at 12/3/2020, 2:32:57 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "UserVote" DROP CONSTRAINT "UserVote_pkey",
ADD COLUMN "id" SERIAL,
ADD PRIMARY KEY ("id")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201203050413-init..20201203053257-init
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Vote {
   id          Int     @id @default(autoincrement())
@@ -41,11 +41,11 @@
   email       String?   @unique
 	votes       UserVote[]
 }
 model UserVote {
-  @@id([userId, voteId])
 	user          User        @relation(fields: [userId], references: [id])
+	userId        Int         //relation scalar field (used in the `@relation` attribute above)
 	vote          Vote        @relation(fields: [voteId], references: [id])
-	userId        Int         //relation scalar field (used in the `@relation` attribute above)
 	voteId        Int         //relation scalar field (used in the `@relation` attribute above)
 	voteSelect  String?
+  id          Int       @id @default(autoincrement())
 }
```


