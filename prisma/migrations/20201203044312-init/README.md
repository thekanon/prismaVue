# Migration `20201203044312-init`

This migration has been generated at 12/3/2020, 1:43:12 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_userId_fkey"

ALTER TABLE "Vote" DROP COLUMN "userId"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201203025012-init..20201203044312-init
--- datamodel.dml
+++ datamodel.dml
@@ -3,12 +3,12 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
-model Vote {W
+model Vote {
   id          Int     @id @default(autoincrement())
 	title       String
 	description String
   upperVote   Vote[]  @relation("RelationVote", references: [id])
@@ -34,12 +34,12 @@
 	val19       String?
 	val20       String?
 }
 model User {
-  id          Int      @id @default(autoincrement())
+  id          Int       @id @default(autoincrement())
   username    String? 
   email       String?   @unique
-	votes       Vote[]
+	votes       Vote[]    @relation("RelationVote", references: [id])
 }
 model UserVote {
   id          Int      @id @default(autoincrement())
 	user        User?
```


