# DB Introduction Notes

A Relation is a Table.

Relational Databases store data in Tables.

A table has a collection of rows (Record).

A row has many columns (Field).

A table (or group of tables) is where resources are stored.

SQL (Structured Query Language)
- Manipulate Data (CRUD)
- Manage entire database structure (schema)
- Manage Objects within database
- Manage database server (security, monitoring, performance, analysis)

Relational Database Management System (RDBMS)
- Server software to manage relational databases

Examples:
- SQLite
- PostgreSQL
- MySQL
- MS SQL Server
- Oracle
- MariaDB

## Using an RDB from a Node.js API

(Database Server for us is SQLite)

[client] HTTP(= JSON =) [API] Proprietary Protocol(= SQL Queries =) [DBMS Server]

A **Query Builder (Knex for us)** translates between the API language (JS for Node.js) and SQL

[API] == Knex == Database Driver == [RDBMS]
- Database Driver knows how to talk database -

An Object Relational Mapper (ORM) - Examples: Sequelize and Bookshelf
Another way to connect an API to an RDBMS.

ORMs are more complex because they do more than a simple Query Builder.

