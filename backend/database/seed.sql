DROP DATABASE IF EXISTS doug_website;
CREATE DATABASE doug_website;
\c doug_website;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project_img VARCHAR,
    project_title VARCHAR,
    project_body VARCHAR,
    git_link VARCHAR,
    live_link VARCHAR
);

-- SEED DATA

INSERT INTO projects (project_img, project_title, project_body, git_link, live_link)
    VALUES ('url', 'Panrty Party', 'One-to-many video broadcasting site built with WebRTC and socket.io. Operates like Twitch, Periscope, or YouTube Live - but designed for chefs to present cooking shows with their own recipes.', 'https://github.com/sislam16/Pantry-Party', 'https://www.pantry-party.com'),
    ('url', 'Hand Me Down', 'Social Media '),
    ();
