-- CreateTable
CREATE TABLE "config" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "config_key" TEXT NOT NULL,
    "config_value" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "ziqx_id" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "institute" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "place" TEXT,
    "address" TEXT,
    "open_for_admission" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "right" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "delete_status" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "user_right" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "rightId" INTEGER NOT NULL,
    "instituteId" TEXT NOT NULL,
    CONSTRAINT "user_right_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_right_rightId_fkey" FOREIGN KEY ("rightId") REFERENCES "right" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_right_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "institute" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "academic_year" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "instituteId" TEXT NOT NULL,
    CONSTRAINT "academic_year_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "institute" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "dob" TEXT,
    "father_name" TEXT,
    "mother_name" TEXT,
    "address1" TEXT,
    "address2" TEXT,
    "contact1" TEXT,
    "contact2" TEXT,
    "whatsapp" TEXT,
    "email" TEXT,
    "join_date" TEXT,
    "instituteId" TEXT NOT NULL,
    CONSTRAINT "student_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "institute" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "grade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "section" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "instituteId" TEXT NOT NULL,
    "academic_yearId" INTEGER NOT NULL,
    CONSTRAINT "grade_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "institute" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "grade_academic_yearId_fkey" FOREIGN KEY ("academic_yearId") REFERENCES "academic_year" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "subject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gradeId" INTEGER NOT NULL,
    CONSTRAINT "subject_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "grade" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "teacher" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "dob" TEXT,
    "address1" TEXT,
    "address2" TEXT,
    "contact1" TEXT,
    "contact2" TEXT,
    "whatsapp" TEXT,
    "email" TEXT,
    "join_date" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "instituteId" TEXT NOT NULL,
    CONSTRAINT "teacher_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "institute" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "teacher_institute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teacherId" TEXT NOT NULL,
    "instituteId" TEXT NOT NULL,
    CONSTRAINT "teacher_institute_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teacher" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "teacher_institute_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "institute" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "admission_form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "is_open" BOOLEAN NOT NULL DEFAULT false,
    "form_items" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "delete_status" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "admission_form_item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT,
    "type" TEXT DEFAULT 'input',
    "initial_value" TEXT,
    "admission_formId" INTEGER NOT NULL,
    CONSTRAINT "admission_form_item_admission_formId_fkey" FOREIGN KEY ("admission_formId") REFERENCES "admission_form" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "admission_application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" TEXT,
    "email" TEXT,
    "dob" TEXT,
    "password" TEXT,
    "application_values" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
