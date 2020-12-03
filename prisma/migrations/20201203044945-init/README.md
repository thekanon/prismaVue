# Migration `20201203044945-init`

This migration has been generated at 12/3/2020, 1:49:45 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "_RelationVote" DROP CONSTRAINT "_RelationVote_A_fkey"

CREATE TABLE "_UserToVote" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
)

CREATE UNIQUE INDEX "_UserToVote_AB_unique" ON "_UserToVote"("A", "B")

CREATE INDEX "_UserToVote_B_index" ON "_UserToVote"("B")

ALTER TABLE "_UserToVote" ADD FOREIGN KEY("A")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "_UserToVote" ADD FOREIGN KEY("B")REFERENCES "Vote"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "_RelationVote" ADD FOREIGN KEY("A")REFERENCES "Vote"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201203044312-init..20201203044945-init
--- datamodel.dml
+++ datamodel.dml
@@ -3,15 +3,16 @@
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
+  users       User[]
   upperVote   Vote[]  @relation("RelationVote", references: [id])
   lowerVote   Vote[]  @relation("RelationVote", references: [id])
 	val1        String?
 	val2        String?
@@ -37,9 +38,9 @@
 model User {
   id          Int       @id @default(autoincrement())
   username    String? 
   email       String?   @unique
-	votes       Vote[]    @relation("RelationVote", references: [id])
+	votes       Vote[]
 }
 model UserVote {
   id          Int      @id @default(autoincrement())
 	user        User?
```


