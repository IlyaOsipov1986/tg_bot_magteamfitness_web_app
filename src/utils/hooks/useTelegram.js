const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onCLose = () => {
        tg.close();
    }

    return {
        tg,
        user: tg.initDataUnsafe?.user,
        onCLose
    }
}