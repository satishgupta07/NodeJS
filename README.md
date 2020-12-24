# Bset Practices for a NodeJS Project

## Database Setup

```mysql
create database sampleblogdb;
use sampleblogdb;
create user samplebloguser identified by 'sampleblogpass';
grant all privileges on sampleblogdb.* to samplebloguser;
flush privileges;
```