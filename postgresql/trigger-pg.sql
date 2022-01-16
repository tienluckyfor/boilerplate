-- prepare to test 
DROP TABLE IF EXISTS employees;
CREATE TABLE employees(
   id INT GENERATED ALWAYS AS IDENTITY,
   first_name VARCHAR(40) NOT NULL,
   last_name VARCHAR(40) NOT NULL,
   PRIMARY KEY(id)
);
CREATE TABLE employee_audits (
   id INT GENERATED ALWAYS AS IDENTITY,
   employee_id INT NOT NULL,
   last_name VARCHAR(40) NOT NULL,
   changed_on TIMESTAMP(6) NOT NULL
);

-- drop trigger update pg
DROP TRIGGER last_name_update ON employees;

-- create trigger update pg
CREATE OR REPLACE FUNCTION log_last_name_update()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
	IF NEW.last_name <> OLD.last_name THEN
        INSERT INTO employee_audits(employee_id,last_name, type, changed_on)
        VALUES(OLD.id,OLD.last_name, 'update', now());
	END IF;

	RETURN NEW;
END;
$$
CREATE TRIGGER last_name_update
  BEFORE UPDATE
  ON employees
  FOR EACH ROW
  EXECUTE PROCEDURE log_last_name_update();

-- create trigger insert pg
CREATE OR REPLACE FUNCTION log_last_name_insert()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
    INSERT INTO employee_audits(employee_id,last_name, type, changed_on)
    VALUES(NEW.id,NEW.last_name, 'insert', now());
	RETURN NEW;
END;
$$
CREATE TRIGGER last_name_insert
  BEFORE INSERT
  ON employees
  FOR EACH ROW
  EXECUTE PROCEDURE log_last_name_insert();
