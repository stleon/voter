from django.db import models


class CastingUser(models.Model):
    """
    Модель участника голосования.
    """
    user = models.OneToOneField(
        'auth.User',
        verbose_name='Пользователь-участник',
    )
    url = models.URLField(
        verbose_name='Ссылка на фотографию',
        unique=True,
    )
    rating = models.IntegerField(
        verbose_name='Рейтинг фотографии',
        db_index=True,
        default=0,
    )
    counter = models.PositiveIntegerField(
        verbose_name='Количество проголосовавших',
        default=0,
    )

    class Meta:
        db_table = 'casting_user'
        verbose_name = 'Участник голосования'
        verbose_name_plural = 'Участники голосования'

    def __str__(self):
        return '{}'.format(self.user.username)
