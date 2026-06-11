function generatePassword()
{
    const length = parseInt(document.getElementById("length").value);

    const upper = document.getElementById("uppercase").checked;
    const lower = document.getElementById("lowercase").checked;
    const number = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;

    const message = document.getElementById("message");
    const passwordBox = document.getElementById("password");

    let chars = "";

    if(upper)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(lower)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if(number)
        chars += "0123456789";

    if(special)
        chars += "!@#$%^&*()_+-={}[]<>?/";

    if(chars.length === 0)
    {
        message.textContent = "Select at least one option!";
        passwordBox.value = "";
        return;
    }

    if(length < 4 || length > 50)
    {
        message.textContent = "Length must be between 4 and 50.";
        passwordBox.value = "";
        return;
    }

    let password = "";

    for(let i = 0; i < length; i++)
    {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordBox.value = password;
    message.textContent = "";
}
