from create_bot import bot, db_url


# опять же сделать подтяжку из бд
async def open_db_request():
    return [{'surname': "Иванов", 'name': 'Иванов', 'tg_id': 921394541, 'trast_id': 53, 'text': "НУЖНА ПОМОЩЬ SOS"},
            {'surname': "Новикова", 'name': 'Екатерина', 'tg_id': 123456789, 'trast_id': 54, 'text': "Екатерина нуждается в помощи"}]


async def upload_db_request(surname: str, name: str, tg_id: int, trast_id: int, text: str):
    # тут должно быть занесение запроса в базу
    await bot.send_message(text=f'Поступила заявка на консультацию\n\n'
                              f'От {surname} {name}\n'
                              f'telegram id = {tg_id}, trast id = {trast_id}\n\n'
                              f'Tекст запроса:\n'
                              f'{text}',
                           chat_id=921394541)





