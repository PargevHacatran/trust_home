from aiogram import Router, F
from aiogram.filters import Command
from aiogram.types import Message, CallbackQuery
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import StatesGroup, State

from create_bot import bot
from keyboards.for_users_kbs import create_user_kb
from database_handler.chat import upload_db_request


user_router = Router()


@user_router.callback_query(F.data == "menu_users")
async def open_menu_lawyers(call: CallbackQuery):
    await bot.send_message(chat_id=call.from_user.id,
                           text="Меню",
                           reply_markup=create_user_kb())


# Определяем состояния FSM
class Forma(StatesGroup):
    waiting_for_second_message = State()


@user_router.callback_query(F.data == "upload_db_request")
async def take_request(call: CallbackQuery, state: FSMContext):
    await call.message.answer('Введите вашу проблему:')
    await state.set_state(Forma.waiting_for_second_message)


# Хэндлер для ожидания следующего сообщения
@user_router.message(Forma.waiting_for_second_message)
async def process_second_message(message: Message, state: FSMContext):
    # Захватываем сообщение
    user_input = message.text

    # Обрабатываем полученное сообщение
    await upload_db_request(name=message.from_user.first_name,
                            surname=message.from_user.last_name,
                            tg_id=message.from_user.id,
                            trast_id=message.from_user.id+1,
                            text=user_input)

    # Сбрасываем состояние
    await state.clear()


