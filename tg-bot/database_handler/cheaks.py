from decouple import config
from create_bot import db_url


# после нужно сделать подтяжку из бд
async def cheak_lawyer(user_tg_id):
    if user_tg_id in [int(admin_id) for admin_id in config('LAWYER').split(',')]:
        return True
    else:
        return False




