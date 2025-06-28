from aiogram import Router, F
from aiogram.filters import CommandStart
from aiogram.types import Message, CallbackQuery

from create_bot import bot
from keyboards.for_all_kbs import create_start_kb

start_router = Router()


async def choice_role(user_id):
    await bot.send_message(chat_id=user_id,
                           text='Выберите роль',
                           reply_markup=create_start_kb())


@start_router.message(CommandStart())
async def start(message: Message):
    await choice_role(message.from_user.id)


@start_router.callback_query(F.data == "back_to_choice")
async def back_to_choice(call: CallbackQuery):
    await choice_role(call.from_user.id)



