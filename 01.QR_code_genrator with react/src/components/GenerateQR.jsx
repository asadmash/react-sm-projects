export default function GenerateQR(inputValue, setQrcode, inputRef) {
    // base api
    const apiBase = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
    // if there input value is not empty
    if(inputValue){
        // concat the value with base api
    const finalQRUrl = `${apiBase}${encodeURIComponent(inputValue)}`;
    setQrcode(finalQRUrl) //send back to parent component
    } else {
       
        setQrcode('') // clear image
        inputRef.current?.classList.add('error');
        setTimeout(() => {
            inputRef.current?.classList.remove('error')
        }, 1000);
    }
}