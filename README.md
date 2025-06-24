# Shoe Retail

This project is a toy project to apply some design concept I learned in [Philosophy of Software Design](https://www.amazon.ca/Philosophy-Software-Design-John-Ousterhout/dp/1732102201). It's also the opportunity to learn about the following technologies:
* Django
* React
* PostgreSQL
* GraphQL (Graphene / Apollo)

## Dependencies
* Python
* Uv python
* Docker
* Node.js
* npm

## Installation
You first need to install the dependencies liste above.

### The backend
Before that, run `docker compose up`
```bash
cd backend/retail/
uv sync
uv run ./manage.py createmigrations
uv run ./manage.py migrate
```

### The frontend
TODO

## How to run the project
In different terminals, run the following commands:
* cd backend/retail && uv run ./manage.py runserver
* cd frontend && npm run dev
* docker compose up
