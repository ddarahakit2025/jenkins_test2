import axios from 'axios';

/**
 * 로그인
 */
const login = async (req) => {
    //결과
    let data = {}

    //API 호출
    await axios
        .post('/api/user/login', req)
        .then((res) => {
            //성공
            data = res.data
        })
        .catch((error) => {
            //실패
            data = error.data
        })

    return data
}


/**
 * 로그인
 */
const signup = async (req) => {
    //결과
    let data = {}

    //API 호출
    await axios
        .post('/api/user/signup', req)
        .then((res) => {
            //성공
            data = res.data
        })
        .catch((error) => {
            //실패
            data = error.data
        })

    return data
}

export default { login, signup }
