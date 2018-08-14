CREATE TABLE participants (
  id SERIAL,
  ym_id int references ym(id),
  activities_id int references activities(id)
);
