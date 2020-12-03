# Migration `20201203025012-init`

This migration has been generated at 12/3/2020, 11:50:12 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey"

ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey"

ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "username" TEXT,
ALTER COLUMN "email" DROP NOT NULL

CREATE TABLE "Vote" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "val1" TEXT,
    "val2" TEXT,
    "val3" TEXT,
    "val4" TEXT,
    "val5" TEXT,
    "val6" TEXT,
    "val7" TEXT,
    "val8" TEXT,
    "val9" TEXT,
    "val10" TEXT,
    "val11" TEXT,
    "val12" TEXT,
    "val13" TEXT,
    "val14" TEXT,
    "val15" TEXT,
    "val16" TEXT,
    "val17" TEXT,
    "val18" TEXT,
    "val19" TEXT,
    "val20" TEXT,
    "userId" INTEGER,

    PRIMARY KEY ("id")
)

CREATE TABLE "UserVote" (
"id" SERIAL,
    "voteSelect" TEXT,
    "userId" INTEGER,
    "voteId" INTEGER,

    PRIMARY KEY ("id")
)

CREATE TABLE "_RelationVote" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
)

DROP TABLE "Post"

DROP TABLE "Profile"

CREATE UNIQUE INDEX "_RelationVote_AB_unique" ON "_RelationVote"("A", "B")

CREATE INDEX "_RelationVote_B_index" ON "_RelationVote"("B")

ALTER TABLE "Vote" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "UserVote" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "UserVote" ADD FOREIGN KEY("voteId")REFERENCES "Vote"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "_RelationVote" ADD FOREIGN KEY("A")REFERENCES "Vote"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "_RelationVote" ADD FOREIGN KEY("B")REFERENCES "Vote"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201203013153-init..20201203025012-init
--- datamodel.dml
+++ datamodel.dml
@@ -3,31 +3,46 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
-model Post {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  title     String
-  content   String?
-  published Boolean  @default(false)
-  authorId  Int
-  author    User     @relation(fields: [authorId], references: [id])
+model Vote {W
+  id          Int     @id @default(autoincrement())
+	title       String
+	description String
+  upperVote   Vote[]  @relation("RelationVote", references: [id])
+  lowerVote   Vote[]  @relation("RelationVote", references: [id])
+	val1        String?
+	val2        String?
+	val3        String?
+	val4        String?
+	val5        String?
+	val6        String?
+	val7        String?
+	val8        String?
+	val9        String?
+	val10       String?
+	val11       String?
+	val12       String?
+	val13       String?
+	val14       String?
+	val15       String?
+	val16       String?
+	val17       String?
+	val18       String?
+	val19       String?
+	val20       String?
 }
-
-model Profile {
-  id     Int     @id @default(autoincrement())
-  bio    String?
-  userId Int     @unique
-  User   User    @relation(fields: [userId], references: [id])
-}
-
 model User {
-  id      Int      @id @default(autoincrement())
-  email   String   @unique
-  name    String?
-  posts   Post[]
-  profile Profile?
+  id          Int      @id @default(autoincrement())
+  username    String? 
+  email       String?   @unique
+	votes       Vote[]
 }
+model UserVote {
+  id          Int      @id @default(autoincrement())
+	user        User?
+	vote        Vote?
+	voteSelect  String?
+}
```


