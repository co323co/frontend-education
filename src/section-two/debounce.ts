export const debounce = (callback: Function, delayTime = 500) => {
    // @TODO: debounce 기능을 구현하세요.
    // 조건
    // 1. 함수를 return 해야함.
    // 2. settimeout 활용하도록 함.
    // 3. clearTimeout을 반드시 해줄 것.

    let timeout:any = null;
    return (...args: any) => {
        // const context = this;

        if (timeout) {
            clearTimeout(timeout);
        }

        // timeout = setTimeout(() => callback.apply(context, args), delayTime);
        timeout = setTimeout(() => {
            callback(...args);
            clearTimeout(timeout);
        }, delayTime);
    };
};
