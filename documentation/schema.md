# Readium App Data Schema

## users


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| fullName | VARCHAR(55) | not null |
| username | VARCHAR(40)| not null, unique |
| email | VARCHAR(55) | not null, unique |
| hashedPassword | VARCHAR | not null (binary) |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |

## followers


| attribute name | data type | details |
| - | - | - |
| followeeId | integer | foreign key |
| followerId | integer | foreign key |

## stories


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| title | VARCHAR(255) | not null |
| body | TEXT | not null |
| userId | integer | not null, foreign key |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |

## responses


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| body | VARCHAR(255) | not null |
| storyId | integer | not null, foreign key |
| userId | integer | not null, foreign key |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |

## claps


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| userId | integer | not null, foreign key |
| storyId | integer |  foreign key |
| responseId | integer | foreign key |

## genres


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| title | VARCHAR(100) | not null, unique |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |

## storyGenres


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| genreId | integer | not null, foreign key |
| storyId | integer | not null, foreign key |

## bookmarks


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| storyId | integer | not null, foreign key |
| userId | integer | not null, foreign key |
| createdAt | timestamp | not null |
| updatedAt | timestamp | not null |
