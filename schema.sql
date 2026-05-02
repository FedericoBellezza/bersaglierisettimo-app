CREATE TABLE IF NOT EXISTS events (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(255) NOT NULL,
  date        VARCHAR(100) NOT NULL,
  month       VARCHAR(50),
  year        VARCHAR(10),
  location    TEXT,
  description TEXT,
  image       VARCHAR(255),
  type        VARCHAR(100),
  start_time  VARCHAR(10),
  end_time    VARCHAR(10),
  locandina   VARCHAR(255),
  created_at  TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
