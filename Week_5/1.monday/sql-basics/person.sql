-- SQL Basics ---


/* Person table */
-- Q1
CREATE TABLE person (
  id SERIAL PRIMARY KEY
  , name VARCHAR(30)
  , age INT
  , heigh_cm FLOAT
);

-- Q2
INSERT INTO
  person (name, age, height_cm)
VALUES
  ('Kit Harington', 34, 173)
  , ('Emilia Clarke', 34, 157)
  , ('Peter Dinklage', 52, 135)
  , ('Lena Headey', 48, 165)
  , ('Maisie William' s, 24, 155)
-- Q3
SELECT
  *
FROM
  person
ORDER BY
  height DESC
-- Q4
SELECT
  *
FROM
  person
ORDER BY
  height
-- Q5
SELECT
  *
FROM
  person
ORDER BY
  age DESC
-- Q6
SELECT
  *
FROM
  person
WHERE
  age > 20
-- Q7
SELECT
  *
FROM
  person
WHERE
  age = 18
-- Q8
SELECT
  *
FROM
  person
WHERE
  age < 20
  OR age > 30;

-- Q9
SELECT
  *
FROM
  person
WHERE
  age <> 27;

-- Q10
SELECT
  *
FROM
  person
WHERE
  favorite_color != 'red';

-- Q11
SELECT
  *
FROM
  person
WHERE
  favorite_color NOT IN ('red', 'blue');

-- Q12
SELECT
  *
FROM
  person
WHERE
  favorite_color IN ('orange', 'green');

-- Q13
SELECT
FROM
  person
WHERE
  favorite_color IN ('orange', 'green', 'blue');

-- Q14
SELECT
  *
FROM
  person
WHERE
  favorite_color IN ('yellow', 'purple');