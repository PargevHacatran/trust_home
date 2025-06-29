from aiogram import Router, F
from aiogram.filters import Command
from aiogram.types import Message, CallbackQuery
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import StatesGroup, State

from create_bot import bot
from database_handler.cheaks import cheak_lawyer
from database_handler.chat import open_db_request
from keyboards.for_lawyers_kbs import create_lawyer_kb

args = []

lawyer_router = Router()


@lawyer_router.callback_query(F.data == "menu_lawyers")
async def open_menu_lawyers(call: CallbackQuery):
    if await cheak_lawyer(call.from_user.id):
        await bot.send_message(chat_id=call.from_user.id,
                               text="Меню юриста",
                               reply_markup=create_lawyer_kb())
    else:
        await call.message.answer("Вас нет в списке Юристов\n"
                                  "Напишите нам на почту exemple@gmail.com для добавления вас в списки\n"
                                  "В письме укажите ФИО, telegram id, ТрастДом id и компанию, в которой работаете")


@lawyer_router.callback_query(F.data == "open_db_request")
async def print_requests(call: CallbackQuery):
    data = await open_db_request()
    for request in data:
        await call.message.answer(f'Поступила заявка на консультацию\n\n'
                                  f'От {request["surname"]} {request["name"]}\n'
                                  f'telegram id = {request["tg_id"]}, trast-id = {request["trast_id"]}\n\n'
                                  f'Tекст заявки:\n'
                                  f'{request["text"]}')


# Определяем состояния FSM
class Form(StatesGroup):
    waiting_for_second_message = State()


@lawyer_router.message(Command('reply'))
async def reply_request(message: Message, state: FSMContext):
    global args
    if await cheak_lawyer(message.from_user.id):
        # Ввод tg id для ответа (args[1])
        args = message.text.split()
        if len(args) < 2:
            return bot.reply_to(message, "Напишите: /reply <telegram id>")
        await message.reply(f'Вы отвечаете человеку с telegram id: {args[1]}')
        await state.set_state(Form.waiting_for_second_message)


# Хэндлер для ожидания следующего сообщения
@lawyer_router.message(Form.waiting_for_second_message)
async def process_second_message(message: Message, state: FSMContext):
    global args
    # Захватываем сообщение
    lawyer_input = message.text

    # Обрабатываем полученное сообщение
    await bot.send_message(chat_id=args[1],
                           text=lawyer_input)

    # Сбрасываем состояние
    await state.clear()


