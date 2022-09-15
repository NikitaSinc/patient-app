FROM postgres

WORKDIR /
ENV - POSTGRES_DB=patients
ENV - POSTGRES_PASSWORD=1111
ENV - POSTGRES_USER=postgres
COPY resources/db/init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432

