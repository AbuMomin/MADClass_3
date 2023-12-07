/* PLACE all your your SQL commands */

-- DB Migration UP

CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NULL
);

