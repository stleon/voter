# Voter

Перед запуском

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


Использование API:

- Список участников
```
GET /casting-users/
curl -X GET http://app-host/casting-users/
```

- Просмотр конкретного участника
```
GET /casting-users/{pk}/
curl -X GET http://app-host/casting-users/{pk}/
```
- Создание участника с выбранной фотографией
```
POST /casting-users/
curl -H 'Content-type: application/json' -X PUT -d '{"url": "http://new-photo.jpg", "user": "{pk}"}' http://app-host/casting-users/
```
- Редактирование участника
```
PUT /casting-users/{pk}/
curl -H 'Content-type: application/json' -X PUT -d '{"url": "http://new-photo.jpg", "user": "{pk}"}' http://app-host/casting-users/{pk}/

PATCH /casting-users/{pk}/
curl -H 'Content-type: application/json' -X PATCH -d '{"url": "http://new-photo.jpg"}' http://app-host/casting-users/{pk}/
```

- Удаление участника
```
DELETE /casting-users/{pk}/
curl -X DELETE http://app-host/casting-users/{pk}/
```
