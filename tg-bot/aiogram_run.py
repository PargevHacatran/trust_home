import asyncio
from create_bot import bot, dp, scheduler

# from work_time.time_func import send_time_msg

from handlers.start_r import start_router
from handlers.lawyer_r import lawyer_router
from handlers.users_r import user_router


async def main():
    # scheduler.add_job(send_time_msg, 'interval', seconds=10)
    # scheduler.start()
    dp.include_router(start_router)
    dp.include_router(lawyer_router)
    dp.include_router(user_router)
    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
