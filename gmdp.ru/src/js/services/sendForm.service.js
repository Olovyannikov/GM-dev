export const sendForm = (model) => {
    return (
        fetch('/ru', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(model)
        }).then(result => result.status === 200)
    )
}
