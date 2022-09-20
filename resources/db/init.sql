\c postgres
drop database if exists patients;
drop database if exists patients_test;
alter user postgres with password '1111';
create database patients;
create database patients_test;
\c patients
drop table if exists patients;
drop table if exists users;

create type gender_enum AS ENUM ('male', 'female');

create table patients(
        oms char(16) primary key,
        fio char(200) not null,
        gender gender_enum not null,
        dob date not null,
        address char(200) not null
);


insert into patients (oms, fio, gender, dob, address)
values  ('7415229486301542', 'Корнилов Эльдар Кимович', 'male', '1999-01-08', 'ул. Пушкина, д. Колотушкина'),
        ('9979928786866368', 'Тимофеев Валентин Юрьевич', 'male', '1967-01-13', 'пр. 30-летия Победы д. 32 кв. 30'),
        ('6873166502453387', 'Пестов Юрий Ростиславович', 'male', '1977-01-03', 'ул. Ленина д. 34 кв. 200'),
        ('2657814865466207', 'Щербакова Франсуаза Донатовна', 'female', '1988-01-21', 'ул. Тестовая д. Забагованный кв. Оверфлоу');

\c patients_test

drop table if exists patients;
drop table if exists users;

create type gender_enum AS ENUM ('male', 'female');

create table patients(
        oms char(16) primary key,
        fio char(200) not null,
        gender gender_enum not null,
        dob date not null,
        address char(200) not null
);


\c postgres;
