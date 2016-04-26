from social.backends.vk import VKOAuth2, vk_api


class CustomVKOAuth(VKOAuth2):
    """
    During the auth process some basic user data is returned by the provider
    or retrieved by user_data() method which usually is used to call some
    API on the provider to retrieve it. This data will be stored under
    UserSocialAuth.extra_data attribute, but to make it accessible
    under some common names on different providers, this attribute
    defines a list of tuples in the form (name, alias) where name is
    the key in the user data (which should be a dict instance) and alias
    is the name to store it on extra_data.s

    """
    EXTRA_DATA = [
        ('uid', 'id'),
        ('sex', 'sex'),
        ('screen_name', 'screen_name')

    ]