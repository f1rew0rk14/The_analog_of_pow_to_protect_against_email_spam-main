async function sendRequest(method, url, request_body) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(request_body),
            headers: {
      'Content-Type': 'application/json'
    }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
    }
    catch (error) {
        console.error('Ошибка:', error);
    }
}


export {sendRequest};