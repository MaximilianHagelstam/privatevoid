CREATE TABLE users (
    id int PRIMARY KEY,
    username text UNIQUE NOT NULL,
    display_name text NOT NULL,
    image_url text NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    bio text
);

CREATE TABLE posts (
    id serial PRIMARY KEY,
    message text NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    author_id int REFERENCES users(id) NOT NULL
);

CREATE TABLE comments (
    id serial PRIMARY KEY,
    body text NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    post_id int REFERENCES posts(id) NOT NULL,
    creator_id int REFERENCES users(id) NOT NULL
);

CREATE TABLE likes (
    user_id int REFERENCES users(id) NOT NULL,
    post_id int REFERENCES posts(id) NOT NULL,
    PRIMARY KEY (user_id, post_id)
);

CREATE TABLE followers (
    following_user_id int REFERENCES users(id) NOT NULL,
    followed_user_id int REFERENCES users(id) NOT NULL,
    PRIMARY KEY (following_user_id, followed_user_id)
);