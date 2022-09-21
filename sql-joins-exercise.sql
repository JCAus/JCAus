JOINING THE 2 TABLES:

SELECT * FROM owners JOIN vehicles ON owners.id = vehicles.owner_id;

COUNT THE # OF CARS FOR EACH OWNER:

SELECT owners.first_name, owners.last_name, COUNT(*) FROM owners JOIN vehicles ON owners.id = vehicles.owner_id GROUP BY owners.first_name, owners.last_name ORDER BY count(*) ASC;

COUNT THE # OF CARS AND THE AVERAGE PRICE FOR EACH OWNER:

SELECT owners.first_name, owners.last_name, AVG(price), COUNT(*) FROM owners JOIN vehicles ON owners.id = vehicles.owner_id GROUP BY owners.first_name, owners.last_name HAVING COUNT(*) > 1 AND AVG(price) > 10000 ORDER BY owners.first_name DESC;



