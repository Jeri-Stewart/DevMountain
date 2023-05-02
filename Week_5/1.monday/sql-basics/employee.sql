--Q1
SELECT first_name, last_name 
FROM employee 
WHERE city = 'Calgary';


--Q1
SELECT MIN(birth_date) 
FROM employee;
 -- or
SELECT birth_date
FROM employee;
ORDER BY birthdate 
LIMIT 1

--Q3
SELECT birth_date
FROM employee;
 -- or
SELECT birth_date
FROM employee;
ORDER BY birthdate DESC
LIMIT 1

--Q4
SELECT first_name, last_name 
FROM employee 
WHERE reports_to = (SELECT employee_id FROM employee WHERE last_name = 'Edwards' AND first_name = 'Nancy');

--Q5
SELECT COUNT(*) 
FROM employee 
WHERE city = 'Lethbridge';






