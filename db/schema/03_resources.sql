DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT NOT NULL,
  media_url TEXT NOT NULL,
  is_video BOOLEAN NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  is_public BOOLEAN NOT NULL
);


