declare class RSAKey {
    constructor();
    setPublic(m: string, e: string);
    encrypt(text: string);
}
