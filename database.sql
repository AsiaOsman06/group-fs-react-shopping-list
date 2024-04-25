-- Don't forget to add your create table SQL 
DROP TABLE IF EXISTS "shoppingList";

CREATE TABLE "shoppingList" (
   "id" SERIAL PRIMARY KEY,
   "name" VARCHAR(80),
   "quantity" INTEGER,
   "unit" VARCHAR(20),
   "isPurchased" BOOLEAN DEFAULT false 
);
-- It is also helpful to include some test data

INSERT INTO "shoppingList"
    ("name", "quantity", "unit", "isPurchased")
    VALUES
    ('Apples', 5, 'lbs.', false),
    ('Bread', 1, 'loaf', false),
    ('Milk', 1, 'gallon', false),
    ('Sliced Almonds', 2, 'cups', false),
    ('Bananas', 1, 'bunch', true);