import apiRequest from './apiService';

export {useFetchWrapper};
const headers = {
    applicationJson: 'application/json',
    multipartFormData: 'multipart/form-data',
};

function useFetchWrapper() {
    return {
        get : async (url: string) => {
                return apiRequest({
                    method: 'GET',
                    url,
                })
                    .then((res) => {
                        const {code} = res;
                        const {data} = res.data;
                        if (code === 200 && data.length > 0) {
                            return data;
                        }
                        if (code === 400 || code === 403) {
                            throw data;
                        }
                        return data;
                    })
                    .catch((err) => {
                        throw err;
                    });
            },
    };
}
