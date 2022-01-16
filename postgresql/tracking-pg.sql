-- check slow queries
SELECT pid, now() - query_start as "runtime", usename, datname, state, query FROM pg_stat_activity WHERE state != 'idle' ORDER BY runtime DESC;
-- kill
SELECT pg_terminate_backend(6739);

-- kill process
select replace(array_to_string(array(
	SELECT concat('SELECT pg_terminate_backend(', pid, ');') FROM pg_stat_activity WHERE state != 'idle' 
	and query_start < now() - '2 minute'::interval 
), ', '), ',', '');
