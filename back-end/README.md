# Back-End Note Cards

## How to download and run the project?

    You need to have the JDK 17, Maven and PostgreSQL installed on your computer: 

[Click here to download JDK 17](https://www.oracle.com/java/technologies/downloads/#java17)\
[Click here to download Maven](https://maven.apache.org/download.cgi)\
[Click here to download PostgreSQL](https://www.postgresql.org/)

### After installing follow the instructions below:

    Clone the repository: git clone https://github.com/JonasDias10/note-cards.git 

---
    Open the application.properties file and add the database URL, username and password after the PostgreSQL configuration.
---

### In the project directory, you can run:

    To run the project: mvn spring-boot:run

### Alternatively, use an IDE such as IntelliJ, Eclipse, or one of your own.

### After that, open the front-end project and execute the instructions.

--- 

### API Endpoints

#### Base Url: http://localhost:8080/api/note-cards/

### Card
| Method | Endpoint | Description |
| ------ | --- | ---------- |
| GET    | card/userCards/{userID} | Fetch user cards |
| DELETE | card/{cardID} | Delete card |
| POST   | card/ | Add new card |
| PUT    | card/update | Update card |

--- 

### User
| Method | Endpoint | Description |
| ------ | --- | ---------- |
| POST    | user/login | Authentication login |
| POST   | user/ | Add new user |
| DELETE | user/{userID} | Delete user |
| PUT    | user/update | Update user |

---