— What each of you did, individually

1 homepage plus search (Thar)
2 make new resources (Both)
 - screenshot
 - video
 - private/public
3 details page (Siu)
 - rating, like (also on homepage), comment, go to my page/other user page
4 update profile (Both)
5 my resources (Thar)
  - filtering
6 login/logout/register (both)

— Show us what you built (demo)

— What you learned and/or what you’ll do differently in final projects

1 divide HTML into smaller ejs files
2 use React
3 learned about merge and we should merge more often
4 commit more often
5 googling skill
6 new async syntax

## To do list

### Requirements

^ users should be able to save an external URL along with a title and description
^ users should be able to search for already-saved resources created by any user
^ users should be able to categorize any resource under a topic
^ sers should be able to comment on any resource
^ users should be able to rate any resource
^ users should be able to like any resource
^ users should be able to view all their own and all liked resources on one page ("My resources")
^ users should be able to register, log in, log out and update their profile


### edit page (stretch)
- edit url, description, title, categories

### home page
- oembed / thum.io
^ display all the resources
^ users should be able to like any resource
^ display screenshot/embed video/images uploaded by the user
- diplsay title, rating, number of likes, part of desciption, username

### login
^ email, password
- (stretch) verify email

### register
^ email(unique), password , username(unique)
- (stretch: twice, included char and number, min length: 8)

### detail page of a single resource
^ iframely (call the api everytimes an user open the page)
- (stretch) owner can make resource public/private
^ users should be able to comment on any resource (just comment)
^ users should be able to rate any resource (rating, plus comment)
^ users should be able to like any resource

### liked resources
^ users should be able to view all their own and all liked resources on one page ("My resources")

### my page
- (stretch) owner can change public/private for all resources
^ users should be able to update their profile (username, email, password[twice], profile picture)

### new resource
^ save an external URL along with a title and description (optional: upload image)
^ users should be able to categorize any resource under a topic

### header
^ users should be able to search for already-saved resources created by any user
- (stretch) search user
- (stretch) search by catergory
^ logout button / login link

# LHL Node Skeleton

## Project Setup

The following steps are only for _one_ of the group members to perform.

1. Create your own copy of this repo using the `Use This Template` button, ideally using the name of your project. The repo should be marked Public
2. Verify that the skeleton code now shows up in your repo on GitHub, you should be automatically redirected
3. Clone your copy of the repo to your dev machine
4. Add your team members as collaborators to the project so that they can push to this repo
5. Let your team members know the repo URL so that they use the same repo (they should _not_ create a copy/fork of this repo since that will add additional workflow complexity to the project)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples.
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - It runs through each of the files, in order, and executes them against the database.
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
