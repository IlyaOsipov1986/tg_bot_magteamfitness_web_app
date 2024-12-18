const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onCLose = () => {
        tg.close();
    }

    return {
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
        onCLose
    }
}