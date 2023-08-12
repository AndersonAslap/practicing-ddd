create table if not exists patients(
    id text,
    name text,
    birthday date,
    gender text
);

create table if not exists doctors(
    id text,
    name text,
    specialty text,
    email text,
    phone text
);
