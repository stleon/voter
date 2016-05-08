from django.db import models


class CastingUser(models.Model):
    """
    Модель участника голосования.
    """
    user = models.OneToOneField('auth.User',
                                verbose_name='Пользователь-участник', )
    url = models.URLField(verbose_name='Ссылка на фотографию', unique=True, )
    rating = models.IntegerField(verbose_name='Рейтинг фотографии',
                                 db_index=True,
                                 default=0, )
    counter = models.PositiveIntegerField(
        verbose_name='Количество проголосовавших',
        default=0, )

    class Meta:
        db_table = 'casting_user'
        verbose_name = 'Участник голосования'
        verbose_name_plural = 'Участники голосования'

    def __str__(self):
        return '{}'.format(self.user.username)

    @property
    def position(self):
        """
        Позиция пользователя в рейтинге

        TODO bad idea for first time
        """
        return CastingUser.objects.filter(rating__gte=self.rating).count()

    @property
    def stars(self):
        """
        Кол-во звезд у пользователя. Можно было бы использовать 
        http://www.postgresql.org/docs/current/static/functions-math.html
        но там "integer division truncates the result"
        """
        k = self.rating / self.counter
        return (k + 1) * 2.5
