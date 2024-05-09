interface ResponseRoot<T> {
    data: T;
    support: {
        url: string
        text: string
    };
}
