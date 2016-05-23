from django.db import models
from hashlib import md5
import random
import string
from django.db.models.signals import pre_save


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
    sex = models.IntegerField(verbose_name='Пол', default=0)
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
        if self.rating and self.counter:
            k = self.rating / self.counter
            return (k + 1) * 2.5
        else:
            return 0


class Choice(models.Model):
    '''
    Possivble choice of two almost random people.

    @TODO: Need remove records by ttl (Redis?)
    '''
    users = models.ManyToManyField(CastingUser)
    salt = models.TextField(default=''.join(
        random.choice(
            string.ascii_lowercase + string.digits) for _ in range(8)))
    created_at = models.DateTimeField(auto_now_add=True)

    def get_uuids(self):
        '''
        Method for dynamic generation uuids for current voting

        :return: Dict of CastingUser as key and voting UUID as value
        :rtype: dict
        '''
        uuids = {}
        for user in self.users.all():
            uuid = md5(self.salt.encode())
            uuid.update(bytes(self.id))
            uuid.update(bytes(user.id))
            uuid.update(str(self.created_at.timestamp()).encode())
            uuids[uuid.hexdigest()] = user
        return uuids


def casting_user_pre_save(sender, instance, **kwargs):
    instance.sex = instance.user.social_auth.get(
        provider='vk-oauth2').extra_data.get('sex', 0)

pre_save.connect(casting_user_pre_save, CastingUser)
