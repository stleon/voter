# Voter

## Перед запуском

```
pyvenv-3.5 venv
source venv/bin/activate
pip install -r requirements.txt
```

Создать переменные окружения:

- **SECRET_KEY**
- **VK_OAUTH2_KEY**
- **VK_OAUTH2_SECRET**
- **DB_NAME**
- **DB_USER**
- **DB_PASSWORD**

### Создание бд и юзера

```
createuser --pwprompt voter_user
createdb -O voter_user -Eutf8 voter_db
```

Далее нужно накатить миграции

```
python manage.py migrate
```