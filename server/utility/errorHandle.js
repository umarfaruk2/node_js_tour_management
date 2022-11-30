export const errorHandle = (status, err) => {
    const error = {
        status: status || 500,
        error: err || 'There was an error'
    }
    return error;
}