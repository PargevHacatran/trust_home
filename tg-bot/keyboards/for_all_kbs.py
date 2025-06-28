from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton


def create_start_kb():
    inline_kb_list = [
        [InlineKeyboardButton(text="Я юрист", callback_data="menu_lawyers")],
        [InlineKeyboardButton(text="Я пользователь", callback_data="menu_users")],
    ]
    return InlineKeyboardMarkup(inline_keyboard=inline_kb_list)


