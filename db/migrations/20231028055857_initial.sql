-- migrate:up
CREATE TABLE oauth (
  user_id INTEGER PRIMARY KEY,
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL
);


-- migrate:down
DROP TABLE oauth;
