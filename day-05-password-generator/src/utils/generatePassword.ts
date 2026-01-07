interface Options {
    length: number;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
}

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}<>?";

export function generatePassword(options: Options): string {
    let chars = "";

    if (options.uppercase) chars += UPPER;
    if (options.lowercase) chars += LOWER;
    if (options.numbers) chars += NUMBERS;
    if (options.symbols) chars += SYMBOLS;

    if (!chars) return "";

    let password = "";

    for (let i = 0; i < options.length; i++) {
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    return password;
}
