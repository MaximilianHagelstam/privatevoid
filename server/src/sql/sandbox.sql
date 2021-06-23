-- Users
CREATE TABLE users (
    id int PRIMARY KEY,
    username text UNIQUE NOT NULL,
    display_name text NOT NULL,
    image_url text NOT NULL,
    bio text,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL
);

DROP TABLE users;

INSERT INTO users
(id, username, display_name, image_url, bio, "createdAt", "updatedAt")
VALUES
(8796, 'BobbyBob', 'Bob The Boss', 'https://trollface.com', 'Hello, I am bobby', current_date, current_date);

SELECT * FROM users;



-- Posts
CREATE TABLE posts (
    id serial PRIMARY KEY,
    message text NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    author_id int REFERENCES users(id) NOT NULL
);

DROP TABLE posts;

INSERT INTO posts
(message, "createdAt", "updatedAt", author_id)
VALUES
('Hello team', current_date, current_date, 8796);

SELECT * FROM posts;
