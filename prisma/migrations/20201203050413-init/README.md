# Migration `20201203050413-init`

This migration has been generated at 12/3/2020, 2:04:13 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "_UserToVote" DROP CONSTRAINT "_UserToVote_A_fkey"

ALTER TABLE "_UserToVote" DROP CONSTRAINT "_UserToVote_B_fkey"

ALTER TABLE "UserVote" DROP CONSTRAINT "UserVote_pkey",
DROP COLUMN "id",
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "voteId" SET NOT NULL,
ADD PRIMARY KEY ("userId", "voteId")

DROP TABLE "_UserToVote"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201203044945-init..20201203050413-init
--- datamodel.dml
+++ datamodel.dml
@@ -3,16 +3,16 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Vote {
   id          Int     @id @default(autoincrement())
 	title       String
 	description String
-  users       User[]
+  users       UserVote[]
   upperVote   Vote[]  @relation("RelationVote", references: [id])
   lowerVote   Vote[]  @relation("RelationVote", references: [id])
 	val1        String?
 	val2        String?
@@ -38,12 +38,14 @@
 model User {
   id          Int       @id @default(autoincrement())
   username    String? 
   email       String?   @unique
-	votes       Vote[]
+	votes       UserVote[]
 }
 model UserVote {
-  id          Int      @id @default(autoincrement())
-	user        User?
-	vote        Vote?
+  @@id([userId, voteId])
+	user          User        @relation(fields: [userId], references: [id])
+	vote          Vote        @relation(fields: [voteId], references: [id])
+	userId        Int         //relation scalar field (used in the `@relation` attribute above)
+	voteId        Int         //relation scalar field (used in the `@relation` attribute above)
 	voteSelect  String?
 }
```


