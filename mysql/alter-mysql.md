# add column
```
ALTER TABLE `goals` ADD `report_type` STRING NULL AFTER `id`;
```
# change column 
```
ALTER TABLE users MODIFY infos_lang JSON NULL;
ALTER TABLE users MODIFY COLUMN infos_lang TEXT NULL;
```