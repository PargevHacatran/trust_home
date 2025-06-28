from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton


def create_user_kb():
    inline_kb_list = [
        [InlineKeyboardButton(text="Подать заявку на консультацию юристу", callback_data="upload_db_request")],
        [InlineKeyboardButton(text="Вернуться к выбору роли", callback_data="back_to_choice")],
    ]
    return InlineKeyboardMarkup(inline_keyboard=inline_kb_list)

