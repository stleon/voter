from django.db import models


class CastingUser(models.Model):
    """
    Модель участника голосования.
    """
    user = models.OneToOneField(
        'auth.User',
        name='user',
        verbose_name='Пользователь-участник',
    )
    url = models.URLField(
        name='url',
        verbose_name='Ссылка на фотографию',
    )
    rating = models.IntegerField(
        name='rating',
        verbose_name='Рейтинг фотографии',
        db_index=True,
        default=0,
    )
    counter = models.PositiveIntegerField(
        name='counter',
        verbose_name='Количество проголосовавших',
        default=0,
    )

    class Meta:
        db_table = 'casting_user'
        verbose_name = 'Участник голосования'
        verbose_name_plural = 'Участники голосования'

    def __unicode__(self):
        return '{}'.format(self.user.username)
