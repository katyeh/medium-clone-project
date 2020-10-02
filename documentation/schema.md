# Readium App Data Schema

## users

| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| fullName | string | not null |
| username | string | not null, unique |
| email | string | not null, unique |
| hashedPassword | string | not null (binary) |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |


## followers

| attribute name | data type | details |
| - | - | - |
| userId | integer | foreign key |
| followerId | integer | foreign key |


## stories

| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| title | string  | not null |
| body | string | not null |
| likes |  integer |  |
| genreId |  integer | not null, foreign key |
| userId |  integer | not null, foreign key |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |


## comments

| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| body | string | not null |
| storyId | integer | not null, foreign key |
| userId | integer | not null, foreign key |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |


## likes

| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| storyId | integer | not null, foreign key |


## bookmarks

| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| title | string | not null |
| storyId | integer | not null, foreign key |
| userId | integer | not null, foreign key |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |


## genres

| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| title | string | not null, unique |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |
