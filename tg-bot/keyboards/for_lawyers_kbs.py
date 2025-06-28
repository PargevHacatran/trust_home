from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton


def create_lawyer_kb():
    inline_kb_list = [
        [InlineKeyboardButton(text="Открыть базу заявок", callback_data="open_db_request")],
        [InlineKeyboardButton(text="Вернуться к выбору роли", callback_data="back_to_choice")],
    ]
    return InlineKeyboardMarkup(inline_keyboard=inline_kb_list)

